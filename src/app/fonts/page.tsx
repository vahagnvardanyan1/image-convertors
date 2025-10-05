/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Type, Sparkles, Ruler } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Font Tools - Free Typography Playground, Font Pairing & Scale Generator | ImageConvertors',
  description: 'Professional font tools for designers and developers. Preview Google Fonts, discover perfect font pairings, and generate typographic scales. Free online typography utilities.',
  keywords: 'font tools, typography, font preview, font pairing, typographic scale, Google Fonts, font generator, CSS fonts, web typography, design tools, fancy text, unicode fonts',
  alternates: {
    canonical: 'https://imageconvertors.com/fonts',
  },
  openGraph: {
    title: 'Font Tools - Free Typography Playground, Font Pairing & Scale Generator | ImageConvertors',
    description: 'Professional font tools for designers and developers. Preview Google Fonts, discover perfect font pairings, and generate typographic scales.',
    url: 'https://imageconvertors.com/fonts',
    siteName: 'ImageConvertors',
    type: 'website',
    images: ['/font-generator.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Font Tools - Free Typography Playground, Font Pairing & Scale Generator | ImageConvertors',
    description: 'Professional font tools for designers and developers. Preview Google Fonts, discover perfect font pairings, and generate typographic scales.',
    images: ['/font-generator.webp'],
  },
};

const features = [
  {
    name: 'Font Preview',
    description: 'Interactive font playground with live preview. Test Google Fonts with custom text, sizes, weights, and styling options.',
    href: '/fonts/preview',
    icon: Type,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Font Pairings',
    description: 'Discover perfect font combinations for your projects. Browse curated pairings with use case recommendations.',
    href: '/fonts/pairings',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Typographic Scale',
    description: 'Generate harmonious font size scales using musical ratios. Export CSS custom properties for your design system.',
    href: '/fonts/scales',
    icon: Ruler,
    color: 'from-orange-500 to-red-500',
  },
];

export default function FontsPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome to Font Tools</h2>
        <p className="text-gray-600 dark:text-gray-400">Explore typography tools to preview fonts, discover pairings, and generate scales for your designs.</p>
      </div>

      {/* Desktop Layout: Image on left, Links on right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Left: Featured Image */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 max-h-[500px]">
          <img src="/font-generator.webp" alt="Font Tools Preview" className="w-full h-full object-cover" />
        </div>

        {/* Right: Feature Links */}
        <div className="grid grid-cols-1 gap-6">
          {features.map(feature => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.name}
                href={feature.href}
                className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${feature.color} shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{feature.name}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 border border-blue-100 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Quick Tips</h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
            <span>Use Font Preview to test Google Fonts with your own content and styling</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
            <span>Browse Font Pairings to find complementary combinations for headings and body text</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
            <span>Generate Typographic Scales with musical ratios for consistent visual hierarchy</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-600 dark:text-red-400 font-bold">•</span>
            <span>Copy CSS code directly to your projects with one click</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
