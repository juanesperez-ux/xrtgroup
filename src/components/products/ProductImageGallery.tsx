"use client";

import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import type { ProductGalleryImage } from "@/lib/productImagery";

interface ProductImageGalleryProps {
  title: string;
  categoryLabel: string;
  images: ProductGalleryImage[];
}

export default function ProductImageGallery({ title, categoryLabel, images }: ProductImageGalleryProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    let initTimer = 0;
    let ctx: gsap.Context | undefined;

    gsap.registerPlugin(ScrollTrigger);

    const initGallery = () => {
      const section = sectionRef.current;
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!section || !viewport || !track || track.scrollWidth <= viewport.clientWidth) return;

      ctx = gsap.context(() => {
        gsap.to(track, {
          x: () => -(track.scrollWidth - viewport.clientWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            end: () => `+=${Math.max(1, track.scrollWidth - viewport.clientWidth)}`,
          },
        });
      }, section);

      ScrollTrigger.refresh();
    };

    initTimer = window.setTimeout(initGallery, 80);

    return () => {
      window.clearTimeout(initTimer);
      ctx?.revert();
    };
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden border-t border-xrt-steel/15 bg-xrt-near-black"
    >
      <div ref={viewportRef} className="min-h-screen overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-14 sm:pt-20 pb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8 sm:mb-10">
            <div>
              <div className="label-caps text-xrt-crimson mb-3">{categoryLabel} Imagery</div>
              <h2
                className="text-3xl sm:text-5xl text-white"
                style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, textTransform: "uppercase" }}
              >
                Product Reference Gallery
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#C4C1BE] leading-relaxed max-w-md" style={{ fontFamily: "var(--font-archivo)" }}>
              Visual reference points for {title.toLowerCase()} sourcing, inspection, and export movement.
            </p>
          </div>
        </div>

        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-12 will-change-transform"
        >
          {images.map((image, index) => (
            <figure
              key={`${image.src}-${index}`}
              className="relative shrink-0 w-[82vw] sm:w-[66vw] lg:w-[46vw] h-[58vh] min-h-[380px] max-h-[620px] overflow-hidden border border-xrt-steel/15 bg-xrt-black"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 46vw, (min-width: 640px) 66vw, 82vw"
                className="object-cover"
                priority={index === 0}
                onLoad={() => ScrollTrigger.refresh()}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-xrt-black/75 via-transparent to-transparent" />
              <figcaption className="absolute left-5 right-5 bottom-5 flex items-end justify-between gap-4">
                <span className="text-white text-xl sm:text-2xl leading-none" style={{ fontFamily: "var(--font-barlow)", fontWeight: 900, textTransform: "uppercase" }}>
                  {image.caption}
                </span>
                <span className="label-caps text-white/55">{String(index + 1).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
