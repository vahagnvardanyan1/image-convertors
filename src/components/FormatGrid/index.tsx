import { ArrowRight, FileImage, Image as ImageIcon, Globe, Camera } from 'lucide-react';
import { Card } from '../Card';

interface FormatGridProps {
  onNavigate: (route: string) => void;
}

const converters = [
  {
    from: 'PNG',
    to: 'WebP',
    route: '/png-to-webp',
    icon: Globe,
    description: 'Reduce file size by up to 30% while maintaining quality',
    popular: true,
  },
  {
    from: 'JPG',
    to: 'PNG',
    route: '/jpg-to-png',
    icon: ImageIcon,
    description: 'Add transparency support to your images',
    popular: true,
  },
  {
    from: 'WebP',
    to: 'PNG',
    route: '/webp-to-png',
    icon: FileImage,
    description: 'Convert modern WebP to widely supported PNG',
    popular: false,
  },
  {
    from: 'JPG',
    to: 'WebP',
    route: '/jpg-to-webp',
    icon: Globe,
    description: 'Optimize for web with smaller file sizes',
    popular: true,
  },
  {
    from: 'PNG',
    to: 'JPG',
    route: '/png-to-jpg',
    icon: Camera,
    description: 'Remove transparency and reduce file size',
    popular: false,
  },
  {
    from: 'WebP',
    to: 'JPG',
    route: '/webp-to-jpg',
    icon: Camera,
    description: 'Convert to universally compatible JPG format',
    popular: false,
  },
];

export function FormatGrid({ onNavigate }: FormatGridProps) {
  return (
    <section id="format-grid" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Conversion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Select the format conversion you need. Each converter is optimized for the best quality and performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {converters.map(converter => {
            const IconComponent = converter.icon;
            return (
              <Card
                key={`${converter.from}-${converter.to}`}
                className="relative p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer group"
                onClick={() => onNavigate(converter.route)}
              >
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
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="font-bold text-gray-900 mb-2">Need a different format?</h3>
            <p className="text-gray-600 mb-4">We support many more image formats. Upload your image and see all available conversion options.</p>
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
