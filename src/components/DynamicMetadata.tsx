'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function DynamicMetadata() {
  const pathname = usePathname();

  useEffect(() => {
    // Update canonical URL based on current pathname
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = `${window.location.origin}${pathname}`;

    // Update page title based on pathname
    const routeTitles: Record<string, string> = {
      '/': 'ImageConverter - Free Online Image Format Converter & Analyzer',
      '/analyze': 'Image Analyzer - Analyze Image Properties, Size, Format & Quality | ImageConverter',
      '/png-to-webp': 'PNG to WebP Converter - Convert PNG Images to WebP Format | ImageConverter',
      '/jpg-to-png': 'JPG to PNG Converter - Convert JPEG Images to PNG Format | ImageConverter',
      '/webp-to-png': 'WebP to PNG Converter - Convert WebP Images to PNG Format | ImageConverter',
      '/jpg-to-webp': 'JPG to WebP Converter - Convert JPEG Images to WebP Format | ImageConverter',
      '/png-to-jpg': 'PNG to JPG Converter - Convert PNG Images to JPEG Format | ImageConverter',
      '/webp-to-jpg': 'WebP to JPG Converter - Convert WebP Images to JPEG Format | ImageConverter',
    };

    const title = routeTitles[pathname] || routeTitles['/'];
    if (title) {
      document.title = title;
    }
  }, [pathname]);

  return null; // This component doesn't render anything
}
