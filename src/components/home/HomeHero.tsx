"use client";

import Link from "next/link";

const WORD_STAGGER_MS = 55;
const HEADLINE_TEXT = "Sourcing the essentials,\nfrom origin to delivery.";

/* Hero backdrop cycles through the categories XRT actually procures —
   fuels, proteins, edible oils, grains — instead of a single static clip.
   Cross-fade + Ken Burns are pure CSS (transform/opacity only) so they stay
   on the compositor and respect prefers-reduced-motion. Order here drives the
   visual narrative; the slide timing lives in globals.css (.hero-slide). */
const HERO_SLIDES = [
  {
    src: "/images/photo-airplane-refueling.webp",
    alt: "Aircraft refueling — aviation fuel procurement by XRT Group",
  },
  {
    src: "/images/photo-lng-tanker-aerial.webp",
    alt: "LNG tanker aerial view — liquid natural gas shipping and procurement",
  },
  {
    src: "/images/photo-black-angus-cattle-closeup.jpg",
    alt: "Close view of Black Angus cattle — premium beef and protein export supply by XRT Group",
  },
  {
    src: "/images/photo-olive-oil-mill-pour.webp",
    alt: "Extra virgin olive oil pouring from mill spout — wholesale edible oil procurement",
  },
  {
    src: "/images/photo-wheat-field.webp",
    alt: "Wheat field at harvest — bulk grain procurement and USDA certified agricultural supply",
  },
];

const SLIDE_SECONDS = 7;

/* Splits text on \n into lines and on spaces into words. Each word is an
   inline-block so it never breaks mid-word, and animates in on a stagger.
   Animations are pure CSS (no JS gate) so the copy is always present for
   SSR/crawlers and settles visible even if hydration is slow. */
function AnimatedHeadline({ text, className }: { text: string; className?: string }) {
  const lines = text.split("\n");
  let wordIndex = 0;

  return (
    <h1 className={className} style={{ letterSpacing: "-0.04em" }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="block">
          {line.split(" ").map((word, i) => {
            const delay = wordIndex++ * WORD_STAGGER_MS;
            return (
              <span
                key={i}
                className="hero-rise inline-block whitespace-pre"
                style={{ animationDelay: `${delay}ms` }}
              >
                {word}
                {i < line.split(" ").length - 1 ? " " : ""}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

export default function HomeHero() {
  const totalSeconds = HERO_SLIDES.length * SLIDE_SECONDS;

  return (
    <section className="hero-anim relative bg-xrt-black text-white min-h-[72svh] sm:min-h-[calc(100svh-4rem-2.25rem)] flex flex-col overflow-hidden">
      {/* Full-bleed cross-fading procurement slideshow */}
      <div className="absolute inset-0" aria-hidden="true">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="hero-slide absolute inset-0 w-full h-full object-cover"
            style={{
              animationDuration: `${totalSeconds}s, ${totalSeconds}s`,
              animationDelay: `-${i * SLIDE_SECONDS}s, -${i * SLIDE_SECONDS}s`,
            }}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
          />
        ))}
      </div>

      {/* Legibility scrim — keeps copy readable over any slide */}
      <div className="absolute inset-0 bg-gradient-to-t from-xrt-black/85 via-xrt-black/40 to-xrt-black/30" />

      {/* Content pinned to the bottom of the viewport */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16 pt-24">
        <div className="lg:grid lg:grid-cols-2 lg:items-end lg:gap-8">
          {/* Left — headline, sub, CTAs */}
          <div className="max-w-2xl">
            <AnimatedHeadline
              text={HEADLINE_TEXT}
              className="text-[clamp(2rem,7vw,4.5rem)] font-normal leading-[1.04] mb-4 text-balance"
            />

            <p
              className="hero-rise text-base md:text-lg text-gray-200 mb-6 max-w-xl"
              style={{ animationDelay: "320ms" }}
            >
              XRT Group connects fuel networks, commercial fleets, and food
              distributors with direct-origin supply lines — no brokers, no
              intermediaries.
            </p>

            <div
              className="hero-rise flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              style={{ animationDelay: "440ms" }}
            >
              <Link
                href="/contact"
                className="bg-white text-black text-center px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Submit an RFQ
              </Link>
              <Link
                href="/products"
                className="liquid-glass border border-white/20 text-white text-center px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors"
              >
                Explore Products
              </Link>
            </div>
          </div>

          {/* Right — glass tag, bottom-aligned */}
          <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
            <div
              className="hero-rise liquid-glass border border-white/20 px-6 py-3 rounded-xl"
              style={{ animationDelay: "560ms" }}
            >
              <span className="text-lg md:text-xl lg:text-2xl font-light">
                Fuels. Proteins. Edible Oils.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
