import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert HEIC to WebP - Free Online Converter | ImageConvertors',
  description: 'Convert HEIC/HEIF images to WebP format online for free. Transform Apple photos to modern WebP format for optimal web performance. Fast, secure, and easy to use.',
  keywords: 'HEIC to WebP, HEIF to WebP, image converter, HEIC converter, WebP converter, Apple photos converter',
  alternates: {
    canonical: 'https://imageconvertors.com/heic-to-webp',
  },
};

export default function HeicToWebpPage() {
  return <ConverterPage from="HEIC" to="WebP" title="Convert HEIC to WebP" />;
}
