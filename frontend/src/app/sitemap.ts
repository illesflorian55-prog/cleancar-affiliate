import { MetadataRoute } from 'next';
import { getAllGuides } from '@/lib/guides';
import currentData from '@/data/current_data.json';

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
    lastModified: new Date(guide.date),
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

  return [...routes, ...guideRoutes, ...reviewRoutes];
}
