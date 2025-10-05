'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface DynamicMetadataProps {
  title?: string;
  description?: string;
  keywords?: string;
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
      '/': 'ImageConverter - Free Online Image Format Converter & Analyzer',
      '/analyze': 'Image Analyzer - Analyze Image Properties, Size, Format & Quality | ImageConverter',
      '/png-to-webp': 'PNG to WebP Converter - Convert PNG Images to WebP Format | ImageConverter',
      '/jpg-to-png': 'JPG to PNG Converter - Convert JPEG Images to PNG Format | ImageConverter',
      '/webp-to-png': 'WebP to PNG Converter - Convert WebP Images to PNG Format | ImageConverter',
      '/jpg-to-webp': 'JPG to WebP Converter - Convert JPEG Images to WebP Format | ImageConverter',
      '/png-to-jpg': 'PNG to JPG Converter - Convert PNG Images to JPEG Format | ImageConverter',
      '/webp-to-jpg': 'WebP to JPG Converter - Convert WebP Images to JPEG Format | ImageConverter',
      '/fonts': 'Font Tools - Free Typography Playground, Font Pairing & Scale Generator | ImageConverter',
      '/fonts/preview': 'Font Preview - Interactive Typography Playground with Google Fonts | ImageConverter',
      '/fonts/pairings': 'Font Pairings - Discover Perfect Typography Combinations | ImageConverter',
      '/fonts/scales': 'Typographic Scale Generator - Create Harmonious Font Size Systems | ImageConverter',
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
      metaKeywords.content = keywords;
    }
  }, [pathname, customTitle, description, keywords]);

  return null; // This component doesn't render anything
}
