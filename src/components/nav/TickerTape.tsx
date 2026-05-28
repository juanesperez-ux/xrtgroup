"use client";

import { tickerItems } from "@/lib/data";

export default function TickerTape() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="bg-xrt-black border-b border-xrt-steel/20 overflow-hidden h-9 flex items-center">
      <div
        className="label-caps text-xrt-muted px-4 border-r border-xrt-steel/20 h-full flex items-center flex-shrink-0"
        style={{ minWidth: "max-content" }}
      >
        LIVE SPOT PRICES
      </div>
      <div className="overflow-hidden flex-1">
        <div className="ticker-track">
          {doubled.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 border-r border-xrt-steel/10 h-9 flex-shrink-0"
            >
              <span className="label-caps text-xrt-steel/60">{item.symbol}</span>
              <span
                className="font-barlow text-sm font-bold tracking-wider"
                style={{
                  fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif",
                  color: "#e5e2e1",
                }}
              >
                {item.price}
              </span>
              <span className="label-caps" style={{ color: item.positive ? "#15803d" : "#c8111f" }}>
                {item.pct}
              </span>
              <span className="label-caps text-xrt-steel/30">{item.unit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
