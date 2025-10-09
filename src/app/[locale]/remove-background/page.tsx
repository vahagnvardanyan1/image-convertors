import { Metadata } from 'next';
import { BackgroundRemover } from '@/components/BackgroundRemover';

export const metadata: Metadata = {
  title: 'Remove Image Background - Free AI Background Remover | ImageConvertors',
  description: 'Remove image backgrounds automatically with AI. Free online background remover tool for product photos, portraits, and more. Fast, accurate, and privacy-focused.',
  keywords: 'background remover, remove background, AI background removal, transparent background, product photography, cut out image',
  openGraph: {
    title: 'Remove Image Background - Free AI Background Remover',
    description: 'Remove image backgrounds automatically with AI. Free online background remover tool for product photos, portraits, and more.',
    url: 'https://imageconvertors.com/remove-background',
    siteName: 'ImageConvertors',
    images: [
      {
        url: '/bg-remove.webp',
        width: 1200,
        height: 630,
        alt: 'AI Background Remover Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Remove Image Background - Free AI Background Remover',
    description: 'Remove image backgrounds automatically with AI. Free, fast, and privacy-focused.',
    images: ['/bg-remove.webp'],
  },
  alternates: {
    canonical: 'https://imageconvertors.com/remove-background',
  },
};

export default function RemoveBackgroundPage() {
  return <BackgroundRemover />;
}
