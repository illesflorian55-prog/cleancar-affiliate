import { notFound } from 'next/navigation';
import { PSEOTemplate } from '@/components/pSEOTemplate';
import pseoData from '@/data/pseo.json';

// Define the shape of our params
interface Params {
  service: string;
  country: string;
}

interface PageProps {
  params: Promise<Params>;
}

// Generate static paths at build time (1000+ pages)
export function generateStaticParams(): Params[] {
  const paths: Params[] = [];
  
  pseoData.services.forEach(service => {
    pseoData.countries.forEach(country => {
      paths.push({
        service: service.id,
        country: country.id,
      });
    });
  });
  
  return paths;
}

// Dynamic Meta tags for SEO
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const service = pseoData.services.find(s => s.id === resolvedParams.service);
  const country = pseoData.countries.find(c => c.id === resolvedParams.country);

  if (!service || !country) {
    return { title: 'Not Found' };
  }

  const actionWord = service.type === 'sports' ? 'Watch' : service.type === 'gaming' ? 'Play' : 'Unblock';

  return {
    title: `How to ${actionWord} ${service.name} in ${country.name} (2026 Guide) | The VPN Shield`,
    description: `Geo-restrictions blocking ${service.name} in ${country.name}? Discover the best VPNs to bypass blocks and securely access your favorite content right now.`,
  };
}

export default async function PSEOPage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = pseoData.services.find(s => s.id === resolvedParams.service);
  const country = pseoData.countries.find(c => c.id === resolvedParams.country);

  if (!service || !country) {
    notFound();
  }

  return (
    <PSEOTemplate 
      serviceName={service.name} 
      countryName={country.name}
      type={service.type}
    />
  );
}
