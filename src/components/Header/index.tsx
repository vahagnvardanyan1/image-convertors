'use client';
import { Menu, X, ChevronDown, FileText, Image as ImageIcon, BookOpen } from 'lucide-react';
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
  const [isBlogDropdownOpen, setIsBlogDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-container')) {
        setIsImageDropdownOpen(false);
        setIsPDFDropdownOpen(false);
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

  const blogGuides = [
    { name: 'PNG to WebP Guide', href: '/blog/png-to-webp-guide', popular: true },
    { name: 'PNG to JPG Guide', href: '/blog/png-to-jpg-guide', popular: true },
    { name: 'WebP to PNG Guide', href: '/blog/webp-to-png-guide', popular: true },
    { name: 'PNG to PDF Guide', href: '/blog/png-to-pdf-guide', popular: true },
    { name: 'JPG to WebP Guide', href: '/blog/jpg-to-webp-guide', popular: false },
    { name: 'JPG to PDF Guide', href: '/blog/jpg-to-pdf-guide', popular: false },
    { name: 'PDF to JPG Guide', href: '/blog/pdf-to-jpg-guide', popular: false },
    { name: 'HEIC to JPG Guide', href: '/blog/heic-to-jpg-guide', popular: false },
    { name: 'HEIC to WebP Guide', href: '/blog/heic-to-webp-guide', popular: false },
    { name: 'Compress Images Guide', href: '/blog/compress-images-guide', popular: false },
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
            {/* Image Converters Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsImageDropdownOpen(true)} onMouseLeave={() => setIsImageDropdownOpen(false)}>
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => setIsImageDropdownOpen(!isImageDropdownOpen)}>
                <ImageIcon size={16} />
                <span>Image Tools</span>
                <ChevronDown size={16} className={`transition-transform ${isImageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isImageDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">Popular Converters</div>
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

            {/* Analyze Link */}
            <Link href="/analyze" className={`text-sm font-medium transition-colors ${pathname === '/analyze' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
              Analyze
            </Link>

            {/* Blog Dropdown */}
            <div className="relative group dropdown-container" onMouseEnter={() => setIsBlogDropdownOpen(true)} onMouseLeave={() => setIsBlogDropdownOpen(false)}>
              <button className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => setIsBlogDropdownOpen(!isBlogDropdownOpen)}>
                <BookOpen size={16} />
                <span>Blog</span>
                <ChevronDown size={16} className={`transition-transform ${isBlogDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isBlogDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                  <Link
                    href="/blog"
                    onClick={() => setIsBlogDropdownOpen(false)}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 border-b border-gray-100"
                  >
                    View All Articles
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <nav className="max-h-80 overflow-y-auto scrollbar-hide">
              <div className="flex flex-col space-y-1 px-4">
                {/* Image Converters Section */}
                <div className="py-2">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    <ImageIcon size={14} />
                    <span>Image Converters</span>
                  </div>
                  {imageConverters.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={handleMenuClose}
                      className={`block py-2 pl-4 text-sm font-medium transition-colors ${pathname === tool.href ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      {tool.name}
                      {tool.popular && <span className="ml-2 text-xs text-blue-600">Popular</span>}
                    </Link>
                  ))}
                </div>

                {/* PDF Tools Section */}
                <div className="py-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    <FileText size={14} />
                    <span>PDF Tools</span>
                  </div>
                  {pdfTools.map(tool => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={handleMenuClose}
                      className={`block py-2 pl-4 text-sm font-medium transition-colors ${pathname === tool.href ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      {tool.name}
                      {tool.popular && <span className="ml-2 text-xs text-blue-600">Popular</span>}
                    </Link>
                  ))}
                </div>

                {/* Blog Section */}
                <div className="py-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    <BookOpen size={14} />
                    <span>Blog & Guides</span>
                  </div>
                  <Link
                    href="/blog"
                    onClick={handleMenuClose}
                    className={`block py-2 pl-4 text-sm font-medium transition-colors ${pathname === '/blog' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    View All Articles
                  </Link>
                  {blogGuides.map(guide => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      onClick={handleMenuClose}
                      className={`block py-2 pl-4 text-sm font-medium transition-colors ${pathname === guide.href ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                    >
                      {guide.name}
                      {guide.popular && <span className="ml-2 text-xs text-blue-600">Popular</span>}
                    </Link>
                  ))}
                </div>

                {/* Other Links */}
                <div className="py-2 border-t border-gray-100">
                  <Link
                    href="/analyze"
                    onClick={handleMenuClose}
                    className={`block py-2 text-sm font-medium transition-colors ${pathname === '/analyze' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    Analyze Images
                  </Link>
                </div>

                <Button onClick={() => scrollToSection('format-grid')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full mt-4">
                  Start Converting
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
