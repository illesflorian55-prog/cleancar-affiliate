import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import Script from 'next/script';
import { CTAButton } from '@/components/CTAButton';
import { getGuideBySlug, getGuideSlugs } from '@/lib/guides';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600; // Rebuild every hour to check for newly published articles

export async function generateStaticParams() {
  const slugs = getGuideSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  
  if (!guide) return { title: 'Guide Not Found' };

  return {
    title: `${guide.title} | The VPN Shield`,
    description: guide.description,
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 font-sans pb-24">
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/guides" className="inline-flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors mb-8 font-medium">
          <ArrowLeft className="w-4 h-4" />
          Back to Guides
        </Link>
        
        <article className="prose prose-lg md:prose-xl dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            {guide.title}
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
            <span>By <strong>{guide.author}</strong></span>
            <span>•</span>
            <span>{guide.date}</span>
            <span>•</span>
            <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-bold">{guide.category}</span>
          </div>

          <div className="my-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
            <img 
              src={guide.image} 
              alt={guide.title}
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          {guide.content && (
            <div className="markdown-content">
              <Markdown>{guide.content}</Markdown>
            </div>
          )}
          
          <div className="mt-12 p-8 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900 text-center not-prose">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Ready to protect yourself?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Check out our top-rated VPNs and secure an exclusive discount today.</p>
            <CTAButton href="/#vpn-list" text="See the Best VPNs of 2026" className="w-full sm:w-auto text-lg" />
          </div>
        </article>
      </div>

      <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          <p>© 2026 The VPN Shield. All rights reserved.</p>
        </div>
      </footer>
      
      {/* Dynamic JSON-LD SEO Schema */}
      <Script id="json-ld-article" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: guide.title,
        description: guide.description,
        image: `https://thevpnshield.com${guide.image}`,
        author: {
          '@type': 'Organization',
          name: guide.author,
          url: 'https://thevpnshield.com/'
        },
        publisher: {
          '@type': 'Organization',
          name: 'The VPN Shield',
          logo: {
            '@type': 'ImageObject',
            url: 'https://thevpnshield.com/logo.png'
          }
        },
        datePublished: guide.date,
        dateModified: guide.date
      })}} />
      <Script id="json-ld-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Is using a VPN completely legal?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, using a VPN is perfectly legal in almost all countries. They are essential tools for digital privacy and security used by millions of individuals and businesses daily.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do free VPNs actually work?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'While free VPNs exist, they often come with severe limitations like slow speeds, data caps, and dangerous privacy practices such as logging and selling your browsing data.'
            }
          }
        ]
      })}} />
    </div>
  );
}
