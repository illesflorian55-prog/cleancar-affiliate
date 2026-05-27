import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield, Globe, Lock, Wifi } from 'lucide-react';
import { CTAButton } from '@/components/CTAButton';

export const metadata = {
  title: 'What is a VPN and Why Do You Need One in 2026? | The VPN Shield',
  description: 'Everything you need to know about Virtual Private Networks (VPNs). Learn how they protect your privacy, unlock content, and secure your connection.',
};

export default function GuidePage() {
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
            What is a VPN and Why Do You Need One in 2026?
          </h1>
          
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-100 dark:border-gray-800 pb-8">
            <span>By <strong>The VPN Shield Team</strong></span>
            <span>•</span>
            <span>May 27, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>

          <div className="my-10 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-gray-800">
            <img 
              src="/images/guide-vpn-shield.png" 
              alt="Cyber security shield protecting data"
              className="w-full h-auto object-cover"
            />
          </div>

          <p className="lead text-xl text-gray-600 dark:text-gray-400 font-medium">
            You've probably heard the term "VPN" thrown around by tech YouTubers, security experts, and frequent travelers. But what exactly is a Virtual Private Network, and do you actually need one?
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white flex items-center gap-3">
            <Shield className="w-8 h-8 text-indigo-500" />
            The Short Answer
          </h2>
          <p>
            A VPN (Virtual Private Network) is an app that creates a secure, encrypted tunnel between your device and the internet. It hides your real IP address and location, making your online actions virtually untraceable while securing your data from hackers, ISPs, and snoops.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
            4 Reasons You Need a VPN Today
          </h2>

          <div className="grid sm:grid-cols-2 gap-8 my-10 not-prose">
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <Lock className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">1. Total Privacy</h3>
              <p className="text-gray-600 dark:text-gray-400">Your Internet Service Provider (ISP) logs everything you do online. A VPN encrypts your traffic so nobody can see what websites you visit or what files you download.</p>
            </div>
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <Globe className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">2. Unblock Content</h3>
              <p className="text-gray-600 dark:text-gray-400">Want to watch US Netflix from Europe? Or access BBC iPlayer from abroad? A VPN lets you change your virtual location with one click.</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <Wifi className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">3. Public Wi-Fi Security</h3>
              <p className="text-gray-600 dark:text-gray-400">Coffee shop and airport Wi-Fi networks are notoriously dangerous. Hackers can easily intercept your passwords. A VPN encrypts your data, keeping you safe on any network.</p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
              <Shield className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">4. Avoid Price Discrimination</h3>
              <p className="text-gray-600 dark:text-gray-400">Airlines and rental companies often show higher prices based on your location. By switching your IP address, you can often find much cheaper flights and deals.</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
            Which VPN Should You Choose?
          </h2>
          <p>
            Not all VPNs are created equal. Free VPNs often sell your data to make money, completely defeating the purpose of using one. We strongly recommend choosing a premium, audited VPN with a strict no-logs policy.
          </p>
          <p>
            If you're just starting out, we highly recommend <strong>NordVPN</strong>. It's incredibly easy to use, lightning-fast, and currently offers huge discounts for new users.
          </p>
          
          <div className="mt-10 p-8 bg-indigo-50 dark:bg-indigo-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900 text-center not-prose">
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
    </div>
  );
}
