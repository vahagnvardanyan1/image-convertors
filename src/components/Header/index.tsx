'use client'
import { Menu, X, ChevronDown, FileText, Image as ImageIcon, BookOpen, Palette, Type, Sparkles } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../ui/button'
import { ImageWithFallback } from '../ImageWithFallback'
import { ThemeToggle } from '../ThemeToggle'

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isImageDropdownOpen, setIsImageDropdownOpen] = useState(false)
  const [isPDFDropdownOpen, setIsPDFDropdownOpen] = useState(false)
  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false)
  const [isTextDropdownOpen, setIsTextDropdownOpen] = useState(false)
  const [isAIDropdownOpen, setIsAIDropdownOpen] = useState(false)
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (!target.closest('.dropdown-container')) {
        setIsImageDropdownOpen(false)
        setIsPDFDropdownOpen(false)
        setIsColorDropdownOpen(false)
        setIsTextDropdownOpen(false)
        setIsAIDropdownOpen(false)
        setIsBlogDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleMenuClose = () => {
    setIsMenuOpen(false)
    setIsImageDropdownOpen(false)
    setIsPDFDropdownOpen(false)
    setIsColorDropdownOpen(false)
    setIsTextDropdownOpen(false)
    setIsAIDropdownOpen(false)
    setIsBlogDropdownOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    if (pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`
    } else {
      const element = document.getElementById(sectionId)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const aiTools = [{ name: 'Remove Background', href: '/remove-background', popular: true }]

  const imageTools = [
    { name: 'Crop Image', href: '/crop-image', popular: true },
    { name: 'Resize Image', href: '/resize-image', popular: true },
    { name: 'Image Analyzer', href: '/analyze', popular: true },
    { name: 'QR Code Generator', href: '/qr-code-generator', popular: true },
  ]

  const imageConverters = [
    { name: 'PNG to WebP', href: '/png-to-webp', popular: true },
    { name: 'JPG to PNG', href: '/jpg-to-png', popular: true },
    { name: 'JPG to WebP', href: '/jpg-to-webp', popular: true },
    { name: 'WebP to PNG', href: '/webp-to-png', popular: false },
    { name: 'PNG to JPG', href: '/png-to-jpg', popular: false },
    { name: 'WebP to JPG', href: '/webp-to-jpg', popular: false },
    { name: 'HEIC to JPG', href: '/heic-to-jpg', popular: false },
    { name: 'HEIC to PNG', href: '/heic-to-png', popular: false },
    { name: 'HEIC to WebP', href: '/heic-to-webp', popular: false },
  ]

  const pdfTools = [
    { name: 'PDF to JPG', href: '/pdf-to-jpg', popular: true },
    { name: 'PDF to PNG', href: '/pdf-to-png', popular: true },
    { name: 'Images to PDF', href: '/images-to-pdf', popular: true },
    { name: 'PNG to PDF', href: '/png-to-pdf', popular: true },
    { name: 'JPG to PDF', href: '/jpg-to-pdf', popular: true },
    { name: 'HEIC to PDF', href: '/heic-to-pdf', popular: false },
    { name: 'WebP to PDF', href: '/webp-to-pdf', popular: false },
    { name: 'Merge PDF', href: '/merge-pdf', popular: false },
    { name: 'Split PDF', href: '/split-pdf', popular: false },
    { name: 'PDF Info', href: '/pdf-info', popular: false },
  ]

  const colorTools = [
    { name: 'Color Picker', href: '/colors/picker', popular: true },
    { name: 'Color Palettes', href: '/colors/palettes', popular: true },
    { name: 'Gradient Generator', href: '/colors/gradients', popular: true },
    { name: 'Color Converter', href: '/colors/converter', popular: false },
  ]

  const textTools = [
    { name: 'Emojis', href: '/texts/emojis', popular: true },
    { name: 'Symbols', href: '/texts/symbols', popular: true },
  ]

  const jsonTools = [
    { name: 'JSON Validator', href: '/texts/json-validator', popular: true },
    { name: 'JSON Comparer', href: '/texts/json-comparer', popular: true },
    { name: 'JSON Parser', href: '/texts/json-parser', popular: true },
  ]

  const fontTools = [
    { name: 'Font Preview', href: '/texts/fonts/preview', popular: true },
    { name: 'Font Pairings', href: '/texts/fonts/pairings', popular: true },
    { name: 'Typographic Scale', href: '/texts/fonts/scales', popular: true },
  ]

  const blogGuides = [
    { name: 'QR Code Generator Guide', href: '/blog/qr-code-generator-guide', popular: true },
    { name: 'Crop Image Guide', href: '/blog/crop-image-guide', popular: true },
    { name: 'Resize Image Guide', href: '/blog/resize-image-guide', popular: true },
    { name: 'Remove Background Guide', href: '/blog/remove-background-guide', popular: true },
    { name: 'PNG to WebP Guide', href: '/blog/png-to-webp-guide', popular: true },
    { name: 'PNG to JPG Guide', href: '/blog/png-to-jpg-guide', popular: true },
    { name: 'WebP to PNG Guide', href: '/blog/webp-to-png-guide', popular: false },
    { name: 'PNG to PDF Guide', href: '/blog/png-to-pdf-guide', popular: false },
    { name: 'JPG to WebP Guide', href: '/blog/jpg-to-webp-guide', popular: false },
    { name: 'JPG to PDF Guide', href: '/blog/jpg-to-pdf-guide', popular: false },
    { name: 'PDF to JPG Guide', href: '/blog/pdf-to-jpg-guide', popular: false },
    { name: 'HEIC to JPG Guide', href: '/blog/heic-to-jpg-guide', popular: false },
    { name: 'HEIC to WebP Guide', href: '/blog/heic-to-webp-guide', popular: false },
    { name: 'Compress Images Guide', href: '/blog/compress-images-guide', popular: false },
    { name: 'Color Picker Guide', href: '/blog/color-picker-guide', popular: false },
    { name: 'Color Palette Guide', href: '/blog/color-palette-guide', popular: false },
    { name: 'Gradient Generator Guide', href: '/blog/gradient-generator-guide', popular: false },
    { name: 'Color Converter Guide', href: '/blog/color-converter-guide', popular: false },
    { name: 'Font Preview Guide', href: '/blog/font-preview-guide', popular: false },
    { name: 'Font Pairing Guide', href: '/blog/font-pairing-guide', popular: false },
    { name: 'Typographic Scale Guide', href: '/blog/typographic-scale-guide', popular: false },
    { name: 'Emoji Guide', href: '/blog/emoji-guide', popular: false },
    { name: 'Symbol Guide', href: '/blog/symbol-guide', popular: false },
    { name: 'JSON Validator Guide', href: '/blog/json-validator-guide', popular: false },
    { name: 'JSON Comparer Guide', href: '/blog/json-comparer-guide', popular: false },
    { name: 'JSON Parser Guide', href: '/blog/json-parser-guide', popular: false },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 transition-all duration-300">
      {/* Top bar with gradient */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Enhanced */}
          <Link href="/" className="flex items-center cursor-pointer group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity" />
              <ImageWithFallback src="/logo.png" alt="ImageConverter Logo" className="relative rounded-xl group-hover:scale-105 transition-transform shadow-lg" height={50} width={50} />
            </div>
            <div className="ml-3">
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">ImageConverter</span>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Fast & Secure</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* AI Tools Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsAIDropdownOpen(true)} onMouseLeave={() => setIsAIDropdownOpen(false)}>
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsAIDropdownOpen(!isAIDropdownOpen)}
              >
                <Sparkles size={16} />
                <span>AI Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isAIDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isAIDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50 mt-2">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-b border-gray-100 dark:border-gray-700">✨ AI-Powered Tools</div>
                  {aiTools.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsAIDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm transition-all rounded-lg mx-2 my-1 ${
                        pathname === tool.href
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 font-medium'
                          : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Image Tools Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsImageDropdownOpen(true)} onMouseLeave={() => setIsImageDropdownOpen(false)}>
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsImageDropdownOpen(!isImageDropdownOpen)}
              >
                <ImageIcon size={16} />
                <span>Image Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isImageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isImageDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50 mt-2 max-h-[500px] overflow-y-auto">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-b border-gray-100 dark:border-gray-700">🖼️ Image Tools</div>
                  {imageTools.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsImageDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                      {tool.name}
                    </Link>
                  ))}
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-t border-b border-gray-100 dark:border-gray-700 mt-2">
                    ⭐ Popular Converters
                  </div>
                  {imageConverters
                    .filter(tool => tool.popular)
                    .map(tool => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setIsImageDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-t border-b border-gray-100 dark:border-gray-700 mt-2">
                    More Converters
                  </div>
                  {imageConverters
                    .filter(tool => !tool.popular)
                    .map(tool => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setIsImageDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                      >
                        {tool.name}
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* PDF Tools Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsPDFDropdownOpen(true)} onMouseLeave={() => setIsPDFDropdownOpen(false)}>
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsPDFDropdownOpen(!isPDFDropdownOpen)}
              >
                <FileText size={16} />
                <span>PDF Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isPDFDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPDFDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50 mt-2 max-h-[500px] overflow-y-auto">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-b border-gray-100 dark:border-gray-700">📄 Popular Tools</div>
                  {pdfTools
                    .filter(tool => tool.popular)
                    .map(tool => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setIsPDFDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b border-gray-100 mt-2">More Tools</div>
                  {pdfTools
                    .filter(tool => !tool.popular)
                    .map(tool => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setIsPDFDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                      >
                        {tool.name}
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* Color Tools Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsColorDropdownOpen(true)} onMouseLeave={() => setIsColorDropdownOpen(false)}>
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsColorDropdownOpen(!isColorDropdownOpen)}
              >
                <Palette size={16} />
                <span>Color Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isColorDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isColorDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50 mt-2">
                  <Link
                    href="/colors"
                    onClick={() => setIsColorDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-b-2 border-blue-100 dark:border-blue-800 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-2xl mx-2 mt-1"
                  >
                    🎨 View All Color Tools
                  </Link>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-b border-gray-100 dark:border-gray-700">Popular Tools</div>
                  {colorTools
                    .filter(tool => tool.popular)
                    .map(tool => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setIsColorDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                      >
                        {tool.name}
                      </Link>
                    ))}
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b border-gray-100 mt-2">More Tools</div>
                  {colorTools
                    .filter(tool => !tool.popular)
                    .map(tool => (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setIsColorDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                      >
                        {tool.name}
                      </Link>
                    ))}
                </div>
              )}
            </div>

            {/* Text Tools Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsTextDropdownOpen(true)} onMouseLeave={() => setIsTextDropdownOpen(false)}>
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsTextDropdownOpen(!isTextDropdownOpen)}
              >
                <Type size={16} />
                <span>Text Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isTextDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTextDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50 mt-2 max-h-[500px] overflow-y-auto">
                  <Link
                    href="/texts"
                    onClick={() => setIsTextDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border-b-2 border-blue-100 dark:border-blue-800 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-t-2xl mx-2 mt-1"
                  >
                    ✨ View All Text Tools
                  </Link>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-b border-gray-100 dark:border-gray-700">Text Tools</div>
                  {textTools.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsTextDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                      {tool.name}
                    </Link>
                  ))}
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-t border-b border-gray-100 dark:border-gray-700 mt-2">JSON Tools</div>
                  {jsonTools.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsTextDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                      {tool.name}
                    </Link>
                  ))}
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-t border-b border-gray-100 dark:border-gray-700 mt-2">Font Tools</div>
                  {fontTools.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsTextDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsBlogDropdownOpen(true)} onMouseLeave={() => setIsBlogDropdownOpen(false)}>
              <button
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}
              >
                <BookOpen size={16} />
                <span>Blog</span>
                <ChevronDown size={16} className={`transition-transform ${isBlogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isBlogDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 py-2 z-50 mt-2 max-h-[500px] overflow-y-auto">
                  <Link
                    href="/blog"
                    onClick={() => setIsBlogDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-b-2 border-purple-100 dark:border-purple-800 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 sticky top-0 z-10 backdrop-blur-xl rounded-t-2xl mx-2 mt-1"
                  >
                    📚 View All Articles
                  </Link>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-b border-gray-100 dark:border-gray-700">Popular Guides</div>
                  {blogGuides
                    .filter(guide => guide.popular)
                    .map(guide => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        onClick={() => setIsBlogDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === guide.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                      >
                        {guide.name}
                      </Link>
                    ))}
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide border-t border-b border-gray-100 dark:border-gray-700 mt-2">
                    More Guides
                  </div>
                  {blogGuides
                    .filter(guide => !guide.popular)
                    .map(guide => (
                      <Link
                        key={guide.href}
                        href={guide.href}
                        onClick={() => setIsBlogDropdownOpen(false)}
                        className={`block px-4 py-2 text-sm transition-colors ${pathname === guide.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                      >
                        {guide.name}
                      </Link>
                    ))}
                </div>
              )}
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />
            <Button
              onClick={() => scrollToSection('format-grid')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-6 font-semibold"
            >
              Start Converting
            </Button>
          </div>

          {/* Mobile actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white active:bg-gray-100 dark:active:bg-gray-800 rounded-lg transition-colors touch-manipulation"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-50 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="h-full overflow-y-auto overscroll-contain">
              <div className="px-4 py-6 pb-24">
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {/* AI Tools Section */}
                  <div>
                    <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 pb-2 border-b-2 border-purple-200">
                      <span>✨ AI Tools</span>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {aiTools.map(tool => (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          onClick={handleMenuClose}
                          className={`block py-2 text-xs sm:text-sm font-medium transition-colors rounded-lg px-2 active:bg-gray-100 touch-manipulation ${pathname === tool.href ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Image Tools Section */}
                  <div>
                    <div className="flex items-center space-x-1.5 text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2 sm:mb-3 pb-2 border-b-2 border-blue-200">
                      <span>🖼️ Image Tools</span>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {imageTools.map(tool => (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          onClick={handleMenuClose}
                          className={`block py-2 text-xs sm:text-sm font-medium transition-colors rounded-lg px-2 active:bg-gray-100 touch-manipulation ${pathname === tool.href ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                        >
                          {tool.name}
                        </Link>
                      ))}
                      <div className="mt-2 sm:mt-3 pt-2 border-t border-gray-200">
                        <div className="text-[10px] sm:text-xs font-semibold text-gray-500 mb-1.5 sm:mb-2 px-2">Format Converters</div>
                        {imageConverters
                          .filter(tool => tool.popular)
                          .map(tool => (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={handleMenuClose}
                              className={`block py-2 text-xs sm:text-sm font-medium transition-colors rounded-lg px-2 active:bg-gray-100 touch-manipulation ${pathname === tool.href ? 'text-blue-600 font-semibold bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                            >
                              {tool.name}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* PDF Tools Section */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3 pb-2 border-b-2 border-red-200">
                      <span>📄 PDF Tools</span>
                    </div>
                    <div className="space-y-2">
                      {pdfTools
                        .filter(tool => tool.popular)
                        .map(tool => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={handleMenuClose}
                            className={`block py-1.5 text-sm font-medium transition-colors ${pathname === tool.href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                          >
                            {tool.name}
                          </Link>
                        ))}
                    </div>
                  </div>

                  {/* Color Tools Section */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3 pb-2 border-b-2 border-purple-200">
                      <span>🎨 Color Tools</span>
                    </div>
                    <div className="space-y-2">
                      <Link href="/colors" onClick={handleMenuClose} className="block py-1.5 text-sm font-bold text-blue-600 hover:text-blue-700">
                        ✨ All Color Tools
                      </Link>
                      {colorTools.map(tool => (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          onClick={handleMenuClose}
                          className={`block py-1.5 text-sm font-medium transition-colors ${pathname === tool.href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                          {tool.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Text Tools Section */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3 pb-2 border-b-2 border-orange-200">
                      <span>✍️ Text Tools</span>
                    </div>
                    <div className="space-y-2">
                      <Link href="/texts" onClick={handleMenuClose} className="block py-1.5 text-sm font-bold text-blue-600 hover:text-blue-700">
                        ✨ All Text Tools
                      </Link>
                      {textTools.map(tool => (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          onClick={handleMenuClose}
                          className={`block py-1.5 text-sm font-medium transition-colors ${pathname === tool.href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                        >
                          {tool.name}
                        </Link>
                      ))}
                      <div className="mt-3 pt-2 border-t border-gray-200">
                        <div className="text-xs font-semibold text-gray-500 mb-2">JSON Tools</div>
                        {jsonTools.map(tool => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={handleMenuClose}
                            className={`block py-1.5 text-sm font-medium transition-colors ${pathname === tool.href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                          >
                            {tool.name}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-3 pt-2 border-t border-gray-200">
                        <div className="text-xs font-semibold text-gray-500 mb-2">Font Tools</div>
                        {fontTools.map(tool => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={handleMenuClose}
                            className={`block py-1.5 text-sm font-medium transition-colors ${pathname === tool.href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                          >
                            {tool.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Blog Section */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3 pb-2 border-b-2 border-green-200">
                      <span>📚 Blog</span>
                    </div>
                    <div className="space-y-2">
                      <Link href="/blog" onClick={handleMenuClose} className="block py-1.5 text-sm font-bold text-purple-600 hover:text-purple-700">
                        ✍️ All Articles
                      </Link>
                      {blogGuides
                        .filter(guide => guide.popular)
                        .map(guide => (
                          <Link
                            key={guide.href}
                            href={guide.href}
                            onClick={handleMenuClose}
                            className={`block py-1.5 text-sm font-medium transition-colors ${pathname === guide.href ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}
                          >
                            {guide.name}
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                  <Button onClick={() => scrollToSection('format-grid')} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
                    Start Converting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
