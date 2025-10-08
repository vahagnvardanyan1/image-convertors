'use client';
import { Menu, X, ChevronDown, FileText, Image as ImageIcon, BookOpen, Palette, Type, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../ImageWithFallback';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isImageDropdownOpen, setIsImageDropdownOpen] = useState(false);
  const [isPDFDropdownOpen, setIsPDFDropdownOpen] = useState(false);
  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);
  const [isTextDropdownOpen, setIsTextDropdownOpen] = useState(false);
  const [isAIDropdownOpen, setIsAIDropdownOpen] = useState(false);
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsImageDropdownOpen(false);
        setIsPDFDropdownOpen(false);
        setIsColorDropdownOpen(false);
        setIsTextDropdownOpen(false);
        setIsAIDropdownOpen(false);
        setIsBlogDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    setIsImageDropdownOpen(false);
    setIsPDFDropdownOpen(false);
    setIsColorDropdownOpen(false);
    setIsTextDropdownOpen(false);
    setIsAIDropdownOpen(false);
    setIsBlogDropdownOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const aiTools = [{ name: 'Remove Background', href: '/remove-background', popular: true }];

  const imageTools = [
    { name: 'Crop Image', href: '/crop-image', popular: true },
    { name: 'Image Analyzer', href: '/analyze', popular: true },
  ];

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
  ];

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
  ];

  const colorTools = [
    { name: 'Color Picker', href: '/colors/picker', popular: true },
    { name: 'Color Palettes', href: '/colors/palettes', popular: true },
    { name: 'Gradient Generator', href: '/colors/gradients', popular: true },
    { name: 'Color Converter', href: '/colors/converter', popular: false },
  ];

  const textTools = [
    { name: 'Emojis', href: '/texts/emojis', popular: true },
    { name: 'Symbols', href: '/texts/symbols', popular: true },
  ];

  const jsonTools = [
    { name: 'JSON Validator', href: '/texts/json-validator', popular: true },
    { name: 'JSON Comparer', href: '/texts/json-comparer', popular: true },
    { name: 'JSON Parser', href: '/texts/json-parser', popular: true },
  ];

  const fontTools = [
    { name: 'Font Preview', href: '/texts/fonts/preview', popular: true },
    { name: 'Font Pairings', href: '/texts/fonts/pairings', popular: true },
    { name: 'Typographic Scale', href: '/texts/fonts/scales', popular: true },
  ];

  const blogGuides = [
    { name: 'Crop Image Guide', href: '/blog/crop-image-guide', popular: true },
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
  ];

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <ImageWithFallback src="/logo.png" alt="ImageConverter Logo" className="rounded-lg" height={50} width={50} />
            <span className="ml-2 text-xl font-bold text-gray-900">ImageConverter</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* AI Tools Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsAIDropdownOpen(true)} onMouseLeave={() => setIsAIDropdownOpen(false)}>
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => setIsAIDropdownOpen(!isAIDropdownOpen)}>
                <Sparkles size={16} />
                <span>AI Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isAIDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isAIDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">AI-Powered Tools</div>
                  {aiTools.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setIsAIDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${pathname === tool.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                    >
                      {tool.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Image Tools Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsImageDropdownOpen(true)} onMouseLeave={() => setIsImageDropdownOpen(false)}>
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => setIsImageDropdownOpen(!isImageDropdownOpen)}>
                <ImageIcon size={16} />
                <span>Image Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isImageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isImageDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">Image Tools</div>
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
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b border-gray-100 mt-2">Popular Converters</div>
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
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b border-gray-100 mt-2">More Converters</div>
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
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => setIsPDFDropdownOpen(!isPDFDropdownOpen)}>
                <FileText size={16} />
                <span>PDF Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isPDFDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isPDFDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">Popular Tools</div>
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
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => setIsColorDropdownOpen(!isColorDropdownOpen)}>
                <Palette size={16} />
                <span>Color Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isColorDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isColorDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/colors"
                    onClick={() => setIsColorDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-b-2 border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50"
                  >
                    🎨 View All Color Tools
                  </Link>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">Popular Tools</div>
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
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => setIsTextDropdownOpen(!isTextDropdownOpen)}>
                <Type size={16} />
                <span>Text Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isTextDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTextDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/texts"
                    onClick={() => setIsTextDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-bold text-blue-600 hover:text-blue-700 hover:bg-blue-50 border-b-2 border-blue-100 bg-gradient-to-r from-blue-50 to-purple-50"
                  >
                    ✨ View All Text Tools
                  </Link>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">Text Tools</div>
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
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b border-gray-100 mt-2">JSON Tools</div>
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
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b border-gray-100 mt-2">Font Tools</div>
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
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}>
                <BookOpen size={16} />
                <span>Blog</span>
                <ChevronDown size={16} className={`transition-transform ${isBlogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isBlogDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 max-h-[500px] overflow-y-auto">
                  <Link
                    href="/blog"
                    onClick={() => setIsBlogDropdownOpen(false)}
                    className="block px-4 py-3 text-sm font-bold text-purple-600 hover:text-purple-700 hover:bg-purple-50 border-b-2 border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 sticky top-0 z-10 bg-white"
                  >
                    📚 View All Articles
                  </Link>
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">Popular Guides</div>
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
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-t border-b border-gray-100 mt-2">More Guides</div>
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

          {/* Desktop CTA */}
          <div className="hidden xl:block">
            <Button onClick={() => scrollToSection('format-grid')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Start Converting
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Full Screen Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 z-50 bg-white">
            <div className="h-full overflow-y-auto">
              <div className="px-4 py-6">
                <div className="grid grid-cols-2 gap-6">
                  {/* AI Tools Section */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3 pb-2 border-b-2 border-purple-200">
                      <span>✨ AI Tools</span>
                    </div>
                    <div className="space-y-2">
                      {aiTools.map(tool => (
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

                  {/* Image Tools Section */}
                  <div>
                    <div className="flex items-center space-x-2 text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3 pb-2 border-b-2 border-blue-200">
                      <span>🖼️ Image Tools</span>
                    </div>
                    <div className="space-y-2">
                      {imageTools.map(tool => (
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
                        <div className="text-xs font-semibold text-gray-500 mb-2">Format Converters</div>
                        {imageConverters
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
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <Button onClick={() => scrollToSection('format-grid')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full">
                    Start Converting
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
