"use client";

import React, { useState, useEffect } from 'react';
import { Timer, X } from 'lucide-react';

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Generate a consistent "end time" for today (midnight)
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
      const diff = endOfDay.getTime() - now.getTime();

      if (diff > 0) {
        return {
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60)
        };
      }
      return { hours: 23, minutes: 59, seconds: 59 }; // reset
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const pad = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white px-4 py-3 relative z-50 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-sm md:text-base relative z-10">
        <div className="flex items-center gap-2 font-bold text-center">
          <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded uppercase font-black tracking-widest animate-pulse">Flash Sale</span>
          <span>Get 74% off + 3 Months Free on Premium VPNs!</span>
        </div>
        <div className="flex items-center gap-2 bg-black/20 px-4 py-1.5 rounded-full font-mono font-bold tracking-widest backdrop-blur-sm border border-white/10">
          <Timer className="w-4 h-4 text-indigo-200" />
          <span>{pad(timeLeft.hours)}:{pad(timeLeft.minutes)}:{pad(timeLeft.seconds)}</span>
        </div>
      </div>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        aria-label="Close banner"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
