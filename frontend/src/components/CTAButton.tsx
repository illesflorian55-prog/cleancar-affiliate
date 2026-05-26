import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CTAButtonProps {
  href: string;
  text: string;
  className?: string;
}

export function CTAButton({ href, text, className = '' }: CTAButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-white transition-all bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:from-blue-500 hover:to-indigo-500 shadow-lg hover:shadow-indigo-500/30 transform hover:-translate-y-1 ${className}`}
    >
      {text}
      <ExternalLink className="w-5 h-5" />
    </a>
  );
}
