import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { blogContent } from "@/lib/blogContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  const title = "seoTitle" in post ? (post as Record<string, unknown>).seoTitle as string : post.title;
  const description = "seoDescription" in post ? (post as Record<string, unknown>).seoDescription as string : post.summary;
  const image = "image" in post ? (post as Record<string, unknown>).image as string : undefined;
  const canonical = `https://xrtgroup.com/blog/${slug}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "XRT Group",
      images: image ? [{ url: `https://xrtgroup.com${image}`, width: 1200, height: 630 }] : [],
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [`https://xrtgroup.com${image}`] : [],
    },
    other: {
      "article:published_time": post.date,
      "article:author": "XRT Group",
      "article:section": post.category,
    },
  };
}

const CATEGORY_COLOR: Record<string, string> = {
  PROCUREMENT: "#c8111f",
  ENERGY: "#c8111f",
  AGRICULTURAL: "#c8973a",
  "MARKET INTELLIGENCE": "#c8111f",
  "COMPLIANCE BRIEF": "#c8973a",
  REGULATORY: "#c8973a",
  LOGISTICS: "#c8973a",
  "SUPPLY CHAIN": "#916f6c",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function getRFQCTA(post: Record<string, unknown>) {
  const category = (post.category as string) || "";
  if (category === "ENERGY") {
    return {
      title: "Ready to discuss energy commodity requirements?",
      email: "energy@xrtgroup.com",
      emailText: "Contact our energy desk",
    };
  }
  if (category === "AGRICULTURAL") {
    return {
      title: "Ready to source agricultural commodities?",
      email: "agro@xrtgroup.com",
      emailText: "Contact our agricultural desk",
    };
  }
  return {
    title: "Ready to initiate a procurement discussion?",
    email: "procurement@xrtgroup.com",
    emailText: "Submit an RFQ",
  };
}

function extractFAQItems(body: string): { question: string; answer: string }[] {
  const items: { question: string; answer: string }[] = [];
  // Match <h3>Question</h3> followed by <p>Answer</p>
  const faqRegex = /<h3>(.+?)<\/h3>\s*<p>(.+?)<\/p>/g;
  let match;
  while ((match = faqRegex.exec(body)) !== null) {
    // Only capture FAQ that looks like a question (contains "?" or starts with "What"/"How"/"Which"/"Can"/"Does"/"Is")
    const question = match[1].replace(/<[^>]*>/g, "").trim();
    const answer = match[2].replace(/<[^>]*>/g, "").trim();
    if (question.includes("?") || /^(What|How|Which|Can|Does|Is|Do)\b/.test(question)) {
      items.push({ question, answer });
    }
  }
  return items.slice(0, 10); // limit to 10 FAQ items max
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const body = blogContent[slug] ?? "";
  const categoryColor = CATEGORY_COLOR[post.category] ?? "#c8111f";
  const cta = getRFQCTA(post as unknown as Record<string, unknown>);

  // SEO fields
  const postData = post as unknown as Record<string, unknown>;
  const seoTitle = (postData.seoTitle as string) || post.title;
  const seoDescription = (postData.seoDescription as string) || post.summary;
  const postImage = (postData.image as string) || "/images/photo-handshake-deal.webp";
  const schemaKeywords = (postData.schemaKeywords as string[]) || [];
  const hasFAQ = (postData.hasFAQ as boolean) || false;
  const canonicalUrl = `https://xrtgroup.com/blog/${slug}`;

  const faqItems = hasFAQ ? extractFAQItems(body) : [];

  // Find adjacent posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  return (
    <>
      {/* ── JSON-LD Article Schema ──────────────────────────────── */}
      <Script
        id="jsonld-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: seoTitle,
            description: seoDescription,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Organization",
              name: "XRT Group",
              url: "https://xrtgroup.com",
            },
            publisher: {
              "@type": "Organization",
              name: "XRT Group",
              logo: {
                "@type": "ImageObject",
                url: "https://xrtgroup.com/xrt-mark.svg",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": canonicalUrl,
            },
            keywords: schemaKeywords.length > 0 ? schemaKeywords.join(", ") : post.tags?.join(", ") || "",
            image: `https://xrtgroup.com${postImage}`,
            articleSection: post.category,
          }),
        }}
      />

      {/* ── JSON-LD FAQPage Schema ──────────────────────────────── */}
      {faqItems.length > 0 && (
        <Script
          id="jsonld-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: item.answer,
                },
              })),
            }),
          }}
        />
      )}

      {/* ── BreadcrumbList Schema ───────────────────────────────── */}
      <Script
        id="jsonld-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "XRT Group",
                item: "https://xrtgroup.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Intelligence Hub",
                item: "https://xrtgroup.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: post.title,
              },
            ],
          }),
        }}
      />

      <div className="bg-xrt-black min-h-screen">
        {/* ── POST HEADER ──────────────────────────────────────────── */}
        <section className="border-b border-xrt-steel/20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-10 sm:pb-14">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 mb-8" aria-label="Breadcrumb">
              <Link href="/blog" className="label-caps text-xrt-steel/40 hover:text-xrt-steel/70 transition-colors">
                Intelligence Hub
              </Link>
              <span className="label-caps text-xrt-steel/20">→</span>
              <span className="label-caps" style={{ color: categoryColor }}>{post.category}</span>
            </nav>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8">
              <span
                className="label-caps px-3 py-1.5 border bg-white/5"
                style={{ color: "#ffffff", borderColor: categoryColor, backgroundColor: `${categoryColor}22` }}
              >
                {post.category}
              </span>
              <span className="label-caps border border-xrt-steel/20 bg-white/5 px-3 py-1.5 text-xrt-steel">{post.author}</span>
              <time className="label-caps border border-xrt-steel/20 bg-white/5 px-3 py-1.5 text-xrt-steel" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span className="label-caps border border-xrt-steel/20 bg-white/5 px-3 py-1.5 text-xrt-steel">{post.readTime}</span>
            </div>

            {/* Headline */}
            <h1
              className="text-[clamp(1.8rem,5vw,3.5rem)] text-white leading-[1.05] mb-8 max-w-4xl"
              style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, letterSpacing: "-0.02em", textTransform: "uppercase" }}
            >
              {post.title}
            </h1>

            <div className="relative mt-8 min-h-[260px] overflow-hidden border border-xrt-steel/20 sm:min-h-[360px] lg:min-h-[460px]">
              <Image
                src={postImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-xrt-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                {post.tags?.slice(0, 4).map((tag: string) => (
                  <span key={tag} className="label-caps bg-xrt-black/85 px-3 py-1.5 text-xrt-steel">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── ARTICLE BODY ────────────────────────────────────────── */}
        <section>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
              {/* Main content column */}
              <article className="lg:col-span-8">
                {/* Lead / summary */}
                <div
                  className="border-l-4 border-xrt-crimson pl-6 mb-10 text-base sm:text-lg text-xrt-steel/70 leading-relaxed"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  {post.summary}
                </div>

                {/* Body content */}
                <div
                  className="post-body"
                  dangerouslySetInnerHTML={{ __html: body }}
                />

                {/* Post footer — contextual RFQ CTA */}
                <div className="mt-12 sm:mt-16 pt-8 border-t border-xrt-steel/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <div className="label-caps text-xrt-steel/40 mb-1">PUBLISHED BY</div>
                    <div className="text-white text-sm" style={{ fontFamily: "var(--font-archivo)" }}>{post.author}</div>
                    <time className="label-caps text-xrt-steel/60 mt-0.5 block" dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <Link
                    href="/blog"
                    className="label-caps text-xrt-crimson border border-xrt-crimson/40 px-6 py-3 hover:border-xrt-crimson hover:bg-xrt-crimson/10 transition-colors self-start sm:self-auto"
                  >
                    ← Return to Intelligence Hub
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="lg:col-span-4">
                <div className="sticky top-20 space-y-6">
                  {/* Desk info */}
                  <div className="border border-xrt-steel/20 p-6">
                    <div className="label-caps text-xrt-steel/40 mb-4">AUTHORED BY</div>
                    <div className="label-caps mb-1" style={{ color: categoryColor }}>{post.author}</div>
                    <p className="text-sm text-xrt-steel/50 leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                      XRT Group Market Intelligence — Published for institutional counterparties and procurement professionals.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="border border-xrt-steel/20 p-6">
                    <div className="label-caps text-xrt-steel/40 mb-4">CLASSIFICATION</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="label-caps border border-xrt-steel/20 text-xrt-steel/60 px-3 py-1.5">{post.category}</span>
                      {post.tags && post.tags.slice(0, 3).map((tag: string) => (
                        <span key={tag} className="label-caps border border-xrt-steel/20 text-xrt-steel/60 px-3 py-1.5">{tag}</span>
                      ))}
                      <span className="label-caps border border-xrt-steel/20 text-xrt-steel/60 px-3 py-1.5">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Contextual RFQ CTA */}
                  <div className="border border-xrt-crimson/30 p-6 bg-xrt-crimson/5">
                    <div className="label-caps text-xrt-crimson mb-3">{cta.title}</div>
                    <p className="text-sm text-xrt-steel/60 leading-relaxed mb-5" style={{ fontFamily: "var(--font-archivo)" }}>
                      XRT desks are available for direct consultation on commodity procurement strategy.
                    </p>
                    <Link
                      href="/contact"
                      className="label-caps bg-xrt-crimson text-white px-5 py-3 hover:bg-xrt-crimson-dark transition-colors block text-center"
                    >
                      {cta.emailText}
                    </Link>
                  </div>

                  {/* Navigation */}
                  {(prevPost || nextPost) && (
                    <div className="border border-xrt-steel/20 p-6 space-y-4">
                      <div className="label-caps text-xrt-steel/40 mb-3">MORE DISPATCHES</div>
                      {nextPost && (
                        <Link href={`/blog/${nextPost.slug}`} className="block group">
                          <div className="label-caps text-xrt-steel/30 mb-1">NEXT</div>
                          <div
                            className="text-sm text-xrt-steel/70 group-hover:text-white transition-colors leading-snug"
                            style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, textTransform: "uppercase" }}
                          >
                            {nextPost.title.length > 80 ? nextPost.title.slice(0, 80) + "…" : nextPost.title}
                          </div>
                        </Link>
                      )}
                      {prevPost && (
                        <Link href={`/blog/${prevPost.slug}`} className="block group">
                          <div className="label-caps text-xrt-steel/30 mb-1">PREV</div>
                          <div
                            className="text-sm text-xrt-steel/70 group-hover:text-white transition-colors leading-snug"
                            style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, textTransform: "uppercase" }}
                          >
                            {prevPost.title.length > 80 ? prevPost.title.slice(0, 80) + "…" : prevPost.title}
                          </div>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
