import { Metadata } from 'next';
import { ImageEnhancer } from '@/components/ImageEnhancer';

export const metadata: Metadata = {
  title: 'Free AI Image Enhancer Online – Enhance & Upscale Photos Instantly | ImageConvertors',
  description: 'Free AI-powered image enhancer. Upscale, sharpen, denoise, and improve image quality online instantly. No signup, unlimited use. Professional results for photos, graphics, and more.',
  keywords: [
    'free image enhancer',
    'enhance image free',
    'free AI image enhancement',
    'upscale image online free',
    'improve image quality free',
    'image sharpener free',
    'photo enhancer online free',
    'denoise image',
    'AI image upscaler',
    'enhance photo quality',
    'improve image resolution',
    'sharpen image online',
    'photo quality enhancer',
    'image optimizer',
    'enhance picture quality',
    'online image enhancer no signup',
    'free photo quality improver',
    'enhance blurry photos',
    'increase image quality',
    'photo enhancement tool',
  ],
  openGraph: {
    title: 'Free AI Image Enhancer - Upscale & Improve Photo Quality Online',
    description: 'Free AI-powered image enhancer. Upscale, sharpen, and improve image quality online instantly. No signup required. Professional results in seconds.',
    url: 'https://imageconvertors.com/enhance-image',
    siteName: 'ImageConvertors',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'AI Image Enhancer Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Image Enhancer - Upscale & Improve Photo Quality Online',
    description: 'Free AI-powered image enhancer. Upscale, sharpen, and improve image quality instantly. No signup required.',
    images: ['/og-image.webp'],
  },
  alternates: {
    canonical: 'https://imageconvertors.com/enhance-image',
  },
};

export default function EnhanceImagePage() {
  return <ImageEnhancer />;
}
