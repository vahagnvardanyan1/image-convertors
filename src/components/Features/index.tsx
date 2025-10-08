import { Zap, Shield, FileImage, Heart } from 'lucide-react';
import { Card } from '../Card';
import { Section } from '../Section';
import { cn } from '@/lib/utils';
import { designTokens, getGradientClasses } from '@/styles/design-tokens';

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
    <Section background="white">
      <div className="text-center mb-12">
        <h2 className={cn(designTokens.typography.displaySm, 'font-bold text-gray-900 mb-4')}>Why Choose Our Image Converter?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Built with modern web technologies to provide the fastest, most secure, and user-friendly image conversion experience.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <Card key={index} className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-200 rounded-2xl">
              <div className={cn('inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4', getGradientClasses('primary'))}>
                <IconComponent className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </Card>
          );
        })}
      </div>

      {/* Stats Section */}
      <div className={cn('mt-16 rounded-2xl p-8 text-white', getGradientClasses('primary'))}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold mb-2">1M+</div>
            <div className="text-blue-100">Images Converted</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">15+</div>
            <div className="text-blue-100">Supported Formats</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-2">99.9%</div>
            <div className="text-blue-100">Uptime</div>
          </div>
        </div>
      </div>
    </Section>
  );
}
