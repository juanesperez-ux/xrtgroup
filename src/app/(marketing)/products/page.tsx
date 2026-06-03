import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";
import { PRODUCT_ICONS } from "@/components/icons/CommodityIcons";
import { getProductsByCategory, type ProductCategory } from "@/lib/productsData";

// Catalog pillar code → product data category (orders match 1:1)
const PILLAR_CATEGORY: Record<string, ProductCategory> = {
  ENE: "energy",
  AGR: "grains",
  OIL: "oils",
  LOG: "logistics",
  PRT: "proteins",
};

export const metadata: Metadata = {
  title: "Products",
  description: "XRT Group commodity catalog: Energy, Grains & Agricultural, Edible & Industrial Oils, and Logistics Infrastructure.",
};

export default function ProductsPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">PRODUCT CATALOG — 5 CORE PILLARS</div>
              <h1 className="text-[clamp(2.5rem,6vw,6rem)] text-white mb-6">
                Products<br />Matrix
              </h1>
              <p className="text-base sm:text-lg text-xrt-steel/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                Strategic origination across five physical market pillars. All grades negotiated against prevailing benchmarks. Full inspection and certification traceability on every lot.
              </p>
            </div>
            <div className="lg:col-span-4 border-t border-xrt-steel/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Active SKUs", value: "21+" },
                  { label: "Origins", value: "6 Continents" },
                  { label: "Inspection Bodies", value: "SGS / BV / ITS" },
                  { label: "Settlement", value: "GAFTA / UCP 600" },
                ].map((m) => (
                  <div key={m.label} className="border border-xrt-steel/20 p-4">
                    <div className="text-xl sm:text-2xl font-black text-white mb-0.5" style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.02em" }}>
                      {m.value}
                    </div>
                    <div className="label-caps text-xrt-steel/40">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLAR TABS OVERVIEW ─────────────────────────────────── */}
      <section className="bg-xrt-off-white border-b border-xrt-steel">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-5 border-x border-xrt-steel">
            {products.map((p, i) => (
              <Link
                key={p.code}
                href={`#${p.code.toLowerCase()}`}
                className={`block px-4 sm:px-6 py-4 sm:py-5 border-b-4 text-center border-b border-xrt-steel ${i < 3 ? "border-r border-xrt-steel" : ""} hover:bg-xrt-surface transition-colors`}
                style={{ borderBottomColor: p.color === "crimson" ? "#c8111f" : p.color === "gold" ? "#c8973a" : p.color === "black" ? "#111111" : "#916f6c" }}
              >
                <div className="label-caps text-xrt-muted mb-1">{p.code}</div>
                <div className="font-black text-sm sm:text-lg text-xrt-black" style={{ fontFamily: "var(--font-barlow)" }}>
                  {p.pillar}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT PILLARS ─────────────────────────────────────── */}
      {products.map((pillar) => (
        <section
          key={pillar.code}
          id={pillar.code.toLowerCase()}
          className="bg-xrt-off-white border-b border-xrt-steel"
        >
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">

            {/* Pillar header */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8 mb-8">
              <div className="sm:col-span-8">
                {/* Icon + code strip */}
                <div className="flex items-center gap-4 mb-5">
                  {(() => {
                    const Icon = PRODUCT_ICONS[pillar.code as keyof typeof PRODUCT_ICONS];
                    const accentColor =
                      pillar.color === "crimson" ? "#c8111f"
                        : pillar.color === "gold" ? "#c8973a"
                          : pillar.color === "black" ? "#111111"
                            : "#916f6c";
                    return Icon ? (
                      <Icon
                        size={52}
                        color={accentColor}
                        activeColor={pillar.color === "gold" ? "#c8973a" : "#c8111f"}
                      />
                    ) : null;
                  })()}
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div
                        className="w-2 h-6"
                        style={{
                          background:
                            pillar.color === "crimson" ? "#c8111f"
                              : pillar.color === "gold" ? "#c8973a"
                                : pillar.color === "black" ? "#111111"
                                  : "#916f6c",
                        }}
                      />
                      <span className="label-caps-category">{pillar.code}</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-3xl sm:text-4xl text-xrt-black mb-4">{pillar.pillar}</h2>
                <p className="text-sm sm:text-base text-xrt-muted leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-archivo)" }}>
                  {pillar.summary}
                </p>
              </div>
              <div className="sm:col-span-4 flex items-end justify-start sm:justify-end">
                <Link href="/contact" className="label-caps border border-xrt-steel text-xrt-muted px-6 py-3 hover:border-xrt-black hover:text-xrt-black transition-colors">
                  Request {pillar.code} Pricing →
                </Link>
              </div>
            </div>

            {/* Product table — scrollable on mobile */}
            <div className="border border-xrt-steel overflow-x-auto">
              <table className="w-full data-table min-w-[640px]">
                <thead>
                  <tr>
                    <th className="text-left">PRODUCT / GRADE</th>
                    <th className="text-left">ORIGIN</th>
                    <th className="text-left">INCOTERMS</th>
                    <th className="text-left">MIN VOLUME</th>
                    <th className="text-left">BENCHMARK</th>
                    <th className="text-left">PREMIUM/DISC</th>
                    <th className="text-left">INSPECTION</th>
                    <th className="text-left">DETAIL</th>
                  </tr>
                </thead>
                <tbody>
                  {pillar.items.map((item, ii) => {
                    const slug = getProductsByCategory(PILLAR_CATEGORY[pillar.code])[ii]?.slug;
                    return (
                      <tr key={item.product} className={slug === 'beef-usda-kosher' ? 'row-kosher' : slug === 'beef-usda-halal' ? 'row-halal' : ''}>
                        <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>
                          {slug ? (
                            <Link href={`/products/${slug}`} className="font-medium text-xrt-black hover:text-xrt-crimson transition-colors" style={{ borderBottom: "1px solid #dcd9d9" }}>
                              {item.product}
                            </Link>
                          ) : (
                            <div className="font-medium text-xrt-black">{item.product}</div>
                          )}
                          <div className="label-caps text-xrt-muted mt-0.5">{item.grade}</div>
                          {slug === 'beef-usda-kosher' && (
                            <div className="cert-badge-wrap">
                              <span className="cert-badge cert-usda">USDA</span>
                              <span className="cert-badge cert-kosher">Kosher</span>
                            </div>
                          )}
                          {slug === 'beef-usda-halal' && (
                            <div className="cert-badge-wrap">
                              <span className="cert-badge cert-usda">USDA</span>
                              <span className="cert-badge cert-halal">Halal</span>
                            </div>
                          )}
                        </td>
                        <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>{item.origin}</td>
                        <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>
                          <span className="label-caps border border-xrt-steel px-2 py-1 text-xrt-black">
                            {item.incoterms}
                          </span>
                        </td>
                        <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>{item.minVolume}</td>
                        <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>{item.benchmark}</td>
                        <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>
                          <span
                            className="label-caps"
                            style={{
                              color: item.premium.startsWith("+") || item.premium === "Negotiated"
                                ? "#1c1b1b"
                                : "#c8111f",
                            }}
                          >
                            {item.premium}
                          </span>
                        </td>
                        <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>
                          <span className="label-caps text-xrt-muted">{item.inspection}</span>
                        </td>
                        <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>
                          {slug && (
                            <Link href={`/products/${slug}`} className="label-caps text-xrt-crimson whitespace-nowrap hover:text-xrt-crimson-dark transition-colors">
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

            {/* Footnote */}
            <div className="section-actions flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 pt-4 border-t border-xrt-steel/20 gap-4">
              <div>
                <p className="product-disclaimer">* Prices negotiated against prevailing benchmark. Contact XRT desk for spot and forward quotations.</p>
                <span className="incoterms-label">INCOTERMS 2020</span>
              </div>
              <Link href={`/products#${pillar.code.toLowerCase()}`} className="label-caps border border-xrt-steel text-xrt-black px-6 py-3 hover:border-xrt-crimson hover:text-xrt-crimson transition-colors text-center whitespace-nowrap">
                View All {pillar.pillar} Products →
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── INSPECTION & CERTIFICATION ──────────────────────────── */}
      <section className="bg-xrt-black text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="label-caps text-xrt-steel/40 mb-2">QUALITY ASSURANCE</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-8 sm:mb-10">Inspection & Certification Partners</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-xrt-steel/20">
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
            ].map((body, i) => (
              <div key={body.name} className={`p-6 sm:p-8 border-b border-xrt-steel/20 md:border-b-0 ${i < 2 ? "md:border-r border-xrt-steel/20" : ""} last:border-b-0`}>
                <div className="label-caps text-xrt-crimson mb-1">{body.cert}</div>
                <h3 className="text-xl sm:text-2xl text-white mb-1" style={{ fontFamily: "var(--font-barlow)" }}>{body.name}</h3>
                <div className="label-caps text-xrt-steel/40 mb-6">{body.hq}</div>
                <ul className="space-y-2">
                  {body.scope.map((s) => (
                    <li key={s} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-xrt-crimson flex-shrink-0" />
                      <span className="text-sm text-xrt-steel/70" style={{ fontFamily: "var(--font-archivo)" }}>{s}</span>
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
