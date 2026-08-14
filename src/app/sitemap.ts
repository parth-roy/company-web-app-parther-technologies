import { MetadataRoute } from 'next';
import { getCollectionIds } from '@/lib/mdx';

// ─── Hardcoded last-modified dates per collection ───────────────────────────
// Using fixed dates avoids new Date() issues with Cache Components.
const DATES = {
  home:       '2026-08-03',
  services:   '2026-08-03',
  industries: '2026-08-01',
  locations:  '2026-08-01',
  static:     '2026-07-15',
};

// ─── Priority mapping ────────────────────────────────────────────────────────
// Designed to signal crawl priority to Googlebot and Bingbot.
// Location pages are high-priority (0.85) for local SEO dominance.
// Industries are high (0.8) for vertical GEO authority.

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://parthertech.com';

  const serviceIds   = getCollectionIds('services');
  const industryIds  = getCollectionIds('industries');
  const locationIds  = getCollectionIds('locations');

  // ─── Core static pages ───────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: DATES.home,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${base}/about`,
      lastModified: DATES.static,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/services`,
      lastModified: DATES.services,
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${base}/industries`,
      lastModified: DATES.industries,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/case-studies`,
      lastModified: DATES.services,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/pricing`,
      lastModified: DATES.static,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${base}/contact`,
      lastModified: DATES.static,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/technologies`,
      lastModified: DATES.static,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // --- GEO Strategy Pages ---
    {
      url: `${base}/custom-erp-development-howrah`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/industries/foundry-erp-software`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/industries/jute-mill-erp-software`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/industries/logistics-fleet-management-software`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/industries/healthcare-compliant-software-development`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/saas-application-development-kolkata`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/legacy-software-modernization`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/ai-agentic-workflow-integration`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/services/headless-commerce-development-kolkata`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/software-development-barrackpore`,
      lastModified: new Date().toISOString().split('T')[0],
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ];

  // ─── Programmatic: Services (/services/[slug]) ───────────────────────────
  // High priority — money pages for conversion.
  const servicesPages: MetadataRoute.Sitemap = serviceIds.map(({ params }) => ({
    url: `${base}/services/${params.slug}`,
    lastModified: DATES.services,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // ─── Programmatic: Industries (/industries/[slug]) ───────────────────────
  // High priority — vertical GEO authority pages.
  const industriesPages: MetadataRoute.Sitemap = industryIds.map(({ params }) => ({
    url: `${base}/industries/${params.slug}`,
    lastModified: DATES.industries,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // ─── Programmatic: Locations (/locations/[city]) ─────────────────────────
  // High priority — local SEO dominance within 40km radius of Barrackpore.
  // These pages target specific geo-intent queries (e.g. "ERP software Dankuni").
  const locationsPages: MetadataRoute.Sitemap = locationIds.map(({ params }) => ({
    url: `${base}/locations/${params.slug}`,
    lastModified: DATES.locations,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [
    ...staticPages,
    ...servicesPages,
    ...industriesPages,
    ...locationsPages,
  ];
}
