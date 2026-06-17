import type { Metadata } from "next";
import RFQForm from "@/components/contact/RFQForm";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Formal Commodity RFQ Intake",
  description:
    "Submit a formal Request for Quotation to XRT Group's commodity desks across energy, grains, edible oils, proteins, and logistics. AML/KYC pre-screened.",
  path: "/rfq",
  keywords: [
    "formal commodity RFQ",
    "commodity quotation request",
    "bulk energy RFQ",
    "grain procurement RFQ",
    "edible oil sourcing RFQ",
  ],
});

export default function RFQPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">
                RFQ — REQUEST FOR QUOTATION
              </div>
              <h1 className="text-[clamp(2.5rem,6vw,6rem)] text-white mb-6">
                <span>Submit a Formal</span>
                <span className="block">Quotation Request</span>
              </h1>
              <p
                className="text-base sm:text-lg text-xrt-steel/60 max-w-2xl leading-relaxed"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                Complete the technical manifest below for a priced offer from our commodity desks. All fields marked with an asterisk are required for desk routing. Submissions are subject to mandatory KYC pre-screening.
              </p>
            </div>
            <div className="lg:col-span-4 border-t border-xrt-steel/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8 space-y-5">
              {[
                { label: "Response Time", value: "< 24 Hours" },
                { label: "KYC Pre-Screening", value: "Mandatory" },
                { label: "Desk Routing", value: "Automatic by Commodity" },
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

      {/* ── RFQ FORM ────────────────────────────────────────────── */}
      <RFQForm />
    </div>
  );
}
