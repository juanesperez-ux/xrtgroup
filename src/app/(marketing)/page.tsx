import Link from "next/link";
import { homeStats } from "@/lib/data";

/* ── Inline SVG icons (replace FontAwesome, no external kit needed) ── */
const SvgArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);
const SvgFileDoc = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);
const SvgChecklist = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="5" width="6" height="6" rx="1" />
    <line x1="12" y1="8" x2="20" y2="8" />
    <rect x="3" y="14" width="6" height="6" rx="1" />
    <line x1="12" y1="17" x2="20" y2="17" />
  </svg>
);

/* ── SEO TEXT LAYERS (not baked into images) ── */
const seoTexts = {
  fuels: "Houston bulk automotive diesel supplier, wholesale gasoline distributor, ULSD export supply, retail gas station fuel procurement, Marine Gas Oil MGO",
  proteins: "Bulk beef export supply, wholesale beef distribution, commercial meat procurement",
  oliveOils: "Bulk extra virgin olive oil supplier, bottled olive oil private label distribution",
  seedOils: "Wholesale bulk seed oils, bottled cooking oil distribution, sunflower and canola oil supply",
} as const;

export default function HomePage() {
  return (
    <div>
      {/* ═══════════════════════════════════════════════════════════
          SECTION A — HERO HEADER (Above the Fold)
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative bg-xrt-black text-white min-h-[calc(100vh-3.5rem-2.25rem)] sm:min-h-[calc(100vh-4rem-2.25rem)] flex flex-col overflow-hidden">
        {/* Background image: global trade infrastructure — native <img> for SVGs avoids Next.js Image bitmap rasterization at viewport scale */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-trade-infrastructure.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-xrt-black/80 via-xrt-black/50 to-xrt-black" />
        </div>

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12 flex-1 flex flex-col justify-center relative z-10">
          {/* ESTABLISHED label */}
          <div className="flex items-center gap-6 mb-8 sm:mb-12">
            <span className="label-caps text-xrt-steel/50 tracking-[0.25em]">
              EST. 2018 &mdash; HOUSTON, TEXAS
            </span>
            <div className="flex-1 h-px bg-xrt-steel/15 hidden sm:block" />
            <span className="label-caps text-xrt-crimson whitespace-nowrap hidden sm:inline">
              DIRECT-ORIGIN · NO BROKERS
            </span>
          </div>

          {/* Main headline + sub */}
          <div className="max-w-4xl">
            <h1
              className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase text-white leading-[0.92] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
            >
              Houston's Strategic Source for
              <br />
              <span className="text-xrt-crimson">Fuels, Proteins, and Edible Oils</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-xrt-steel/70 max-w-2xl leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
            >
              XRT Group delivers reliable domestic and export supply lines directly to
              gas station networks, commercial fleets, and food distributors worldwide.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="label-caps bg-xrt-crimson text-white px-8 py-4 hover:bg-xrt-crimson-dark transition-colors inline-flex items-center gap-2"
              >
                <SvgFileDoc />
                Submit Sourcing RFQ
              </Link>
              <Link
                href="/products"
                className="label-caps text-xrt-steel/80 border border-xrt-steel/30 px-8 py-4 hover:border-xrt-steel/60 hover:text-white transition-colors inline-flex items-center gap-2"
              >
                <SvgChecklist />
                View Product Specifications
              </Link>
            </div>
          </div>

          {/* Bottom stats strip */}
          <div className="mt-auto pt-10 sm:pt-16">
            <div className="flex flex-wrap items-center gap-0 border-t border-xrt-steel/15 pt-6">
              {homeStats.map((stat, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 sm:px-6 py-2 ${i > 0 ? "border-l border-xrt-steel/15" : ""}`}
                >
                  <span
                    className="font-black text-2xl sm:text-3xl text-xrt-crimson"
                    style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", letterSpacing: "-0.02em" }}
                  >
                    {stat.value}
                  </span>
                  <span className="label-caps text-xrt-steel/40 max-w-[120px] leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION B — 4 CORE BUSINESS GRID
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-xrt-off-white border-b border-xrt-steel content-below-fold">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="mb-12 sm:mb-16">
            <div className="label-caps text-xrt-crimson mb-3 tracking-[0.2em]">
              Core Supply Pillars
            </div>
            <h2 className="text-3xl sm:text-4xl text-xrt-black mb-4">
              Direct-Origin Procurement Infrastructure
            </h2>
            <p
              className="text-base text-xrt-muted max-w-3xl leading-relaxed"
              style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
            >
              Four dedicated supply verticals operating from Houston, Rotterdam, and Singapore.
              Each pillar runs on pre-vetted direct-origin supplier networks — no brokers, no intermediaries.
            </p>
          </div>

          {/* 4-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0 border border-xrt-steel">
            {/* ── CARD 1: REFINED FUELS ─────────────────────────── */}
            <div className="bg-xrt-white border-b xl:border-b-0 border-r-0 md:border-r xl:border-r border-xrt-steel group">
              {/* Image — native <img> avoids Next.js Image optimization on SVGs */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/pillar-fuels.svg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-xrt-black/30" />
                <div className="absolute top-4 left-4">
                  <span className="label-caps bg-xrt-crimson text-white px-3 py-1.5 tracking-[0.15em]">
                    REFINED FUELS
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3
                  className="text-2xl text-xrt-black mb-5"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                >
                  High-Volume Fuel Distribution
                </h3>

                <ul className="space-y-4 mb-6 border-b border-xrt-steel pb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-crimson mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Automotive Diesel (ULSD)
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        15-ppm ultra-low sulfur diesel for domestic bulk supply and global export.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-crimson mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Automotive Gasoline
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        Regular, mid-grade, and premium blends engineered for gas station networks and bulk terminals.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-crimson mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Marine Gas Oil (MGO)
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        High-grade distillates for commercial maritime bunkering and operations.
                      </p>
                    </div>
                  </li>
                </ul>

                {/* SEO text layer (visible to search engines, subtle to users) */}
                <p className="text-[10px] text-xrt-steel/20 leading-relaxed mb-5" aria-hidden="true">
                  {seoTexts.fuels}
                </p>

                <Link
                  href="/contact"
                  className="label-caps bg-xrt-black text-white px-6 py-3 hover:bg-xrt-crimson transition-colors inline-flex items-center gap-2 w-full justify-center"
                >
                  Request Terminal & Rack Pricing
                  <SvgArrowRight />
                </Link>
              </div>
            </div>

            {/* ── CARD 2: BEEF & PROTEINS ───────────────────────── */}
            <div className="bg-xrt-white border-b xl:border-b-0 border-r-0 md:border-r-0 xl:border-r border-xrt-steel group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/pillar-proteins.svg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-xrt-black/30" />
                <div className="absolute top-4 left-4">
                  <span className="label-caps bg-xrt-gold-dark text-white px-3 py-1.5 tracking-[0.15em]">
                    PROTEINS
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3
                  className="text-2xl text-xrt-black mb-5"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                >
                  Premium Beef & Protein Export
                </h3>

                <ul className="space-y-4 mb-6 border-b border-xrt-steel pb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-gold-dark mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Bulk Volume Supply
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        International procurement channels handling high-volume commercial cut orders.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-gold-dark mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Custom Commercial Specs
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        Fully traceable premium beef processing tailored to specific national trade guidelines.
                      </p>
                    </div>
                  </li>
                </ul>

                <p className="text-[10px] text-xrt-steel/20 leading-relaxed mb-5" aria-hidden="true">
                  {seoTexts.proteins}
                </p>

                <Link
                  href="/contact"
                  className="label-caps bg-xrt-black text-white px-6 py-3 hover:bg-xrt-crimson transition-colors inline-flex items-center gap-2 w-full justify-center"
                >
                  Request Protein Catalog
                  <SvgArrowRight />
                </Link>
              </div>
            </div>

            {/* ── CARD 3: OLIVE OILS ────────────────────────────── */}
            <div className="bg-xrt-white border-b md:border-b-0 border-r-0 md:border-r xl:border-r border-xrt-steel group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/pillar-olive-oils.svg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-xrt-black/30" />
                <div className="absolute top-4 left-4">
                  <span className="label-caps bg-xrt-positive text-white px-3 py-1.5 tracking-[0.15em]">
                    OLIVE OILS
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3
                  className="text-2xl text-xrt-black mb-5"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                >
                  Wholesale Olive Oil Production
                </h3>

                <ul className="space-y-4 mb-6 border-b border-xrt-steel pb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-positive mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Bulk Flexitank Shipments
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        Industrial quantities for food manufacturers, packers, and processors.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-positive mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Bottled Retail Packaging
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        Premium extra virgin and refined private-label options ready for grocery and wholesale distributors.
                      </p>
                    </div>
                  </li>
                </ul>

                <p className="text-[10px] text-xrt-steel/20 leading-relaxed mb-5" aria-hidden="true">
                  {seoTexts.oliveOils}
                </p>

                <Link
                  href="/contact"
                  className="label-caps bg-xrt-black text-white px-6 py-3 hover:bg-xrt-crimson transition-colors inline-flex items-center gap-2 w-full justify-center"
                >
                  Request Edible Oil Specs
                  <SvgArrowRight />
                </Link>
              </div>
            </div>

            {/* ── CARD 4: SEED OILS ──────────────────────────────── */}
            <div className="bg-xrt-white group">
              <div className="relative h-56 overflow-hidden">
                <img
                  src="/images/pillar-seed-oils.svg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-xrt-black/30" />
                <div className="absolute top-4 left-4">
                  <span className="label-caps bg-xrt-gold-dark text-white px-3 py-1.5 tracking-[0.15em]">
                    SEED OILS
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3
                  className="text-2xl text-xrt-black mb-5"
                  style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
                >
                  Bulk & Bottled Seed Oils
                </h3>

                <ul className="space-y-4 mb-6 border-b border-xrt-steel pb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-gold-dark mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Industrial Seed Oils
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        Wholesale volumes of high-performance cooking oils, including Sunflower, Corn, Soybean, and Canola.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xrt-gold-dark mt-1 text-sm">&#9679;</span>
                    <div>
                      <div
                        className="text-sm font-bold text-xrt-black"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
                      >
                        Retail-Ready Formats
                      </div>
                      <p className="text-xs text-xrt-muted/70 leading-relaxed mt-0.5"
                        style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}>
                        Flexible bottling and private-label packaging options shipped globally from strategic logistics points.
                      </p>
                    </div>
                  </li>
                </ul>

                <p className="text-[10px] text-xrt-steel/20 leading-relaxed mb-5" aria-hidden="true">
                  {seoTexts.seedOils}
                </p>

                <Link
                  href="/contact"
                  className="label-caps bg-xrt-black text-white px-6 py-3 hover:bg-xrt-crimson transition-colors inline-flex items-center gap-2 w-full justify-center"
                >
                  View Seed Oil Inventory
                  <SvgArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION C — SUPPLEMENTARY AGRICULTURE (Sidelines)
          Text-only, low contrast, above footer
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-xrt-surface content-below-fold">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
          <h3
            className="text-xl text-xrt-black/50 mb-4"
            style={{
              fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
              fontWeight: 900,
              textTransform: "uppercase",
              letterSpacing: "0.02em",
            }}
          >
            Supplementary Agriculture & Commodities Support
          </h3>

          <p
            className="text-sm text-xrt-muted/40 max-w-4xl leading-relaxed"
            style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
          >
            To provide comprehensive coverage to our long-term institutional buyers, XRT Group
            maintains secondary sourcing networks for high-demand agricultural products. These
            sideline operations run parallel to our main supply infrastructure, allowing us to
            manage bulk logistics for <strong className="text-xrt-muted/50">Sugar, Grains
            (Wheat, Yellow Corn), and broader soft commodities</strong> upon special client request.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CERTIFICATION STRIP
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-xrt-black border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-wrap items-center gap-6 sm:gap-8 justify-between">
          <span className="label-caps text-xrt-steel/30 whitespace-nowrap">
            GLOBAL COMPLIANCE FRAMEWORK
          </span>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            {[
              "FATF AML/KYC",
              "OFAC Screened",
              "C-TPAT Certified",
              "AEO Certified",
              "ISO 9001:2015",
              "GAFTA Member",
              "FOSFA Member",
            ].map((cert) => (
              <span key={cert} className="label-caps text-xrt-steel/30 whitespace-nowrap">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA STRIP
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-xrt-crimson text-white content-below-fold">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="label-caps text-white/60 mb-2">READY TO PROCURE</div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white"
              style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", letterSpacing: "-0.03em" }}
            >
              Submit a Sourcing Request
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="label-caps bg-white text-xrt-crimson px-8 sm:px-10 py-4 hover:bg-xrt-off-white transition-colors"
            >
              Open RFQ Form
            </Link>
            <Link
              href="/about"
              className="label-caps border border-white/40 text-white px-8 sm:px-10 py-4 hover:border-white transition-colors"
            >
              Learn About XRT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}