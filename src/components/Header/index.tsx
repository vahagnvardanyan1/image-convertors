'use client';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ImageWithFallback } from '../ImageWithFallback';

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
            <ImageWithFallback src="/images/logo.webp" alt="ImageConverter Logo" className="rounded-lg" height={50} width={50} />
            <span className="ml-2 text-xl font-bold text-gray-900">ImageConverter</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex overflow-x-auto scrollbar-hide">
            <div className="flex space-x-4 px-4 min-w-max">
              <Link
                href="/png-to-webp"
                className={`whitespace-nowrap text-sm font-medium transition-colors ${pathname === '/png-to-webp' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                PNG to WebP
              </Link>
              <Link
                href="/jpg-to-png"
                className={`whitespace-nowrap text-sm font-medium transition-colors ${pathname === '/jpg-to-png' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                JPG to PNG
              </Link>
              <Link
                href="/webp-to-png"
                className={`whitespace-nowrap text-sm font-medium transition-colors ${pathname === '/webp-to-png' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                WebP to PNG
              </Link>
              <Link
                href="/jpg-to-webp"
                className={`whitespace-nowrap text-sm font-medium transition-colors ${pathname === '/jpg-to-webp' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                JPG to WebP
              </Link>
              <Link
                href="/png-to-jpg"
                className={`whitespace-nowrap text-sm font-medium transition-colors ${pathname === '/png-to-jpg' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                PNG to JPG
              </Link>
              <Link
                href="/webp-to-jpg"
                className={`whitespace-nowrap text-sm font-medium transition-colors ${pathname === '/webp-to-jpg' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
              >
                WebP to JPG
              </Link>
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
              <div className="flex flex-col space-y-3 px-4">
                <Link
                  href="/png-to-webp"
                  onClick={handleMenuClose}
                  className={`text-left text-sm font-medium transition-colors ${pathname === '/png-to-webp' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  PNG to WebP
                </Link>
                <Link
                  href="/jpg-to-png"
                  onClick={handleMenuClose}
                  className={`text-left text-sm font-medium transition-colors ${pathname === '/jpg-to-png' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  JPG to PNG
                </Link>
                <Link
                  href="/webp-to-png"
                  onClick={handleMenuClose}
                  className={`text-left text-sm font-medium transition-colors ${pathname === '/webp-to-png' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  WebP to PNG
                </Link>
                <Link
                  href="/jpg-to-webp"
                  onClick={handleMenuClose}
                  className={`text-left text-sm font-medium transition-colors ${pathname === '/jpg-to-webp' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  JPG to WebP
                </Link>
                <Link
                  href="/png-to-jpg"
                  onClick={handleMenuClose}
                  className={`text-left text-sm font-medium transition-colors ${pathname === '/png-to-jpg' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  PNG to JPG
                </Link>
                <Link
                  href="/webp-to-jpg"
                  onClick={handleMenuClose}
                  className={`text-left text-sm font-medium transition-colors ${pathname === '/webp-to-jpg' ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}
                >
                  WebP to JPG
                </Link>
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
