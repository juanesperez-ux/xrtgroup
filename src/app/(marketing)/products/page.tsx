import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { Glyph } from "@/components/ui/Glyph";
import { getProductsByCategory, type ProductCategory } from "@/lib/productsData";

// Catalog pillar code → product data category (orders match 1:1)
const PILLAR_CATEGORY: Record<string, ProductCategory> = {
  ENE: "energy",
  AGR: "grains",
  OIL: "oils",
  LOG: "logistics",
  PRT: "proteins",
};

// Pillar code → banner photo + icon from the procurement icon set
const PILLAR_MEDIA: Record<string, { image?: string; imageAlt?: string; icon: string }> = {
  ENE: {
    image: "/images/photo-oil-pumps-dusk.webp",
    imageAlt: "Oil pump jacks operating at dusk",
    icon: "ship",
  },
  AGR: {
    image: "/images/photo-wheat-closeup.webp",
    imageAlt: "Golden wheat ears in a field",
    icon: "farmer",
  },
  OIL: {
    image: "/images/photo-olive-oil-mill-pour.webp",
    imageAlt: "Fresh olive oil pouring from a stainless steel mill spout into a collection tank — edible and industrial oils production",
    icon: "raw-materials",
  },
  LOG: {
    image: "/images/photo-lng-tanker-aerial.webp",
    imageAlt: "Aerial view of an LNG tanker berthed at a gas terminal",
    icon: "container",
  },
  PRT: {
    image: "/images/photo-angus-cattle-pasture.webp",
    imageAlt: "Black Angus cattle herd grazing in open pasture — USDA beef procurement",
    icon: "weight-scale",
  },
};

export const metadata: Metadata = {
  title: "Products",
  description:
    "XRT Group commodity catalog: Energy, Grains & Agricultural, Edible & Industrial Oils, and Logistics Infrastructure.",
};

export default function ProductsPage() {
  return (
    <div className="xrt-modern">
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="eyebrow text-xrt-crimson mb-4">
                Product Catalog — 5 Supply Pillars
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
                Physical commodities,
                <br />
                fully specified
              </h1>
              <p className="text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed">
                Strategic origination across five physical market pillars. All grades
                negotiated against prevailing benchmarks, with full inspection and
                certification traceability on every lot.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden h-56 sm:h-72">
                <img
                  src="/images/photo-airplane-refueling.webp"
                  alt="Aircraft being refueled on the airport apron"
                  loading="eager"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-xrt-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 eyebrow bg-white/90 text-xrt-black px-3 py-1.5 rounded-full">
                  Fuels · Food · Freight
                </span>
              </div>
            </div>
          </div>

          {/* Pillar quick-nav pills */}
          <nav aria-label="Product pillars" className="mt-10 flex flex-wrap gap-3">
            {products.map((p) => (
              <Link
                key={p.code}
                href={`#${p.code.toLowerCase()}`}
                className="liquid-glass border border-white/15 rounded-full px-5 py-2.5 text-sm font-medium text-white/80 hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2"
              >
                <Glyph name={PILLAR_MEDIA[p.code].icon} size={16} />
                {p.pillar}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* ── PRODUCT PILLARS ─────────────────────────────────────── */}
      {products.map((pillar, pi) => {
        const media = PILLAR_MEDIA[pillar.code];
        return (
          <section
            key={pillar.code}
            id={pillar.code.toLowerCase()}
            className={`${pi % 2 === 0 ? "bg-xrt-off-white" : "bg-white"} border-b border-xrt-steel scroll-mt-20`}
          >
            <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-20">
              {/* Photo banner */}
              <div className="relative rounded-2xl overflow-hidden h-48 sm:h-64 mb-8">
                {media.image ? (
                  <img
                    src={media.image}
                    alt={media.imageAlt ?? ""}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-xrt-near-black to-xrt-black" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-xrt-black/70 via-xrt-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8 flex items-center gap-4 text-white">
                  <span className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl liquid-glass border border-white/20 flex items-center justify-center">
                    <Glyph name={media.icon} size={28} />
                  </span>
                  <div>
                    <div className="eyebrow text-white/60">{pillar.code}</div>
                    <h2 className="text-2xl sm:text-4xl text-white">{pillar.pillar}</h2>
                  </div>
                </div>
              </div>

              {/* Summary + CTA */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-8">
                <p className="text-base text-xrt-near-black/60 leading-relaxed max-w-2xl">
                  {pillar.summary}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium bg-xrt-black text-white px-6 py-3 rounded-lg hover:bg-xrt-crimson transition-colors whitespace-nowrap"
                >
                  Request {pillar.code} Pricing
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Product table — scrollable on mobile */}
              <div className="rounded-2xl border border-xrt-steel overflow-hidden bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full data-table-modern min-w-[720px]">
                    <thead>
                      <tr>
                        <th className="text-left">Product / Grade</th>
                        <th className="text-left">Origin</th>
                        <th className="text-left">Incoterms</th>
                        <th className="text-left">Min Volume</th>
                        <th className="text-left">Benchmark</th>
                        <th className="text-left">Inspection</th>
                        <th className="text-left">Detail</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pillar.items.map((item, ii) => {
                        const slug = getProductsByCategory(PILLAR_CATEGORY[pillar.code])[ii]?.slug;
                        return (
                          <tr key={item.product}>
                            <td>
                              {slug ? (
                                <Link
                                  href={`/products/${slug}`}
                                  className="font-medium text-xrt-black hover:text-xrt-crimson transition-colors"
                                >
                                  {item.product}
                                </Link>
                              ) : (
                                <div className="font-medium text-xrt-black">{item.product}</div>
                              )}
                              <div className="text-xs text-xrt-near-black/50 mt-0.5">{item.grade}</div>
                              {slug === "beef-usda-kosher" && (
                                <div className="cert-badge-wrap">
                                  <span className="cert-badge cert-usda">USDA</span>
                                  <span className="cert-badge cert-kosher">Kosher</span>
                                </div>
                              )}
                              {slug === "beef-usda-halal" && (
                                <div className="cert-badge-wrap">
                                  <span className="cert-badge cert-usda">USDA</span>
                                  <span className="cert-badge cert-halal">Halal</span>
                                </div>
                              )}
                            </td>
                            <td>{item.origin}</td>
                            <td>
                              <span className="inline-block text-xs font-medium border border-xrt-steel rounded-full px-2.5 py-1 text-xrt-black whitespace-nowrap">
                                {item.incoterms}
                              </span>
                            </td>
                            <td>{item.minVolume}</td>
                            <td>{item.benchmark}</td>
                            <td className="text-xrt-near-black/60">{item.inspection}</td>
                            <td>
                              {slug && (
                                <Link
                                  href={`/products/${slug}`}
                                  className="text-sm font-medium text-xrt-crimson whitespace-nowrap hover:text-xrt-crimson-dark transition-colors"
                                >
                                  View Spec →
                                </Link>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footnote */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-3">
                <p className="product-disclaimer">
                  * Prices negotiated against prevailing benchmark. Contact XRT desk for
                  spot and forward quotations.
                </p>
                <span className="incoterms-label rounded-full">INCOTERMS 2020</span>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── INSPECTION & CERTIFICATION ──────────────────────────── */}
      <section className="bg-xrt-black text-white">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-20">
          <div className="eyebrow text-white/40 mb-2">Quality Assurance</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-10">
            Inspection & certification partners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "SGS S.A.",
                hq: "Geneva, Switzerland",
                scope: ["Petroleum & Petrochemicals", "Agricultural Commodities", "Pre-shipment Inspection"],
                cert: "ISO/IEC 17020",
              },
              {
                name: "Bureau Veritas",
                hq: "Neuilly-sur-Seine, France",
                scope: ["Marine & Offshore", "Metals & Minerals", "Cargo Survey"],
                cert: "ISO/IEC 17025",
              },
              {
                name: "Intertek Group",
                hq: "London, UK",
                scope: ["Food & Agriculture", "Chemical Testing", "Quantity Certification"],
                cert: "ISO/IEC 17020",
              },
            ].map((body) => (
              <div key={body.name} className="rounded-2xl border border-white/10 p-6 sm:p-8 liquid-glass">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <Glyph name="quality-control" size={24} />
                  </span>
                  <div>
                    <div className="eyebrow text-xrt-crimson">{body.cert}</div>
                    <h3 className="text-xl text-white">{body.name}</h3>
                  </div>
                </div>
                <div className="eyebrow text-white/40 mb-5">{body.hq}</div>
                <ul className="space-y-2">
                  {body.scope.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-xrt-crimson flex-shrink-0" />
                      <span className="text-sm text-white/70">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
