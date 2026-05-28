import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description: "XRT Group commodity catalog: Energy, Grains & Agricultural, Edible & Industrial Oils, and Logistics Infrastructure.",
};

const pillarColors = {
  crimson: { bg: "bg-xrt-crimson", text: "text-xrt-crimson", border: "border-xrt-crimson" },
  gold: { bg: "bg-xrt-gold-dark", text: "text-xrt-gold-dark", border: "border-xrt-gold-dark" },
  steel: { bg: "bg-xrt-muted", text: "text-xrt-muted", border: "border-xrt-muted" },
  black: { bg: "bg-xrt-black", text: "text-xrt-black", border: "border-xrt-black" },
};

export default function ProductsPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-12 py-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">PRODUCT CATALOG — 4 CORE PILLARS</div>
              <h1 className="text-[clamp(3rem,6vw,6rem)] text-white mb-6">
                Commodity<br />Trading Matrix
              </h1>
              <p className="text-lg text-xrt-steel/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                Direct-origin commodity procurement across four strategic pillars. All grades negotiated against Platts, Argus, and CBOT benchmarks. Full inspection and certification traceability on every lot.
              </p>
            </div>
            <div className="col-span-4 border-l border-xrt-steel/20 pl-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Active SKUs", value: "21+" },
                  { label: "Origins", value: "6 Continents" },
                  { label: "Inspection Bodies", value: "SGS / BV / ITS" },
                  { label: "Settlement", value: "GAFTA / UCP 600" },
                ].map((m) => (
                  <div key={m.label} className="border border-xrt-steel/20 p-4">
                    <div className="text-2xl font-black text-white mb-0.5" style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.02em" }}>
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
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="grid grid-cols-4 border-x border-xrt-steel">
            {products.map((p, i) => (
              <a
                key={p.code}
                href={`#${p.code.toLowerCase()}`}
                className={`block px-6 py-5 border-b-4 text-center ${i < 3 ? "border-r border-xrt-steel" : ""} hover:bg-xrt-surface transition-colors`}
                style={{ borderBottomColor: p.color === "crimson" ? "#c8111f" : p.color === "gold" ? "#c8973a" : p.color === "black" ? "#111111" : "#916f6c" }}
              >
                <div className="label-caps text-xrt-muted mb-1">{p.code}</div>
                <div className="font-black text-lg text-xrt-black" style={{ fontFamily: "var(--font-barlow)" }}>
                  {p.pillar}
                </div>
              </a>
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
          <div className="max-w-[1440px] mx-auto px-12 py-16">

            {/* Pillar header */}
            <div className="grid grid-cols-12 gap-8 mb-8">
              <div className="col-span-8">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-3 h-8"
                    style={{
                      background:
                        pillar.color === "crimson" ? "#c8111f"
                        : pillar.color === "gold" ? "#c8973a"
                        : pillar.color === "black" ? "#111111"
                        : "#916f6c",
                    }}
                  />
                  <span className="label-caps text-xrt-steel/60">{pillar.code}</span>
                </div>
                <h2 className="text-4xl text-xrt-black mb-4">{pillar.pillar}</h2>
                <p className="text-base text-xrt-muted leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-archivo)" }}>
                  {pillar.summary}
                </p>
              </div>
              <div className="col-span-4 flex items-end justify-end">
                <Link href="/contact" className="label-caps border border-xrt-steel text-xrt-muted px-6 py-3 hover:border-xrt-black hover:text-xrt-black transition-colors">
                  Request {pillar.code} Pricing →
                </Link>
              </div>
            </div>

            {/* Product table */}
            <div className="border border-xrt-steel overflow-hidden">
              <table className="w-full data-table">
                <thead>
                  <tr>
                    <th className="text-left">PRODUCT / GRADE</th>
                    <th className="text-left">ORIGIN</th>
                    <th className="text-left">INCOTERMS</th>
                    <th className="text-left">MIN VOLUME</th>
                    <th className="text-left">BENCHMARK</th>
                    <th className="text-left">PREMIUM/DISC</th>
                    <th className="text-left">INSPECTION</th>
                  </tr>
                </thead>
                <tbody>
                  {pillar.items.map((item, ii) => (
                    <tr key={item.product}>
                      <td className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>
                        <div className="font-medium text-xrt-black">{item.product}</div>
                        <div className="label-caps text-xrt-muted mt-0.5">{item.grade}</div>
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footnote */}
            <div className="mt-4 flex items-center gap-6">
              <span className="label-caps text-xrt-steel/50">
                * Prices negotiated against prevailing benchmark. Contact XRT desk for spot and forward quotations.
              </span>
              <div className="flex-1 h-px bg-xrt-steel" />
              <span className="label-caps text-xrt-steel/50">INCOTERMS 2020</span>
            </div>
          </div>
        </section>
      ))}

      {/* ── INSPECTION & CERTIFICATION ──────────────────────────── */}
      <section className="bg-xrt-black text-white">
        <div className="max-w-[1440px] mx-auto px-12 py-16">
          <div className="label-caps text-xrt-steel/40 mb-2">QUALITY ASSURANCE</div>
          <h2 className="text-4xl text-white mb-10">Inspection & Certification Partners</h2>

          <div className="grid grid-cols-3 gap-0 border border-xrt-steel/20">
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
              <div key={body.name} className={`p-8 ${i < 2 ? "border-r border-xrt-steel/20" : ""}`}>
                <div className="label-caps text-xrt-crimson mb-1">{body.cert}</div>
                <h3 className="text-2xl text-white mb-1" style={{ fontFamily: "var(--font-barlow)" }}>{body.name}</h3>
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
