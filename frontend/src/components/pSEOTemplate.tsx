import React from 'react';
import { Shield, Globe, Zap, Lock } from 'lucide-react';
import Link from 'next/link';
import { ComparisonMatrix } from '@/components/ComparisonMatrix';

interface PSEOTemplateProps {
  serviceName: string;
  countryName: string;
  type: string;
}

export function PSEOTemplate({ serviceName, countryName, type }: PSEOTemplateProps) {
  const getActionWord = () => {
    switch (type) {
      case 'sports': return 'Watch';
      case 'gaming': return 'Play';
      default: return 'Unblock';
    }
  };

  const actionWord = getActionWord();

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
          How to {actionWord} <span className="text-blue-500">{serviceName}</span> in <span className="text-purple-500">{countryName}</span> (2026 Guide)
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Geo-restrictions shouldn't dictate what you can {actionWord.toLowerCase()}. Discover the absolute best ways to securely access {serviceName} from {countryName} without sacrificing internet speed or privacy.
        </p>
      </div>

      {/* The Problem Section */}
      <div className="bg-slate-800/50 rounded-2xl p-8 mb-12 border border-slate-700/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Globe className="w-32 h-32 text-red-500" />
        </div>
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-4 flex items-center text-white">
            <Lock className="w-6 h-6 mr-3 text-red-400" />
            The Geo-Blocking Problem in {countryName}
          </h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Like many popular platforms, {serviceName} uses advanced IP tracking to restrict access based on your physical location. If you are currently in {countryName}, your local IP address triggers these regional blocks. This means you are missing out on the content you want to {actionWord.toLowerCase()}, simply because of digital borders.
          </p>
          <p className="text-slate-300 leading-relaxed font-semibold">
            The solution? You need a premium Virtual Private Network (VPN) that can instantly mask your {countryName} IP address and securely tunnel your connection to a server where {serviceName} is fully available.
          </p>
        </div>
      </div>

      {/* The Solution Matrix */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Best VPNs for {serviceName} in {countryName}
          </h2>
          <p className="text-slate-400">
            We've tested these providers specifically for bypassing restrictions in {countryName}. Here are the top performers for 2026.
          </p>
        </div>
        
        {/* We reuse the ComparisonMatrix component here for high conversion! */}
        <ComparisonMatrix />
      </div>

      {/* How to use section */}
      <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8 border border-blue-500/20">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
          <Zap className="w-6 h-6 mr-3 text-yellow-400" />
          3 Simple Steps to Access {serviceName}
        </h2>
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white mr-4">1</div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Choose a Premium VPN</h3>
              <p className="text-slate-400">Select one of the highly-rated providers from the list above. We strongly recommend avoiding free VPNs, as they are typically blocked by {serviceName} and often sell your data.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white mr-4">2</div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Connect to the Right Server</h3>
              <p className="text-slate-400">Open the VPN app and connect to a server located in a country where {serviceName} is accessible (e.g., the United States or the UK). Your {countryName} IP will instantly be hidden.</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white mr-4">3</div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Start {actionWord}ing securely!</h3>
              <p className="text-slate-400">Clear your browser cache (or restart your app) and open {serviceName}. You now have full, unrestricted access!</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-12 text-center">
         <Link href="/guides" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Read our detailed privacy guides
         </Link>
      </div>
    </div>
  );
}
