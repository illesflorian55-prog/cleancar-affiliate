import { ProductCard } from '@/components/ProductCard';
import { VPNMatchmaker } from '@/components/VPNMatchmaker';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';
import { HeroSection } from '@/components/HeroSection';
import currentData from '@/data/current_data.json';

export default function Home() {
  const products = Object.entries(currentData).map(([id, data]) => ({
    id,
    ...(data as any)
  }));

  return (
    <div className="min-h-screen font-sans bg-gray-50 dark:bg-[#0a0a0a]">
      <HeroSection />
      
      <main id="vpn-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Compare the Best VPN Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We rigorously tested the top VPN providers to help you find the perfect balance of speed, privacy, and streaming capabilities.
          </p>
        </div>

        <div className="mb-20">
          <VPNMatchmaker />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              shop={product.shop}
              rating={product.rating}
              features={product.features}
            />
          ))}
        </div>

        <ComparisonMatrix />
      </main>
    </div>
  );
}
