'use client';
import Image from 'next/image';
import { Upload, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function Hero() {
  const scrollToConverter = () => {
    const element = document.getElementById('format-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 sm:py-16 lg:py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Free Online Image, Font & Color
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Tools</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0">
              Convert images, create fancy text, and pick color palettes instantly—all without installing any software.
            </p>

            <div className="mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-gray-700 mb-2 font-medium">Popular conversions:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['PNG → WebP', 'JPG → PNG', 'WebP → PNG', 'JPG → WebP', 'PNG → JPG', 'WebP → JPG'].map(format => (
                  <span key={format} className="px-2.5 sm:px-3 py-1.5 sm:py-1 bg-white rounded-full text-xs sm:text-sm text-gray-600 shadow-sm border">
                    {format}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToConverter}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
              >
                <Upload className="mr-2" size={20} />
                <span className="text-base sm:text-lg">Upload Your Image</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('how-to');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="rounded-xl border-2 hover:bg-gray-50 w-full sm:w-auto"
              >
                <span className="text-base sm:text-lg">Learn How</span>
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-500 space-y-1 sm:space-y-0">
              <p className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-1 sm:gap-0">
                <span>✓ No registration required</span>
                <span className="hidden sm:inline mx-2">•</span>
                <span>✓ Browser-based processing</span>
                <span className="hidden sm:inline mx-2">•</span>
                <span>✓ 100% secure</span>
              </p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-xl pb-16 sm:pb-20">
              <div className="relative rounded-2xl sm:rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-blue-200/60">
                <Image
                  src="/person-with-laptop.webp"
                  alt="Designer converting images on a laptop"
                  width={1024}
                  height={1236}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 70vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/10 to-transparent" />
              </div>

              <div className="absolute left-1/2 -bottom-8 sm:-bottom-12 w-[calc(100%-2rem)] sm:w-full max-w-md -translate-x-1/2 px-2 sm:px-0">
                <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-xl border border-blue-100/60 p-4 sm:p-6">
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-blue-500 mb-2 sm:mb-3">Popular conversions</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
                    {[
                      { label: 'PNG', color: 'text-blue-600' },
                      { label: 'JPG', color: 'text-purple-600' },
                      { label: 'WebP', color: 'text-green-600' },
                      { label: 'PDF', color: 'text-red-500' },
                    ].map(format => (
                      <div key={format.label} className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border border-gray-100 flex items-center justify-center">
                        <span className={`text-xl sm:text-2xl font-bold ${format.color}`}>{format.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-500 text-xs sm:text-sm">
                    <ArrowRight className="text-blue-500 flex-shrink-0" size={16} />
                    <span className="text-center">Instant conversions in your browser</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
