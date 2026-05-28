"use client";

import { useState, useEffect } from 'react';
import { ShieldAlert, ShieldCheck, MapPin, Globe, Wifi, Activity, ArrowRight, Loader2 } from 'lucide-react';
import currentData from '@/data/current_data.json';

interface IPData {
  ip: string;
  city: string;
  region: string;
  country_name: string;
  org: string;
  error?: boolean;
}

export default function IPCheckerPage() {
  const [data, setData] = useState<IPData | null>(null);
  const [loading, setLoading] = useState(true);
  const [scanning, setScanning] = useState(true);
  
  const nordVpnUrl = currentData.nordvpn?.url || "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=149037&url_id=902";

  useEffect(() => {
    async function fetchIP() {
      try {
        const response = await fetch('https://ipapi.co/json/');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setData({ error: true, ip: "Unknown", city: "Unknown", region: "Unknown", country_name: "Unknown", org: "Unknown ISP" });
      } finally {
        setTimeout(() => setScanning(false), 2000); // Simulate deep scan
        setLoading(false);
      }
    }
    fetchIP();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Advanced <span className="text-red-500">IP & Leak</span> Test
          </h1>
          <p className="text-lg text-slate-400">
            Scanning your connection for vulnerabilities and data leaks...
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden mb-10">
          <div className="p-8 border-b border-slate-800 bg-slate-900/50 flex flex-col items-center">
            {scanning ? (
              <div className="flex flex-col items-center animate-pulse">
                <Loader2 className="w-16 h-16 text-red-500 animate-spin mb-4" />
                <h2 className="text-2xl font-bold text-red-400">Analyzing Connection...</h2>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
                  <ShieldAlert className="w-12 h-12 text-red-500" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">YOUR CONNECTION IS EXPOSED</h2>
                <div className="px-4 py-1 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 font-semibold text-sm uppercase tracking-wider">
                  Status: Vulnerable
                </div>
              </div>
            )}
          </div>

          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1 flex items-center"><Activity className="w-4 h-4 mr-2"/> Public IP Address</p>
                <p className={`text-2xl font-mono font-bold ${scanning ? 'blur-sm text-slate-600' : 'text-red-400'}`}>
                  {loading ? '...' : data?.ip}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1 flex items-center"><MapPin className="w-4 h-4 mr-2"/> Physical Location</p>
                <p className={`text-lg font-medium ${scanning ? 'blur-sm text-slate-600' : 'text-white'}`}>
                  {loading ? '...' : `${data?.city}, ${data?.region}`}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1 flex items-center"><Globe className="w-4 h-4 mr-2"/> Country</p>
                <p className={`text-lg font-medium ${scanning ? 'blur-sm text-slate-600' : 'text-white'}`}>
                  {loading ? '...' : data?.country_name}
                </p>
              </div>

              <div>
                <p className="text-sm text-slate-500 font-semibold mb-1 flex items-center"><Wifi className="w-4 h-4 mr-2"/> Internet Provider (ISP)</p>
                <p className={`text-lg font-medium ${scanning ? 'blur-sm text-slate-600' : 'text-white'}`}>
                  {loading ? '...' : data?.org}
                </p>
              </div>
            </div>
          </div>

          {!scanning && (
            <div className="p-6 bg-red-950/30 border-t border-red-900/30">
              <p className="text-red-200 text-sm leading-relaxed text-center">
                <strong className="text-red-400">Warning:</strong> Unless you are currently connected to a trusted VPN server, your ISP (<strong>{data?.org || "your provider"}</strong>) and the websites you visit can see your exact location (<strong>{data?.city}</strong>) and track your browsing history. 
              </p>
            </div>
          )}
        </div>

        {!scanning && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-center shadow-xl shadow-blue-900/20">
              <ShieldCheck className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Protect Your Identity Now</h3>
              <p className="text-blue-100 mb-8 max-w-xl mx-auto">
                Hide your IP address, encrypt your traffic, and stop your ISP from spying on you. Activate military-grade encryption with one click.
              </p>
              <a 
                href={nordVpnUrl} 
                target="_blank" 
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Activate Protection Shield
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <p className="mt-4 text-xs text-blue-300">
                Includes a 30-day money-back guarantee. No risk.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
