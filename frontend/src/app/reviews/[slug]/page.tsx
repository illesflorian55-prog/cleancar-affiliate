import React from 'react';
import { notFound } from 'next/navigation';
import currentData from '@/data/current_data.json';
import { ProsCons } from '@/components/ProsCons';
import { CTAButton } from '@/components/CTAButton';
import { ArrowLeft, Star } from 'lucide-react';
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
  
  if (!product) return { title: 'Review Not Found' };

  return {
    title: `${product.name} Review 2026 | TechShield Reviews`,
    description: `Read our in-depth review of ${product.name}. See pros, cons, features, and get the best discount online.`,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = (currentData as any)[slug];

  if (!product) {
    notFound();
  }

  const formattedPrice = new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD',
  }).format(product.price);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to all reviews
        </Link>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-3xl p-8 sticky top-8 border border-gray-100 dark:border-gray-800">
            {product.rating && (
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-4 py-2 bg-indigo-500 text-white rounded-full font-bold text-sm shadow-lg shadow-indigo-500/30">
                <Star className="w-4 h-4 fill-current" />
                <span>Score: {product.rating}</span>
              </div>
            )}
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
              {product.name} Review
            </h1>
            
            <div className="flex items-center gap-4 mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Starting from</p>
                <div className="text-4xl font-black text-indigo-600 dark:text-indigo-400">
                  {formattedPrice}<span className="text-lg font-normal text-gray-500"> /mo</span>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg dark:prose-invert max-w-none mb-8 text-gray-600 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: product.description || 'No description available.' }}>
            </div>
            
            {product.pros && product.cons && (
              <ProsCons pros={product.pros} cons={product.cons} />
            )}
            
            <div className="mt-12 mb-8">
              <CTAButton 
                href={product.url} 
                text={`Get ${product.name} Discount`}
                className="w-full sm:w-auto"
              />
              <p className="text-xs text-center sm:text-left text-gray-400 mt-4">
                *Prices and offers are subject to change by the provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
