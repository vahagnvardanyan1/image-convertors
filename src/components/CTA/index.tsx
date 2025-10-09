'use client'
import { ArrowRight, Sparkles, Zap, Shield } from 'lucide-react'
import { Button } from '../ui/button'

export function CTA() {
  const scrollToConverter = () => {
    const element = document.getElementById('format-grid')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      </div>

      {/* Animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 border border-white/30">
          <Sparkles size={16} className="text-white mr-2" />
          <span className="text-sm font-semibold text-white uppercase tracking-wide">Start Converting Now</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform
          <br />
          Your Images?
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">Join thousands of users who trust our platform for fast, secure, and free image conversion</p>

        {/* Features */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 sm:mb-12 text-white">
          <div className="flex items-center gap-2">
            <Zap size={20} className="flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium">Lightning Fast</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
          <div className="flex items-center gap-2">
            <Shield size={20} className="flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium">100% Secure</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/40 rounded-full" />
          <div className="flex items-center gap-2">
            <Sparkles size={20} className="flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium">Forever Free</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={scrollToConverter}
            className="bg-white hover:bg-gray-100 text-blue-600 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-6 text-lg font-semibold group w-full sm:w-auto"
          >
            Start Converting Free
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() => {
              const element = document.getElementById('features')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
            className="border-2 border-white/50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-xl px-8 py-6 text-lg font-semibold w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>

        {/* Bottom text */}
        <p className="mt-8 text-sm text-white/80">No credit card required • No registration • No limits</p>
      </div>
    </section>
  )
}
