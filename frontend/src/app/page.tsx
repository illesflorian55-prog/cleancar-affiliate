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
            CleanCar Affiliate
          </h1>
          <nav className="hidden md:flex gap-6 font-semibold text-gray-600 dark:text-gray-300">
            <a href="#" className="hover:text-indigo-600 transition-colors">Takarítógépek</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Porszívók</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Tesztek</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white mb-4">
            Legjobb Takarítógépek & Porszívók
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            Folyamatosan frissülő árakkal, tesztekkel és őszinte véleményekkel segítünk megtalálni a legjobb gépet otthonra vagy autóápoláshoz.
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
              allTimeLow={product.all_time_low}
            />
          ))}
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2026 CleanCar Affiliate. Minden jog fenntartva.</p>
          <p className="mt-2 text-sm">Az oldalon található linkek egy része affiliate link. Ha ezeken keresztül vásárolsz, jutalékot kaphatunk, ami neked nem kerül többe.</p>
        </div>
      </footer>
    </div>
  );
}
