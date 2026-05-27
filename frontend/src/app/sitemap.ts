import { MetadataRoute } from 'next';
import currentData from '@/data/current_data.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://thevpnshield.com'; // Or your custom domain

  const reviewUrls = Object.keys(currentData).map((slug) => ({
    url: `${baseUrl}/reviews/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...reviewUrls,
  ];
}
