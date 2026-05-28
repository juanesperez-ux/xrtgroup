import type { Metadata } from "next";
import RFQForm from "@/components/contact/RFQForm";

export const metadata: Metadata = {
  title: "Contact — Submit RFQ",
  description:
    "Submit a Request for Quotation to XRT Group. Terminal-style RFQ intake engine for commodity procurement across Energy, Grains, Oils, and Logistics.",
};

export default function ContactPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-12 py-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">
                REQUEST FOR QUOTATION — RFQ INTAKE ENGINE
              </div>
              <h1 className="text-[clamp(3rem,6vw,6rem)] text-white mb-6">
                Submit Sourcing<br />Request
              </h1>
              <p
                className="text-lg text-xrt-steel/60 max-w-2xl leading-relaxed"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Complete the technical manifest below. All fields marked with an
                asterisk are required for initial desk routing. Your submission is
                encrypted and subject to mandatory KYC pre-screening.
              </p>
            </div>
            <div className="col-span-4 border-l border-xrt-steel/20 pl-8 space-y-5">
              {[
                { label: "Response Time SLA", value: "< 4 Business Hours" },
                { label: "AML Pre-Screening", value: "Mandatory" },
                { label: "Minimum Volume", value: "Per Product Spec" },
              ].map((m) => (
                <div key={m.label} className="border-b border-xrt-steel/20 pb-5 last:border-0 last:pb-0">
                  <div className="label-caps text-xrt-steel/40 mb-0.5">{m.label}</div>
                  <div
                    className="text-base text-white"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RFQ FORM (client component) ──────────────────────────── */}
      <RFQForm />
    </div>
  );
}
