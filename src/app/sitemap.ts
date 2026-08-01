import { MetadataRoute } from 'next';
import { getCollectionIds } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://parthertech.com';

  // Get dynamic slugs
  const serviceIds = getCollectionIds('services');
  const industryIds = getCollectionIds('industries');
  const locationIds = getCollectionIds('locations');

  const servicesMap = serviceIds.map((id) => ({
    url: `${baseUrl}/services/${id.params.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  const industriesMap = industryIds.map((id) => ({
    url: `${baseUrl}/industries/${id.params.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const locationsMap = locationIds.map((id) => ({
    url: `${baseUrl}/locations/${id.params.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...servicesMap,
    ...industriesMap,
    ...locationsMap,
  ];
}
