"use client";

import { useState } from "react";
import { timeline, hubs, compliance } from "@/lib/data";
import SchedulePopup from "@/components/contact/SchedulePopup";

// Metadata must be in a separate file for client components; we'll use generateMetadata export pattern.
// For client component pages, metadata is set via a layout or separate server file.

export default function AboutPage() {
  const [scheduleOpen, setScheduleOpen] = useState(false);

  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">ABOUT XRT GROUP — EST. 2018</div>
              <h1 className="text-[clamp(2.5rem,6vw,6rem)] text-white mb-6">
                <span>Global Commodity</span>
                <span className="block">Infrastructure</span>
              </h1>
              <p className="text-base sm:text-lg text-xrt-steel/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                XRT Group was built to eliminate the structural opacity of traditional commodity brokerage. We operate a vertically integrated procurement platform across three continental hubs, combining direct-origin sourcing with precision logistics and institutional compliance frameworks.
              </p>
            </div>
            <div className="lg:col-span-4 border-t border-xrt-steel/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8 flex flex-col justify-center gap-4 sm:gap-6">
              <div className="label-caps text-xrt-steel/40 mb-2">CORPORATE STRUCTURE</div>
              {[
                { label: "Entity", value: "XRT Group LLC" },
                { label: "Incorporated", value: "Houston, TX USA" },
                { label: "Operational Since", value: "2018" },
                { label: "Active Hubs", value: "3 (HOU / RTM / SGP)" },
              ].map((m) => (
                <div key={m.label} className="border-b border-xrt-steel/20 pb-4 last:border-0 last:pb-0">
                  <div className="label-caps text-xrt-steel/40 mb-1">{m.label}</div>
                  <div className="text-white text-sm sm:text-base" style={{ fontFamily: "var(--font-archivo)" }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────────── */}
      <section className="bg-xrt-off-white border-b border-xrt-steel">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="label-caps text-xrt-crimson mb-2">CORPORATE HISTORY</div>
          <h2 className="text-3xl sm:text-4xl text-xrt-black mb-8 sm:mb-10">Operational Timeline</h2>

          <div className="border border-xrt-steel">
            {timeline.map((entry, i) => (
              <div
                key={entry.year}
                className={`grid grid-cols-1 sm:grid-cols-12 ${i < timeline.length - 1 ? "border-b border-xrt-steel" : ""}`}
              >
                {/* Year */}
                <div className="sm:col-span-2 bg-xrt-black flex items-center sm:justify-center border-b border-xrt-steel/20 sm:border-b-0 sm:border-r px-6 sm:px-0 py-4 sm:py-8">
                  <span
                    className="text-3xl sm:text-4xl font-black text-xrt-crimson"
                    style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.04em" }}
                  >
                    {entry.year}
                  </span>
                </div>
                {/* Event title */}
                <div className="sm:col-span-3 bg-xrt-white px-6 py-5 sm:p-8 border-b border-xrt-steel sm:border-b-0 sm:border-r flex items-center">
                  <div className="text-xl sm:text-2xl font-black text-xrt-black" style={{ fontFamily: "var(--font-barlow)" }}>
                    {entry.event}
                  </div>
                </div>
                {/* Detail */}
                <div className="sm:col-span-7 bg-xrt-surface-low px-6 py-5 sm:p-8 flex items-center">
                  <p className="text-sm text-xrt-muted leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                    {entry.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUB NETWORK ─────────────────────────────────────────── */}
      <section className="bg-xrt-surface border-b border-xrt-steel">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="label-caps text-xrt-crimson mb-2">GLOBAL INFRASTRUCTURE</div>
          <h2 className="text-3xl sm:text-4xl text-xrt-black mb-8 sm:mb-10">Hub Network & Operations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-xrt-steel">
            {hubs.map((hub, i) => (
              <div key={hub.code} className={`bg-xrt-white border-b border-xrt-steel md:border-b-0 ${i < 2 ? "md:border-r border-xrt-steel" : ""} last:border-b-0`}>
                {/* Hub header */}
                <div className="bg-xrt-black p-5 sm:p-6 border-b border-xrt-steel/20">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-3xl sm:text-4xl font-black text-white"
                      style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.04em" }}
                    >
                      {hub.code}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-xrt-positive" />
                      <span className="label-caps text-xrt-steel/50">LIVE</span>
                    </div>
                  </div>
                  <div className="label-caps text-xrt-crimson">{hub.city}</div>
                  <div className="label-caps text-xrt-steel/40">{hub.country} — {hub.timezone}</div>
                </div>

                {/* Hub details */}
                <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
                  <div>
                    <div className="label-caps text-xrt-steel/50 mb-2">PRIMARY FOCUS AREAS</div>
                    <ul className="space-y-1.5">
                      {hub.focus.map((f: string) => (
                        <li key={f} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-xrt-crimson flex-shrink-0" />
                          <span className="text-sm text-xrt-muted" style={{ fontFamily: "var(--font-archivo)" }}>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-xrt-steel pt-4">
                    <p className="text-sm text-xrt-muted" style={{ fontFamily: "var(--font-archivo)" }}>
                      For inquiries related to this hub, please schedule a call with our desk.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE FRAMEWORK ────────────────────────────────── */}
      <section id="compliance" className="bg-xrt-black text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="label-caps text-xrt-steel/40 mb-2">REGULATORY FRAMEWORK</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-8 sm:mb-10">Compliance & Certification Matrix</h2>

          <div className="border border-xrt-steel/20 overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="bg-xrt-near-black border-b border-xrt-steel/20">
                  <th className="text-left px-4 sm:px-6 py-4">
                    <span className="label-caps text-xrt-steel/50">FRAMEWORK / CODE</span>
                  </th>
                  <th className="text-left px-4 sm:px-6 py-4">
                    <span className="label-caps text-xrt-steel/50">GOVERNING BODY</span>
                  </th>
                  <th className="text-left px-4 sm:px-6 py-4">
                    <span className="label-caps text-xrt-steel/50">STATUS</span>
                  </th>
                  <th className="text-left px-4 sm:px-6 py-4">
                    <span className="label-caps text-xrt-steel/50">OPERATIONAL DETAIL</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compliance.map((c, i) => (
                  <tr key={c.code} className={`border-b border-xrt-steel/10 ${i % 2 === 0 ? "bg-xrt-near-black/30" : ""}`}>
                    <td className="px-4 sm:px-6 py-4">
                      <span
                        className="text-base sm:text-lg font-black text-white"
                        style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.01em" }}
                      >
                        {c.code}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className="text-sm text-xrt-steel/60" style={{ fontFamily: "var(--font-archivo)" }}>{c.body}</span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span
                        className="label-caps px-2 sm:px-3 py-1.5"
                        style={{
                          background: c.status === "CERTIFIED" ? "#c8111f" : "#1c1b1b",
                          color: "#ffffff",
                          border: c.status === "ACTIVE" ? "1px solid rgba(229,226,225,0.2)" : "none",
                        }}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-4">
                      <span className="text-sm text-xrt-steel/60" style={{ fontFamily: "var(--font-archivo)" }}>{c.detail}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 sm:mt-8 p-5 sm:p-6 border border-xrt-steel/20 bg-xrt-near-black/30">
            <div className="label-caps text-xrt-steel/40 mb-2">LEGAL DISCLAIMER</div>
            <p className="text-sm text-xrt-steel/40 leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
              XRT Group LLC operates in strict compliance with applicable international trade sanctions, anti-money laundering regulations, and export control laws. All counterparties are subject to mandatory KYC/AML screening prior to engagement. Transactions involving sanctioned jurisdictions, entities, or individuals are strictly prohibited. XRT Group reserves the right to decline any transaction without disclosure of reason in compliance with OFAC regulations.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="bg-xrt-crimson text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="label-caps text-white/60 mb-1">START PROCUREMENT</div>
            <div className="text-3xl sm:text-4xl font-black text-white" style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.03em" }}>
              Schedule a call with an XRT desk.
            </div>
          </div>
          <button
            onClick={() => setScheduleOpen(true)}
            className="label-caps bg-white text-xrt-crimson px-8 sm:px-10 py-4 hover:bg-xrt-off-white transition-colors self-start sm:self-auto cursor-pointer"
          >
            Schedule a Call
          </button>
        </div>
      </section>

      {/* ── SCHEDULE POPUP ──────────────────────────────────────── */}
      <SchedulePopup open={scheduleOpen} onClose={() => setScheduleOpen(false)} />
    </div>
  );
}
