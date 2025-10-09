'use client'
import Image from 'next/image'
import { Upload, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'

export function Hero() {
  const scrollToConverter = () => {
    const element = document.getElementById('format-grid')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-20 lg:py-28 overflow-hidden transition-colors">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full mb-6 border border-blue-200/50 dark:border-blue-700/50 shadow-lg">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">100% Free • No Sign Up Required</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Digital Content</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Convert images, generate QR codes, design color palettes and more—
              <span className="font-semibold text-gray-900 dark:text-white"> all in your browser</span>
            </p>

            <div className="mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-2 font-medium">Popular conversions:</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {['PNG → WebP', 'JPG → PNG', 'WebP → PNG', 'JPG → WebP', 'PNG → JPG', 'WebP → JPG'].map(format => (
                  <span
                    key={format}
                    className="px-2.5 sm:px-3 py-1.5 sm:py-1 bg-white dark:bg-gray-800 rounded-full text-xs sm:text-sm text-gray-600 dark:text-gray-300 shadow-sm border border-gray-200 dark:border-gray-700"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={scrollToConverter}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto px-8 py-6 text-lg font-semibold"
              >
                <Upload className="mr-2 group-hover:scale-110 transition-transform" size={22} />
                <span>Start Converting Free</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById('how-to')
                  if (element) element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="rounded-2xl border-2 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-600 w-full sm:w-auto px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                <span>See How It Works</span>
              </Button>
            </div>

            {/* Features list */}
            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start text-sm sm:text-base">
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-400 text-xs">✓</span>
                </div>
                <span className="font-medium">No Sign Up</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 text-xs">✓</span>
                </div>
                <span className="font-medium">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <div className="w-5 h-5 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                  <span className="text-purple-600 dark:text-purple-400 text-xs">✓</span>
                </div>
                <span className="font-medium">Lightning Fast</span>
              </div>
            </div>
          </div>

          {/* Visual Element - Enhanced */}
          <div className="flex justify-center mt-12 lg:mt-0">
            <div className="relative w-full max-w-xl pb-20 sm:pb-24">
              {/* Main image with enhanced styling */}
              <div className="relative rounded-3xl sm:rounded-[40px] overflow-hidden shadow-2xl ring-1 ring-blue-200/60 dark:ring-purple-500/30 group">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <Image
                  src="/person-with-laptop.webp"
                  alt="Designer converting images on a laptop"
                  width={1024}
                  height={1236}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 70vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/70 dark:from-gray-900/70 via-transparent to-transparent" />
              </div>

              {/* Floating card with enhanced design */}
              <div className="absolute left-1/2 -bottom-10 sm:-bottom-14 w-[calc(100%-2rem)] sm:w-full max-w-md -translate-x-1/2 px-2 sm:px-0">
                <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-100/60 dark:border-purple-500/30 p-5 sm:p-7 hover:shadow-3xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Supported Formats</p>
                    <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-semibold rounded-full">15+</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4">
                    {[
                      { label: 'PNG', color: 'from-blue-500 to-blue-600', icon: '🖼️' },
                      { label: 'JPG', color: 'from-purple-500 to-purple-600', icon: '📸' },
                      { label: 'WebP', color: 'from-green-500 to-green-600', icon: '🚀' },
                      { label: 'PDF', color: 'from-red-500 to-red-600', icon: '📄' },
                    ].map(format => (
                      <div
                        key={format.label}
                        className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-lg border border-gray-100 dark:border-gray-700 hover:scale-105 transition-transform duration-200 cursor-pointer"
                      >
                        <div className="text-2xl mb-1">{format.icon}</div>
                        <span className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${format.color} bg-clip-text text-transparent`}>{format.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 text-xs sm:text-sm pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-center font-medium">Instant browser-based conversion</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
