import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  shop: string;
  rating?: string;
  features?: string[];
}

export function ProductCard({ id, name, price, image, shop, rating, features }: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
  }).format(price);

  return (
    <Link href={`/reviews/${id}`} className="group block">
      <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 relative h-full flex flex-col">
        
        {rating && (
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500 text-white rounded-full font-bold text-xs shadow-lg shadow-indigo-500/30">
            <Star className="w-4 h-4 fill-current" />
            <span>{rating}</span>
          </div>
        )}

        <div className="relative aspect-square mb-6 bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden flex items-center justify-center p-4">
          <img 
            src={image} 
            alt={name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-110 transition-transform duration-500"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <span>{shop}</span>
          </div>
          
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {name}
          </h3>

          {features && features.length > 0 && (
            <ul className="mb-4 space-y-1">
              {features.slice(0, 2).map((feat, idx) => (
                <li key={idx} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                  <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                  {feat}
                </li>
              ))}
            </ul>
          )}
          
          <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100 dark:border-gray-800">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Starting at</p>
              <p className="text-2xl font-black text-gray-900 dark:text-white">
                {formattedPrice}<span className="text-sm font-normal text-gray-500">/mo</span>
              </p>
            </div>
            <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <span className="sr-only">Read Review</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
