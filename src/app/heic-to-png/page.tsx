import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert HEIC to PNG - Free Online Converter | ImageConverter',
  description: 'Convert HEIC/HEIF images to PNG format online for free. Add transparency support and convert Apple photos to universal PNG format. Fast, secure, and easy to use.',
  keywords: 'HEIC to PNG, HEIF to PNG, image converter, HEIC converter, PNG converter, Apple photos converter',
  alternates: {
    canonical: 'https://imageconvertors.com/heic-to-png',
  },
};

export default function HeicToPngPage() {
  return <ConverterPage from="HEIC" to="PNG" title="Convert HEIC to PNG" />;
}
