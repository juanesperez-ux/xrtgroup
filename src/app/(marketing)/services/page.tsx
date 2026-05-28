import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services",
  description: "XRT Group technical services: Automated Routing, Risk Mitigation, Customs Clearance, Trade Finance, and Quality Assurance.",
};

export default function ServicesPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-12 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">SERVICE DIRECTORY — REV. 2025.Q2</div>
              <h1 className="text-[clamp(3rem,6vw,6rem)] text-white mb-6">
                Technical Services<br />Infrastructure
              </h1>
              <p className="text-lg text-xrt-steel/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                Six integrated service modules covering the complete commodity procurement lifecycle — from origin sourcing and risk modeling to customs clearance, logistics routing, and structured trade finance.
              </p>
            </div>
            <div className="col-span-4 border-l border-xrt-steel/20 pl-8 flex flex-col justify-center gap-6">
              {[
                { label: "Service Modules", value: "6 Active" },
                { label: "Trade Corridors", value: "42 Covered" },
                { label: "Uptime SLA", value: "99.94%" },
                { label: "Avg. Response Time", value: "<4 hrs" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-3xl font-black text-white mb-0.5" style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.03em" }}>
                    {m.value}
                  </div>
                  <div className="label-caps text-xrt-steel/40">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS ───────────────────────────────────────── */}
      <section className="bg-xrt-off-white">
        <div className="max-w-[1440px] mx-auto px-12 py-16">

          {services.map((svc, i) => (
            <div
              key={svc.id}
              id={svc.code.toLowerCase()}
              className="border border-xrt-steel mb-0 -mt-px bg-xrt-white"
            >
              {/* Service header */}
              <div className="grid grid-cols-12 border-b border-xrt-steel">
                <div className="col-span-8 p-8 border-r border-xrt-steel">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="label-caps text-xrt-steel/60">{svc.id}</span>
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
                  <div className="label-caps text-xrt-crimson mb-2">{svc.code}</div>
                  <h2 className="text-4xl text-xrt-black mb-4">{svc.name}</h2>
                  <p className="text-base text-xrt-muted leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                    {svc.description}
                  </p>
                </div>
                <div className="col-span-4 p-8">
                  <div className="label-caps text-xrt-steel/50 mb-4">GOVERNING PROTOCOLS</div>
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
              <div className="grid grid-cols-4 border-b border-xrt-steel">
                {svc.metrics.map((m, mi) => (
                  <div
                    key={m.key}
                    className={`p-6 ${mi < 3 ? "border-r border-xrt-steel" : ""}`}
                  >
                    <div className="label-caps text-xrt-steel/50 mb-2">{m.key}</div>
                    <div
                      className="text-2xl font-black text-xrt-black"
                      style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.02em" }}
                    >
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS FLOW ────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-t border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-12 py-16">
          <div className="label-caps text-xrt-steel/40 mb-2">EXECUTION SEQUENCE</div>
          <h2 className="text-4xl text-white mb-10">Standard Procurement Flow</h2>

          <div className="grid grid-cols-6 gap-0 border border-xrt-steel/20">
            {[
              { step: "01", label: "RFQ INTAKE", detail: "Client submits commodity spec, volume, INCOTERMS, and delivery window via secure RFQ portal." },
              { step: "02", label: "SOURCING ENGINE", detail: "CSE aggregates bids from 643 pre-vetted suppliers within 90 seconds. AML/KYC pre-screened." },
              { step: "03", label: "RISK MATRIX", detail: "RMM scores counterparty credit, geopolitical exposure, and currency risk before offer submission." },
              { step: "04", label: "CONTRACT & LC", detail: "GAFTA/FOSFA-standard contract issued. LC or open account terms structured in 48–72 hours." },
              { step: "05", label: "ROUTING & CUSTOMS", detail: "ARP optimizes multi-modal route. CCP initiates pre-clearance documentation for destination port." },
              { step: "06", label: "QA & DELIVERY", detail: "Third-party inspection at load port. Vessel tracking to destination. Final document release." },
            ].map((s, i) => (
              <div key={s.step} className={`p-6 border-b border-xrt-steel/20 ${i < 5 ? "border-r border-xrt-steel/20" : ""}`}>
                <div
                  className="text-5xl font-black text-xrt-steel/20 mb-4"
                  style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.05em" }}
                >
                  {s.step}
                </div>
                <div className="label-caps text-xrt-crimson mb-3">{s.label}</div>
                <p className="text-sm text-xrt-steel/60 leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-xrt-surface border-t border-xrt-steel">
        <div className="max-w-[1440px] mx-auto px-12 py-12 flex items-center justify-between">
          <div>
            <div className="label-caps text-xrt-muted mb-1">INITIATE PROCUREMENT</div>
            <div className="text-3xl font-black text-xrt-black" style={{ fontFamily: "var(--font-barlow)" }}>
              Ready to engage a service module?
            </div>
          </div>
          <Link href="/contact" className="label-caps bg-xrt-crimson text-white px-8 py-4 hover:bg-xrt-crimson-dark transition-colors">
            Submit RFQ
          </Link>
        </div>
      </section>
    </div>
  );
}
