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
        // ─── Allow major search bots full access ──────────────────────────
        userAgent: ['Googlebot', 'Bingbot', 'Slurp', 'DuckDuckBot', 'Baiduspider'],
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/test',
          '/*?*',    // Block URL parameters to prevent duplicate content
          '/*.json$', // Block raw JSON responses
        ],
      },
      {
        // ─── Block AI training crawlers per our privacy policy ────────────
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'anthropic-ai', 'Claude-Web'],
        disallow: '/',
      },
      {
        // ─── Allow Google's AI search (Gemini) for GEO indexing ──────────
        // Allowing Googlebot-Extended ensures we appear in Google AI Overviews.
        userAgent: 'Googlebot-Extended',
        allow: '/',
      },
    ],
    sitemap: [
      'https://parthertech.com/sitemap.xml',
    ],
    host: 'https://parthertech.com',
  };
}
