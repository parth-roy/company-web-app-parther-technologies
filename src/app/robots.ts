import { MetadataRoute } from 'next';

// ─── robots.ts ───────────────────────────────────────────────────────────────
// Strategy:
//  - Allow all crawlers on public pages.
//  - Block /api/, /admin/, and /_next/ internals from being indexed.
//  - Block duplicate/thin parameter URLs that could dilute crawl budget.
//  - Declare all sitemaps explicitly (Google, Bing, and XML fallback).
// ─────────────────────────────────────────────────────────────────────────────

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // ─── Allow major search bots and AI answer engines full public access ──
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'GPTBot',
          'ChatGPT-User',
          'PerplexityBot',
          'anthropic-ai',
          'Claude-Web',
          'Googlebot-Extended',
          'Applebot-Extended'
        ],
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/test',
          '/*?*',    // Block URL parameters to prevent duplicate content
          '/*.json$', // Block raw JSON responses
        ],
      },
    ],
    sitemap: [
      'https://parthertech.com/sitemap.xml',
    ],
    host: 'https://parthertech.com',
  };
}
