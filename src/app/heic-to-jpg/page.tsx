import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert HEIC to JPG - Free Online Converter | ImageConverter',
  description: 'Convert HEIC/HEIF images to JPG/JPEG format online for free. Transform Apple photos to universal JPG format for easy sharing. Fast, secure, and easy to use.',
  keywords: 'HEIC to JPG, HEIF to JPG, HEIC to JPEG, image converter, HEIC converter, Apple photos converter',
  alternates: {
    canonical: 'https://imageconvertors.com/heic-to-jpg',
  },
};

export default function HeicToJpgPage() {
  return <ConverterPage from="HEIC" to="JPG" title="Convert HEIC to JPG" />;
}
