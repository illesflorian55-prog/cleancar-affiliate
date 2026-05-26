import React from 'react';
import { notFound } from 'next/navigation';
import currentData from '@/data/current_data.json';
import { PriceHistoryChart } from '@/components/PriceHistoryChart';
import { ProsCons } from '@/components/ProsCons';
import { CTAButton } from '@/components/CTAButton';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(currentData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = (currentData as any)[slug];
  
  if (!product) return { title: 'Termék nem található' };

  return {
    title: `${product.name} Teszt és Vélemények | CleanCar Affiliate`,
    description: `Nézd meg a(z) ${product.name} aktuális árait, előnyeit és hátrányait. Legjobb ajánlat: ${product.price} Ft a(z) ${product.shop} áruházban.`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = (currentData as any)[slug];

  if (!product) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('hu-HU', { 
    style: 'currency', 
    currency: 'HUF',
    maximumFractionDigits: 0
  }).format(product.price);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Vissza a főoldalra
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 sticky top-8 border border-gray-100 dark:border-gray-800">
            <div className="aspect-square relative flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
              />
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Jelenlegi legjobb ár ({product.shop})</p>
                <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                  {formattedPrice}
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8 text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: product.description || 'Nincs elérhető leírás.' }}>
            </div>
            
            {product.pros && product.cons && (
              <ProsCons pros={product.pros} cons={product.cons} />
            )}
            
            <div className="mt-12 mb-8">
              <CTAButton 
                href={product.url} 
                text={`Megnézem a(z) ${product.shop} oldalán`}
                className="w-full sm:w-auto"
              />
              <p className="text-xs text-center sm:text-left text-gray-400 mt-4">
                *Az ár és a készlet változhat. Frissítve: {product.price_history?.slice(-1)[0]?.date || 'Ma'}
              </p>
            </div>
            
            <PriceHistoryChart 
              data={product.price_history || []} 
              allTimeLow={product.all_time_low} 
            />
          </div>
        </div>
      </div>
    </div>
  );
}
