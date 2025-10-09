import Link from 'next/link';
import { Type, Smile, Hash, FileJson, GitCompare, FileSearch } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Text Tools Hub - Fonts, Emojis, Symbols & JSON Tools | ImageConvertors',
  description:
    'Comprehensive text tools including font previews, emoji browsers with device support, special symbols, JSON validator, JSON comparer, and JSON parser. Find the perfect typography, characters, and data tools for your projects.',
  keywords:
    'text tools, fonts, emojis, symbols, unicode characters, typography, font preview, emoji picker, special characters, text generator, json validator, json comparer, json parser, json formatter, json diff, json explorer',
  alternates: {
    canonical: 'https://imageconvertors.com/texts',
  },
  openGraph: {
    title: 'Text Tools Hub - Fonts, Emojis, Symbols & JSON Tools | ImageConvertors',
    description: 'Comprehensive text tools including font previews, emoji browsers with device support, special symbols, JSON validator, JSON comparer, and JSON parser.',
    url: 'https://imageconvertors.com/texts',
    siteName: 'ImageConvertors',
    type: 'website',
  },
};

const features = [
  {
    name: 'Font Generator',
    description: 'Generate stylized text with Unicode fonts. Create fancy text for social media, bios, and more. Copy and paste styled fonts instantly.',
    href: '/texts/fonts',
    icon: Type,
    color: 'from-blue-500 to-cyan-500',
    count: '15+',
    countLabel: 'Font Styles',
  },
  {
    name: 'Emojis',
    description: 'Browse thousands of emojis with device-specific rendering. Filter by category and see how emojis appear on Apple, Google, Microsoft, and Samsung devices.',
    href: '/texts/emojis',
    icon: Smile,
    color: 'from-yellow-500 to-orange-500',
    count: '100+',
    countLabel: 'Emojis',
  },
  {
    name: 'Symbols',
    description: 'Explore special Unicode symbols and characters. Copy mathematical symbols, arrows, shapes, currency signs, and more for your projects.',
    href: '/texts/symbols',
    icon: Hash,
    color: 'from-purple-500 to-pink-500',
    count: '100+',
    countLabel: 'Symbols',
  },
  {
    name: 'JSON Validator',
    description: 'Validate and format JSON data with detailed error reporting. Perfect for debugging APIs, configuration files, and data validation.',
    href: '/texts/json-validator',
    icon: FileJson,
    color: 'from-green-500 to-emerald-500',
    count: 'Free',
    countLabel: 'Online Tool',
  },
  {
    name: 'JSON Comparer',
    description: 'Compare two JSON objects and visualize differences. Track added, removed, and modified fields with color-coded highlighting.',
    href: '/texts/json-comparer',
    icon: GitCompare,
    color: 'from-indigo-500 to-blue-500',
    count: 'Free',
    countLabel: 'Compare Tool',
  },
  {
    name: 'JSON Parser',
    description: 'Parse and explore JSON data with an interactive tree view. Navigate nested structures, view data types, and copy any value instantly.',
    href: '/texts/json-parser',
    icon: FileSearch,
    color: 'from-teal-500 to-emerald-500',
    count: 'Free',
    countLabel: 'Parser Tool',
  },
];

export default function TextsPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome to Text Tools Hub</h2>
        <p className="text-gray-600 dark:text-gray-400">Everything you need for typography, emojis, special characters, and JSON data processing in one place.</p>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {features.map(feature => {
          const Icon = feature.icon;
          return (
            <Link
              key={feature.name}
              href={feature.href}
              className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`flex-shrink-0 p-4 rounded-lg bg-gradient-to-br ${feature.color} shadow-lg mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">{feature.name}</h3>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{feature.count}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">{feature.countLabel}</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
          );
        })}
      </div>

      {/* Quick Tips Section */}
      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 border border-blue-100 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">✨ Features Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">🔤 Font Tools</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Live font preview</li>
              <li>• Font pairing suggestions</li>
              <li>• Typographic scales</li>
              <li>• Unicode styled text</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-yellow-600 dark:text-yellow-400 mb-2">😀 Emoji Browser</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• 8 category filters</li>
              <li>• Device-specific rendering</li>
              <li>• Apple, Google, Microsoft, Samsung</li>
              <li>• Copy to clipboard</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">⚡ Special Symbols</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Mathematical symbols</li>
              <li>• Arrows & shapes</li>
              <li>• Currency & punctuation</li>
              <li>• Quick search & copy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">📋 JSON Validator</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Validate JSON syntax</li>
              <li>• Format with indentation</li>
              <li>• Detailed error messages</li>
              <li>• Statistics & data info</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-indigo-600 dark:text-indigo-400 mb-2">🔄 JSON Comparer</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Compare two JSON files</li>
              <li>• Color-coded differences</li>
              <li>• Track changes & modifications</li>
              <li>• Deep nested comparison</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-teal-600 dark:text-teal-400 mb-2">🔍 JSON Parser</h4>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              <li>• Interactive tree view</li>
              <li>• Data type indicators</li>
              <li>• Navigate nested structures</li>
              <li>• Copy any value instantly</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
