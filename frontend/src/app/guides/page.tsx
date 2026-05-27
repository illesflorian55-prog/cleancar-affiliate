import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'VPN Guides & Tips | The VPN Shield',
  description: 'Learn how to use VPNs, protect your privacy online, and get the most out of your subscriptions.',
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            The VPN Shield
          </Link>
          <nav className="hidden md:flex gap-6 font-semibold text-gray-600 dark:text-gray-300">
            <Link href="/#vpn-list" className="hover:text-indigo-600 transition-colors">Top VPNs</Link>
            <Link href="/guides" className="text-indigo-600 font-bold transition-colors">Guides</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-6">
          Guides & Tutorials
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
          Awesome VPN guides are coming soon. Stay tuned!
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>
      </main>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-auto py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2026 The VPN Shield. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
