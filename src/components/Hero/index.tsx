'use client';
import Image from 'next/image';
import { Upload, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../ImageWithFallback';

export function Hero() {
  const scrollToConverter = () => {
    const element = document.getElementById('format-grid');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          fetchPriority="high"
          src="https://images.unsplash.com/photo-1631375937044-6dd5beac01d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjB0ZWNobm9sb2d5JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTg5NzgxMzV8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Digital transformation background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Convert Images
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Instantly</span>
            </h2>

            <p className="text-lg lg:text-xl text-gray-600 mb-6 max-w-xl">Transform your images between formats with ease.</p>

            <div className="mb-8">
              <p className="text-gray-700 mb-2">Popular conversions:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['PNG → WebP', 'JPG → PNG', 'WebP → PNG', 'JPG → WebP', 'PNG → JPG', 'WebP → JPG'].map(format => (
                  <span key={format} className="px-3 py-1 bg-white rounded-full text-sm text-gray-600 shadow-sm border">
                    {format}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToConverter}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Upload className="mr-2" size={20} />
                Upload Your Image
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('how-to');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-xl border-2 hover:bg-gray-50"
              >
                Learn How
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>

            <div className="mt-8 text-sm text-gray-500">
              <p>✓ No registration required • ✓ Browser-based processing • ✓ 100% secure</p>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-xl pb-20">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl ring-1 ring-blue-200/60">
                <Image
                  src="/person-with-laptop.png"
                  alt="Designer converting images on a laptop"
                  width={1024}
                  height={1536}
                  className="w-full h-auto object-cover"
                  priority
                  sizes="(max-width: 1280px) 70vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/10 to-transparent" />
              </div>

              <div className="absolute left-1/2 -bottom-12 w-full max-w-md -translate-x-1/2">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-blue-100/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-3">Popular conversions</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {[
                      { label: 'PNG', color: 'text-blue-600' },
                      { label: 'JPG', color: 'text-purple-600' },
                      { label: 'WebP', color: 'text-green-600' },
                      { label: 'PDF', color: 'text-red-500' },
                    ].map(format => (
                      <div key={format.label} className="bg-white rounded-xl p-4 shadow-md border border-gray-100 flex items-center justify-center">
                        <span className={`text-2xl font-bold ${format.color}`}>{format.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                    <ArrowRight className="text-blue-500" size={20} />
                    <span>Instant conversions in your browser</span>
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
