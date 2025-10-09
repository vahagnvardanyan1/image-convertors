'use client';

import { Star, Users, Download, Globe, Shield, TrendingUp } from 'lucide-react';
import { Card } from '../Card';

export function SocialProof() {
  const stats = [
    {
      icon: Users,
      value: '500K+',
      label: 'Happy Users',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Download,
      value: '5M+',
      label: 'Files Converted',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      value: '150+',
      label: 'Countries',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'UI/UX Designer',
      avatar: '👩‍💻',
      rating: 5,
      text: 'This is the best image converter I\'ve used. Fast, secure, and the quality is always perfect. The color tools are a huge bonus!',
    },
    {
      name: 'Michael Chen',
      role: 'Web Developer',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Finally, a tool that respects privacy. Everything runs in the browser, no uploads needed. The batch features would be amazing!',
    },
    {
      name: 'Emma Williams',
      role: 'Content Creator',
      avatar: '🎨',
      rating: 5,
      text: 'I use this daily for my social media content. The crop tool with preset ratios saves me so much time. Highly recommended!',
    },
  ];

  const trustBadges = [
    { icon: Shield, text: '100% Secure', subtext: 'Client-side processing' },
    { icon: Users, text: 'Trusted by 500K+', subtext: 'Active users worldwide' },
    { icon: Download, text: 'No Limits', subtext: 'Unlimited conversions' },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-900 dark:to-gray-800 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-gray-800">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${stat.color} mb-3 sm:mb-4`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div key={index} className="flex items-center gap-3 bg-white dark:bg-gray-800 px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="text-white" size={20} />
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{badge.text}</div>
                  <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{badge.subtext}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mb-8 sm:mb-12">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Loved by Designers & Developers
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Join thousands of professionals who trust our tools for their daily workflow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-5 sm:p-6 bg-white dark:bg-gray-800 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="text-3xl sm:text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


