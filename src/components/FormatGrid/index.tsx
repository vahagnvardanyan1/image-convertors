'use client';
import { ArrowRight, FileImage, Image as ImageIcon, Globe, Camera, FileText, Merge, Split, Info } from 'lucide-react';
import Link from 'next/link';
import { Card } from '../Card';

const converters = [
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
    from: 'Analyze',
    to: 'PDF',
    route: '/pdf-info',
    icon: Info,
    description: 'View PDF metadata, properties, and detailed information',
    popular: false,
    category: 'pdf',
  },
];

export function FormatGrid() {
  const imageConverters = converters.filter(c => c.category === 'image');
  const pdfConverters = converters.filter(c => c.category === 'pdf');

  const renderConverterCard = (converter: (typeof converters)[0]) => {
    const IconComponent = converter.icon;
    return (
      <Link key={`${converter.from}-${converter.to}`} href={converter.route}>
        <Card className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer group">
          {converter.popular && (
            <div className="absolute -top-3 left-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">Popular</span>
            </div>
          )}

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-200">
                <IconComponent className="text-gray-600 group-hover:text-white" size={20} />
              </div>
              <div className="text-left">
                <div className="font-bold text-gray-900">
                  {converter.from} → {converter.to}
                </div>
              </div>
            </div>
            <ArrowRight className="text-gray-400 group-hover:text-blue-600 transition-colors duration-200" size={20} />
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4">{converter.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex space-x-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">{converter.from}</span>
              <ArrowRight size={12} className="text-gray-400 mt-1" />
              <span className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded text-xs">{converter.to}</span>
            </div>
            <span className="text-xs text-gray-500">Click to convert</span>
          </div>
        </Card>
      </Link>
    );
  };

  return (
    <section id="format-grid" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Choose Your Conversion</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Select the format conversion you need. Each converter is optimized for the best quality and performance.</p>
        </div>

        {/* Image Converters */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <ImageIcon className="mr-2" size={24} />
            Image Converters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{imageConverters.map(renderConverterCard)}</div>
        </div>

        {/* PDF Tools */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <FileText className="mr-2" size={24} />
            PDF Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{pdfConverters.map(renderConverterCard)}</div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 mb-2">Need a different format?</h3>
            <p className="text-gray-600 mb-4">We support many more image and PDF formats. Upload your files and see all available conversion options.</p>
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
    </section>
  );
}
