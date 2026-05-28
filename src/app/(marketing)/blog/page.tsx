import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Intelligence Hub",
  description: "XRT Group market intelligence: commodity price analysis, regulatory briefs, and supply chain dispatches from our Houston, Rotterdam, and Singapore desks.",
};

const categories = ["ALL", "MARKET INTELLIGENCE", "COMPLIANCE BRIEF", "REGULATORY", "LOGISTICS", "SUPPLY CHAIN"];

export default function BlogPage() {
  return (
    <div>
      {/* ── PAGE HEADER ─────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-12 py-16">
          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-8">
              <div className="label-caps text-xrt-crimson mb-4">INTELLIGENCE HUB — MARKET DISPATCH BOARD</div>
              <h1 className="text-[clamp(3rem,6vw,6rem)] text-white mb-6">
                Market Intelligence<br />& Regulatory Briefs
              </h1>
              <p className="text-lg text-xrt-steel/60 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-archivo)" }}>
                Technical analysis, regulatory updates, and supply chain intelligence from XRT's commodity desks in Houston, Rotterdam, and Singapore. Published by our trading and compliance teams.
              </p>
            </div>
            <div className="col-span-4 border-l border-xrt-steel/20 pl-8">
              <div className="space-y-4">
                {[
                  { label: "Active Desks", value: "4" },
                  { label: "Markets Covered", value: "Energy / Agro / Oils / Logistics" },
                  { label: "Publication Frequency", value: "Weekly" },
                ].map((m) => (
                  <div key={m.label} className="border-b border-xrt-steel/20 pb-4 last:border-0">
                    <div className="label-caps text-xrt-steel/40 mb-0.5">{m.label}</div>
                    <div className="text-white text-base" style={{ fontFamily: "var(--font-archivo)" }}>{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ─────────────────────────────────────── */}
      <section className="bg-xrt-off-white border-b border-xrt-steel sticky top-[4rem] z-40 bg-xrt-off-white/95 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-12">
          <div className="flex items-center gap-0 border-x border-xrt-steel">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`label-caps px-6 py-4 ${i < categories.length - 1 ? "border-r border-xrt-steel" : ""} ${cat === "ALL" ? "bg-xrt-black text-white" : "text-xrt-muted hover:text-xrt-black hover:bg-xrt-surface transition-colors"}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── POST LIST ───────────────────────────────────────────── */}
      <section className="bg-xrt-off-white">
        <div className="max-w-[1440px] mx-auto px-12 py-16">

          {/* Featured post */}
          <div className="border border-xrt-steel bg-xrt-white mb-0">
            <div className="grid grid-cols-12">
              <div className="col-span-1 bg-xrt-crimson flex items-center justify-center py-12">
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
              <div className="col-span-11 p-10 border-l border-xrt-steel">
                <div className="flex items-center justify-between mb-6">
                  <span className="label-caps text-xrt-crimson">{blogPosts[0].category}</span>
                  <div className="flex items-center gap-6">
                    <span className="label-caps text-xrt-steel/50">{blogPosts[0].author}</span>
                    <span className="label-caps text-xrt-steel/50">{blogPosts[0].date}</span>
                    <span className="label-caps bg-xrt-black text-white px-3 py-1">{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h2
                  className="text-4xl text-xrt-black mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-barlow)", fontWeight: 900 }}
                >
                  {blogPosts[0].title}
                </h2>
                <p className="text-base text-xrt-muted leading-relaxed mb-6 max-w-3xl" style={{ fontFamily: "var(--font-archivo)" }}>
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
            <div className="grid grid-cols-3">
              {blogPosts.slice(1).map((post, i) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={[
                    "block p-8 bg-xrt-white hover:bg-xrt-surface transition-colors",
                    "border-b border-xrt-steel",
                    i % 3 < 2 ? "border-r border-xrt-steel" : "",
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="label-caps text-xrt-crimson">{post.category}</span>
                    <span className="label-caps text-xrt-steel/50">{post.date}</span>
                  </div>
                  <h3
                    className="text-xl text-xrt-black mb-3 leading-snug"
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
        <div className="max-w-[1440px] mx-auto px-12 py-16">
          <div className="label-caps text-xrt-steel/40 mb-2">CONTRIBUTING DESKS</div>
          <h2 className="text-4xl text-white mb-10">Editorial Teams</h2>

          <div className="grid grid-cols-4 gap-0 border border-xrt-steel/20">
            {[
              { name: "ENERGY DESK", hub: "HOU / RTM", topics: ["Crude Differentials", "Refined Products", "Natural Gas"], posts: 24 },
              { name: "AGRICULTURAL DESK", hub: "HOU / SGP", topics: ["USDA Grade Reports", "Crop Season Analysis", "Export Flows"], posts: 18 },
              { name: "OILS DESK", hub: "SGP / RTM", topics: ["Palm Oil Markets", "RSPO Compliance", "Vegetable Oil Spreads"], posts: 14 },
              { name: "COMPLIANCE", hub: "ALL HUBS", topics: ["AML/FATF Updates", "Sanctions Monitor", "Trade Regulation"], posts: 11 },
            ].map((desk, i) => (
              <div key={desk.name} className={`p-8 ${i < 3 ? "border-r border-xrt-steel/20" : ""}`}>
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
      <section className="bg-xrt-surface border-t border-xrt-steel">
        <div className="max-w-[1440px] mx-auto px-12 py-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-6">
              <div className="label-caps text-xrt-muted mb-1">MARKET INTELLIGENCE SUBSCRIPTION</div>
              <div className="text-3xl font-black text-xrt-black" style={{ fontFamily: "var(--font-barlow)" }}>
                Receive desk dispatches directly.
              </div>
            </div>
            <div className="col-span-6 flex gap-0">
              <input
                type="email"
                placeholder="your@company.com"
                className="flex-1 border border-xrt-steel border-r-0 px-5 py-4 text-sm bg-xrt-white focus:outline-none focus:border-xrt-black transition-colors"
                style={{ fontFamily: "var(--font-archivo)" }}
              />
              <button className="label-caps bg-xrt-black text-white px-8 py-4 hover:bg-xrt-crimson transition-colors flex-shrink-0">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
