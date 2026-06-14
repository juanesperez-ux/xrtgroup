"use client";

import { useState, useEffect, useCallback } from "react";
import Turnstile, { isTurnstileEnabled } from "@/components/ui/Turnstile";

const fieldClass =
  "w-full bg-xrt-off-white border border-xrt-steel px-4 py-3 text-sm text-xrt-black focus:outline-none focus:border-xrt-black transition-colors";
const labelClass = "label-caps text-xrt-muted block mb-2";

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
  "Proteins & Meat",
  "Trade Finance",
  "Multiple Commodities",
  "General Inquiry",
];

const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

interface SchedulePopupProps {
  open: boolean;
  onClose: () => void;
}

export default function SchedulePopup({ open, onClose }: SchedulePopupProps) {
  const [submitted, setSubmitted] = useState(false);
  const [refId] = useState(() => Math.random().toString().slice(2, 8));
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    fullName: "",
    commodityNeed: "",
    phone: "",
    email: "",
    bestDate: "",
    bestTime: "",
  });

  // Reset form when popup opens
  useEffect(() => {
    if (open) {
      setSubmitted(false);
      setError("");
      setToken("");
      setValidationErrors({});
      setForm({
        fullName: "",
        commodityNeed: "",
        phone: "",
        email: "",
        bestDate: "",
        bestTime: "",
      });
    }
  }, [open]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
      // Clear field error on change
      if (validationErrors[name]) {
        setValidationErrors((prev) => {
          const next = { ...prev };
          delete next[name];
          return next;
        });
      }
    },
    [validationErrors]
  );

  function validate(): boolean {
    const errs: Record<string, string> = {};
    if (!form.fullName.trim()) errs.fullName = "Full name is required.";
    if (!form.email.trim()) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!form.bestDate) errs.bestDate = "Please select a preferred date.";
    if (!form.bestTime) errs.bestTime = "Please select a preferred time.";
    setValidationErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/schedule", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, turnstileToken: token }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Submission failed");
      setSubmitted(true);
    } catch (err: unknown) {
      const message =
        err instanceof Error
          ? err.message
          : "Network error — please try again.";
      setError(message);
    } finally {
      setSending(false);
    }
  }

  // Get tomorrow's date as min for date picker
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Schedule a call with XRT Group"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-xrt-black/80"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-xrt-white border border-xrt-steel w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-xrt-black px-6 py-5 flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="label-caps text-xrt-steel/50">XRT GROUP</div>
            <div className="text-xl font-black text-white" style={{ fontFamily: "var(--font-barlow)" }}>
              Schedule a Call
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border border-xrt-steel/30 text-xrt-steel/60 hover:text-white hover:border-xrt-steel/60 transition-colors"
            aria-label="Close popup"
          >
            <span className="text-lg leading-none">✕</span>
          </button>
        </div>

        {submitted ? (
          /* ── Success State ─────────────────────────────── */
          <div className="p-8 sm:p-12 text-center">
            <div className="w-12 h-12 bg-xrt-crimson mx-auto mb-6 flex items-center justify-center">
              <span
                className="text-white text-2xl font-black"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                ✓
              </span>
            </div>
            <div className="label-caps text-xrt-crimson mb-4">
              SCHEDULING REQUEST SUBMITTED — REF: SCH-{refId}
            </div>
            <h2
              className="text-2xl sm:text-3xl text-xrt-black mb-4"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Request Received
            </h2>
            <p
              className="text-sm text-xrt-muted leading-relaxed max-w-md mx-auto mb-8"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Your scheduling request has been submitted. An XRT representative will
              contact you at <strong>{form.email}</strong> to confirm the best time
              for your call.
            </p>
            <button
              onClick={onClose}
              className="label-caps bg-xrt-black text-white px-8 py-3 hover:bg-xrt-near-black transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* ── Form State ────────────────────────────────── */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            <p className="text-sm text-xrt-muted leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
              Fill out the form below and an XRT representative will reach out to
              schedule a call at your convenience.
            </p>

            {/* Full Name */}
            <div>
              <label className={labelClass} htmlFor="sch-fullName">
                Full Name *
              </label>
              <input
                id="sch-fullName"
                name="fullName"
                type="text"
                required
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className={fieldClass}
              />
              {validationErrors.fullName && (
                <p className="text-xs text-xrt-crimson mt-1">{validationErrors.fullName}</p>
              )}
            </div>

            {/* Commodity Need */}
            <div>
              <label className={labelClass} htmlFor="sch-commodityNeed">
                Commodity Need
              </label>
              <select
                id="sch-commodityNeed"
                name="commodityNeed"
                value={form.commodityNeed}
                onChange={handleChange}
                className={`${fieldClass} cursor-pointer`}
              >
                <option value="">— Select commodity / inquiry type —</option>
                {commodityOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Phone */}
            <div>
              <label className={labelClass} htmlFor="sch-phone">
                Phone
              </label>
              <input
                id="sch-phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+1 713 000 0000"
                className={fieldClass}
              />
            </div>

            {/* Email */}
            <div>
              <label className={labelClass} htmlFor="sch-email">
                Email *
              </label>
              <input
                id="sch-email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={fieldClass}
              />
              {validationErrors.email && (
                <p className="text-xs text-xrt-crimson mt-1">{validationErrors.email}</p>
              )}
            </div>

            {/* Best Date + Best Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass} htmlFor="sch-bestDate">
                  Preferred Date *
                </label>
                <input
                  id="sch-bestDate"
                  name="bestDate"
                  type="date"
                  required
                  min={minDate}
                  value={form.bestDate}
                  onChange={handleChange}
                  className={fieldClass}
                />
                {validationErrors.bestDate && (
                  <p className="text-xs text-xrt-crimson mt-1">{validationErrors.bestDate}</p>
                )}
              </div>
              <div>
                <label className={labelClass} htmlFor="sch-bestTime">
                  Preferred Time *
                </label>
                <select
                  id="sch-bestTime"
                  name="bestTime"
                  required
                  value={form.bestTime}
                  onChange={handleChange}
                  className={`${fieldClass} cursor-pointer`}
                >
                  <option value="">— Select time —</option>
                  {timeSlots.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                {validationErrors.bestTime && (
                  <p className="text-xs text-xrt-crimson mt-1">{validationErrors.bestTime}</p>
                )}
              </div>
            </div>

            {/* Captcha */}
            {isTurnstileEnabled && (
              <Turnstile onVerify={setToken} onExpire={() => setToken("")} theme="light" />
            )}

            {/* Error message */}
            {error && (
              <div className="bg-xrt-crimson/10 border border-xrt-crimson/30 p-4" role="alert">
                <p className="label-caps text-xrt-crimson">{error}</p>
              </div>
            )}

            {/* Submit + Cancel */}
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-xrt-steel">
              <button
                type="button"
                onClick={onClose}
                className="label-caps text-xrt-steel/60 hover:text-xrt-black transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={sending || (isTurnstileEnabled && !token)}
                className="label-caps bg-xrt-crimson text-white px-8 py-4 hover:bg-xrt-crimson-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "Submitting..." : "Request Call →"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}