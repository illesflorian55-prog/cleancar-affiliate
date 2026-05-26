import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 my-8">
      <div className="bg-green-50/50 dark:bg-green-900/10 border border-green-200 dark:border-green-900 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-4 flex items-center gap-2">
          <CheckCircle2 className="w-6 h-6" />
          Előnyök
        </h3>
        <ul className="space-y-3">
          {pros.map((pro, index) => (
            <li key={index} className="flex items-start gap-3 text-green-900 dark:text-green-100">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
              <span>{pro}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-red-50/50 dark:bg-red-900/10 border border-red-200 dark:border-red-900 rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-red-800 dark:text-red-400 mb-4 flex items-center gap-2">
          <XCircle className="w-6 h-6" />
          Hátrányok
        </h3>
        <ul className="space-y-3">
          {cons.map((con, index) => (
            <li key={index} className="flex items-start gap-3 text-red-900 dark:text-red-100">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
              <span>{con}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
