"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          The VPN Shield
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 font-semibold text-gray-600 dark:text-gray-300 items-center">
          <Link href="/#vpn-list" className="hover:text-indigo-600 transition-colors">Top VPNs</Link>
          <Link href="/guides" className="hover:text-indigo-600 transition-colors">Guides</Link>
          <Link href="/tools/ip-check" className="px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 transition-colors text-sm flex items-center">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
            Free IP Scan
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
            <Link 
              href="/#vpn-list" 
              onClick={() => setIsOpen(false)}
              className="block font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
            >
              Top VPNs
            </Link>
            <Link 
              href="/guides" 
              onClick={() => setIsOpen(false)}
              className="block font-semibold text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors"
            >
              Guides
            </Link>
            <Link 
              href="/tools/ip-check" 
              onClick={() => setIsOpen(false)}
              className="inline-flex w-max px-3 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-semibold text-sm items-center"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
              Free IP Scan
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
