'use client'
import { Star, Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  content: string
  avatar: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Graphic Designer',
    content: 'This tool saved me hours! The batch conversion feature is incredible and the quality is perfect. No more installing heavy software.',
    avatar: '👩‍🎨',
    rating: 5,
  },
  {
    name: 'David Chen',
    role: 'Web Developer',
    content: 'As a developer, I appreciate the speed and privacy. Everything happens in the browser - no uploads, no waiting. Exactly what I needed!',
    avatar: '👨‍💻',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Content Creator',
    content: "The easiest image converter I've ever used! Clean interface, fast processing, and supports all the formats I need. Highly recommended!",
    avatar: '👩‍🎤',
    rating: 5,
  },
  {
    name: 'Michael Park',
    role: 'Digital Marketer',
    content: 'Perfect for optimizing images for my campaigns. The WebP conversion helps my sites load faster. Simple, effective, and free!',
    avatar: '👨‍💼',
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={48} className="text-blue-600" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed flex-grow">&ldquo;{testimonial.content}&rdquo;</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-2xl shadow-md">{testimonial.avatar}</div>
        <div>
          <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{testimonial.name}</div>
          <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-4">
            <Star size={16} className="text-purple-600 dark:text-purple-400 mr-2 fill-purple-600 dark:fill-purple-400" />
            <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wide">What Users Say</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Creators</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Don&apos;t just take our word for it - hear from some of our satisfied users</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Join <span className="font-semibold text-blue-600 dark:text-blue-400">50,000+</span> happy users today
          </p>
        </div>
      </div>
    </section>
  )
}
