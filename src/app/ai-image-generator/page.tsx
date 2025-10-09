import { Metadata } from 'next';
import { AIImageGenerator } from '@/components/AIImageGenerator';

export const metadata: Metadata = {
  title: 'Free AI Image Generator - Create Images from Text | ImageConvertors',
  description: 'Generate stunning AI images from text descriptions. Free AI image generator with advanced models. Create artwork, photos, and designs instantly. No signup required.',
  keywords: [
    'ai image generator',
    'text to image',
    'ai art generator',
    'free ai image',
    'image generation',
    'ai artwork',
    'create images from text',
    'ai photo generator',
    'flux ai',
    'stable diffusion',
    'ai art free',
  ],
  alternates: {
    canonical: 'https://imageconvertors.com/ai-image-generator',
  },
  openGraph: {
    title: 'Free AI Image Generator - Create Images from Text Instantly',
    description: 'Generate stunning AI images from text descriptions. Multiple AI models, unlimited generations, completely free.',
    url: 'https://imageconvertors.com/ai-image-generator',
    siteName: 'ImageConvertors',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/t2i.webp',
        width: 1200,
        height: 630,
        alt: 'Free AI Image Generator Tool',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Image Generator - Create Images from Text',
    description: 'Generate stunning AI images from text descriptions. Free, unlimited, no signup required.',
    images: ['/t2i.webp'],
  },
};

export default function AIImageGeneratorPage() {
  return <AIImageGenerator />;
}
