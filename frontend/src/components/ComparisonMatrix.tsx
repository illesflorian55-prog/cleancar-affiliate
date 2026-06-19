"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, Shield, Zap, Globe, Smartphone, HelpCircle, Download, Tv } from 'lucide-react';
import { CTAButton } from './CTAButton';
import currentData from '@/data/current_data.json';

type FeatureType = 'boolean' | 'string' | 'number';

interface Feature {
  id: string;
  name: string;
  icon: React.ReactNode;
  type: FeatureType;
  tooltip: string;
  winner?: 'nordvpn' | 'surfshark' | 'tie';
}

const features: Feature[] = [
  { id: 'price', name: 'Starting Price /mo', icon: <span className="font-bold text-gray-500">$</span>, type: 'string', tooltip: 'Lowest monthly price on longest plan.', winner: 'surfshark' },
  { id: 'connections', name: 'Simultaneous Devices', icon: <Smartphone className="w-4 h-4 text-indigo-500" />, type: 'string', tooltip: 'Number of devices per account.', winner: 'surfshark' },
  { id: 'servers', name: 'Global Servers', icon: <Globe className="w-4 h-4 text-indigo-500" />, type: 'string', tooltip: 'Total worldwide servers.', winner: 'nordvpn' },
  { id: 'countries', name: 'Server Countries', icon: <Globe className="w-4 h-4 text-indigo-500" />, type: 'number', tooltip: 'Number of countries covered.', winner: 'nordvpn' },
  { id: 'torrenting', name: 'P2P / Torrenting Speed', icon: <Download className="w-4 h-4 text-green-500" />, type: 'string', tooltip: 'Performance for P2P networks.', winner: 'nordvpn' },
  { id: 'streaming', name: 'Expat TV Streaming', icon: <Tv className="w-4 h-4 text-blue-500" />, type: 'string', tooltip: 'Unblocking capabilities for Netflix, Hulu, BBC.', winner: 'surfshark' },
  { id: 'firewalls', name: 'Bypassing Campus Firewalls', icon: <Shield className="w-4 h-4 text-red-500" />, type: 'string', tooltip: 'Obfuscation tech against DPI.', winner: 'surfshark' },
  { id: 'wireguard', name: 'WireGuard/NordLynx', icon: <Zap className="w-4 h-4 text-amber-500" />, type: 'boolean', tooltip: 'Next-gen high speed protocols.', winner: 'tie' },
  { id: 'noLogs', name: 'Audited No-Logs', icon: <Shield className="w-4 h-4 text-indigo-500" />, type: 'boolean', tooltip: 'Independent verification.', winner: 'tie' },
];

const matrixData = {
  nordvpn: {
    price: '$3.99',
    connections: '10 Devices',
    servers: '6000+',
    countries: 111,
    torrenting: 'Exceptional (P2P Optimized)',
    streaming: 'Excellent',
    firewalls: 'Good',
    wireguard: true,
    noLogs: true,
  },
  surfshark: {
    price: '$2.19',
    connections: 'Unlimited',
    servers: '3200+',
    countries: 100,
    torrenting: 'Good',
    streaming: 'Exceptional (Global Nodes)',
    firewalls: 'Exceptional (NoBorders Mode)',
    wireguard: true,
    noLogs: true,
  }
};

export function ComparisonMatrix() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const renderValue = (value: any, type: FeatureType, isWinner: boolean) => {
    if (type === 'boolean') {
      return value ? <CheckCircle2 className={`w-6 h-6 mx-auto ${isWinner ? 'text-green-500' : 'text-gray-400'}`} /> : <XCircle className="w-6 h-6 text-red-500 mx-auto" />;
    }
    return <span className={`font-bold ${isWinner ? 'text-green-600 dark:text-green-400' : 'text-gray-600 dark:text-gray-400'}`}>{value}</span>;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl border-4 border-gray-100 dark:border-gray-800 overflow-hidden mb-20 relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 blur-[100px] opacity-20 pointer-events-none"></div>
      
      <div className="p-8 border-b border-gray-100 dark:border-gray-800 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold tracking-wide uppercase mb-4">
          Head-to-Head Battle
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-2">NordVPN <span className="text-gray-400 font-medium italic mx-2">vs</span> Surfshark</h2>
        <p className="text-gray-500 text-lg">Which industry giant is right for your specific needs?</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px] relative z-10" aria-label="NordVPN vs Surfshark Comparison Matrix">
          <thead>
            <tr>
              <th scope="col" className="p-6 bg-gray-50 dark:bg-gray-950 w-1/3"><span className="sr-only">Features</span></th>
              {['nordvpn', 'surfshark'].map((key) => {
                const provider = (currentData as any)[key];
                return (
                  <th scope="col" key={key} className={`p-6 text-center border-b-4 ${key === 'nordvpn' ? 'border-blue-500' : 'border-teal-400'} w-1/3`}>
                    <img src={provider.image} alt={provider.name} className="h-16 object-contain mx-auto mb-4 drop-shadow-md" />
                    <h3 className="font-black text-2xl text-gray-900 dark:text-white mb-4">{provider.name}</h3>
                    <CTAButton href={provider.url} text={`Get ${provider.name}`} className="w-full text-base py-3 font-bold" />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={feature.id} className={`${idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/50 dark:bg-gray-950/50'} hover:bg-indigo-50/50 transition-colors`}>
                <th scope="row" className="p-5 border-b border-gray-100 dark:border-gray-800 relative font-normal text-left">
                  <div className="flex items-center gap-3 font-semibold text-gray-800 dark:text-gray-200">
                    <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg" aria-hidden="true">{feature.icon}</div>
                    {feature.name}
                    <button 
                      onMouseEnter={() => setActiveTooltip(feature.id)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      onFocus={() => setActiveTooltip(feature.id)}
                      onBlur={() => setActiveTooltip(null)}
                      aria-label={`Learn more about ${feature.name}`}
                      className="text-gray-400 hover:text-indigo-500 transition-colors cursor-help ml-auto focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
                    >
                      <Info className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                  {activeTooltip === feature.id && (
                    <div role="tooltip" className="absolute left-1/4 top-14 z-20 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl animate-in fade-in zoom-in duration-200">
                      {feature.tooltip}
                    </div>
                  )}
                </th>
                {['nordvpn', 'surfshark'].map((provider) => {
                  const isWinner = feature.winner === provider || feature.winner === 'tie';
                  return (
                    <td key={`${provider}-${feature.id}`} className={`p-5 text-center border-b border-gray-100 dark:border-gray-800 ${isWinner ? 'bg-green-50/30 dark:bg-green-900/10' : ''}`}>
                      {renderValue((matrixData as any)[provider][feature.id], feature.type, isWinner)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
