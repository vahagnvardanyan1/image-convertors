import { Zap, Shield, FileImage, Heart } from 'lucide-react';
import { Card } from '../Card';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Convert images in seconds with our optimized processing engine. No waiting, just instant results.',
  },
  {
    icon: Shield,
    title: 'Completely Secure',
    description: 'All conversions happen in your browser. Your images never leave your device, ensuring complete privacy.',
  },
  {
    icon: FileImage,
    title: 'Multiple Formats',
    description: 'Support for PNG, JPG, WebP, GIF and more. Convert between any formats with maintained quality.',
  },
  {
    icon: Heart,
    title: '100% Free',
    description: 'No subscriptions, no hidden fees, no limits. Use our image converter as much as you need, completely free.',
  },
];

export function Features() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 sm:py-16 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose Our Image Converter?</h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Built with modern web technologies to provide the fastest, most secure, and user-friendly image conversion experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="p-5 sm:p-6 text-center border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl dark:hover:shadow-blue-500/20 transition-all duration-200 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 rounded-xl sm:rounded-2xl mb-3 sm:mb-4 shadow-md">
                  <IconComponent className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-base sm:text-lg">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">1M+</div>
              <div className="text-blue-100 text-sm sm:text-base">Images Converted</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">15+</div>
              <div className="text-blue-100 text-sm sm:text-base">Supported Formats</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">99.9%</div>
              <div className="text-blue-100 text-sm sm:text-base">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
