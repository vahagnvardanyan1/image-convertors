'use client';

import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Button } from '../ui/button';
import { ImageWithFallback } from '../ImageWithFallback';
import { useDropdowns } from '@/hooks/useDropdowns';
import { AI_TOOLS, IMAGE_TOOLS, IMAGE_CONVERTERS, PDF_TOOLS, COLOR_TOOLS, TEXT_TOOLS, JSON_TOOLS, FONT_TOOLS, BLOG_GUIDES } from '@/config/toolCatalog';
import { getIcon } from '@/utils/iconLookup';

export const Header = () => {
  const t = useTranslations('header');
  const tCommon = useTranslations('common');
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, toggle, closeAll } = useDropdowns();

  const handleMenuClose = () => {
    setIsMenuOpen(false);
    closeAll();
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (pathname !== '/') {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const categories = [
    { name: 'ai', label: t('aiTools'), icon: 'Sparkles', tools: AI_TOOLS },
    { name: 'image', label: t('imageTools'), icon: 'ImageIcon', tools: [...IMAGE_TOOLS, ...IMAGE_CONVERTERS] },
    { name: 'pdf', label: t('pdfTools'), icon: 'FileText', tools: PDF_TOOLS },
    { name: 'color', label: t('colorTools'), icon: 'Palette', tools: COLOR_TOOLS },
    { name: 'text', label: t('textTools'), icon: 'Type', tools: [...TEXT_TOOLS, ...JSON_TOOLS, ...FONT_TOOLS] },
    { name: 'blog', label: t('blog'), icon: 'BookOpen', tools: BLOG_GUIDES },
  ];

  const renderDropdown = (categoryName: string, label: string, iconName: string, tools: typeof AI_TOOLS) => {
    const Icon = getIcon(iconName);
    const dropdownKey = `${categoryName}Dropdown`;

    return (
      <div className="relative group dropdown-container" onMouseEnter={() => toggle(dropdownKey)} onMouseLeave={() => toggle(dropdownKey)}>
        <button className="flex min-w-0 items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2" onClick={() => toggle(dropdownKey)}>
          <Icon size={16} />
          <span className="truncate max-w-[9rem]">{label}</span>
          <ChevronDown size={16} className={`transition-transform ${isOpen(dropdownKey) ? 'rotate-180' : ''}`} />
        </button>

        {isOpen(dropdownKey) && (
          <div className="absolute left-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
            <div className="p-4 space-y-2">
              <h3 className="text-sm font-bold text-gray-900 mb-3">{t('popularTools')}</h3>
              {tools
                .filter(tool => tool.popular)
                .map(tool => {
                  const ToolIcon = getIcon(tool.icon);
                  return (
                    <Link key={tool.path} href={tool.path} onClick={handleMenuClose} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <ToolIcon className="text-blue-600" size={18} />
                      <span className="text-sm text-gray-700 hover:text-gray-900">{t(tool.translationKey)}</span>
                    </Link>
                  );
                })}

              {tools.filter(tool => !tool.popular).length > 0 && (
                <>
                  <div className="border-t border-gray-100 my-2"></div>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">{t('moreTools')}</h3>
                  {tools
                    .filter(tool => !tool.popular)
                    .map(tool => {
                      const ToolIcon = getIcon(tool.icon);
                      return (
                        <Link key={tool.path} href={tool.path} onClick={handleMenuClose} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                          <ToolIcon className="text-gray-500" size={18} />
                          <span className="text-sm text-gray-700 hover:text-gray-900">{t(tool.translationKey)}</span>
                        </Link>
                      );
                    })}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-2">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer min-w-0">
            <ImageWithFallback src="/logo.png" alt="ImageConverter Logo" className="rounded-lg" height={50} width={50} />
            <span className="ml-2 text-xl font-bold text-gray-900 truncate max-w-[10rem] sm:max-w-none">ImageConverter</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">{categories.map(cat => renderDropdown(cat.name, cat.label, cat.icon, cat.tools))}</nav>

          {/* Mobile Menu Button */}
          <Button variant="outline" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4">
            <div className="space-y-4">
              {categories.map(cat => {
                const Icon = getIcon(cat.icon);
                return (
                  <div key={cat.name}>
                    <button onClick={() => toggle(`mobile-${cat.name}`)} className="flex items-center justify-between w-full text-left p-2 hover:bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Icon size={20} className="text-gray-600" />
                        <span className="font-medium text-gray-900">{cat.label}</span>
                      </div>
                      <ChevronDown size={18} className={`transition-transform ${isOpen(`mobile-${cat.name}`) ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen(`mobile-${cat.name}`) && (
                      <div className="ml-8 mt-2 space-y-2">
                        {cat.tools.map(tool => {
                          const ToolIcon = getIcon(tool.icon);
                          return (
                            <Link key={tool.path} href={tool.path} onClick={handleMenuClose} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded-lg">
                              <ToolIcon size={16} className="text-gray-500" />
                              <span className="text-sm text-gray-700">{t(tool.translationKey)}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
