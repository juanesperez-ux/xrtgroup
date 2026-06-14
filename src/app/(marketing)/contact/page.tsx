import type { Metadata } from "next";
import dynamic from "next/dynamic";
import ContactForm from "@/components/contact/ContactForm";

/* ── Lazy-load RFQForm (heavy client form, always below the fold) ── */
const RFQForm = dynamic(() => import("@/components/contact/RFQForm"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Contact — XRT Group",
  description:
    "Contact XRT Group's commodity desks. Send a message, schedule a consultation, or submit a formal Request for Quotation across Energy, Grains, Oils, Proteins, and Logistics.",
};

export default function ContactPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">
                CONTACT — DESK ROUTING & CONSULTATIONS
              </div>
              <h1 className="text-[clamp(2.5rem,6vw,6rem)] text-white mb-6">
                Talk to an<br />XRT Desk
              </h1>
              <p
                className="text-base sm:text-lg text-xrt-steel/60 max-w-2xl leading-relaxed"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Send us a message, request a scheduled consultation, or submit a
                formal Request for Quotation. Every inquiry is routed to the relevant
                commodity desk and answered within four business hours.
              </p>
            </div>
            <div className="lg:col-span-4 border-t border-xrt-steel/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8 space-y-5">
              {[
                { label: "Response Time SLA", value: "< 4 Business Hours" },
                { label: "Consultations", value: "By Appointment" },
                { label: "AML Pre-Screening", value: "Mandatory" },
              ].map((m) => (
                <div key={m.label} className="border-b border-xrt-steel/20 pb-5 last:border-0 last:pb-0">
                  <div className="label-caps text-xrt-steel/40 mb-0.5">{m.label}</div>
                  <div
                    className="text-sm sm:text-base text-white"
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

      {/* ── GENERAL CONTACT + SCHEDULE ───────────────────────────── */}
      <ContactForm />

      {/* ── FORMAL RFQ SECTION ───────────────────────────────────── */}
      <section id="rfq" className="bg-xrt-black text-white border-y border-xrt-steel/20 scroll-mt-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="label-caps text-xrt-crimson mb-4">
            REQUEST FOR QUOTATION — RFQ INTAKE ENGINE
          </div>
          <h2 className="text-3xl sm:text-4xl text-white mb-4">
            Need a formal quotation?
          </h2>
          <p
            className="text-base sm:text-lg text-xrt-steel/60 max-w-2xl leading-relaxed"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Complete the technical manifest below for a priced offer. All fields
            marked with an asterisk are required for desk routing. Submissions are
            subject to mandatory KYC pre-screening.
          </p>
        </div>
      </section>

      <RFQForm />
    </div>
  );
}
