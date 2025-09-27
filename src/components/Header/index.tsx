'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';

export function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClose = () => {
    setIsMenuOpen(false);
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

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">IC</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">ImageConverter</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="/" className={`transition-colors ${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
              Home
            </Link>

            {/* Converter Routes */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-gray-900 transition-colors flex items-center">
                Converters
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link
                    href="/png-to-webp"
                    className={`block px-4 py-2 text-sm transition-colors ${pathname === '/png-to-webp' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  >
                    PNG to WebP
                  </Link>
                  <Link
                    href="/jpg-to-png"
                    className={`block px-4 py-2 text-sm transition-colors ${pathname === '/jpg-to-png' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  >
                    JPG to PNG
                  </Link>
                  <Link
                    href="/webp-to-png"
                    className={`block px-4 py-2 text-sm transition-colors ${pathname === '/webp-to-png' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  >
                    WebP to PNG
                  </Link>
                  <Link
                    href="/jpg-to-webp"
                    className={`block px-4 py-2 text-sm transition-colors ${pathname === '/jpg-to-webp' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  >
                    JPG to WebP
                  </Link>
                  <Link
                    href="/png-to-jpg"
                    className={`block px-4 py-2 text-sm transition-colors ${pathname === '/png-to-jpg' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  >
                    PNG to JPG
                  </Link>
                  <Link
                    href="/webp-to-jpg"
                    className={`block px-4 py-2 text-sm transition-colors ${pathname === '/webp-to-jpg' ? 'text-blue-600 bg-blue-50 font-medium' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'}`}
                  >
                    WebP to JPG
                  </Link>
                </div>
              </div>
            </div>

            <button onClick={() => scrollToSection('how-to')} className="text-gray-600 hover:text-gray-900 transition-colors">
              How It Works
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
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
            <nav className="flex flex-col space-y-4">
              <Link href="/" onClick={handleMenuClose} className={`text-left transition-colors ${pathname === '/' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
                Home
              </Link>

              {/* Mobile Converter Links */}
              <div className="border-l-2 border-gray-200 pl-4 ml-2">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Converters</p>
                <div className="space-y-2">
                  <Link
                    href="/png-to-webp"
                    onClick={handleMenuClose}
                    className={`block text-sm transition-colors ${pathname === '/png-to-webp' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    PNG to WebP
                  </Link>
                  <Link
                    href="/jpg-to-png"
                    onClick={handleMenuClose}
                    className={`block text-sm transition-colors ${pathname === '/jpg-to-png' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    JPG to PNG
                  </Link>
                  <Link
                    href="/webp-to-png"
                    onClick={handleMenuClose}
                    className={`block text-sm transition-colors ${pathname === '/webp-to-png' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    WebP to PNG
                  </Link>
                  <Link
                    href="/jpg-to-webp"
                    onClick={handleMenuClose}
                    className={`block text-sm transition-colors ${pathname === '/jpg-to-webp' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    JPG to WebP
                  </Link>
                  <Link
                    href="/png-to-jpg"
                    onClick={handleMenuClose}
                    className={`block text-sm transition-colors ${pathname === '/png-to-jpg' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    PNG to JPG
                  </Link>
                  <Link
                    href="/webp-to-jpg"
                    onClick={handleMenuClose}
                    className={`block text-sm transition-colors ${pathname === '/webp-to-jpg' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}
                  >
                    WebP to JPG
                  </Link>
                </div>
              </div>

              <button onClick={() => scrollToSection('how-to')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                How It Works
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </button>
              <Button onClick={() => scrollToSection('format-grid')} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white w-full mt-4">
                Start Converting
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
