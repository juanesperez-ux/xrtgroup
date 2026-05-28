"use client";

import { useState } from "react";

const commodityOptions = [
  "Crude Oil (WTI / Brent)",
  "Refined Petroleum Products",
  "Natural Gas / LNG",
  "Wheat / Grains",
  "Corn",
  "Soybeans / Oilseeds",
  "Crude Palm Oil",
  "Vegetable Oils (RBD / Canola)",
  "Vessel Charter (Tanker / Bulk)",
  "Container / ISO Tank",
  "Multiple Commodities",
  "Other (specify in notes)",
];

const incotermsOptions = ["FOB", "CIF", "CFR", "DAP", "DDP", "FCA", "EXW", "CPT"];
const hubOptions = ["Houston (HOU)", "Rotterdam (RTM)", "Singapore (SGP)", "All Hubs"];

const fieldClass =
  "w-full bg-xrt-off-white border border-xrt-steel px-4 py-3 text-sm text-xrt-black focus:outline-none focus:border-xrt-black transition-colors";
const labelClass = "label-caps text-xrt-muted block mb-2";

export default function RFQForm() {
  const [submitted, setSubmitted] = useState(false);
  const [refId] = useState(() => Math.random().toString().slice(2, 8));
  const [form, setForm] = useState({
    entity: "",
    regNumber: "",
    contactName: "",
    email: "",
    phone: "",
    commodity: "",
    volume: "",
    volumeUnit: "MT",
    origin: "",
    destination: "",
    deliveryStart: "",
    deliveryEnd: "",
    incoterms: "",
    hub: "",
    financeRequired: "no",
    inspectionRequired: "yes",
    notes: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-xrt-black min-h-[60vh] flex items-center justify-center px-12 py-24">
        <div className="border border-xrt-steel/20 p-16 max-w-xl text-center">
          <div className="w-12 h-12 bg-xrt-crimson mx-auto mb-8 flex items-center justify-center">
            <span
              className="text-white text-2xl font-black"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              ✓
            </span>
          </div>
          <div className="label-caps text-xrt-crimson mb-4">
            RFQ SUBMITTED — REF: XRT-{refId}
          </div>
          <h2
            className="text-3xl text-white mb-4"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Request Received
          </h2>
          <p
            className="text-sm text-xrt-steel/60 leading-relaxed"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Your Request for Quotation has been logged and routed to the relevant
            commodity desk. An XRT representative will contact you within 4 business
            hours with a preliminary indication.
          </p>
          <div className="mt-8 border-t border-xrt-steel/20 pt-8">
            <div className="label-caps text-xrt-steel/40 mb-2">ASSIGNED DESK</div>
            <div className="label-caps text-white">
              {form.hub || "ROUTING IN PROGRESS"}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="bg-xrt-off-white">
      <div className="max-w-[1440px] mx-auto px-12 py-16">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-12 gap-8">
            {/* Left: Form sections */}
            <div className="col-span-8 space-y-0">

              {/* 01 Counterparty */}
              <div className="border border-xrt-steel bg-xrt-white">
                <div className="bg-xrt-black px-6 py-4 flex items-center gap-4">
                  <span className="label-caps text-xrt-steel/40">01</span>
                  <span className="label-caps text-white">COUNTERPARTY IDENTIFICATION</span>
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className={labelClass} htmlFor="entity">Legal Entity Name *</label>
                    <input id="entity" name="entity" type="text" required value={form.entity} onChange={handleChange} placeholder="XYZ Refining Corporation LLC" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="regNumber">Registration / VAT Number *</label>
                    <input id="regNumber" name="regNumber" type="text" required value={form.regNumber} onChange={handleChange} placeholder="e.g. US-EIN / EU-VAT" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="contactName">Contact Name *</label>
                    <input id="contactName" name="contactName" type="text" required value={form.contactName} onChange={handleChange} placeholder="Full name + title" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Business Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="contact@company.com" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="phone">Direct Phone *</label>
                    <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="+1 713 000 0000" className={fieldClass} />
                  </div>
                </div>
              </div>

              {/* 02 Commodity */}
              <div className="border border-xrt-steel border-t-0 bg-xrt-white">
                <div className="bg-xrt-black px-6 py-4 flex items-center gap-4">
                  <span className="label-caps text-xrt-steel/40">02</span>
                  <span className="label-caps text-white">COMMODITY SPECIFICATION</span>
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                  <div className="col-span-2">
                    <label className={labelClass} htmlFor="commodity">Commodity Type *</label>
                    <select id="commodity" name="commodity" required value={form.commodity} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                      <option value="">— Select commodity —</option>
                      {commodityOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="volume">Volume Required *</label>
                    <input id="volume" name="volume" type="text" required value={form.volume} onChange={handleChange} placeholder="e.g. 25,000" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="volumeUnit">Unit</label>
                    <select id="volumeUnit" name="volumeUnit" value={form.volumeUnit} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                      {["MT", "BBL", "GAL", "KL", "FCL", "DWT", "MMBTU"].map((u) => <option key={u} value={u}>{u}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* 03 Trade Terms */}
              <div className="border border-xrt-steel border-t-0 bg-xrt-white">
                <div className="bg-xrt-black px-6 py-4 flex items-center gap-4">
                  <span className="label-caps text-xrt-steel/40">03</span>
                  <span className="label-caps text-white">TRADE TERMS & LOGISTICS</span>
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="origin">Loading Port / Origin *</label>
                    <input id="origin" name="origin" type="text" required value={form.origin} onChange={handleChange} placeholder="e.g. Rotterdam ARA / Houston USGC" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="destination">Discharge Port / Destination *</label>
                    <input id="destination" name="destination" type="text" required value={form.destination} onChange={handleChange} placeholder="e.g. Cartagena, Colombia" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="deliveryStart">Delivery Window: From *</label>
                    <input id="deliveryStart" name="deliveryStart" type="date" required value={form.deliveryStart} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="deliveryEnd">Delivery Window: To *</label>
                    <input id="deliveryEnd" name="deliveryEnd" type="date" required value={form.deliveryEnd} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="incoterms">Preferred INCOTERMS *</label>
                    <select id="incoterms" name="incoterms" required value={form.incoterms} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                      <option value="">— Select INCOTERMS —</option>
                      {incotermsOptions.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="hub">Preferred XRT Hub</label>
                    <select id="hub" name="hub" value={form.hub} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                      <option value="">— Select hub —</option>
                      {hubOptions.map((h) => <option key={h} value={h}>{h}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              {/* 04 Additional */}
              <div className="border border-xrt-steel border-t-0 bg-xrt-white">
                <div className="bg-xrt-black px-6 py-4 flex items-center gap-4">
                  <span className="label-caps text-xrt-steel/40">04</span>
                  <span className="label-caps text-white">ADDITIONAL REQUIREMENTS</span>
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                  <div>
                    <div className={labelClass}>Trade Finance Required?</div>
                    <div className="flex">
                      {["yes", "no"].map((v) => (
                        <label
                          key={v}
                          className="flex items-center gap-2 flex-1 border border-xrt-steel px-4 py-3 cursor-pointer"
                          style={{
                            background: form.financeRequired === v ? "#111111" : "#fcf9f8",
                            color: form.financeRequired === v ? "#ffffff" : "#1c1b1b",
                            marginRight: v === "yes" ? "-1px" : "0",
                          }}
                        >
                          <input type="radio" name="financeRequired" value={v} checked={form.financeRequired === v} onChange={handleChange} className="sr-only" />
                          <span className="label-caps">{v.toUpperCase()}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className={labelClass}>Third-Party Inspection?</div>
                    <div className="flex">
                      {["yes", "no"].map((v) => (
                        <label
                          key={v}
                          className="flex items-center gap-2 flex-1 border border-xrt-steel px-4 py-3 cursor-pointer"
                          style={{
                            background: form.inspectionRequired === v ? "#111111" : "#fcf9f8",
                            color: form.inspectionRequired === v ? "#ffffff" : "#1c1b1b",
                            marginRight: v === "yes" ? "-1px" : "0",
                          }}
                        >
                          <input type="radio" name="inspectionRequired" value={v} checked={form.inspectionRequired === v} onChange={handleChange} className="sr-only" />
                          <span className="label-caps">{v.toUpperCase()}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-2">
                    <label className={labelClass} htmlFor="notes">Technical Notes / Specification Details</label>
                    <textarea id="notes" name="notes" rows={5} value={form.notes} onChange={handleChange} placeholder="Include grade specifications, previous test reports, packaging requirements, or other technical parameters..." className={`${fieldClass} resize-none`} />
                  </div>
                </div>
              </div>

              {/* Submit bar */}
              <div className="border border-xrt-steel border-t-0 bg-xrt-surface p-6 flex items-center justify-between">
                <p className="text-xs text-xrt-muted leading-relaxed max-w-sm" style={{ fontFamily: "var(--font-archivo)" }}>
                  By submitting you consent to AML/KYC pre-screening per FATF guidelines and XRT's Privacy Policy. All data is transmitted over TLS 1.3.
                </p>
                <button type="submit" className="label-caps bg-xrt-crimson text-white px-10 py-4 hover:bg-xrt-crimson-dark transition-colors flex-shrink-0 ml-6">
                  Submit RFQ →
                </button>
              </div>
            </div>

            {/* Right: Info sidebar */}
            <div className="col-span-4 space-y-6">
              <div className="border border-xrt-steel bg-xrt-white">
                <div className="bg-xrt-black px-6 py-4">
                  <span className="label-caps text-white">DESK CONTACTS</span>
                </div>
                <div className="divide-y divide-xrt-steel">
                  {[
                    { desk: "ENERGY DESK", hub: "HOU / RTM", email: "energy@xrtgroup.com" },
                    { desk: "AGRICULTURAL DESK", hub: "HOU / SGP", email: "agro@xrtgroup.com" },
                    { desk: "OILS DESK", hub: "SGP / RTM", email: "oils@xrtgroup.com" },
                    { desk: "LOGISTICS DESK", hub: "ALL HUBS", email: "logistics@xrtgroup.com" },
                    { desk: "TRADE FINANCE", hub: "HOU", email: "finance@xrtgroup.com" },
                  ].map((d) => (
                    <div key={d.desk} className="p-4">
                      <div className="label-caps text-xrt-black mb-0.5">{d.desk}</div>
                      <div className="label-caps text-xrt-steel/60 mb-1">{d.hub}</div>
                      <div className="text-sm text-xrt-crimson" style={{ fontFamily: "var(--font-archivo)" }}>{d.email}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border border-xrt-steel bg-xrt-white">
                <div className="bg-xrt-black px-6 py-4">
                  <span className="label-caps text-white">AFTER SUBMISSION</span>
                </div>
                <div className="p-6 space-y-5">
                  {[
                    { time: "0–4 HRS", action: "KYC pre-screening and desk routing confirmation." },
                    { time: "4–24 HRS", action: "Preliminary indication (PI) issued with price range and availability." },
                    { time: "24–72 HRS", action: "Full offer with contract draft and inspection terms." },
                    { time: "T+4 DAYS", action: "LC issuance or alternative payment terms finalized." },
                  ].map((s, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="label-caps text-xrt-crimson flex-shrink-0 w-16">{s.time}</span>
                      <p className="text-sm text-xrt-muted leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>{s.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
