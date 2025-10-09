'use client';
import {
  ArrowRight,
  FileImage,
  Image as ImageIcon,
  Globe,
  Camera,
  FileText,
  Merge,
  Split,
  Info,
  Palette,
  Droplet,
  Blend,
  Shuffle,
  Type,
  Sparkles,
  Ruler,
  Smile,
  Hash,
  Eraser,
  Maximize2,
  QrCode,
} from 'lucide-react';
import Link from 'next/link';
import { Card } from '../Card';

const converters = [
  {
    from: 'Remove',
    to: 'Background',
    route: '/remove-background',
    icon: Eraser,
    description: 'Remove image backgrounds automatically with AI technology',
    popular: true,
    category: 'image',
  },
  {
    from: 'PNG',
    to: 'WebP',
    route: '/png-to-webp',
    icon: Globe,
    description: 'Reduce file size by up to 30% while maintaining quality',
    popular: true,
    category: 'image',
  },
  {
    from: 'JPG',
    to: 'PNG',
    route: '/jpg-to-png',
    icon: ImageIcon,
    description: 'Add transparency support to your images',
    popular: true,
    category: 'image',
  },
  {
    from: 'WebP',
    to: 'PNG',
    route: '/webp-to-png',
    icon: FileImage,
    description: 'Convert modern WebP to widely supported PNG',
    popular: false,
    category: 'image',
  },
  {
    from: 'JPG',
    to: 'WebP',
    route: '/jpg-to-webp',
    icon: Globe,
    description: 'Optimize for web with smaller file sizes',
    popular: true,
    category: 'image',
  },
  {
    from: 'PNG',
    to: 'JPG',
    route: '/png-to-jpg',
    icon: Camera,
    description: 'Remove transparency and reduce file size',
    popular: false,
    category: 'image',
  },
  {
    from: 'WebP',
    to: 'JPG',
    route: '/webp-to-jpg',
    icon: Camera,
    description: 'Convert to universally compatible JPG format',
    popular: false,
    category: 'image',
  },
  {
    from: 'HEIC',
    to: 'JPG',
    route: '/heic-to-jpg',
    icon: Camera,
    description: 'Convert Apple HEIC photos to JPG format',
    popular: true,
    category: 'image',
  },
  {
    from: 'HEIC',
    to: 'PNG',
    route: '/heic-to-png',
    icon: ImageIcon,
    description: 'Convert HEIC to PNG with transparency support',
    popular: false,
    category: 'image',
  },
  {
    from: 'HEIC',
    to: 'WebP',
    route: '/heic-to-webp',
    icon: Globe,
    description: 'Convert HEIC to modern WebP format',
    popular: false,
    category: 'image',
  },
  {
    from: 'HEIC',
    to: 'PDF',
    route: '/heic-to-pdf',
    icon: FileText,
    description: 'Convert Apple HEIC photos to PDF documents',
    popular: false,
    category: 'image',
  },
  {
    from: 'PDF',
    to: 'JPG',
    route: '/pdf-to-jpg',
    icon: FileText,
    description: 'Extract PDF pages as high-quality JPG images',
    popular: true,
    category: 'pdf',
  },
  {
    from: 'PDF',
    to: 'PNG',
    route: '/pdf-to-png',
    icon: FileText,
    description: 'Convert PDF pages to PNG with transparency support',
    popular: true,
    category: 'pdf',
  },
  {
    from: 'Images',
    to: 'PDF',
    route: '/images-to-pdf',
    icon: FileImage,
    description: 'Combine multiple images into a single PDF document',
    popular: true,
    category: 'pdf',
  },
  {
    from: 'PNG',
    to: 'PDF',
    route: '/png-to-pdf',
    icon: FileImage,
    description: 'Convert PNG images to PDF with transparency support',
    popular: true,
    category: 'pdf',
  },
  {
    from: 'JPG',
    to: 'PDF',
    route: '/jpg-to-pdf',
    icon: FileImage,
    description: 'Convert JPG images to PDF with optimized quality',
    popular: true,
    category: 'pdf',
  },
  {
    from: 'WebP',
    to: 'PDF',
    route: '/webp-to-pdf',
    icon: FileImage,
    description: 'Convert WebP images to PDF with excellent compression',
    popular: false,
    category: 'pdf',
  },
  {
    from: 'Merge',
    to: 'PDF',
    route: '/merge-pdf',
    icon: Merge,
    description: 'Combine multiple PDF files into one document',
    popular: false,
    category: 'pdf',
  },
  {
    from: 'Split',
    to: 'PDF',
    route: '/split-pdf',
    icon: Split,
    description: 'Extract specific pages or split PDF into multiple files',
    popular: false,
    category: 'pdf',
  },
  {
    from: 'Crop',
    to: 'Image',
    route: '/crop-image',
    icon: ImageIcon,
    description: 'Crop, resize, and rotate images with precision controls',
    popular: true,
    category: 'image',
  },
  {
    from: 'Resize',
    to: 'Image',
    route: '/resize-image',
    icon: Maximize2,
    description: 'Resize images by percentage, pixels, or presets',
    popular: true,
    category: 'image',
  },
  {
    from: 'QR Code',
    to: 'Generator',
    route: '/qr-code-generator',
    icon: QrCode,
    description: 'Create custom QR codes for URLs, WiFi, contacts, and more',
    popular: true,
    category: 'image',
  },
  {
    from: 'Analyze',
    to: 'PDF',
    route: '/pdf-info',
    icon: Info,
    description: 'View PDF metadata, properties, and detailed information',
    popular: false,
    category: 'pdf',
  },
  {
    from: 'Color',
    to: 'Picker',
    route: '/colors/picker',
    icon: Droplet,
    description: 'Pick colors and get instant HEX, RGB, HSL format conversions',
    popular: true,
    category: 'colors',
  },
  {
    from: 'Color',
    to: 'Palettes',
    route: '/colors/palettes',
    icon: Palette,
    description: 'Generate beautiful color palettes with complementary schemes',
    popular: true,
    category: 'colors',
  },
  {
    from: 'Gradient',
    to: 'Generator',
    route: '/colors/gradients',
    icon: Blend,
    description: 'Create stunning gradients with CSS and Tailwind code',
    popular: true,
    category: 'colors',
  },
  {
    from: 'Color',
    to: 'Converter',
    route: '/colors/converter',
    icon: Shuffle,
    description: 'Convert between HEX, RGB, HSL, and all color formats',
    popular: false,
    category: 'colors',
  },
  {
    from: 'Font',
    to: 'Preview',
    route: '/texts/fonts/preview',
    icon: Type,
    description: 'Test Google Fonts with live preview and customization options',
    popular: true,
    category: 'fonts',
  },
  {
    from: 'Font',
    to: 'Pairings',
    route: '/texts/fonts/pairings',
    icon: Sparkles,
    description: 'Discover perfect font combinations with curated pairings',
    popular: true,
    category: 'fonts',
  },
  {
    from: 'Typographic',
    to: 'Scale',
    route: '/texts/fonts/scales',
    icon: Ruler,
    description: 'Generate harmonious font size systems using musical ratios',
    popular: true,
    category: 'fonts',
  },
  {
    from: 'Emoji',
    to: 'Browser',
    route: '/texts/emojis',
    icon: Smile,
    description: 'Browse, search, and copy emojis from our comprehensive collection',
    popular: true,
    category: 'texts',
  },
  {
    from: 'Symbol',
    to: 'Browser',
    route: '/texts/symbols',
    icon: Hash,
    description: 'Find and copy special symbols, characters, and Unicode glyphs',
    popular: true,
    category: 'texts',
  },
];

export function FormatGrid() {
  const imageConverters = converters.filter(c => c.category === 'image');
  const pdfConverters = converters.filter(c => c.category === 'pdf');
  const colorTools = converters.filter(c => c.category === 'colors');
  const fontTools = converters.filter(c => c.category === 'fonts');
  const textTools = converters.filter(c => c.category === 'texts');

  const renderConverterCard = (converter: (typeof converters)[0]) => {
    const IconComponent = converter.icon;
    return (
      <Link key={`${converter.from}-${converter.to}`} href={converter.route}>
        <Card className="relative p-4 sm:p-5 lg:p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg dark:hover:shadow-blue-500/20 transition-all duration-200 cursor-pointer group active:scale-[0.98] touch-manipulation">
          {converter.popular && (
            <div className="absolute -top-2.5 sm:-top-3 left-4 sm:left-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium shadow-md">Popular</span>
            </div>
          )}

          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-1">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-200 flex-shrink-0">
                <IconComponent className="text-gray-600 dark:text-gray-300 group-hover:text-white" size={18} />
              </div>
              <div className="text-left min-w-0">
                <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base truncate">
                  {converter.from} → {converter.to}
                </div>
              </div>
            </div>
            <ArrowRight className="text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 flex-shrink-0" size={18} />
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2">{converter.description}</p>

          <div className="flex items-center justify-between gap-2">
            <div className="flex space-x-1.5 sm:space-x-2 min-w-0">
              <span className="px-2 py-0.5 sm:py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-[10px] sm:text-xs truncate">{converter.from}</span>
              <ArrowRight size={10} className="text-gray-400 dark:text-gray-600 mt-1 flex-shrink-0" />
              <span className="px-2 py-0.5 sm:py-1 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white rounded text-[10px] sm:text-xs truncate">
                {converter.to}
              </span>
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap hidden sm:inline">Click to convert</span>
          </div>
        </Card>
      </Link>
    );
  };

  return (
    <section id="format-grid" className="bg-white dark:bg-gray-900 py-12 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 px-4">Choose Your Conversion</h2>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            Select the format conversion you need. Each converter is optimized for the best quality and performance.
          </p>
        </div>

        {/* Image Converters */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
            <ImageIcon className="mr-2 text-blue-600 dark:text-blue-400" size={20} />
            Image Converters
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{imageConverters.map(renderConverterCard)}</div>
        </div>

        {/* PDF Tools */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
            <FileText className="mr-2 text-red-600 dark:text-red-400" size={20} />
            PDF Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{pdfConverters.map(renderConverterCard)}</div>
        </div>

        {/* Color Tools */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
            <Palette className="mr-2 text-purple-600 dark:text-purple-400" size={20} />
            Color Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{colorTools.map(renderConverterCard)}</div>
        </div>

        {/* Font Tools */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
            <Type className="mr-2 text-orange-600 dark:text-orange-400" size={20} />
            Font Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{fontTools.map(renderConverterCard)}</div>
        </div>

        {/* Text Tools */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6 flex items-center">
            <Sparkles className="mr-2 text-green-600 dark:text-green-400" size={20} />
            Text & Symbol Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">{textTools.map(renderConverterCard)}</div>
        </div>

        <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Explore Color Tools */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-purple-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center text-base sm:text-lg">
                <Palette className="mr-2 flex-shrink-0" size={20} />
                Explore Color Tools
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Discover our complete suite of color utilities for designers and developers.</p>
              <Link
                href="/colors"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95 touch-manipulation"
              >
                View All Color Tools
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Explore Font Tools */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center text-base sm:text-lg">
                <Type className="mr-2 flex-shrink-0" size={20} />
                Explore Font Tools
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Master typography with our font preview, pairing, and scale generators.</p>
              <Link
                href="/texts/fonts"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95 touch-manipulation"
              >
                View All Font Tools
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>

            {/* Explore Text Tools */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-green-100">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center text-base sm:text-lg">
                <Sparkles className="mr-2 flex-shrink-0" size={20} />
                Explore Text Tools
              </h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">Access emojis, symbols, and special characters for your projects.</p>
              <Link
                href="/texts"
                className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200 text-sm sm:text-base w-full sm:w-auto justify-center active:scale-95 touch-manipulation"
              >
                View All Text Tools
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            {/* Learn More */}
            <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-6 sm:p-8">
              <h3 className="font-bold text-gray-900 mb-2 text-base sm:text-lg">Need a different format?</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">We support many more image and PDF formats. Upload your files and see all available conversion options.</p>
              <button
                onClick={() => {
                  const element = document.getElementById('how-to');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Learn More
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
