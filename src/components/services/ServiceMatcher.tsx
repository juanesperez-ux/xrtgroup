"use client";

import { useState, type CSSProperties } from "react";

/* ─── OPTION DATA ───────────────────────────────────────────────── */
const COMMODITY_OPTIONS = [
  { id: "energy",  label: "Energy / Petroleum" },
  { id: "grains",  label: "Grains & Agricultural" },
  { id: "oils",    label: "Oils & Industrial Fats" },
  { id: "general", label: "General Commodity" },
];

const OPERATION_OPTIONS = [
  { id: "source",  label: "I need to source a commodity" },
  { id: "move",    label: "I need to move cargo" },
  { id: "finance", label: "I need trade financing" },
  { id: "clear",   label: "I need customs clearance" },
  { id: "inspect", label: "I need inspection / QA" },
  { id: "risk",    label: "I need to hedge risk" },
];

const PRIORITY_OPTIONS = [
  { id: "speed",      label: "Speed" },
  { id: "cost",       label: "Cost Reduction" },
  { id: "compliance", label: "Compliance" },
  { id: "scale",      label: "Scale / Volume" },
];

const SERVICE_META: Record<string, { code: string; name: string }> = {
  arp: { code: "ARP", name: "Automated Routing Protocol" },
  rmm: { code: "RMM", name: "Risk Mitigation Matrix" },
  ccp: { code: "CCP", name: "Customs Clearance Pipeline" },
  cse: { code: "CSE", name: "Commodity Sourcing Engine" },
  stf: { code: "STF", name: "Structured Trade Finance" },
  qai: { code: "QAI", name: "Quality Assurance & Inspection" },
};

const ALL_SERVICES = ["arp", "rmm", "ccp", "cse", "stf", "qai"];

/* ─── MATCH LOGIC ───────────────────────────────────────────────── */
function matchServices(operation: string, priority: string): string[] {
  const opMap: Record<string, string[]> = {
    source:  ["cse", "rmm"],
    move:    ["arp", "ccp", "qai"],
    finance: ["stf", "rmm"],
    clear:   ["ccp", "arp"],
    inspect: ["qai", "cse"],
    risk:    ["rmm", "stf"],
  };
  const priorityBoost: Record<string, string> = {
    speed:      "arp",
    cost:       "cse",
    compliance: "ccp",
    scale:      "cse",
  };
  const base = operation ? opMap[operation] ?? [] : [];
  const boost = priority ? priorityBoost[priority] : "";
  const result = boost && !base.includes(boost) ? [boost, ...base] : base;
  return [...new Set(result)];
}

/* ─── COMPONENT ─────────────────────────────────────────────────── */
export default function ServiceMatcher() {
  const [commodity, setCommodity] = useState("");
  const [operation, setOperation] = useState("");
  const [priority, setPriority]   = useState("");
  const [matched, setMatched]     = useState<string[]>([]);
  const [triggered, setTriggered] = useState(false);

  function clearHighlights() {
    document.querySelectorAll("[data-service-id]").forEach((el) => {
      el.classList.remove("service-matched", "service-dimmed");
    });
  }

  function handleMatch() {
    if (!operation) return;
    const results = matchServices(operation, priority);
    setMatched(results);
    setTriggered(true);

    clearHighlights();
    ALL_SERVICES.forEach((id) => {
      const el = document.querySelector(`[data-service-id="${id}"]`);
      if (!el) return;
      el.classList.add(results.includes(id) ? "service-matched" : "service-dimmed");
    });

    if (results[0]) {
      const target = document.querySelector(`[data-service-id="${results[0]}"]`);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
      }
    }
  }

  function handleReset() {
    setCommodity("");
    setOperation("");
    setPriority("");
    setMatched([]);
    setTriggered(false);
    clearHighlights();
  }

  return (
    <section className="bg-xrt-black border-t border-b border-xrt-steel/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">

        {/* Header */}
        <div className="mb-10">
          <div className="label-caps text-xrt-crimson mb-3">PROCUREMENT NAVIGATOR</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-4">Find Your Service Module</h2>
          <p className="text-base text-xrt-steel/60 max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
            Answer three questions. We&apos;ll identify which XRT service modules apply to your operation
            and highlight them below.
          </p>
        </div>

        {/* Step 1 — Commodity */}
        <div className="mb-8">
          <div className="label-caps text-xrt-steel/50 mb-4">01 — What are you trading?</div>
          <div className="flex flex-wrap gap-2">
            {COMMODITY_OPTIONS.map((o) => (
              <button key={o.id} onClick={() => setCommodity(o.id)} style={optionBtn(commodity === o.id)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — Operation (required) */}
        <div className="mb-8">
          <div className="label-caps text-xrt-steel/50 mb-4">
            02 — What do you need to do? <span className="text-xrt-crimson">*</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {OPERATION_OPTIONS.map((o) => (
              <button key={o.id} onClick={() => setOperation(o.id)} style={optionBtn(operation === o.id)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 — Priority */}
        <div className="mb-10">
          <div className="label-caps text-xrt-steel/50 mb-4">03 — What&apos;s your priority?</div>
          <div className="flex flex-wrap gap-2">
            {PRIORITY_OPTIONS.map((o) => (
              <button key={o.id} onClick={() => setPriority(o.id)} style={optionBtn(priority === o.id)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <button
            onClick={handleMatch}
            disabled={!operation}
            className="label-caps px-9 py-4 transition-colors"
            style={{
              background: operation ? "#c8111f" : "#2a2a2a",
              color: operation ? "#f7f5f2" : "#666",
              cursor: operation ? "pointer" : "not-allowed",
            }}
          >
            Identify Services →
          </button>
          {triggered && (
            <button
              onClick={handleReset}
              className="label-caps px-6 py-4 border border-xrt-steel/20 text-xrt-steel/50 hover:text-xrt-steel/80 hover:border-xrt-steel/40 transition-colors"
              style={{ background: "transparent" }}
            >
              Reset
            </button>
          )}
        </div>

        {/* Results */}
        {triggered && matched.length > 0 && (
          <div className="mt-10 pt-8 border-t border-xrt-steel/20">
            <div className="label-caps text-xrt-steel/50 mb-5">
              Recommended Modules ({matched.length})
            </div>
            <div className="flex flex-wrap gap-3">
              {matched.map((id, i) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(`[data-service-id="${id}"]`)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="label-caps px-5 py-3 transition-colors"
                  style={{
                    border: i === 0 ? "1px solid #c8111f" : "1px solid rgba(229,226,225,0.2)",
                    color: i === 0 ? "#c8111f" : "#e5e2e1",
                    textDecoration: "none",
                  }}
                >
                  {SERVICE_META[id]?.code} — {SERVICE_META[id]?.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {triggered && matched.length === 0 && (
          <p className="mt-8 text-base text-xrt-steel/60" style={{ fontFamily: "var(--font-archivo)" }}>
            No exact match.{" "}
            <a href="/contact" className="text-xrt-crimson hover:underline">
              Contact our desk directly →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}

/* ─── OPTION BUTTON STYLE ───────────────────────────────────────── */
function optionBtn(active: boolean): CSSProperties {
  return {
    fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif",
    fontSize: "14px",
    letterSpacing: "0.04em",
    background: active ? "#c8111f" : "transparent",
    color: active ? "#f7f5f2" : "#c8c5c0",
    border: active ? "1px solid #c8111f" : "1px solid rgba(229,226,225,0.18)",
    padding: "10px 18px",
    cursor: "pointer",
    transition: "all 150ms ease",
    textAlign: "left",
  };
}
