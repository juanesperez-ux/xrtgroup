import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { services } from "@/lib/data";
import { SERVICE_ICONS } from "@/components/icons/CommodityIcons";

/* ── Lazy-load heavy interactive components (below the fold on most screens) ── */
const ServiceMatcher = dynamic(() => import("@/components/services/ServiceMatcher"), {
  ssr: true,
});
const ServiceQuoteCTA = dynamic(() => import("@/components/services/ServiceQuoteCTA"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Services",
  description: "XRT Group technical services: Automated Routing, Risk Mitigation, Customs Clearance, Trade Finance, and Quality Assurance.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">SERVICE DIRECTORY — REV. 2025.Q2</div>
              <h1 className="text-[clamp(2.5rem,6vw,6rem)] text-white mb-6">
                Technical Services<br />Infrastructure
              </h1>
              <p className="text-base sm:text-lg text-xrt-steel/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                Six integrated service modules covering the complete commodity procurement lifecycle — from origin sourcing and risk modeling to customs clearance, logistics routing, and structured trade finance.
              </p>
            </div>
            <div className="lg:col-span-4 border-t border-xrt-steel/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-0">
                {[
                  { label: "Service Modules", value: "6 Active" },
                  { label: "Trade Corridors", value: "42 Covered" },
                  { label: "Uptime SLA", value: "99.94%" },
                  { label: "Avg. Response Time", value: "<4 hrs" },
                ].map((m) => (
                  <div key={m.label} className="lg:pb-5 lg:border-b lg:border-xrt-steel/20 lg:last:border-0 lg:last:pb-0">
                    <div className="text-2xl sm:text-3xl font-black text-white mb-1" style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.03em" }}>
                      {m.value}
                    </div>
                    <div className="label-caps text-xrt-steel/70">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERACTIVE SERVICE MATCHER ─────────────────────────── */}
      <ServiceMatcher />

      {/* ── SERVICE CARDS ───────────────────────────────────────── */}
      <section className="bg-xrt-off-white content-below-fold">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">

          {services.map((svc) => (
            <div
              key={svc.id}
              id={svc.code.toLowerCase()}
              data-service-id={svc.code.toLowerCase()}
              className="border border-xrt-steel mb-0 -mt-px bg-xrt-white"
            >
              {/* Service header */}
              <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-xrt-steel">
                <div className="lg:col-span-8 p-6 sm:p-8 border-b border-xrt-steel lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="label-caps text-xrt-outline">{svc.id}</span>
                    <div className="h-px flex-1 bg-xrt-steel" />
                    <span
                      className="label-caps px-3 py-1.5"
                      style={{
                        background: svc.status === "OPERATIONAL" ? "#111111" : "#c8973a",
                        color: svc.status === "OPERATIONAL" ? "#ffffff" : "#111111",
                      }}
                    >
                      {svc.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    {(() => {
                      const Icon = SERVICE_ICONS[svc.code as keyof typeof SERVICE_ICONS];
                      return Icon ? <Icon size={44} color="#5c3f3d" activeColor="#c8111f" /> : null;
                    })()}
                    <div>
                      <div className="label-caps text-xrt-crimson mb-1">{svc.code}</div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-xrt-black">{svc.name}</h2>
                    </div>
                  </div>
                  <p className="text-base text-xrt-muted leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                    {svc.description}
                  </p>
                </div>
                <div className="lg:col-span-4 p-6 sm:p-8">
                  <div className="label-caps text-xrt-outline mb-4">GOVERNING PROTOCOLS</div>
                  <div className="flex flex-wrap gap-2">
                    {svc.protocols.map((p) => (
                      <span
                        key={p}
                        className="label-caps border border-xrt-steel text-xrt-black px-3 py-2"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics table */}
              <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-xrt-steel">
                {svc.metrics.map((m, mi) => (
                  <div
                    key={m.key}
                    className={[
                      "p-5 sm:p-6",
                      // Mobile (2-col): bottom border between rows, right border between cols
                      mi < 2 ? "border-b border-xrt-steel" : "",
                      mi % 2 === 0 ? "border-r border-xrt-steel" : "",
                      // SM (4-col): remove all bottom, keep right on first 3
                      "sm:border-b-0",
                      mi < 3 ? "sm:border-r" : "sm:border-r-0",
                    ].filter(Boolean).join(" ")}
                  >
                    <div className="label-caps text-xrt-outline mb-2.5">{m.key}</div>
                    <div
                      className="text-2xl sm:text-3xl font-black text-xrt-black"
                      style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.02em" }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contextual quote CTA */}
              <ServiceQuoteCTA code={svc.code} />
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS FLOW ────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-t border-xrt-steel/20 content-below-fold">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="label-caps text-xrt-steel/40 mb-2">EXECUTION SEQUENCE</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-8 sm:mb-10">Standard Procurement Flow</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border border-xrt-steel/20">
            {[
              { step: "01", label: "RFQ INTAKE", detail: "Client submits commodity spec, volume, INCOTERMS, and delivery window via secure RFQ portal." },
              { step: "02", label: "SOURCING ENGINE", detail: "CSE aggregates bids from 643 pre-vetted suppliers within 90 seconds. AML/KYC pre-screened." },
              { step: "03", label: "RISK MATRIX", detail: "RMM scores counterparty credit, geopolitical exposure, and currency risk before offer submission." },
              { step: "04", label: "CONTRACT & LC", detail: "GAFTA/FOSFA-standard contract issued. LC or open account terms structured in 48–72 hours." },
              { step: "05", label: "ROUTING & CUSTOMS", detail: "ARP optimizes multi-modal route. CCP initiates pre-clearance documentation for destination port." },
              { step: "06", label: "QA & DELIVERY", detail: "Third-party inspection at load port. Vessel tracking to destination. Final document release." },
            ].map((s, i) => (
              <div key={s.step} className={[
                "p-5 sm:p-6",
                // Mobile (2-col): bottom on rows 0–2 (i<4), right on col 0 (i%2===0)
                i < 4 ? "border-b border-xrt-steel/20" : "",
                i % 2 === 0 ? "border-r border-xrt-steel/20" : "",
                // SM (3-col): bottom on row 0 (i<3), right on cols 0–1 (i%3<2)
                i >= 3 ? "sm:border-b-0" : "",
                i % 3 < 2 ? "sm:border-r" : "sm:border-r-0",
                // LG (6-col): no bottom, right on all but last (i<5)
                "lg:border-b-0",
                i < 5 ? "lg:border-r" : "lg:border-r-0",
              ].filter(Boolean).join(" ")}>
                <div
                  className="text-4xl sm:text-5xl font-black text-xrt-steel/20 mb-4"
                  style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.05em" }}
                >
                  {s.step}
                </div>
                <div className="label-caps text-xrt-crimson mb-3">{s.label}</div>
                <p className="text-sm text-xrt-steel/75 leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-xrt-surface border-t border-xrt-steel content-below-fold">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="label-caps text-xrt-muted mb-1">INITIATE PROCUREMENT</div>
            <div className="text-2xl sm:text-3xl font-black text-xrt-black" style={{ fontFamily: "var(--font-barlow)" }}>
              Ready to engage a service module?
            </div>
          </div>
          <Link href="/contact" className="label-caps bg-xrt-crimson text-white px-8 py-4 hover:bg-xrt-crimson-dark transition-colors self-start sm:self-auto">
            Submit RFQ
          </Link>
        </div>
      </section>
    </div>
  );
}
