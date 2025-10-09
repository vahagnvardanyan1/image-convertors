'use client'
import { TrendingUp, Users, Clock, Shield } from 'lucide-react'
import { useEffect, useState } from 'react'

interface StatItemProps {
  icon: React.ReactNode
  value: string
  label: string
  suffix?: string
}

function StatItem({ icon, value, label, suffix = '' }: StatItemProps) {
  const [displayValue, setDisplayValue] = useState(0)
  const targetValue = parseInt(value.replace(/[^0-9]/g, ''))

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = targetValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetValue) {
        setDisplayValue(targetValue)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [targetValue])

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-transparent dark:from-blue-900/20 dark:via-purple-900/10 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <div className="mb-2">
          <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
            {displayValue.toLocaleString()}
            {suffix}
          </span>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 font-medium">{label}</p>
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-200/30 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <TrendingUp size={16} className="text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Trusted by thousands</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powering Digital
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Workflows</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Join thousands of creators, designers, and developers who trust our tools</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <StatItem icon={<Users size={24} />} value="50000" suffix="+" label="Active Users Monthly" />

          <StatItem icon={<TrendingUp size={24} />} value="1000000" suffix="+" label="Files Converted" />

          <StatItem icon={<Clock size={24} />} value="99" suffix="%" label="Conversion Success Rate" />

          <StatItem icon={<Shield size={24} />} value="100" suffix="%" label="Secure & Private" />
        </div>

        {/* Bottom text */}
        <div className="mt-12 sm:mt-16 text-center">
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">🔒 All processing happens in your browser. Your files never leave your device.</p>
        </div>
      </div>
    </section>
  )
}
