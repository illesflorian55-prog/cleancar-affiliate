"use client";

import React, { useState } from 'react';
import { CheckCircle2, XCircle, Info, Shield, Zap, Globe, Smartphone, HelpCircle } from 'lucide-react';
import { CTAButton } from './CTAButton';
import currentData from '@/data/current_data.json';

type FeatureType = 'boolean' | 'string' | 'number' | 'rating';

interface Feature {
  id: string;
  name: string;
  icon: React.ReactNode;
  type: FeatureType;
  tooltip: string;
}

const features: Feature[] = [
  { id: 'price', name: 'Starting Price /mo', icon: <span className="font-bold">$</span>, type: 'string', tooltip: 'The lowest available monthly price on their longest plan.' },
  { id: 'servers', name: 'Global Servers', icon: <Globe className="w-4 h-4" />, type: 'string', tooltip: 'Total number of servers worldwide.' },
  { id: 'countries', name: 'Countries', icon: <Globe className="w-4 h-4" />, type: 'number', tooltip: 'Number of countries where servers are physically or virtually located.' },
  { id: 'connections', name: 'Simultaneous Devices', icon: <Smartphone className="w-4 h-4" />, type: 'string', tooltip: 'How many devices you can connect at the exact same time on one account.' },
  { id: 'wireguard', name: 'WireGuard Protocol', icon: <Zap className="w-4 h-4" />, type: 'boolean', tooltip: 'Support for the next-generation, high-speed WireGuard protocol.' },
  { id: 'noLogs', name: 'Audited No-Logs', icon: <Shield className="w-4 h-4" />, type: 'boolean', tooltip: 'Has an independent third-party verified their no-logs claim?' },
  { id: 'netflix', name: 'Netflix US Support', icon: <CheckCircle2 className="w-4 h-4" />, type: 'boolean', tooltip: 'Reliably unblocks the US Netflix library.' },
  { id: 'torrenting', name: 'P2P/Torrenting Allowed', icon: <CheckCircle2 className="w-4 h-4" />, type: 'boolean', tooltip: 'Allows peer-to-peer file sharing on their network.' },
  { id: 'support', name: '24/7 Live Chat', icon: <HelpCircle className="w-4 h-4" />, type: 'boolean', tooltip: 'Is human support available around the clock?' },
];

const matrixData = {
  nordvpn: {
    price: '$3.09',
    servers: '6000+',
    countries: 61,
    connections: '6',
    wireguard: true,
    noLogs: true,
    netflix: true,
    torrenting: true,
    support: true,
  },
  cyberghost: {
    price: '$6.67',
    servers: '3000+',
    countries: 105,
    connections: '8',
    wireguard: false, // Lightway instead
    noLogs: true,
    netflix: true,
    torrenting: true,
    support: true,
  },
  surfshark: {
    price: '$2.19',
    servers: '3200+',
    countries: 100,
    connections: 'Unlimited',
    wireguard: true,
    noLogs: true,
    netflix: true,
    torrenting: true,
    support: true,
  }
};

export function ComparisonMatrix() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const renderValue = (value: any, type: FeatureType) => {
    if (type === 'boolean') {
      return value ? <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto" /> : <XCircle className="w-6 h-6 text-red-500 mx-auto" />;
    }
    return <span className="font-bold text-gray-900 dark:text-white">{value}</span>;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden mb-20">
      <div className="p-8 border-b border-gray-100 dark:border-gray-800 text-center">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-2">Feature Comparison Matrix</h2>
        <p className="text-gray-500">A side-by-side technical breakdown of our top 3 providers.</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="p-6 bg-gray-50 dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 w-1/4">
                <span className="sr-only">Features</span>
              </th>
              {['nordvpn', 'cyberghost', 'surfshark'].map((key) => {
                const provider = (currentData as any)[key];
                return (
                  <th key={key} className="p-6 text-center border-b border-gray-100 dark:border-gray-800 w-1/4">
                    <img src={provider.image} alt={provider.name} className="h-12 object-contain mx-auto mb-4" />
                    <h3 className="font-black text-xl text-gray-900 dark:text-white mb-4">{provider.name}</h3>
                    <CTAButton href={provider.url} text="Get Deal" className="w-full text-sm py-2" />
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, idx) => (
              <tr key={feature.id} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-900' : 'bg-gray-50/50 dark:bg-gray-950/50'}>
                <td className="p-4 border-b border-gray-100 dark:border-gray-800 relative">
                  <div className="flex items-center gap-2 font-semibold text-gray-700 dark:text-gray-300">
                    <div className="text-indigo-500">{feature.icon}</div>
                    {feature.name}
                    <button 
                      onMouseEnter={() => setActiveTooltip(feature.id)}
                      onMouseLeave={() => setActiveTooltip(null)}
                      className="text-gray-400 hover:text-indigo-500 transition-colors cursor-help"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  </div>
                  {activeTooltip === feature.id && (
                    <div className="absolute left-4 top-12 z-10 w-64 p-3 bg-gray-900 text-white text-xs rounded-lg shadow-xl animate-in fade-in zoom-in duration-200">
                      {feature.tooltip}
                      <div className="absolute -top-1 left-4 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  )}
                </td>
                {['nordvpn', 'cyberghost', 'surfshark'].map((provider) => (
                  <td key={`${provider}-${feature.id}`} className="p-4 text-center border-b border-gray-100 dark:border-gray-800">
                    {renderValue((matrixData as any)[provider][feature.id], feature.type)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
