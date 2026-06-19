import { MetadataRoute } from 'next';
import { getAllGuides } from '@/lib/guides';
import currentData from '@/data/current_data.json';
import pseoData from '@/data/pseo.json';

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thevpnshield.com';

  // Static routes
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Dynamic Guide Routes
  const allGuides = getAllGuides();
  const guideRoutes = allGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: (guide.date && !isNaN(Date.parse(guide.date))) ? new Date(guide.date) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  // Dynamic Review Routes
  const reviewRoutes = Object.keys(currentData).map((key) => ({
    url: `${baseUrl}/reviews/${key}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // Programmatic SEO Routes (pSEO)
  const pseoRoutes: MetadataRoute.Sitemap = [];
  pseoData.services.forEach(service => {
    pseoData.countries.forEach(country => {
      pseoRoutes.push({
        url: `${baseUrl}/unblock/${service.id}/${country.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    });
  });

  return [...routes, ...guideRoutes, ...reviewRoutes, ...pseoRoutes];
}
