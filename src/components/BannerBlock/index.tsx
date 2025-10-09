import { ArrowRight, Zap, Shield, Star } from 'lucide-react';

export function BannerBlocks() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
        {/* First Banner - Advanced Tools */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 sm:p-8 lg:p-12 text-white text-center">
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <Zap className="mr-2 sm:mr-3" size={20} />
              <span className="bg-white/20 text-white px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">Pro Tools</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Batch Processing & Advanced Options</h3>
            <p className="text-blue-100 mb-4 sm:mb-6 leading-relaxed max-w-2xl mx-auto text-sm sm:text-base px-2">
              Convert multiple images at once, adjust quality settings, resize images, and access advanced compression options. Perfect for professionals and power users.
            </p>
            <button className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-sm sm:text-base">
              Coming Soon
              <ArrowRight className="ml-2" size={16} />
            </button>
          </div>
        </div>

        {/* Second Banner - Security & Privacy */}
        <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="h-48 sm:h-64 lg:h-full order-2 lg:order-1">
              <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center p-4 sm:p-8">
                  <Shield className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-green-600 mx-auto mb-3 sm:mb-4" />
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <Star className="text-yellow-500 fill-current" size={14} />
                      <Star className="text-yellow-500 fill-current" size={14} />
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Trusted by 100,000+ users</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-8 lg:p-12 order-1 lg:order-2">
              <div className="flex items-center mb-3 sm:mb-4">
                <Shield className="mr-2 sm:mr-3 text-green-600" size={20} />
                <span className="bg-green-100 text-green-800 px-2.5 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">100% Secure</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your Privacy is Our Priority</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                All conversions happen locally in your browser. Your images never leave your device, ensuring complete privacy and security. No servers, no uploads, no data collection.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Client-side processing only</span>
                </div>
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">No data collection or tracking</span>
                </div>
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700 text-sm sm:text-base">Works offline after initial load</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
