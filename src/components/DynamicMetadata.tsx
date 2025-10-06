'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface DynamicMetadataProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
}

export function DynamicMetadata({ title: customTitle, description, keywords }: DynamicMetadataProps = {}) {
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

    // Update page title
    const routeTitles: Record<string, string> = {
      '/': 'Free Online Tools: Image, Fonts & Colors | ImageConvertors',
      '/analyze': 'Image Analyzer - Analyze Image Properties, Size, Format & Quality | ImageConvertors',
      '/png-to-webp': 'PNG to WebP Converter - Convert PNG Images to WebP Format | ImageConvertors',
      '/jpg-to-png': 'JPG to PNG Converter - Convert JPEG Images to PNG Format | ImageConvertors',
      '/webp-to-png': 'WebP to PNG Converter - Convert WebP Images to PNG Format | ImageConvertors',
      '/jpg-to-webp': 'JPG to WebP Converter - Convert JPEG Images to WebP Format | ImageConvertors',
      '/png-to-jpg': 'PNG to JPG Converter - Convert PNG Images to JPEG Format | ImageConvertors',
      '/webp-to-jpg': 'WebP to JPG Converter - Convert WebP Images to JPEG Format | ImageConvertors',
      '/colors': 'Free Color Tools: Palette Generator & Picker | ImageConvertors',
      '/colors/picker': 'Color Picker - Interactive Color Selector & Format Converter | ImageConvertors',
      '/colors/palettes': 'Color Palette Generator - Create & Save Custom Color Schemes | ImageConvertors',
      '/colors/gradients': 'Gradient Generator - Create CSS & Tailwind Gradients Online | ImageConvertors',
      '/colors/converter': 'Color Converter - Convert Between HEX, RGB, HSL & Color Formats | ImageConvertors',
      '/texts/fonts': 'Font Tools - Free Typography Playground, Font Pairing & Scale Generator | ImageConvertors',
      '/texts/fonts/preview': 'Font Preview - Interactive Typography Playground with Google Fonts | ImageConvertors',
      '/texts/fonts/pairings': 'Font Pairings - Discover Perfect Typography Combinations | ImageConvertors',
      '/texts/fonts/scales': 'Typographic Scale Generator - Create Harmonious Font Size Systems | ImageConvertors',
    };

    const title = customTitle || routeTitles[pathname] || routeTitles['/'];
    if (title) {
      document.title = title;
    }

    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Update meta keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = Array.isArray(keywords) ? keywords.join(', ') : keywords;
    }
  }, [pathname, customTitle, description, keywords]);

  return null; // This component doesn't render anything
}
