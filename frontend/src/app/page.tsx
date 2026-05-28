import { ProductCard } from '@/components/ProductCard';
import { VPNMatchmaker } from '@/components/VPNMatchmaker';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';
import currentData from '@/data/current_data.json';

export default function Home() {
  const products = Object.entries(currentData).map(([id, data]) => ({
    id,
    ...(data as any)
  }));

  return (
    <div className="min-h-screen font-sans">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            The VPN Shield
          </h1>
          <nav className="hidden md:flex gap-6 font-semibold text-gray-600 dark:text-gray-300 items-center">
            <a href="/#vpn-list" className="hover:text-indigo-600 transition-colors">Top VPNs</a>
            <a href="/guides" className="hover:text-indigo-600 transition-colors">Guides</a>
            <a href="/tools/ip-check" className="px-3 py-1 rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition-colors text-sm flex items-center">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
              Free IP Scan
            </a>
          </nav>
        </div>
      </header>

      <main id="vpn-list" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Best VPN Services of 2026
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            We tested and reviewed the top VPN providers to help you find the perfect balance of speed, privacy, and streaming capabilities.
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
