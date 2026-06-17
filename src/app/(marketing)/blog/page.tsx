import type { Metadata } from "next";
import { blogPosts } from "@/lib/data";
import BlogIndex from "@/components/blog/BlogIndex";
import SubscribeForm from "@/components/blog/SubscribeForm";

export const metadata: Metadata = {
  title: "Intelligence Hub",
  description: "XRT Group market intelligence: commodity price analysis, regulatory briefs, and supply chain dispatches from our Houston, Rotterdam, and Singapore desks.",
};

export default function BlogPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">INTELLIGENCE HUB — MARKET DISPATCH BOARD</div>
              <h1 className="text-[clamp(2.5rem,6vw,6rem)] text-white mb-6">
                Market Intelligence<br />& Regulatory Briefs
              </h1>
              <p className="text-base sm:text-lg text-xrt-steel/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                Technical analysis, regulatory updates, and supply chain intelligence from XRT's commodity desks in Houston, Rotterdam, and Singapore. Published by our trading and compliance teams.
              </p>
            </div>
            <div className="lg:col-span-4 border-t border-xrt-steel/20 pt-8 lg:border-t-0 lg:pt-0 lg:border-l lg:pl-8">
              <div className="space-y-4">
                {[
                  { label: "Active Desks", value: "4" },
                  { label: "Markets Covered", value: "Energy / Agro / Oils / Logistics" },
                  { label: "Publication Frequency", value: "Weekly" },
                ].map((m) => (
                  <div key={m.label} className="border-b border-xrt-steel/20 pb-4 last:border-0">
                    <div className="label-caps text-xrt-steel/40 mb-0.5">{m.label}</div>
                    <div className="text-white text-sm sm:text-base" style={{ fontFamily: "var(--font-archivo)" }}>{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogIndex posts={blogPosts} />

      {/* ── DESK DIRECTORY ──────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-t border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="label-caps text-xrt-steel/40 mb-2">CONTRIBUTING DESKS</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-8 sm:mb-10">Editorial Teams</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-xrt-steel/20">
            {[
              { name: "ENERGY DESK", hub: "HOU / RTM", topics: ["Crude Differentials", "Refined Products", "Natural Gas"], posts: 24 },
              { name: "AGRICULTURAL DESK", hub: "HOU / SGP", topics: ["USDA Grade Reports", "Crop Season Analysis", "Export Flows"], posts: 18 },
              { name: "OILS DESK", hub: "SGP / RTM", topics: ["Palm Oil Markets", "RSPO Compliance", "Vegetable Oil Spreads"], posts: 14 },
              { name: "COMPLIANCE", hub: "ALL HUBS", topics: ["AML/FATF Updates", "Sanctions Monitor", "Trade Regulation"], posts: 11 },
            ].map((desk, i) => (
              <div key={desk.name} className={[
                "p-6 sm:p-8",
                // Mobile (1-col): bottom on all but last
                i < 3 ? "border-b border-xrt-steel/20" : "",
                // SM (2-col): bottom on first 2, right on col 0
                i < 2 ? "sm:border-b" : "sm:border-b-0",
                i % 2 === 0 ? "sm:border-r border-xrt-steel/20" : "",
                // LG (4-col): no bottom, right on first 3
                "lg:border-b-0",
                i < 3 ? "lg:border-r border-xrt-steel/20" : "lg:border-r-0",
              ].filter(Boolean).join(" ")}>
                <div className="label-caps text-xrt-crimson mb-1">{desk.name}</div>
                <div className="label-caps text-xrt-steel/40 mb-6">{desk.hub}</div>
                <ul className="space-y-2 mb-6">
                  {desk.topics.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-xrt-steel/30 flex-shrink-0" />
                      <span className="text-sm text-xrt-steel/60" style={{ fontFamily: "var(--font-archivo)" }}>{t}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-xrt-steel/20 pt-4">
                  <div className="label-caps text-xrt-steel/30">{desk.posts} REPORTS PUBLISHED</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBSCRIBE CTA ───────────────────────────────────────── */}
      <SubscribeForm />
    </div>
  );
}
