'use client';

import { Shield, Lock, Zap, Award } from 'lucide-react';

export function TrustIndicators() {
  const indicators = [
    { icon: Shield, text: '100% Secure' },
    { icon: Lock, text: 'Privacy First' },
    { icon: Zap, text: 'Lightning Fast' },
    { icon: Award, text: 'Trusted Worldwide' },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 py-4 sm:py-6 px-4">
      {indicators.map((indicator, index) => {
        const Icon = indicator.icon;
        return (
          <div key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 dark:text-green-400" />
            <span className="text-xs sm:text-sm font-medium">{indicator.text}</span>
          </div>
        );
      })}
    </div>
  );
}


