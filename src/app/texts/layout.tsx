'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Type, Smile, Hash, Home, Sparkles, Ruler, FileJson, GitCompare, FileSearch } from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/texts', icon: Home },
  { name: 'Font Generator', href: '/texts/fonts', icon: Type },
  { name: 'Emojis', href: '/texts/emojis', icon: Smile },
  { name: 'Symbols', href: '/texts/symbols', icon: Hash },
  { name: 'JSON Validator', href: '/texts/json-validator', icon: FileJson },
  { name: 'JSON Comparer', href: '/texts/json-comparer', icon: GitCompare },
  { name: 'JSON Parser', href: '/texts/json-parser', icon: FileSearch },
  { name: 'Font Preview', href: '/texts/fonts/preview', icon: Type },
  { name: 'Font Pairings', href: '/texts/fonts/pairings', icon: Sparkles },
  { name: 'Typographic Scale', href: '/texts/fonts/scales', icon: Ruler },
];

export default function TextsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="mb-4 sm:mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Text Tools Hub - Fonts, Emojis & Symbols</h1>
            <p className="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">Explore typography, emojis, and special characters for your creative projects</p>
          </div>

          {/* Responsive Navigation */}
          <nav className="flex flex-wrap gap-2">
            {navigation.map(item => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-2.5 sm:py-2 rounded-lg text-[11px] sm:text-xs lg:text-sm font-medium transition-all whitespace-nowrap touch-manipulation active:scale-95',
                    isActive ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50' : 'text-gray-700 hover:bg-white hover:shadow-md active:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800',
                  )}
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0" />
                  <span className="truncate max-w-[100px] sm:max-w-none">{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-4 sm:p-6 lg:p-8">{children}</div>
      </div>
    </div>
  );
}
