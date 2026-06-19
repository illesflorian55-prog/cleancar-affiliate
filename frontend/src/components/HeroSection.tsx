"use client";

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Zap, Lock, ChevronRight, PlayCircle } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-900 pt-20 pb-24 md:pt-32 md:pb-32">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 blur-[100px] rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500 blur-[120px] rounded-full opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600 blur-[150px] rounded-full opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-semibold text-sm mb-8">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Voted #1 VPN Review Site of 2026
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 leading-tight">
          Reclaim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Digital Freedom</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-4 max-w-2xl text-xl text-gray-300 mx-auto mb-10 font-medium leading-relaxed">
          Stop ISPs from tracking your data, bypass global geo-restrictions, and stay completely anonymous with the world's most trusted VPNs. Zero logs. Infinite freedom.
        </p>

        {/* Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="#vpn-list" 
            className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg px-8 py-4 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(79,70,229,0.4)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <span className="relative z-10 flex items-center gap-2">
              Claim 80% Off Today <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link 
            href="/guides" 
            className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:bg-white/10"
          >
            <PlayCircle className="w-5 h-5" /> How it Works
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-gray-800">
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <div className="bg-gray-800/50 p-2 rounded-lg">
              <Lock className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-semibold text-sm">AES-256 Encryption</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <div className="bg-gray-800/50 p-2 rounded-lg">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <span className="font-semibold text-sm">Strict No-Logs Policy</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-gray-400">
            <div className="bg-gray-800/50 p-2 rounded-lg">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <span className="font-semibold text-sm">Unlimited Bandwidth</span>
          </div>
        </div>
      </div>
    </section>
  );
}
