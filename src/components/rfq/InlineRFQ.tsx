"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import type { ProductSpec } from "@/lib/productsData";

type Mode = "rfq" | "consult" | "submitted";

const BARLOW = "var(--font-barlow), 'Barlow Condensed', sans-serif";
const ARCHIVO = "var(--font-archivo), 'Archivo Narrow', sans-serif";

export default function InlineRFQ({ product }: { product: ProductSpec }) {
  const [mode, setMode] = useState<Mode>("rfq");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [refId, setRefId] = useState("");

  const [form, setForm] = useState({
    entity: "",
    contact: "",
    email: "",
    phone: "",
    volume: "",
    unit: product.minVolumeUnit,
    incoterm: product.incoterms[0],
    finance: "NO",
    inspection: "YES",
    notes: `Product: ${product.name} (${product.code})\nGrade: ${product.grade}\nBenchmark: ${product.benchmark}\nOrigin: ${product.origin}`,
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const valid = form.entity && form.email && form.volume;

  async function handleSubmit() {
    if (!valid) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // Mapped to the existing /api/rfq handler field names
          entity: form.entity,
          contactName: form.contact,
          email: form.email,
          phone: form.phone,
          commodity: product.name,
          volume: form.volume,
          volumeUnit: form.unit,
          origin: product.origin,
          destination: "",
          incoterms: form.incoterm,
          hub: product.hub.join(" / "),
          financeRequired: form.finance,
          inspectionRequired: form.inspection,
          notes: form.notes,
          // Context (surfaced by the route)
          commodityCode: product.code,
          source: `product-page:${product.slug}`,
          deskEmail: product.deskEmail,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data.error || "Failed");
      setRefId(data.refId || "");
      setMode("submitted");
    } catch {
      setError("Submission failed. Email " + product.deskEmail + " directly.");
      setLoading(false);
    }
  }

  /* ── Submitted ── */
  if (mode === "submitted") {
    return (
      <div style={panel}>
        <div style={{ padding: "40px 32px", textAlign: "center" }}>
          <div style={{ color: "#c8111f", fontSize: "30px", fontFamily: BARLOW, fontWeight: 900, textTransform: "uppercase", marginBottom: "16px" }}>
            RFQ Received
          </div>
          <p style={{ fontSize: "15px", color: "#a8a5a0", lineHeight: 1.65, marginBottom: "20px", fontFamily: ARCHIVO }}>
            Your request for <strong style={{ color: "#f7f5f2" }}>{product.name}</strong> has been
            routed to the {product.hub[0]} desk. Expect a preliminary indication within 4 business hours.
          </p>
          {refId && (
            <div style={{ fontSize: "12px", color: "#555", letterSpacing: "0.12em", fontFamily: ARCHIVO }}>
              REFERENCE: {refId}
            </div>
          )}
        </div>
      </div>
    );
  }

  /* ── Consultation ── */
  if (mode === "consult") {
    return (
      <div style={panel}>
        <div style={{ padding: "22px 28px", borderBottom: "1px solid #1e1e1e" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8973a", marginBottom: "8px", fontFamily: ARCHIVO }}>
            Schedule Consultation
          </div>
          <h3 style={{ fontFamily: BARLOW, fontWeight: 900, fontSize: "22px", textTransform: "uppercase", color: "#f7f5f2", margin: 0 }}>
            Talk to the {product.hub[0]} Desk
          </h3>
        </div>
        <div style={{ padding: "28px" }}>
          <p style={{ fontSize: "15px", color: "#a8a5a0", lineHeight: 1.65, marginBottom: "24px", fontFamily: ARCHIVO }}>
            Book a 30-minute consultation with an XRT specialist for{" "}
            <span style={{ color: "#f7f5f2" }}>{product.name}</span> procurement. No commitment required.
          </p>
          <a
            href={`mailto:${product.deskEmail}?subject=Consultation Request — ${encodeURIComponent(product.name)}`}
            style={{ ...primaryBtn, background: "#c8973a", color: "#111111", display: "block", textAlign: "center", textDecoration: "none", marginBottom: "14px" }}
          >
            Request 30-Min Call →
          </a>
          <button onClick={() => setMode("rfq")} style={ghostBtn}>← Submit RFQ instead</button>
        </div>
      </div>
    );
  }

  /* ── RFQ form ── */
  return (
    <div style={panel}>
      <div style={{ padding: "22px 28px", borderBottom: "1px solid #1e1e1e" }}>
        <div style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8111f", marginBottom: "8px", fontFamily: ARCHIVO }}>
          Request for Quotation
        </div>
        <h3 style={{ fontFamily: BARLOW, fontWeight: 900, fontSize: "22px", textTransform: "uppercase", color: "#f7f5f2", margin: 0, lineHeight: 1.1 }}>
          {product.name}
        </h3>
        <p style={{ fontSize: "13px", color: "#777", marginTop: "6px", fontFamily: ARCHIVO }}>
          {product.grade} · Min {product.minVolume} {product.minVolumeUnit}
        </p>
      </div>

      <div style={{ padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <Field label="Legal Entity" required>
          <input style={input} placeholder="Company name" value={form.entity} onChange={(e) => update("entity", e.target.value)} />
        </Field>
        <Field label="Contact Name">
          <input style={input} placeholder="Full name" value={form.contact} onChange={(e) => update("contact", e.target.value)} />
        </Field>
        <Field label="Business Email" required>
          <input style={input} type="email" placeholder="name@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
        </Field>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "8px" }}>
          <Field label="Volume" required>
            <input style={input} type="number" placeholder={`Min ${product.minVolume}`} value={form.volume} onChange={(e) => update("volume", e.target.value)} />
          </Field>
          <Field label="Unit">
            <select style={input} value={form.unit} onChange={(e) => update("unit", e.target.value)}>
              {["MT", "BBL", "GAL", "KL", "FCL", "DWT", "MMBTU"].map((u) => <option key={u} value={u}>{u}</option>)}
            </select>
          </Field>
        </div>

        <Field label="Preferred INCOTERMS">
          <select style={input} value={form.incoterm} onChange={(e) => update("incoterm", e.target.value)}>
            {product.incoterms.map((t) => <option key={t} value={t}>{t}</option>)}
            {["FOB", "CIF", "CFR", "DAP", "DDP", "FCA"].filter((t) => !product.incoterms.includes(t)).map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>

        <Field label="Trade Finance Required?">
          <Toggle value={form.finance} onChange={(v) => update("finance", v)} />
        </Field>

        <Field label="Notes / Additional Specs">
          <textarea style={{ ...input, minHeight: "84px", resize: "vertical" }} value={form.notes} onChange={(e) => update("notes", e.target.value)} />
        </Field>

        {error && <div style={{ fontSize: "13px", color: "#e01525", fontFamily: ARCHIVO }}>{error}</div>}

        <button onClick={handleSubmit} disabled={loading || !valid} style={{ ...primaryBtn, background: valid ? "#c8111f" : "#2a2a2a", color: valid ? "#f7f5f2" : "#555", cursor: valid ? "pointer" : "not-allowed" }}>
          {loading ? "Routing to desk..." : "Submit RFQ →"}
        </button>

        <div style={{ borderTop: "1px solid #1e1e1e", paddingTop: "16px", textAlign: "center" }}>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "8px", fontFamily: ARCHIVO }}>
            Not ready to submit? Speak with our team first.
          </p>
          <button onClick={() => setMode("consult")} style={{ background: "transparent", border: "none", color: "#c8973a", fontFamily: ARCHIVO, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", textDecoration: "underline" }}>
            Schedule a consultation →
          </button>
        </div>

        <p style={{ fontSize: "11px", color: "#555", textAlign: "center", lineHeight: 1.5, fontFamily: ARCHIVO }}>
          AML/KYC pre-screened · TLS encrypted · FATF compliant
        </p>
      </div>
    </div>
  );
}

/* ── Shared sub-components & styles ── */
function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <div>
      <label style={{ fontFamily: ARCHIVO, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#a8a5a0", display: "block", marginBottom: "6px" }}>
        {label}{required && <span style={{ color: "#c8111f" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

function Toggle({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      {["YES", "NO"].map((v) => (
        <button key={v} onClick={() => onChange(v)} style={{
          flex: 1, padding: "10px", fontFamily: ARCHIVO, fontSize: "13px", letterSpacing: "0.1em", cursor: "pointer",
          background: value === v ? "#c8111f" : "transparent",
          color: value === v ? "#f7f5f2" : "#888",
          border: value === v ? "1px solid #c8111f" : "1px solid #333",
        }}>{v}</button>
      ))}
    </div>
  );
}

const panel: CSSProperties = { background: "#0d0d0d", border: "1px solid #222", fontFamily: ARCHIVO };
const input: CSSProperties = { width: "100%", background: "#161616", border: "1px solid #2a2a2a", color: "#f7f5f2", fontFamily: ARCHIVO, fontSize: "14px", padding: "10px 14px", outline: "none", boxSizing: "border-box" };
const primaryBtn: CSSProperties = { border: "none", padding: "14px 24px", fontFamily: BARLOW, fontWeight: 900, fontSize: "14px", letterSpacing: "0.15em", textTransform: "uppercase", transition: "background 200ms ease" };
const ghostBtn: CSSProperties = { display: "block", width: "100%", background: "transparent", border: "1px solid #333", color: "#666", fontFamily: ARCHIVO, fontSize: "13px", letterSpacing: "0.12em", textTransform: "uppercase", padding: "12px", cursor: "pointer" };
