/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Palette, Droplet, Blend, ArrowLeftRight } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Color Tools - Free Online Color Picker, Palette Generator & Converter',
  description:
    'Professional color tools for designers and developers. Color picker, palette generator, gradient creator, and color format converter. Convert between HEX, RGB, HSL, and more. Free online color utilities.',
  keywords: 'color tools, color picker, color palette, gradient generator, color converter, HEX to RGB, RGB to HSL, color utilities, design tools, color schemes',
  openGraph: {
    title: 'Color Tools - Free Online Color Picker, Palette Generator & Converter',
    description: 'Professional color tools for designers and developers. Color picker, palette generator, gradient creator, and color format converter.',
    type: 'website',
  },
};

const features = [
  {
    name: 'Color Picker',
    description: 'Choose and explore colors with an interactive color picker. Get instant color codes in multiple formats.',
    href: '/colors/picker',
    icon: Droplet,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Color Palettes',
    description: 'Create, save, and manage beautiful color palettes. Browse predefined palettes or build your own.',
    href: '/colors/palettes',
    icon: Palette,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Gradient Generator',
    description: 'Generate stunning gradients between colors. Preview and copy CSS code for your projects.',
    href: '/colors/gradients',
    icon: Blend,
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Color Converter',
    description: 'Convert colors between HEX, RGB, HSL, and more formats. Perfect for cross-platform development.',
    href: '/colors/converter',
    icon: ArrowLeftRight,
    color: 'from-green-500 to-teal-500',
  },
];

export default function ColorsPage() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Welcome to Colors</h2>
        <p className="text-gray-600 dark:text-gray-400">Select a tool below to start working with colors, palettes, and gradients.</p>
      </div>

      {/* Desktop Layout: Image on left, Links on right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Left: Featured Image */}
        <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700">
          <img src="/color-picker.jpg" alt="Color Picker Tool Preview" className="w-full h-full object-cover" />
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
            <span>Use the Color Picker to find the perfect color for your project</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
            <span>Save your favorite color combinations in Palettes for easy access</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-orange-600 dark:text-orange-400 font-bold">•</span>
            <span>Generate smooth gradients and copy CSS code directly to your clipboard</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-600 dark:text-green-400 font-bold">•</span>
            <span>Convert between different color formats with the Color Converter</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
