import { Metadata } from 'next';
import { BackgroundRemover } from '@/components/BackgroundRemover';

export const metadata: Metadata = {
  title: 'Remove Image Background - Free AI Background Remover | ImageConvertors',
  description: 'Remove image backgrounds automatically with AI. Free online background remover tool for product photos, portraits, and more. Fast, accurate, and privacy-focused.',
  keywords: 'background remover, remove background, AI background removal, transparent background, product photography, cut out image',
  alternates: {
    canonical: 'https://imageconvertors.com/remove-background',
  },
};

export default function RemoveBackgroundPage() {
  return <BackgroundRemover />;
}

