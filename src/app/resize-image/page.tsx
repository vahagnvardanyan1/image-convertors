import { Metadata } from 'next';
import { ImageResizer } from '@/components/ImageResizer';

export const metadata: Metadata = {
  title: 'Free Online Image Resizer - Resize Photos & Pictures | ImageConvertors',
  description: 'Resize images online for free with our easy-to-use image resizer tool. Scale by percentage, set exact dimensions, or use presets. No signup required, works in your browser.',
  keywords: 'image resizer, resize image online, photo resizer, resize pictures, scale image, image dimensions, resize photos, free image resizer, bulk image resize',
  alternates: {
    canonical: 'https://imageconvertors.com/resize-image',
  },
  openGraph: {
    title: 'Free Online Image Resizer - Resize & Scale Photos Instantly',
    description: 'Resize images online for free. Easy-to-use image resizer with percentage, pixel, and preset options. Maintain aspect ratio or resize freely. No signup required.',
    url: 'https://imageconvertors.com/resize-image',
    siteName: 'ImageConvertors',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/crop.webp',
        width: 1200,
        height: 630,
        alt: 'Free Online Image Resizer Tool - Resize Images Instantly',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Image Resizer - Resize Photos Instantly',
    description: 'Resize images online for free. Easy-to-use tool with percentage, pixel, and preset options. No signup required.',
    images: ['/crop.webp'],
  },
};

export default function ResizeImagePage() {
  return <ImageResizer />;
}
