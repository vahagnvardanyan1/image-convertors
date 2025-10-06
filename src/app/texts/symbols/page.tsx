'use client';

import { useState } from 'react';
import { DynamicMetadata } from '@/components/DynamicMetadata';
import { symbolCategories, type SymbolCategory, searchSymbols } from '@/lib/symbolsData';
import { copyToClipboard } from '@/lib/colorUtils';
import { Search, Copy, Check } from 'lucide-react';

const metadata = {
  title: 'Symbol Library - 300+ Unicode Symbols & Special Characters | ImageConvertors',
  description:
    'Explore and copy over 300 special Unicode symbols and characters instantly. Browse mathematical symbols, arrows, currency signs, punctuation marks, geometric shapes, Greek letters, technical symbols, and more. One-click copy to clipboard for easy use in documents, websites, and projects.',
  keywords: [
    'unicode symbols',
    'special characters',
    'copy symbols',
    'symbol library',
    'unicode characters',
    'symbol picker',
    'mathematical symbols',
    'math symbols',
    'arrows symbols',
    'arrow characters',
    'currency symbols',
    'currency signs',
    'dollar sign',
    'euro sign',
    'pound sign',
    'yen sign',
    'punctuation marks',
    'special punctuation',
    'geometric shapes',
    'shape symbols',
    'circle symbols',
    'square symbols',
    'triangle symbols',
    'star symbols',
    'Greek letters',
    'Greek alphabet',
    'alpha beta gamma',
    'technical symbols',
    'keyboard symbols',
    'copyright symbol',
    'trademark symbol',
    'degree symbol',
    'infinity symbol',
    'checkmark symbol',
    'bullet points',
    'symbol copy paste',
    'unicode copy paste',
    'special characters for documents',
    'symbols for website',
  ],
  openGraph: {
    title: 'Symbol Library - 300+ Unicode Symbols & Special Characters | ImageConvertors',
    description:
      'Explore and copy over 300 special Unicode symbols and characters instantly. Browse mathematical symbols, arrows, currency signs, punctuation marks, geometric shapes, Greek letters, technical symbols, and more. One-click copy to clipboard for easy use in your projects.',
    images: ['/symbol.webp'],
  },
};

export default function SymbolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SymbolCategory>('All');
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  const filteredSymbols = searchSymbols(searchQuery, selectedCategory);

  const handleCopySymbol = async (symbol: string) => {
    await copyToClipboard(symbol);
    setCopiedSymbol(symbol);
    setTimeout(() => setCopiedSymbol(null), 1500);
  };

  return (
    <div>
      <DynamicMetadata title={metadata.title} description={metadata.description} keywords={metadata.keywords} openGraph={metadata.openGraph} />

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Symbol Library</h2>
        <p className="text-gray-600 dark:text-gray-400">Browse and copy special Unicode symbols and characters for your projects</p>
      </div>

      {/* Search and Filters */}
      <div className="sticky top-16 z-10 bg-gray-50 dark:bg-gray-800 pb-4 mb-6 space-y-4 -mx-4 px-4 pt-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-md">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search symbols by name or keyword..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {symbolCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredSymbols.length}</span> symbol{filteredSymbols.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Symbols Grid */}
      {filteredSymbols.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filteredSymbols.map((item, index) => (
            <button
              key={`${item.symbol}-${index}`}
              onClick={() => handleCopySymbol(item.symbol)}
              className="relative group bg-white dark:bg-gray-700 rounded-lg p-6 border-2 border-gray-200 dark:border-gray-600 hover:border-purple-500 dark:hover:border-purple-400 transition-all hover:scale-105 hover:shadow-xl"
              title={`${item.name} - Click to copy`}
            >
              {/* Symbol Display */}
              <div className="text-5xl text-center mb-3 text-gray-800 dark:text-gray-100 font-mono">{item.symbol}</div>

              {/* Symbol Info */}
              <div className="text-center">
                <p className="text-xs font-semibold text-gray-900 dark:text-white truncate">{item.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.unicode}</p>
              </div>

              {/* Copy Button (on hover) */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-purple-600 text-white p-1.5 rounded-full">
                  <Copy size={14} />
                </div>
              </div>

              {/* Copy Indicator */}
              {copiedSymbol === item.symbol && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-500/90 rounded-lg">
                  <div className="flex flex-col items-center gap-1 text-white">
                    <Check size={28} />
                    <span className="text-sm font-semibold">Copied!</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600 dark:text-gray-400">No symbols found</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Try adjusting your search or filter</p>
        </div>
      )}

      {/* Category Overview */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 border border-purple-100 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">⚡ Quick Guide</h3>
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>Click any symbol to copy it instantly to your clipboard</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <span>Search by symbol name or keyword for quick access</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
              <span>Use category filters to browse specific symbol types</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
              <span>Unicode values are displayed for reference</span>
            </li>
          </ul>
        </div>

        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-700 dark:to-gray-600 border border-blue-100 dark:border-gray-600">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">📚 Symbol Categories</h3>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <span className="font-semibold text-blue-600 dark:text-blue-400">Mathematics:</span> ±, ∞, √, ∑
            </div>
            <div>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Arrows:</span> ←, →, ↑, ↓
            </div>
            <div>
              <span className="font-semibold text-blue-600 dark:text-blue-400">Currency:</span> $, €, £, ¥
            </div>
            <div>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Shapes:</span> ■, ●, ▲, ★
            </div>
            <div>
              <span className="font-semibold text-blue-600 dark:text-blue-400">Punctuation:</span> •, ©, ®, ™
            </div>
            <div>
              <span className="font-semibold text-cyan-600 dark:text-cyan-400">Misc:</span> ✓, ✗, ☐, ☑
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
