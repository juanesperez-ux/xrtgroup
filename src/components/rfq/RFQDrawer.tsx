"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

const BARLOW = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const ARCHIVO = "var(--font-archivo), 'Archivo Narrow', sans-serif";

const SERVICE_NAMES: Record<string, string> = {
  arp: "Automated Routing Protocol",
  rmm: "Risk Mitigation Matrix",
  ccp: "Customs Clearance Pipeline",
  cse: "Commodity Sourcing Engine",
  stf: "Structured Trade Finance",
  qai: "Quality Assurance & Inspection",
};

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledServices?: string[];
  prefilledCommodity?: string;
  prefilledOperation?: string;
  initialMode?: "rfq" | "consult";
}

export default function RFQDrawer({
  isOpen,
  onClose,
  prefilledServices = [],
  prefilledCommodity = "",
  prefilledOperation = "",
  initialMode = "rfq",
}: DrawerProps) {
  const [mode, setMode] = useState<"rfq" | "consult">(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [refId, setRefId] = useState("");

  const [form, setForm] = useState({
    entity: "", contact: "", email: "", phone: "",
    commodity: prefilledCommodity, volume: "", unit: "MT",
    incoterm: "", finance: "NO", notes: "",
  });

  // Sync context when props change
  useEffect(() => {
    const svcLine = prefilledServices.length
      ? `\nMatched services: ${prefilledServices.map((s) => SERVICE_NAMES[s] ?? s.toUpperCase()).join(", ")}`
      : "";
    const opLine = prefilledOperation ? `Operation needed: ${prefilledOperation}` : "";
    setForm((prev) => ({
      ...prev,
      commodity: prefilledCommodity || prev.commodity,
      notes: (opLine + svcLine).trim() || prev.notes,
    }));
    setMode(initialMode);
  }, [prefilledCommodity, prefilledOperation, prefilledServices.join(","), initialMode]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Reset transient state on close
  useEffect(() => {
    if (!isOpen) { setSubmitted(false); setError(""); setLoading(false); }
  }, [isOpen]);

  const update = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }));
  const valid = form.entity && form.email;

  async function handleSubmit() {
    if (!valid) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          entity: form.entity,
          contactName: form.contact,
          email: form.email,
          phone: form.phone,
          commodity: form.commodity,
          volume: form.volume,
          volumeUnit: form.unit,
          incoterms: form.incoterm,
          financeRequired: form.finance,
          notes: form.notes,
          services: prefilledServices.join(", "),
          source: "service-matcher",
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setRefId(data.refId || "");
      setSubmitted(true);
    } catch {
      setError("Submission failed. Please email info@xrtgroup.com directly.");
      setLoading(false);
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 998,
          opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none",
          transition: "opacity 300ms ease",
        }}
      />

      {/* Panel */}
      <div
        role="dialog"
        aria-modal="true"
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0, width: "480px", maxWidth: "100vw",
          background: "#0d0d0d", borderLeft: "1px solid #222", zIndex: 999, overflowY: "auto",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 350ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Header */}
        <div style={{ padding: "26px 32px", borderBottom: "1px solid #1e1e1e", display: "flex", justifyContent: "space-between", alignItems: "flex-start", position: "sticky", top: 0, background: "#0d0d0d", zIndex: 1 }}>
          <div>
            <div style={{ fontFamily: ARCHIVO, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8111f", marginBottom: "8px" }}>
              {mode === "rfq" ? "Request for Quotation" : "Schedule Consultation"}
            </div>
            <h2 style={{ fontFamily: BARLOW, fontWeight: 900, fontSize: "26px", textTransform: "uppercase", color: "#f7f5f2", margin: 0 }}>
              {mode === "rfq" ? "Submit Sourcing Request" : "Talk to Our Desk"}
            </h2>
          </div>
          <button onClick={onClose} aria-label="Close" style={{ background: "transparent", border: "1px solid #333", color: "#888", width: "36px", height: "36px", cursor: "pointer", fontSize: "18px", lineHeight: 1, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            ×
          </button>
        </div>

        {/* Mode tabs */}
        <div style={{ display: "flex", borderBottom: "1px solid #1e1e1e" }}>
          {(["rfq", "consult"] as const).map((m) => (
            <button key={m} onClick={() => setMode(m)} style={{
              flex: 1, padding: "14px", fontFamily: ARCHIVO, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase",
              background: mode === m ? "#111111" : "transparent",
              color: mode === m ? "#f7f5f2" : "#666",
              border: "none", borderBottom: mode === m ? "2px solid #c8111f" : "2px solid transparent", cursor: "pointer",
            }}>
              {m === "rfq" ? "Submit RFQ" : "Schedule Call"}
            </button>
          ))}
        </div>

        <div style={{ padding: "32px" }}>
          {/* Matched services pill */}
          {prefilledServices.length > 0 && (
            <div style={{ background: "#161616", border: "1px solid #222", padding: "16px 20px", marginBottom: "28px" }}>
              <div style={{ fontFamily: ARCHIVO, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#c8973a", marginBottom: "10px" }}>
                Matched Service Modules
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {prefilledServices.map((s) => (
                  <span key={s} style={{ fontFamily: ARCHIVO, fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#e5e2e1", border: "1px solid #c8111f", padding: "3px 10px" }}>
                    {s.toUpperCase()}
                  </span>
                ))}
              </div>
            </div>
          )}

          {mode === "consult" ? (
            <div>
              <p style={{ fontFamily: ARCHIVO, fontSize: "16px", color: "#a8a5a0", lineHeight: 1.7, marginBottom: "28px" }}>
                Book a 30-minute strategy call with an XRT commodity specialist. We&apos;ll review your
                procurement needs and outline the relevant service modules and pricing framework. No commitment required.
              </p>
              <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: "24px" }}>
                <div style={{ fontFamily: ARCHIVO, fontSize: "13px", color: "#666", marginBottom: "16px", letterSpacing: "0.08em" }}>AVAILABLE DESK CONTACTS</div>
                {[
                  { desk: "Energy Desk", email: "energy@xrtgroup.com", hubs: "HOU / RTM" },
                  { desk: "Agricultural Desk", email: "agro@xrtgroup.com", hubs: "HOU / SGP" },
                  { desk: "Oils Desk", email: "oils@xrtgroup.com", hubs: "SGP / RTM" },
                  { desk: "Trade Finance", email: "finance@xrtgroup.com", hubs: "HOU" },
                ].map((d) => (
                  <div key={d.email} style={{ marginBottom: "16px" }}>
                    <div style={{ fontFamily: ARCHIVO, fontSize: "12px", color: "#c8111f", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "2px" }}>
                      {d.desk} · {d.hubs}
                    </div>
                    <a href={`mailto:${d.email}`} style={{ fontFamily: ARCHIVO, fontSize: "14px", color: "#a8a5a0", textDecoration: "none" }}>{d.email}</a>
                  </div>
                ))}
              </div>
            </div>
          ) : submitted ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <div style={{ fontFamily: BARLOW, fontWeight: 900, fontSize: "34px", color: "#c8111f", textTransform: "uppercase", marginBottom: "16px" }}>
                RFQ Submitted
              </div>
              <p style={{ fontFamily: ARCHIVO, fontSize: "16px", color: "#a8a5a0", lineHeight: 1.7 }}>
                Your request has been routed to the relevant XRT desk. Expect a preliminary indication within{" "}
                <strong style={{ color: "#f7f5f2" }}>4 business hours</strong>.
              </p>
              {refId && <div style={{ fontFamily: ARCHIVO, fontSize: "12px", color: "#555", letterSpacing: "0.12em", marginTop: "16px" }}>REFERENCE: {refId}</div>}
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <DrawerField label="Legal Entity" required>
                <input style={input} placeholder="Company name" value={form.entity} onChange={(e) => update("entity", e.target.value)} />
              </DrawerField>
              <DrawerField label="Business Email" required>
                <input style={input} type="email" placeholder="name@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
              </DrawerField>
              <DrawerField label="Contact Name">
                <input style={input} placeholder="Full name" value={form.contact} onChange={(e) => update("contact", e.target.value)} />
              </DrawerField>
              <DrawerField label="Commodity">
                <input style={input} placeholder="e.g. WTI Crude, Soybeans, CPO" value={form.commodity} onChange={(e) => update("commodity", e.target.value)} />
              </DrawerField>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "8px" }}>
                <DrawerField label="Volume">
                  <input style={input} type="number" placeholder="Quantity" value={form.volume} onChange={(e) => update("volume", e.target.value)} />
                </DrawerField>
                <DrawerField label="Unit">
                  <select style={input} value={form.unit} onChange={(e) => update("unit", e.target.value)}>
                    {["MT", "BBL", "GAL", "KL", "FCL", "DWT", "MMBTU"].map((u) => <option key={u} value={u}>{u}</option>)}
                  </select>
                </DrawerField>
              </div>
              <DrawerField label="Trade Finance Required?">
                <div style={{ display: "flex", gap: "8px" }}>
                  {["YES", "NO"].map((v) => (
                    <button key={v} onClick={() => update("finance", v)} style={{
                      flex: 1, padding: "10px", fontFamily: ARCHIVO, fontSize: "12px", letterSpacing: "0.1em", cursor: "pointer",
                      background: form.finance === v ? "#c8111f" : "transparent",
                      color: form.finance === v ? "#f7f5f2" : "#888",
                      border: form.finance === v ? "1px solid #c8111f" : "1px solid #333",
                    }}>{v}</button>
                  ))}
                </div>
              </DrawerField>
              <DrawerField label="Notes">
                <textarea style={{ ...input, minHeight: "84px", resize: "vertical" }} value={form.notes} onChange={(e) => update("notes", e.target.value)} />
              </DrawerField>

              {error && <div style={{ fontSize: "13px", color: "#e01525", fontFamily: ARCHIVO }}>{error}</div>}

              <button onClick={handleSubmit} disabled={loading || !valid} style={{
                background: valid ? "#c8111f" : "#2a2a2a", color: valid ? "#f7f5f2" : "#555",
                border: "none", padding: "15px 24px", fontFamily: BARLOW, fontWeight: 900, fontSize: "14px",
                letterSpacing: "0.15em", textTransform: "uppercase", cursor: valid ? "pointer" : "not-allowed",
              }}>
                {loading ? "Routing to desk..." : "Submit RFQ →"}
              </button>

              <p style={{ fontFamily: ARCHIVO, fontSize: "11px", color: "#555", textAlign: "center" }}>
                AML/KYC pre-screened · TLS encrypted · FATF compliant
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function DrawerField({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label style={{ fontFamily: ARCHIVO, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#a8a5a0", display: "block", marginBottom: "6px" }}>
        {label}{required && <span style={{ color: "#c8111f" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

const input: CSSProperties = { width: "100%", background: "#161616", border: "1px solid #2a2a2a", color: "#f7f5f2", fontFamily: ARCHIVO, fontSize: "14px", padding: "10px 14px", outline: "none", boxSizing: "border-box" };
