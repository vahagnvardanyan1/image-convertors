import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ImageConverter - Free Online Image & PDF Converter Tool',
    short_name: 'ImageConverter',
    description:
      'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Complete PDF tools for conversion, merging, splitting, and analysis. Fast, secure, and completely free online converter.',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
    categories: ['utilities', 'productivity', 'photo'],
    lang: 'en',
    orientation: 'any',
    icons: [
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/favicon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  };
}
