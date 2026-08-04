import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── TTFB: Partial Prerendering (PPR) ────────────────────────────────────
  // Streams static shell instantly, hydrates dynamic parts after.
  // Disabled to prevent hydration crashes on production Next.js 16/React 19 builds
  cacheComponents: false,

  // ─── LCP: Image Optimisation ─────────────────────────────────────────────
  // Serve AVIF first (50% smaller than WebP), WebP fallback.
  images: {
    formats: ["image/avif", "image/webp"],
    // Allow optimising Unsplash images (used in ServicesCarousel / CaseStudies)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Never serve images larger than this — prevents accidental huge LCP images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // ─── Security Headers ─────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options",    value: "nosniff" },
          { key: "X-Frame-Options",           value: "DENY" },
          { key: "X-XSS-Protection",          value: "1; mode=block" },
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
      // Next.js automatically sets optimal Cache-Control headers for
      // /_next/static — we must NOT override them or builds may break.
    ];
  },

  // ─── Redirects ────────────────────────────────────────────────────────────
  async redirects() {
    return [
      { source: "/about-us",                                    destination: "/about",                              permanent: true },
      { source: "/capital-strategy",                            destination: "/about",                              permanent: true },
      { source: "/services/custom-software",                    destination: "/services/custom-software-engineering", permanent: true },
      { source: "/services/crm-development",                    destination: "/services/crm",                       permanent: true },
      { source: "/services/web-development",                    destination: "/services/business-websites-cms",     permanent: true },
      { source: "/services/erp-billing-software",               destination: "/services/erp-systems",               permanent: true },
      { source: "/services/ecommerce-development",              destination: "/services/ecommerce-architecture",    permanent: true },
      { source: "/locations/custom-software/:city",             destination: "/services/custom-software-engineering", permanent: true },
      { source: "/locations/crm-development/:city",             destination: "/services/crm",                       permanent: true },
      { source: "/locations/web-development/:city",             destination: "/services/business-websites-cms",     permanent: true },
      { source: "/locations/erp-billing-software/:city",        destination: "/services/erp-systems",               permanent: true },
      { source: "/locations/ecommerce-development/:city",       destination: "/services/ecommerce-architecture",    permanent: true },
      { source: "/locations/mobile-app-development/:city",      destination: "/services/mobile-app-development",    permanent: true },
    ];
  },
};

export default nextConfig;
