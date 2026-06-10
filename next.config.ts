import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const nextConfig: NextConfig = {
  // ── Image Optimization ──────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [480, 768, 1024, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for static images
    remotePatterns: [
      {
        protocol: "http" as const,
        hostname: "localhost",
        port: "3000",
      },
    ],
    // Disable static image import optimization for SVGs (serve raw for vector crispness)
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
  },

  // ── Compression ─────────────────────────────────────────────
  compress: true,

  // ── onDemandEntries (dev mode only — prevents memory leaks) ─
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },

  // ── Performance Headers ─────────────────────────────────────
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/uploads/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), interest-cohort=()" },
        ],
      },
    ];
  },

  // ── Experimental Optimizations ──────────────────────────────
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ["@payloadcms/richtext-lexical"],
    optimizeServerReact: true,
    webpackMemoryOptimizations: true,
  },

  // ── Build output ────────────────────────────────────────────
  output: "standalone",
};

export default withPayload(nextConfig);
