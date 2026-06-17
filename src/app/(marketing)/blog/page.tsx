import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";
import SubscribeForm from "@/components/blog/SubscribeForm";

export const metadata: Metadata = {
  title: "Intelligence Hub",
  description: "XRT Group market intelligence: commodity price analysis, regulatory briefs, and supply chain dispatches from our Houston, Rotterdam, and Singapore desks.",
};

const categories = ["ALL", "PROCUREMENT", "ENERGY", "AGRICULTURAL", "MARKET INTELLIGENCE", "COMPLIANCE BRIEF", "REGULATORY", "LOGISTICS", "SUPPLY CHAIN"];

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

      {/* ── CATEGORY FILTER ─────────────────────────────────────── */}
      <section className="bg-xrt-off-white border-b border-xrt-steel sticky top-14 sm:top-16 z-40 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="overflow-x-auto">
            <div className="flex items-center gap-0 border-x border-xrt-steel min-w-max">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  className={`label-caps px-4 sm:px-6 py-3 sm:py-4 flex-shrink-0 ${i < categories.length - 1 ? "border-r border-xrt-steel" : ""} ${cat === "ALL" ? "bg-xrt-black text-white" : "text-xrt-muted hover:text-xrt-black hover:bg-xrt-surface transition-colors"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── POST LIST ───────────────────────────────────────────── */}
      <section className="bg-xrt-off-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">

          {/* Featured post */}
          <div className="border border-xrt-steel bg-xrt-white mb-0">
            <div className="grid grid-cols-1 sm:grid-cols-12">
              {/* Vertical label — shown sm+ */}
              <div className="hidden sm:flex sm:col-span-1 bg-xrt-crimson items-center justify-center py-12">
                <span
                  className="text-white font-black"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontSize: "10px",
                    letterSpacing: "4px",
                    writingMode: "vertical-rl",
                    textTransform: "uppercase",
                    transform: "rotate(180deg)",
                  }}
                >
                  FEATURED DISPATCH
                </span>
              </div>
              {/* Mobile-only label bar */}
              <div className="sm:hidden bg-xrt-crimson px-4 py-2">
                <span className="label-caps text-white">FEATURED DISPATCH</span>
              </div>
              <div className="sm:col-span-11 p-6 sm:p-10 sm:border-l border-xrt-steel">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
                  <span className="label-caps text-xrt-crimson">{blogPosts[0].category}</span>
                  <div className="flex flex-wrap items-center gap-3 sm:gap-6">
                    <span className="label-caps text-xrt-steel/50">{blogPosts[0].author}</span>
                    <span className="label-caps text-xrt-steel/50">{blogPosts[0].date}</span>
                    <span className="label-caps bg-xrt-black text-white px-3 py-1">{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h2
                  className="text-2xl sm:text-4xl text-xrt-black mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 900 }}
                >
                  {blogPosts[0].title}
                </h2>
                <p className="text-sm sm:text-base text-xrt-muted leading-relaxed mb-6 max-w-3xl" style={{ fontFamily: "var(--font-archivo)" }}>
                  {blogPosts[0].summary}
                </p>
                <Link
                  href={`/blog/${blogPosts[0].slug}`}
                  className="label-caps bg-xrt-black text-white px-6 py-3 hover:bg-xrt-crimson transition-colors inline-block"
                >
                  Read Full Report →
                </Link>
              </div>
            </div>
          </div>

          {/* Post grid */}
          <div className="border border-xrt-steel border-t-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(1).map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={[
                    "block p-6 sm:p-8 bg-xrt-white hover:bg-xrt-surface transition-colors",
                    // Mobile (1-col): bottom border on all but last
                    i < blogPosts.length - 2 ? "border-b border-xrt-steel" : "",
                    // MD (2-col)
                    i < blogPosts.length - 3 ? "md:border-b" : "md:border-b-0",
                    i % 2 === 0 ? "md:border-r" : "",
                    // LG (3-col)
                    i < blogPosts.length - 4 ? "lg:border-b" : "lg:border-b-0",
                    i % 3 < 2 ? "lg:border-r" : "lg:border-r-0",
                  ].filter(Boolean).join(" ")}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="label-caps text-xrt-crimson">{post.category}</span>
                    <span className="label-caps text-xrt-steel/50">{post.date}</span>
                  </div>
                  <h3
                    className="text-lg sm:text-xl text-xrt-black mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-barlow)", fontWeight: 900 }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-sm text-xrt-muted leading-relaxed mb-5 line-clamp-3" style={{ fontFamily: "var(--font-archivo)" }}>
                    {post.summary}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-xrt-steel">
                    <span className="label-caps text-xrt-steel/60">{post.author}</span>
                    <span className="label-caps text-xrt-black">{post.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

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