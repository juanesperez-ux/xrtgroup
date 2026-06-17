import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/data";
import { PRODUCTS } from "@/lib/productsData";

const BASE = "https://xrtgroup.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Core marketing routes
  const core: MetadataRoute.Sitemap = [
    { url: `${BASE}/`,         lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/products`, lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/about`,    lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blog`,     lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/contact`,  lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/rfq`,      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];

  // Individual product pages (SEO intent layer)
  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Blog / intelligence posts
  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...core, ...productRoutes, ...blogRoutes];
}
