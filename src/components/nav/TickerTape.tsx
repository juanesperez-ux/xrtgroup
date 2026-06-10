"use client";

import { useRef, useEffect, useState } from "react";
import { tickerItems } from "@/lib/data";

export default function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Detect reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Pause animation when ticker is not visible in the viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Don't render animation at all if user prefers reduced motion
  if (reducedMotion) {
    return (
      <div className="bg-xrt-black border-b border-xrt-steel/20 h-9 flex items-center overflow-hidden">
        <div className="label-caps text-xrt-muted px-4 border-r border-xrt-steel/20 h-full flex items-center flex-shrink-0"
          style={{ minWidth: "max-content" }}>
          LIVE SPOT PRICES
        </div>
        <div className="flex items-center gap-3 px-6 h-9">
          {tickerItems.slice(0, 3).map((item, i) => (
            <span key={i} className="flex items-center gap-3">
              <span className="label-caps text-xrt-steel/60">{item.symbol}</span>
              <span className="font-barlow text-sm font-bold tracking-wider"
                style={{ fontFamily: "var(--font-barlow), 'Barlow Condensed', sans-serif", color: "#e5e2e1" }}>
                {item.price}
              </span>
              <span className="label-caps" style={{ color: item.positive ? "#15803d" : "#c8111f" }}>
                {item.pct}
              </span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div ref={containerRef} className="bg-xrt-black border-b border-xrt-steel/20 overflow-hidden h-9 flex items-center">
      <div
        className="label-caps text-xrt-muted px-4 border-r border-xrt-steel/20 h-full flex items-center flex-shrink-0"
        style={{ minWidth: "max-content" }}
      >
        LIVE SPOT PRICES
      </div>
      <div className="overflow-hidden flex-1">
        <div className="ticker-track" style={{ animationPlayState: paused ? "paused" : "running" }}>
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
