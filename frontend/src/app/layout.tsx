import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PromoBanner } from '@/components/PromoBanner';
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The VPN Shield - Top VPNs 2026",
  description: "Find the best VPNs for privacy, streaming, and security. Honest reviews and exclusive discounts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950">
        <PromoBanner />
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-12 text-center text-sm text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <p>&copy; {new Date().getFullYear()} The VPN Shield. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/guides" className="hover:text-blue-400 transition-colors">Guides & Tutorials</a>
              <a href="/unblock" className="hover:text-purple-400 transition-colors">Global Unblocking Directory</a>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
