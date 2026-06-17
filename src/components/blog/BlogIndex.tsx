"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { blogPosts } from "@/lib/data";

type BlogPost = (typeof blogPosts)[number];

const categories = [
  "ALL",
  "PROCUREMENT",
  "ENERGY",
  "AGRICULTURAL",
  "MARKET INTELLIGENCE",
  "COMPLIANCE BRIEF",
  "REGULATORY",
  "LOGISTICS",
  "SUPPLY CHAIN",
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

function postImage(post: BlogPost) {
  return "image" in post && post.image ? post.image : "/images/photo-handshake-deal.webp";
}

function postTags(post: BlogPost) {
  return "tags" in post && post.tags ? post.tags.slice(0, 2) : [];
}

export default function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "ALL") return posts;
    return posts.filter((post) => post.category === activeCategory);
  }, [activeCategory, posts]);

  const featuredPost = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <>
      <section className="bg-xrt-off-white border-b border-xrt-steel sticky top-14 sm:top-16 z-40 backdrop-blur-sm">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="overflow-x-auto">
            <div className="flex items-stretch gap-0 border-x border-xrt-steel min-w-max" role="tablist" aria-label="Blog categories">
              {categories.map((cat, i) => {
                const isActive = cat === activeCategory;
                const count = cat === "ALL" ? posts.length : posts.filter((post) => post.category === cat).length;

                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="blog-results"
                    onClick={() => setActiveCategory(cat)}
                    className={[
                      "label-caps flex-shrink-0 px-4 py-3 text-left transition-colors sm:px-6 sm:py-4",
                      i < categories.length - 1 ? "border-r border-xrt-steel" : "",
                      isActive
                        ? "bg-xrt-black text-white"
                        : "text-xrt-muted hover:bg-xrt-surface hover:text-xrt-black",
                      count === 0 ? "opacity-50" : "",
                    ].filter(Boolean).join(" ")}
                  >
                    <span>{cat}</span>
                    <span className={isActive ? "ml-2 text-white/55" : "ml-2 text-xrt-outline"}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-xrt-off-white" id="blog-results" aria-live="polite">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16">
          {featuredPost ? (
            <>
              <div className="border border-xrt-steel bg-xrt-white mb-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="relative min-h-[260px] border-b border-xrt-steel lg:col-span-5 lg:border-b-0 lg:border-r">
                    <Image
                      src={postImage(featuredPost)}
                      alt={featuredPost.title}
                      fill
                      priority={activeCategory === "ALL"}
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover"
                    />
                    <div className="absolute left-4 top-4 bg-xrt-crimson px-3 py-2">
                      <span className="label-caps text-white">FEATURED DISPATCH</span>
                    </div>
                  </div>
                  <div className="lg:col-span-7 p-6 sm:p-10">
                    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <span className="label-caps text-xrt-crimson">{featuredPost.category}</span>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="label-caps border border-xrt-steel bg-xrt-surface-low px-3 py-1.5 text-xrt-black">{featuredPost.author}</span>
                        <time className="label-caps border border-xrt-steel bg-xrt-surface-low px-3 py-1.5 text-xrt-black" dateTime={featuredPost.date}>
                          {formatDate(featuredPost.date)}
                        </time>
                        <span className="label-caps bg-xrt-black text-white px-3 py-1.5">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <h2
                      className="text-2xl sm:text-4xl text-xrt-black mb-4 leading-tight"
                      style={{ fontFamily: "var(--font-barlow)", fontWeight: 900 }}
                    >
                      {featuredPost.title}
                    </h2>
                    <p className="text-sm sm:text-base text-xrt-muted leading-relaxed mb-6 max-w-3xl" style={{ fontFamily: "var(--font-archivo)" }}>
                      {featuredPost.summary}
                    </p>
                    <div className="mb-7 flex flex-wrap gap-2">
                      {postTags(featuredPost).map((tag) => (
                        <span key={tag} className="label-caps border border-xrt-steel px-3 py-1.5 text-xrt-muted">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="label-caps bg-xrt-black text-white px-6 py-3 hover:bg-xrt-crimson transition-colors inline-block"
                    >
                      Read Full Report
                    </Link>
                  </div>
                </div>
              </div>

              {gridPosts.length > 0 && (
                <div className="border border-xrt-steel border-t-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {gridPosts.map((post, i) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className={[
                          "group block bg-xrt-white hover:bg-xrt-surface transition-colors",
                          i < gridPosts.length - 1 ? "border-b border-xrt-steel" : "",
                          i % 2 === 0 ? "md:border-r" : "md:border-r-0",
                          i >= gridPosts.length - 2 ? "md:border-b-0" : "",
                          i % 3 < 2 ? "lg:border-r" : "lg:border-r-0",
                          i >= gridPosts.length - 3 ? "lg:border-b-0" : "",
                        ].filter(Boolean).join(" ")}
                      >
                        <div className="relative aspect-[16/10] border-b border-xrt-steel overflow-hidden">
                          <Image
                            src={postImage(post)}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          />
                        </div>
                        <div className="p-6 sm:p-8">
                          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                            <span className="label-caps text-xrt-crimson">{post.category}</span>
                            <time className="label-caps border border-xrt-steel bg-xrt-surface-low px-2.5 py-1 text-xrt-black" dateTime={post.date}>
                              {formatDate(post.date)}
                            </time>
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
                          <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-xrt-steel">
                            <span className="label-caps text-xrt-black">{post.author}</span>
                            <span className="label-caps bg-xrt-black px-2.5 py-1 text-white">{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="border border-xrt-steel bg-xrt-white p-8 sm:p-10">
              <div className="label-caps text-xrt-crimson mb-2">NO DISPATCHES FOUND</div>
              <p className="text-xrt-muted" style={{ fontFamily: "var(--font-archivo)" }}>
                Select another desk or return to all intelligence updates.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
