import type { Metadata } from "next";
import Link from "next/link";
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
  return {
    title: post.title,
    description: post.summary,
  };
}

const CATEGORY_COLOR: Record<string, string> = {
  "MARKET INTELLIGENCE": "#c8111f",
  "COMPLIANCE BRIEF":    "#c8973a",
  "REGULATORY":          "#c8973a",
  "LOGISTICS":           "#c8973a",
  "SUPPLY CHAIN":        "#916f6c",
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const body = blogContent[slug] ?? "";
  const categoryColor = CATEGORY_COLOR[post.category] ?? "#c8111f";

  // Find adjacent posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  return (
    <div className="bg-xrt-black min-h-screen">

      {/* ── POST HEADER ──────────────────────────────────────────── */}
      <section className="border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 pb-10 sm:pb-14">

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 mb-8">
            <Link href="/blog" className="label-caps text-xrt-steel/40 hover:text-xrt-steel/70 transition-colors">
              Intelligence Hub
            </Link>
            <span className="label-caps text-xrt-steel/20">→</span>
            <span className="label-caps" style={{ color: categoryColor }}>{post.category}</span>
          </nav>

          {/* Meta row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8">
            <span
              className="label-caps px-3 py-1.5 border"
              style={{ color: categoryColor, borderColor: categoryColor }}
            >
              {post.category}
            </span>
            <span className="label-caps text-xrt-steel/40">{post.author}</span>
            <span className="label-caps text-xrt-steel/20">—</span>
            <span className="label-caps text-xrt-steel/40">{post.date}</span>
            <span className="label-caps text-xrt-steel/40">{post.readTime}</span>
          </div>

          {/* Headline */}
          <h1
            className="text-[clamp(1.8rem,5vw,3.5rem)] text-white leading-[1.05] mb-8 max-w-4xl"
            style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, letterSpacing: "-0.02em", textTransform: "uppercase" }}
          >
            {post.title}
          </h1>

          {/* Crimson rule */}
          <div className="w-16 h-0.5 bg-xrt-crimson" />
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

              {/* Post footer */}
              <div className="mt-12 sm:mt-16 pt-8 border-t border-xrt-steel/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <div className="label-caps text-xrt-steel/40 mb-1">PUBLISHED BY</div>
                  <div className="text-white text-sm" style={{ fontFamily: "var(--font-archivo)" }}>{post.author}</div>
                  <div className="label-caps text-xrt-steel/30 mt-0.5">{post.date}</div>
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
                    <span className="label-caps border border-xrt-steel/20 text-xrt-steel/60 px-3 py-1.5">{post.readTime}</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="border border-xrt-crimson/30 p-6 bg-xrt-crimson/5">
                  <div className="label-caps text-xrt-crimson mb-3">READY TO ENGAGE</div>
                  <p className="text-sm text-xrt-steel/60 leading-relaxed mb-5" style={{ fontFamily: "var(--font-archivo)" }}>
                    XRT desks are available for direct consultation on commodity procurement strategy.
                  </p>
                  <Link
                    href="/contact"
                    className="label-caps bg-xrt-crimson text-white px-5 py-3 hover:bg-xrt-crimson-dark transition-colors block text-center"
                  >
                    Submit RFQ
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
  );
}
