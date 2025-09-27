'use client';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FormatGrid } from '@/components/FormatGrid';
import { HowTo } from '@/components/HowTo';
import { Features } from '@/components/Features';
import { BannerBlocks } from '@/components/BannerBlock';
import { FAQ } from '@/components/FAQ';
import { ConverterPage } from '@/components/ConverterPage';
import { Footer } from '@/components/Footer';

// Route configuration
const routes = {
  home: '/',
  'png-to-webp': '/png-to-webp',
  'jpg-to-png': '/jpg-to-png',
  'webp-to-png': '/webp-to-png',
  'jpg-to-webp': '/jpg-to-webp',
  'png-to-jpg': '/png-to-jpg',
  'webp-to-jpg': '/webp-to-jpg',
};

export default function App() {
  const [currentRoute, setCurrentRoute] = useState('/');

  // Simple client-side routing
  const navigateTo = (route: string) => {
    setCurrentRoute(route);
    window.history.pushState(null, '', route);
  };

  // Handle browser back/forward
  window.onpopstate = () => {
    setCurrentRoute(window.location.pathname);
  };

  // Extract conversion details from route
  const getConversionFromRoute = (route: string) => {
    const routeMap: Record<string, { from: string; to: string; title: string }> = {
      '/png-to-webp': { from: 'PNG', to: 'WebP', title: 'Convert PNG to WebP' },
      '/jpg-to-png': { from: 'JPG', to: 'PNG', title: 'Convert JPG to PNG' },
      '/webp-to-png': { from: 'WebP', to: 'PNG', title: 'Convert WebP to PNG' },
      '/jpg-to-webp': { from: 'JPG', to: 'WebP', title: 'Convert JPG to WebP' },
      '/png-to-jpg': { from: 'PNG', to: 'JPG', title: 'Convert PNG to JPG' },
      '/webp-to-jpg': { from: 'WebP', to: 'JPG', title: 'Convert WebP to JPG' },
    };
    return routeMap[route];
  };

  const conversionDetails = getConversionFromRoute(currentRoute);

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={navigateTo} currentRoute={currentRoute} />

      {currentRoute === '/' ? (
        // Home page
        <>
          <Hero onNavigate={navigateTo} />
          <FormatGrid onNavigate={navigateTo} />
          <HowTo />
          <Features />
          <BannerBlocks />
          <FAQ />
        </>
      ) : conversionDetails ? (
        // Individual converter pages
        <ConverterPage {...conversionDetails} onNavigate={navigateTo} />
      ) : (
        // 404 fallback
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
            <button onClick={() => navigateTo('/')} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200">
              Back to Home
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
