import Link from "next/link";
import { homeStats, homeCommoditySnapshot, services, blogPosts } from "@/lib/data";

export default function HomePage() {
  return (
    <div>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="bg-xrt-black text-white min-h-[calc(100vh-9rem)] flex flex-col">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-12 flex-1 flex flex-col justify-between">

          {/* Top label row */}
          <div className="flex items-center gap-4 sm:gap-6 mb-8 sm:mb-12 overflow-hidden">
            <span className="label-caps text-xrt-steel/40 truncate">XRT GROUP — COMMODITY PROCUREMENT PLATFORM</span>
            <div className="flex-1 h-px bg-xrt-steel/10 hidden sm:block" />
            <span className="label-caps text-xrt-crimson flex-shrink-0">v2.5.1</span>
          </div>

          {/* Main headline + right metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-1">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="label-caps text-xrt-crimson mb-4">EST. 2018 — HOUSTON · ROTTERDAM · SINGAPORE</div>
              <h1
                className="text-[clamp(3rem,8vw,9rem)] font-black uppercase text-white leading-[0.9] tracking-[-0.04em] mb-6 sm:mb-8"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif" }}
              >
                Authority<br />
                in Commodity<br />
                <span className="text-xrt-crimson">Procurement</span>
              </h1>
              <p
                className="text-base sm:text-lg text-xrt-steel/70 max-w-xl leading-relaxed mb-8 sm:mb-10"
                style={{ fontFamily: "var(--font-archivo), 'Archivo Narrow', sans-serif" }}
              >
                XRT Group fuses direct-origin sourcing networks with precision logistics infrastructure. Commodity procurement without brokers. Routes without friction. Compliance without compromise.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="label-caps bg-xrt-crimson text-white px-6 sm:px-8 py-3 sm:py-4 hover:bg-xrt-crimson-dark transition-colors w-full sm:w-auto text-center"
                >
                  Request Commodity Sourcing Brief
                </Link>
                <Link
                  href="/products"
                  className="label-caps text-xrt-steel/70 border border-xrt-steel/30 px-6 sm:px-8 py-3 sm:py-4 hover:border-xrt-steel/60 hover:text-white transition-colors w-full sm:w-auto text-center"
                >
                  View Product Catalog
                </Link>
              </div>
            </div>

            {/* Key metrics */}
            <div className="lg:col-span-4 border-t border-xrt-steel/20 pt-8 mt-4 lg:border-t-0 lg:pt-0 lg:mt-0 lg:border-l lg:pl-8 flex flex-col justify-center">
              <div className="grid grid-cols-2 lg:grid-cols-1">
                {homeStats.map((stat, i) => (
                  <div
                    key={i}
                    className="border-b border-xrt-steel/20 py-6 lg:py-8 last:border-b-0 pr-4 lg:pr-0"
                  >
                    <div
                      className="text-4xl lg:text-5xl font-black text-white mb-1"
                      style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.03em" }}
                    >
                      {stat.value}
                    </div>
                    <div className="label-caps text-xrt-steel/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Protocol strip */}
          <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-xrt-steel/20 flex items-center gap-4 sm:gap-8 flex-wrap">
            {["FATF AML/KYC", "OFAC Screened", "C-TPAT Certified", "AEO Certified", "ISO 9001:2015", "GAFTA Member"].map((cert) => (
              <span key={cert} className="label-caps text-xrt-steel/30">{cert}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMODITY DASHBOARD ─────────────────────────────────── */}
      <section className="bg-xrt-off-white border-b border-xrt-steel">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="label-caps text-xrt-crimson mb-2">LIVE MARKET DATA</div>
              <h2 className="text-3xl sm:text-4xl text-xrt-black">
                Commodity Spot Snapshot
              </h2>
            </div>
            <Link href="/products" className="label-caps text-xrt-muted border border-xrt-steel px-5 py-2.5 hover:border-xrt-black transition-colors self-start sm:self-auto">
              Full Product Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-xrt-steel">
            {homeCommoditySnapshot.map((cat, ci) => (
              <div key={cat.category} className={ci < 2 ? "border-b border-xrt-steel md:border-b-0 md:border-r" : ""}>
                <div className="bg-xrt-black px-6 py-3 flex items-center justify-between border-b border-xrt-steel/20">
                  <span className="label-caps text-white">{cat.category}</span>
                  <span className="label-caps text-xrt-steel/30">SPOT</span>
                </div>
                <table className="w-full">
                  <tbody>
                    {cat.items.map((item, ii) => (
                      <tr key={item.name} className={ii % 2 === 0 ? "bg-xrt-white" : "bg-xrt-surface-low"}>
                        <td className="px-6 py-3 border-b border-xrt-steel">
                          <div className="text-sm font-medium text-xrt-black" style={{ fontFamily: "var(--font-archivo)" }}>{item.name}</div>
                          <div className="label-caps text-xrt-muted mt-0.5">{item.grade}</div>
                        </td>
                        <td className="px-6 py-3 border-b border-xrt-steel text-right">
                          <div className="font-bold text-xrt-black" style={{ fontFamily: "var(--font-barlow)", fontSize: "16px", letterSpacing: "-0.01em" }}>
                            {item.price}
                          </div>
                          <div
                            className="label-caps mt-0.5"
                            style={{ color: item.change.startsWith("+") ? "#15803d" : "#c8111f" }}
                          >
                            {item.change}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ───────────────────────────────────────── */}
      <section className="bg-xrt-surface border-b border-xrt-steel">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="label-caps text-xrt-crimson mb-2">CORE INFRASTRUCTURE</div>
              <h2 className="text-3xl sm:text-4xl text-xrt-black">Services Overview</h2>
            </div>
            <Link href="/services" className="label-caps text-xrt-muted border border-xrt-steel px-5 py-2.5 hover:border-xrt-black transition-colors self-start sm:self-auto">
              Full Services Directory →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-xrt-steel">
            {services.slice(0, 6).map((svc, i) => (
              <div
                key={svc.id}
                className={[
                  "bg-xrt-white p-6 sm:p-8",
                  // Mobile (1-col): bottom on all but last
                  i < 5 ? "border-b border-xrt-steel" : "",
                  // MD (2-col): keep bottom on first 4, right on col 0
                  i < 4 ? "md:border-b" : "md:border-b-0",
                  i % 2 === 0 ? "md:border-r" : "",
                  // LG (3-col): bottom only on first 3, right on cols 0–1
                  i < 3 ? "lg:border-b" : "lg:border-b-0",
                  i % 3 < 2 ? "lg:border-r" : "lg:border-r-0",
                ].filter(Boolean).join(" ")}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="label-caps text-xrt-muted">{svc.id}</span>
                  <span
                    className="label-caps px-2 py-1"
                    style={{
                      background: svc.status === "OPERATIONAL" ? "#111111" : "#c8973a",
                      color: svc.status === "OPERATIONAL" ? "#ffffff" : "#111111",
                    }}
                  >
                    {svc.status}
                  </span>
                </div>
                <div className="label-caps text-xrt-crimson mb-1">{svc.code}</div>
                <h3 className="text-xl sm:text-2xl text-xrt-black mb-3">{svc.name}</h3>
                <p className="text-sm text-xrt-muted leading-relaxed mb-5" style={{ fontFamily: "var(--font-archivo)" }}>
                  {svc.description}
                </p>
                <div className="space-y-1.5">
                  {svc.metrics.slice(0, 2).map((m) => (
                    <div key={m.key} className="flex items-center justify-between border-b border-xrt-steel py-1.5">
                      <span className="label-caps text-xrt-muted/70">{m.key}</span>
                      <span className="label-caps text-xrt-black">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATIONAL HUBS ────────────────────────────────────── */}
      <section className="bg-xrt-black text-white border-b border-xrt-steel/20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="label-caps text-xrt-steel/40 mb-2">GLOBAL INFRASTRUCTURE</div>
          <h2 className="text-3xl sm:text-4xl text-white mb-8 sm:mb-10">Operational Hub Network</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-xrt-steel/20">
            {[
              { code: "HOU", city: "HOUSTON", country: "USA", coord: "29.76°N 95.37°W", tz: "UTC-6 CST", markets: ["NYMEX", "CME", "ICE"], focus: "Energy & Americas Origination" },
              { code: "RTM", city: "ROTTERDAM", country: "NETHERLANDS", coord: "51.92°N 4.48°E", tz: "UTC+1 CET", markets: ["ARA Barge", "ICE Europe", "LME"], focus: "ARA Distribution & European Compliance" },
              { code: "SGP", city: "SINGAPORE", country: "SINGAPORE", coord: "1.35°N 103.82°E", tz: "UTC+8 SST", markets: ["BMD FCPO", "SGX", "Platts Asia"], focus: "Palm Oil, Bunkers & APAC Logistics" },
            ].map((hub, i) => (
              <div key={hub.code} className={`p-8 sm:p-10 border-b border-xrt-steel/20 md:border-b-0 ${i < 2 ? "md:border-r border-xrt-steel/20" : ""}`}>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-black text-4xl sm:text-5xl text-white" style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.03em" }}>
                    {hub.code}
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-xrt-positive" />
                    <span className="label-caps text-xrt-steel/50">ACTIVE</span>
                  </div>
                </div>
                <div className="label-caps text-xrt-crimson mb-1">{hub.city}</div>
                <div className="label-caps text-xrt-steel/40 mb-6">{hub.country} — {hub.tz}</div>
                <div className="label-caps text-xrt-steel/30 mb-2">COORDINATES</div>
                <div className="label-caps text-xrt-steel/60 mb-6">{hub.coord}</div>
                <div className="label-caps text-xrt-steel/30 mb-3">MARKETS</div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {hub.markets.map((m) => (
                    <span key={m} className="label-caps border border-xrt-steel/20 text-xrt-steel/60 px-2 py-1">{m}</span>
                  ))}
                </div>
                <div className="border-t border-xrt-steel/20 pt-5">
                  <div className="label-caps text-xrt-steel/30 mb-1">PRIMARY FOCUS</div>
                  <div className="text-sm text-xrt-steel/70" style={{ fontFamily: "var(--font-archivo)" }}>{hub.focus}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE HUB PREVIEW ────────────────────────────── */}
      <section className="bg-xrt-off-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <div className="label-caps text-xrt-crimson mb-2">MARKET INTELLIGENCE</div>
              <h2 className="text-3xl sm:text-4xl text-xrt-black">Latest Dispatches</h2>
            </div>
            <Link href="/blog" className="label-caps text-xrt-muted border border-xrt-steel px-5 py-2.5 hover:border-xrt-black transition-colors self-start sm:self-auto">
              Full Intelligence Hub →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-xrt-steel">
            {blogPosts.slice(0, 3).map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`block bg-xrt-white p-6 sm:p-8 hover:bg-xrt-surface transition-colors border-b border-xrt-steel md:border-b-0 ${i < 2 ? "md:border-r border-xrt-steel" : ""} last:border-b-0`}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="label-caps text-xrt-crimson">{post.category}</span>
                  <span className="label-caps text-xrt-steel/50">{post.date}</span>
                </div>
                <h3 className="text-lg sm:text-xl text-xrt-black mb-4 leading-tight" style={{ fontFamily: "var(--font-barlow)", fontWeight: 900 }}>
                  {post.title}
                </h3>
                <p className="text-sm text-xrt-muted leading-relaxed mb-5" style={{ fontFamily: "var(--font-archivo)" }}>
                  {post.summary.substring(0, 140)}...
                </p>
                <div className="flex items-center justify-between">
                  <span className="label-caps text-xrt-steel/50">{post.author}</span>
                  <span className="label-caps text-xrt-black">{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ───────────────────────────────────────────── */}
      <section className="bg-xrt-crimson text-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="label-caps text-white/60 mb-2">READY TO PROCURE</div>
            <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "var(--font-barlow)", letterSpacing: "-0.03em" }}>
              Submit a Sourcing Request
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 flex-shrink-0">
            <Link href="/contact" className="label-caps bg-white text-xrt-crimson px-8 sm:px-10 py-4 hover:bg-xrt-off-white transition-colors w-full sm:w-auto text-center">
              Open RFQ Form
            </Link>
            <Link href="/about" className="label-caps border border-white/40 text-white px-8 sm:px-10 py-4 hover:border-white transition-colors w-full sm:w-auto text-center">
              Learn About XRT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
