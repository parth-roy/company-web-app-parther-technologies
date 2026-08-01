import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()',
          }
        ],
      }
    ];
  },
  async redirects() {
    return [
      // Direct Page Mapping
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/capital-strategy', destination: '/about', permanent: true },
      
      // Core Services Mapping
      { source: '/services/custom-software', destination: '/services/custom-software-engineering', permanent: true },
      { source: '/services/crm-development', destination: '/services/crm', permanent: true },
      { source: '/services/web-development', destination: '/services/business-websites-cms', permanent: true },
      { source: '/services/erp-billing-software', destination: '/services/erp-systems', permanent: true },
      { source: '/services/ecommerce-development', destination: '/services/ecommerce-architecture', permanent: true },
      
      // The old site had a massive programmatic SEO structure: /locations/[service]/[city]
      // We are redirecting all of these to our high-converting Service Hubs to preserve the SEO juice.
      { source: '/locations/custom-software/:city', destination: '/services/custom-software-engineering', permanent: true },
      { source: '/locations/crm-development/:city', destination: '/services/crm', permanent: true },
      { source: '/locations/web-development/:city', destination: '/services/business-websites-cms', permanent: true },
      { source: '/locations/erp-billing-software/:city', destination: '/services/erp-systems', permanent: true },
      { source: '/locations/ecommerce-development/:city', destination: '/services/ecommerce-architecture', permanent: true },
      { source: '/locations/mobile-app-development/:city', destination: '/services/mobile-app-development', permanent: true },
    ];
  },
};

export default nextConfig;
