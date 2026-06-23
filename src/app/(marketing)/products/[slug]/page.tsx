import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductBySlug,
  getAllProductSlugs,
  CATEGORY_META,
  PRODUCTS,
} from "@/lib/productsData";
import ProductStructuredData from "@/components/seo/ProductStructuredData";
import InlineRFQ from "@/components/rfq/InlineRFQ";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

function productSeoTitle(product: NonNullable<ReturnType<typeof getProductBySlug>>) {
  if (product.slug === "wti-crude-oil") {
    return "WTI Crude Oil Supplier — Direct Permian Basin Procurement";
  }
  if (product.slug === "ulsd-diesel") {
    return "ULSD EN 590 Diesel Supplier — ARA & Gulf Coast";
  }
  return product.seoTitle.replace(/\s*\|\s*XRT Group\s*$/i, "");
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const url = `https://xrtgroup.com/products/${product.slug}`;
  const title = productSeoTitle(product);
  return {
    title,
    description: product.seoDescription,
    keywords: product.searchKeywords,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | XRT Group`,
      description: product.seoDescription,
      url,
      siteName: "XRT Group",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${product.name} procurement by XRT Group`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | XRT Group`,
      description: product.seoDescription,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// Convert the markdown-ish longDescription into HTML for the SEO body.
function renderBody(text: string): string {
  return text
    .trim()
    .split(/\n\n+/)
    .map((block) => {
      const m = block.match(/^\*\*(.+?)\*\*$/);
      if (m) return `<h2>${m[1]}</h2>`;
      return `<p>${block.replace(/\n/g, " ")}</p>`;
    })
    .join("");
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const hiddenDeskEmails = new Set(["logistics@xrtgroup.com", "finance@xrtgroup.com"]);
  const showDeskEmail = !hiddenDeskEmails.has(product.deskEmail);

  const cat = CATEGORY_META[product.category];
  const related = PRODUCTS.filter((p) => product.relatedProducts.includes(p.slug));

  return (
    <>
      <ProductStructuredData product={product} />

      <div className="bg-xrt-black text-white min-h-screen">

        {/* ── BREADCRUMB ───────────────────────────────────────────── */}
        <div className="border-b border-xrt-steel/15">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-4">
            <nav className="flex items-center gap-2 flex-wrap">
              <Link href="/products" className="label-caps text-[#A8A5A0] hover:text-[#C4C1BE] transition-colors">Products</Link>
              <span className="label-caps text-[#7C7975]">→</span>
              <span className="label-caps" style={{ color: cat.color }}>{cat.code}</span>
              <span className="label-caps text-[#7C7975]">→</span>
              <span className="label-caps text-[#C4C1BE]">{product.name}</span>
            </nav>
          </div>
        </div>

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-16 pb-10 sm:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-start">

            {/* Left: product info */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="label-caps px-3 py-1.5 border" style={{ color: cat.color, borderColor: cat.color }}>{product.code}</span>
                <span className="label-caps text-[#A8A5A0]">{cat.label}</span>
              </div>

              <h1
                className="text-[clamp(2.25rem,6vw,4.5rem)] text-white leading-[1.0] mb-4"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, letterSpacing: "-0.02em", textTransform: "uppercase" }}
              >
                {product.name}
              </h1>

              <p className="text-base text-[#A8A5A0] mb-8" style={{ fontFamily: "var(--font-archivo)", letterSpacing: "0.04em" }}>
                {product.grade}
              </p>

              <p className="text-base sm:text-lg text-[#C4C1BE] leading-relaxed mb-10 max-w-xl" style={{ fontFamily: "var(--font-archivo)" }}>
                {product.description}
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-xrt-steel/15">
                {[
                  { label: "Min. Volume", value: `${product.minVolume} ${product.minVolumeUnit}` },
                  { label: "Benchmark", value: product.benchmark },
                  { label: "Premium / Disc", value: product.premiumDisc },
                ].map((s, i) => (
                  <div key={s.label} className={`py-5 sm:py-6 ${i < 2 ? "border-b sm:border-b-0 sm:border-r border-xrt-steel/15" : ""} sm:px-6 sm:first:pl-0`}>
                    <div className="label-caps text-[#A8A5A0] mb-2">{s.label}</div>
                    <div className="text-2xl font-black text-white" style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.02em" }}>{s.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: sticky inline RFQ */}
            <div className="lg:sticky lg:top-20">
              <InlineRFQ product={product} />
            </div>

          </div>
        </div>

        {/* ── TECHNICAL SPECS + CERTIFICATIONS ─────────────────────── */}
        <div className="border-t border-b border-xrt-steel/15">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

              {/* Specs table */}
              <div>
                <h2 className="text-2xl sm:text-3xl text-white mb-6" style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, textTransform: "uppercase" }}>
                  Technical Specification
                </h2>
                <table className="w-full" style={{ borderCollapse: "collapse" }}>
                  <tbody>
                    {product.specs.map((spec) => (
                      <tr key={spec.label} style={{ borderBottom: "1px solid rgba(229,226,225,0.1)" }}>
                        <td className="label-caps text-[#A8A5A0] py-3.5 pr-4 align-top" style={{ width: "45%" }}>{spec.label}</td>
                        <td className="py-3.5 text-white" style={{ fontFamily: "var(--font-archivo)", fontSize: "15px", fontWeight: 600 }}>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Certs + desk */}
              <div>
                <h2 className="text-2xl sm:text-3xl text-white mb-6" style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, textTransform: "uppercase" }}>
                  Certifications & Compliance
                </h2>
                <div className="flex flex-wrap gap-2 mb-10">
                  {product.certifications.map((c) => (
                    <span key={c} className="label-caps text-[#C4C1BE] border border-xrt-steel/20 px-3 py-2">{c}</span>
                  ))}
                </div>

                <div className="border border-xrt-steel/15 p-6 sm:p-7 bg-xrt-near-black/40">
                  <div className="label-caps text-xrt-crimson mb-3">Responsible Desk</div>
                  <div className="text-xl font-black text-white mb-1" style={{ fontFamily: "var(--font-barlow)" }}>{product.hub.join(" / ")} Hub</div>
                  {showDeskEmail && (
                    <a href={`mailto:${product.deskEmail}`} className="text-sm text-[#C4C1BE] hover:text-xrt-steel transition-colors" style={{ fontFamily: "var(--font-archivo)" }}>{product.deskEmail}</a>
                  )}
                  <div className="label-caps text-[#A8A5A0] mt-4">Response SLA: &lt;4 Business Hours</div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── LONG DESCRIPTION (SEO CONTENT) ───────────────────────── */}
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="product-body" dangerouslySetInnerHTML={{ __html: renderBody(product.longDescription) }} />
        </div>

        {/* ── RELATED PRODUCTS ─────────────────────────────────────── */}
        {related.length > 0 && (
          <div className="border-t border-xrt-steel/15">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
              <h2 className="text-2xl sm:text-3xl text-white mb-8" style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, textTransform: "uppercase" }}>
                Related Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-xrt-steel/15">
                {related.map((rp, i) => (
                  <Link
                    key={rp.slug}
                    href={`/products/${rp.slug}`}
                    className={`block p-6 sm:p-7 hover:bg-xrt-near-black/60 transition-colors border-b border-xrt-steel/15 sm:border-b-0 ${i < related.length - 1 ? "sm:border-r border-xrt-steel/15" : ""} last:border-b-0`}
                  >
                    <div className="label-caps text-xrt-crimson mb-2">{CATEGORY_META[rp.category].code}</div>
                    <div className="text-xl text-white leading-tight mb-2" style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, textTransform: "uppercase" }}>{rp.name}</div>
                    <div className="text-sm text-[#A8A5A0]" style={{ fontFamily: "var(--font-archivo)" }}>{rp.grade}</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
