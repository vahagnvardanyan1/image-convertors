import { ArrowRight, Zap, Shield, Star } from 'lucide-react';
import { ImageWithFallback } from '../ImageWithFallback';

export function BannerBlocks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* First Banner - Advanced Tools */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 lg:p-12 text-white">
              <div className="flex items-center mb-4">
                <Zap className="mr-3" size={24} />
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">Pro Tools</span>
              </div>
              <h3 className="text-3xl font-bold mb-4">Batch Processing & Advanced Options</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Convert multiple images at once, adjust quality settings, resize images, and access advanced compression options. Perfect for professionals and power users.
              </p>
              <button className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Coming Soon
                <ArrowRight className="ml-2" size={16} />
              </button>
            </div>
            <div className="h-64 lg:h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1734208682292-df2643d0c8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBwcm9kdWN0aXZpdHklMjB0b29sc3xlbnwxfHx8fDE3NTg5NzgxMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Advanced productivity tools"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Second Banner - Security & Privacy */}
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="h-64 lg:h-full order-2 lg:order-1">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-24 h-24 text-green-600 mx-auto mb-4" />
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <Star className="text-yellow-500 fill-current" size={16} />
                      <Star className="text-yellow-500 fill-current" size={16} />
                    </div>
                    <p className="text-gray-600">Trusted by 100,000+ users</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-12 order-1 lg:order-2">
              <div className="flex items-center mb-4">
                <Shield className="mr-3 text-green-600" size={24} />
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">100% Secure</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Privacy is Our Priority</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                All conversions happen locally in your browser. Your images never leave your device, ensuring complete privacy and security. No servers, no uploads, no data collection.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Client-side processing only</span>
                </div>
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">No data collection or tracking</span>
                </div>
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">Works offline after initial load</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
