"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const CHAR_DELAY_MS = 30;
const HEADING_START_MS = 200;
const CHAR_TRANSITION_MS = 500;

/* Fades children in after `delay` ms. */
function FadeIn({
  delay,
  duration = 1000,
  className = "",
  children,
}: {
  delay: number;
  duration?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      data-anim
      className={`transition-opacity ${visible ? "opacity-100" : "opacity-0"} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

/* Splits text by \n into lines, animates each character in with a stagger. */
function AnimatedHeading({ text, className }: { text: string; className?: string }) {
  const [started, setStarted] = useState(false);
  const lines = text.split("\n");

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), HEADING_START_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <h1 className={className} style={{ letterSpacing: "-0.04em" }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              data-anim
              className="inline-block"
              style={{
                opacity: started ? 1 : 0,
                transform: started ? "translateX(0)" : "translateX(-18px)",
                transition: `opacity ${CHAR_TRANSITION_MS}ms ease, transform ${CHAR_TRANSITION_MS}ms ease`,
                transitionDelay: `${lineIndex * line.length * CHAR_DELAY_MS + charIndex * CHAR_DELAY_MS}ms`,
              }}
            >
              {char === " " ? " " : char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      videoRef.current?.pause();
    }
  }, []);

  return (
    <section className="hero-anim relative bg-xrt-black text-white min-h-[calc(100vh-3.5rem-2.25rem)] sm:min-h-[calc(100vh-4rem-2.25rem)] flex flex-col overflow-hidden">
      {/* Full-bleed background video — raw, no overlay */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        poster="/images/photo-oil-pumps-dusk.webp"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />

      {/* Content pinned to the bottom of the viewport */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 pt-24">
        <div className="lg:grid lg:grid-cols-2 lg:items-end lg:gap-8">
          {/* Left — headline, sub, CTAs */}
          <div>
            <AnimatedHeading
              text={"Sourcing the essentials,\nfrom origin to delivery."}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
            />

            <FadeIn delay={800}>
              <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
                XRT Group connects fuel networks, commercial fleets, and food
                distributors with direct-origin supply lines — no brokers, no
                intermediaries.
              </p>
            </FadeIn>

            <FadeIn delay={1200}>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Submit an RFQ
                </Link>
                <Link
                  href="/products"
                  className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
                >
                  Explore Products
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right — glass tag, bottom-aligned */}
          <div className="flex items-end justify-start lg:justify-end mt-10 lg:mt-0">
            <FadeIn delay={1400}>
              <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                <span className="text-lg md:text-xl lg:text-2xl font-light">
                  Fuels. Proteins. Edible Oils.
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
