import { Metadata } from 'next';
import { ImageCropper } from '@/components/ImageCropper';
import './cropper.css';

export const metadata: Metadata = {
  title: 'Free Online Image Cropper - Crop Photos & Pictures | ImageConvertors',
  description: 'Crop images online for free with our easy-to-use image cropper tool. Resize, rotate, and crop photos to perfect dimensions. No signup required, works in your browser.',
  keywords: ['image cropper', 'crop image online', 'photo cropper', 'crop pictures', 'resize image', 'cut image', 'image crop tool', 'free image cropper', 'crop photo online'],
  alternates: {
    canonical: 'https://imageconvertors.com/crop-image',
  },
  openGraph: {
    title: 'Free Online Image Cropper - Crop & Resize Photos Instantly',
    description: 'Crop images online for free. Easy-to-use image cropper with zoom, rotate, and flip options. Perfect dimensions every time. No signup required.',
    url: 'https://imageconvertors.com/crop-image',
    siteName: 'ImageConvertors',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/crop.webp',
        width: 1200,
        height: 630,
        alt: 'Free Online Image Cropper Tool - Crop Images Instantly',
      },
    ],
  },
};

export default function CropImagePage() {
  return <ImageCropper />;
}
