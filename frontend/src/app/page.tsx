import { ProductCard } from '@/components/ProductCard';
import currentData from '@/data/current_data.json';

export default function Home() {
  const products = Object.entries(currentData).map(([id, data]) => ({
    id,
    ...(data as any)
  }));

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <h1 className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            The VPN Shield
          </h1>
          <nav className="hidden md:flex gap-6 font-semibold text-gray-600 dark:text-gray-300">
            <a href="#" className="hover:text-indigo-600 transition-colors">Top VPNs</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Antivirus</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Guides</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Best VPN Services of 2026
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            We tested and reviewed the top VPN providers to help you find the perfect balance of speed, privacy, and streaming capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
      </main>
      
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2026 The VPN Shield. All rights reserved.</p>
          <p className="mt-2 text-sm">Some links on this site are affiliate links. We may earn a commission if you purchase through them, at no extra cost to you.</p>
        </div>
      </footer>
    </div>
  );
}
