"use client";

import { useState } from "react";
import SchedulePopup from "@/components/contact/SchedulePopup";
import Turnstile, { isTurnstileEnabled } from "@/components/ui/Turnstile";

const commodityOptions = [
  "Energy (Crude / Refined / LNG)",
  "Agriculture & Grains",
  "Edible & Vegetable Oils",
  "Proteins & Meat",
  "General Inquiry",
];

const fieldClass =
  "w-full bg-xrt-off-white border border-xrt-steel px-4 py-3 text-sm text-xrt-black focus:outline-none focus:border-xrt-black transition-colors";
const labelClass = "label-caps text-xrt-muted block mb-2";

export default function ContactForm() {
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [captchaKey, setCaptchaKey] = useState(0);
  const [refId] = useState(() => Math.random().toString().slice(2, 8));

  const [form, setForm] = useState({
    fullName: "",
    company: "",
    email: "",
    commodityInterest: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken: token }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Submission failed");
      setSubmitted(true);
    } catch (err: unknown) {
      setToken("");
      setCaptchaKey((prev) => prev + 1);
      setError(err instanceof Error ? err.message : "Network error — please try again.");
    } finally {
      setSending(false);
    }
  }

  const canSubmit = !sending && (!isTurnstileEnabled || Boolean(token));

  return (
    <section className="bg-xrt-off-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Left: message form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <div className="border border-xrt-steel bg-xrt-white p-10 sm:p-16 text-center">
                <div className="w-12 h-12 bg-xrt-crimson mx-auto mb-8 flex items-center justify-center">
                  <span
                    className="text-white text-2xl font-black"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    ✓
                  </span>
                </div>
                <div className="label-caps text-xrt-crimson mb-4">
                  MESSAGE SENT — REF: MSG-{refId}
                </div>
                <h2
                  className="text-3xl text-xrt-black mb-4"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Message Received
                </h2>
                <p
                  className="text-sm text-xrt-muted leading-relaxed max-w-md mx-auto"
                  style={{ fontFamily: "var(--font-archivo)" }}
                >
                  Thank you. An XRT representative will respond to{" "}
                  <strong>{form.email}</strong> shortly. For a scheduled call, use the
                  consultation request.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-xrt-steel bg-xrt-white">
                <div className="bg-xrt-black px-6 py-4 flex items-center gap-4">
                  <span className="label-caps text-xrt-steel/40">01</span>
                  <span className="label-caps text-white">SEND A MESSAGE</span>
                </div>
                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClass} htmlFor="fullName">Full Name *</label>
                    <input id="fullName" name="fullName" type="text" required value={form.fullName} onChange={handleChange} placeholder="Your full name" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="Company name" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="email">Business Email *</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={fieldClass} />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="commodityInterest">Commodity Interest</label>
                    <select id="commodityInterest" name="commodityInterest" value={form.commodityInterest} onChange={handleChange} className={`${fieldClass} cursor-pointer`}>
                      <option value="">— Select area —</option>
                      {commodityOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={6} required value={form.message} onChange={handleChange} placeholder="Tell us about your sourcing requirement, volumes, destinations, or questions…" className={`${fieldClass} resize-none`} />
                  </div>

                  {isTurnstileEnabled && (
                    <div className="sm:col-span-2">
                      <Turnstile key={captchaKey} onVerify={setToken} onExpire={() => setToken("")} theme="light" />
                    </div>
                  )}

                  {error && (
                    <div className="sm:col-span-2 bg-xrt-crimson/10 border border-xrt-crimson/30 p-4" role="alert">
                      <p className="label-caps text-xrt-crimson">{error}</p>
                    </div>
                  )}

                  <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-xrt-steel pt-6">
                    <p className="text-xs text-xrt-muted leading-relaxed max-w-sm" style={{ fontFamily: "var(--font-archivo)" }}>
                      By submitting you consent to XRT&apos;s Privacy Policy. All data is transmitted over TLS 1.3.
                    </p>
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="label-caps bg-xrt-crimson text-white px-10 py-4 hover:bg-xrt-crimson-dark transition-colors flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {sending ? "Sending..." : "Send Message →"}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* Right: schedule a consultation */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border border-xrt-steel bg-xrt-white">
              <div className="bg-xrt-black px-6 py-4">
                <span className="label-caps text-white">SCHEDULE A CONSULTATION</span>
              </div>
              <div className="p-6 space-y-5">
                <p className="text-sm text-xrt-muted leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                  Prefer to speak with the desk directly? Request a call and an XRT
                  specialist will confirm a time that works for you.
                </p>
                <button
                  onClick={() => setScheduleOpen(true)}
                  className="label-caps w-full bg-xrt-crimson text-white px-8 py-4 hover:bg-xrt-crimson-dark transition-colors cursor-pointer"
                >
                  Schedule a Call →
                </button>
              </div>
            </div>

            <div className="border border-xrt-steel bg-xrt-white">
              <div className="bg-xrt-black px-6 py-4">
                <span className="label-caps text-white">DESK CONTACTS</span>
              </div>
              <div className="divide-y divide-xrt-steel">
                {[
                  { desk: "ENERGY DESK", email: "energy@xrtgroup.com" },
                  { desk: "AGRICULTURAL DESK", email: "agro@xrtgroup.com" },
                  { desk: "OILS DESK", email: "oils@xrtgroup.com" },
                ].map((d) => (
                  <div key={d.desk} className="p-4">
                    <div className="label-caps text-xrt-black mb-0.5">{d.desk}</div>
                    <div className="text-sm text-xrt-crimson" style={{ fontFamily: "var(--font-archivo)" }}>{d.email}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <SchedulePopup open={scheduleOpen} onClose={() => setScheduleOpen(false)} />
    </section>
  );
}
