import type { Metadata } from "next";
import Link from "next/link";
import HomeHero from "@/components/home/HomeHero";
import { Glyph } from "@/components/ui/Glyph";
import { pageMetadata } from "@/lib/seo";

/* ── SEO TEXT LAYERS (not baked into images) ── */
const seoTexts = {
  fuels: "Houston bulk automotive diesel supplier, wholesale gasoline distributor, ULSD export supply, retail gas station fuel procurement, Marine Gas Oil MGO",
  proteins: "Bulk beef export supply, wholesale beef distribution, commercial meat procurement",
  oils: "Bulk oil supplier, bottled oil private label distribution",
  seedOils: "Wholesale bulk seed oils, bottled cooking oil distribution, sunflower and canola oil supply",
} as const;

export const metadata: Metadata = pageMetadata({
  title: "XRT Group — Houston's Strategic Source for Fuels, Proteins, and Edible Oils",
  description:
    "XRT Group delivers reliable domestic and export supply lines directly to gas station networks, commercial fleets, and food distributors worldwide.",
  path: "",
  keywords: [
    "Houston bulk automotive diesel supplier",
    "wholesale gasoline distributor",
    "ULSD export supply",
    "bulk beef export supply",
    "wholesale beef distribution",
    "bulk oil supplier",
    "wholesale bulk seed oils",
    "commodity trading",
    "procurement",
    "supply chain",
  ],
});

/* ── CORE SUPPLY PILLARS ── */
const pillars = [
  {
    tag: "Refined Fuels",
    icon: "delivery-truck",
    image: "/images/photo-pump-jack-night.webp",
    imageAlt: "Oil pump jack at night — refined fuels and high-volume diesel distribution by XRT Group",
    title: "High-Volume Fuel Distribution",
    items: [
      {
        name: "Automotive Diesel (ULSD)",
        detail: "15-ppm ultra-low sulfur diesel for domestic bulk supply and global export.",
      },
      {
        name: "Automotive Gasoline",
        detail: "Regular, mid-grade, and premium blends engineered for gas station networks and bulk terminals.",
      },
      {
        name: "Marine Gas Oil (MGO)",
        detail: "High-grade distillates for commercial maritime bunkering and operations.",
      },
    ],
    seo: seoTexts.fuels,
    cta: "Request Terminal & Rack Pricing",
  },
  {
    tag: "Proteins",
    icon: "weight-scale",
    image: "/images/photo-angus-cattle-pasture.webp",
    imageAlt: "Black Angus cattle herd grazing in open pasture — premium beef and protein export supply",
    title: "Premium Beef & Protein Export",
    items: [
      {
        name: "Bulk Volume Supply",
        detail: "International procurement channels handling high-volume commercial cut orders.",
      },
      {
        name: "Custom Commercial Specs",
        detail: "Fully traceable premium beef processing tailored to specific national trade guidelines.",
      },
    ],
    seo: seoTexts.proteins,
    cta: "Request Protein Catalog",
  },
  {
    tag: "OILS",
    icon: "packaging",
    image: "/images/photo-olive-oil-mill-pour.webp",
    imageAlt: "Fresh extra virgin olive oil pouring from a stainless steel mill spout into a collection tank — wholesale olive oil production and distribution",
    title: "Wholesale Oil Production",
    items: [
      {
        name: "Bulk Flexitank Shipments",
        detail: "Industrial quantities for food manufacturers, packers, and processors.",
      },
      {
        name: "Bottled Retail Packaging",
        detail: "Premium extra virgin and refined private-label options ready for grocery and wholesale distributors.",
      },
    ],
    seo: seoTexts.oils,
    cta: "Request Edible Oil Specs",
  },
  {
    tag: "Seed Oils",
    icon: "raw-materials",
    image: "/images/photo-soybean-pods.webp",
    imageAlt: "Soybean pods on plantation — bulk seed oil sourcing and wholesale seed oils",
    title: "Bulk & Bottled Seed Oils",
    items: [
      {
        name: "Industrial Seed Oils",
        detail: "Wholesale volumes of high-performance cooking oils, including Sunflower, Corn, Soybean, and Canola.",
      },
      {
        name: "Retail-Ready Formats",
        detail: "Flexible bottling and private-label packaging options shipped globally from strategic logistics points.",
      },
    ],
    seo: seoTexts.seedOils,
    cta: "View Seed Oil Inventory",
  },
];

/* ── PROCUREMENT PROCESS ── */
const processSteps = [
  {
    icon: "procurement",
    step: "01",
    title: "Submit Your RFQ",
    detail: "Tell us the product, specification, volume, destination, and Incoterms. Our desk responds with a structured offer.",
  },
  {
    icon: "supplier",
    step: "02",
    title: "Direct-Origin Sourcing",
    detail: "We match your requirement against pre-vetted producers and refiners — no brokers, no intermediaries.",
  },
  {
    icon: "quality-control",
    step: "03",
    title: "Inspection & Compliance",
    detail: "Third-party inspection (SGS, Bureau Veritas, Intertek) and full KYC/AML clearance before any cargo moves.",
  },
  {
    icon: "container",
    step: "04",
    title: "Logistics & Delivery",
    detail: "Vessel, tank, and container coordination through to discharge — with documentation handled end to end.",
  },
];

/* ── SUPPLEMENTARY AGRICULTURE ── */
const sidelines = [
  {
    image: "/images/photo-corn-field.webp",
    alt: "Corn field — yellow corn commodity procurement",
    label: "Yellow Corn & Grains",
  },
  {
    image: "/images/photo-wheat-field.webp",
    alt: "Wheat field — grain and cereal supply procurement",
    label: "Wheat & Cereals",
  },
  {
    image: "/images/photo-coffee-plantation.webp",
    alt: "Coffee plantation in mist — soft commodity sourcing",
    label: "Soft Commodities",
  },
];

export default function HomePage() {
  return (
    <div className="xrt-modern">
      {/* ═══════════════════════════════════════════════════════════
          SECTION A — HERO (video background, animated entrance)
          ═══════════════════════════════════════════════════════════ */}
      <HomeHero />

      {/* ═══════════════════════════════════════════════════════════
          SECTION B — CORE SUPPLY PILLARS
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-xrt-off-white content-below-fold">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <div className="eyebrow text-xrt-crimson mb-3">Core Supply Pillars</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-xrt-black mb-4">
              Procurement built on direct-origin supply
            </h2>
            <p className="text-base sm:text-lg text-xrt-near-black/60 leading-relaxed">
              Four dedicated supply verticals operating from Houston, Rotterdam, and
              Singapore. Each pillar runs on pre-vetted direct-origin supplier
              networks — no brokers, no intermediaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {pillars.map((pillar) => (
              <article
                key={pillar.tag}
                className="group bg-white rounded-2xl border border-xrt-steel overflow-hidden flex flex-col hover:shadow-[0_8px_30px_rgba(17,17,17,0.08)] transition-shadow duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-xrt-black/50 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 eyebrow bg-white/90 text-xrt-black px-3 py-1.5 rounded-full">
                    {pillar.tag}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-11 h-11 rounded-xl bg-xrt-surface flex items-center justify-center text-xrt-crimson">
                      <Glyph name={pillar.icon} size={24} />
                    </span>
                    <h3 className="text-xl text-xrt-black leading-tight">{pillar.title}</h3>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {pillar.items.map((item) => (
                      <li key={item.name}>
                        <div className="text-sm font-medium text-xrt-black">{item.name}</div>
                        <p className="text-sm text-xrt-near-black/55 leading-relaxed mt-0.5">
                          {item.detail}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* SEO text layer (visible to search engines, subtle to users) */}
                  <p className="text-[10px] text-xrt-steel/40 leading-relaxed mb-5" aria-hidden="true">
                    {pillar.seo}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-auto inline-flex items-center justify-center gap-2 text-sm font-medium bg-xrt-black text-white px-5 py-3 rounded-lg hover:bg-xrt-crimson transition-colors"
                  >
                    {pillar.cta}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION C — HOW PROCUREMENT WORKS
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-xrt-steel content-below-fold">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="mb-12 max-w-3xl">
            <div className="eyebrow text-xrt-crimson mb-3">How We Work</div>
            <h2 className="text-3xl sm:text-4xl text-xrt-black mb-4">
              From RFQ to discharge, one accountable desk
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-xrt-steel bg-xrt-off-white p-6 flex flex-col gap-4"
              >
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-xl bg-white border border-xrt-steel flex items-center justify-center text-xrt-black">
                    <Glyph name={step.icon} size={26} />
                  </span>
                  <span className="eyebrow text-xrt-steel-mid">{step.step}</span>
                </div>
                <h3 className="text-lg text-xrt-black">{step.title}</h3>
                <p className="text-sm text-xrt-near-black/55 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION D — SUPPLEMENTARY AGRICULTURE (Sidelines)
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-xrt-off-white content-below-fold">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="eyebrow text-xrt-crimson mb-3">Supplementary Agriculture</div>
              <h2 className="text-3xl sm:text-4xl text-xrt-black mb-4">
                Commodities support beyond the core
              </h2>
              <p className="text-base text-xrt-near-black/60 leading-relaxed">
                To provide comprehensive coverage to our long-term institutional buyers,
                XRT Group maintains secondary sourcing networks for high-demand
                agricultural products. These sideline operations run parallel to our main
                supply infrastructure, allowing us to manage bulk logistics for{" "}
                <strong className="text-xrt-black font-medium">
                  Sugar, Grains (Wheat, Yellow Corn), and broader soft commodities
                </strong>{" "}
                upon special client request.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {sidelines.map((s, i) => (
                <figure
                  key={s.label}
                  className={`relative rounded-2xl overflow-hidden h-48 sm:h-64 ${i === 1 ? "translate-y-4 sm:translate-y-6" : ""}`}
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-xrt-black/60 via-transparent to-transparent" />
                  <figcaption className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium leading-snug">
                    {s.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CERTIFICATION STRIP
          ═══════════════════════════════════════════════════════════ */}
      <section className="bg-xrt-black">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-6 flex flex-wrap items-center gap-6 sm:gap-8 justify-between">
          <span className="eyebrow text-white/40 whitespace-nowrap">
            Global Compliance Framework
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
              <span key={cert} className="eyebrow text-white/35 whitespace-nowrap">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — partnership photo background
          ═══════════════════════════════════════════════════════════ */}
      <section className="relative text-white content-below-fold overflow-hidden">
        <img
          src="/images/photo-handshake-deal.webp"
          alt="Business handshake — commodity procurement partnership and trade agreement"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-xrt-black/75" />
        <div className="relative max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-24 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div>
            <div className="eyebrow text-white/60 mb-3">Ready to Procure</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white max-w-xl">
              Submit a sourcing request and get a structured offer
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Open RFQ Form
            </Link>
            <Link
              href="/about"
              className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
            >
              Learn About XRT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
