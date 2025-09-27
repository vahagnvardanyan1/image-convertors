import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';

interface HeaderProps {
  onNavigate: (route: string) => void;
  currentRoute: string;
}

export function Header({ onNavigate, currentRoute }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (route: string) => {
    setIsMenuOpen(false);
    onNavigate(route);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (currentRoute !== '/') {
      onNavigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('/')}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">IC</span>
            </div>
            <span className="ml-2 text-xl font-bold text-gray-900">ImageConverter</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => handleNavClick('/')} className={`transition-colors ${currentRoute === '/' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
              Home
            </button>
            <button onClick={() => scrollToSection('format-grid')} className="text-gray-600 hover:text-gray-900 transition-colors">
              Tools
            </button>
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
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-gray-900">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('/')} className={`text-left transition-colors ${currentRoute === '/' ? 'text-blue-600 font-medium' : 'text-gray-600 hover:text-gray-900'}`}>
                Home
              </button>
              <button onClick={() => scrollToSection('format-grid')} className="text-left text-gray-600 hover:text-gray-900 transition-colors">
                Tools
              </button>
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
