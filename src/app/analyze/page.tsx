import { Metadata } from 'next';
import { AnalyzePage } from '@/components/AnalyzePage';

export const metadata: Metadata = {
  title: 'Image Analyzer - Analyze Image Properties & Metadata | ImageConverter',
  description: 'Analyze image properties, EXIF data, file size, dimensions, and format details. Free online image analyzer tool with detailed metadata extraction.',
  keywords: 'image analyzer, EXIF data, image properties, image metadata, file size analyzer, image dimensions',
  alternates: {
    canonical: 'https://imageconvertors.com/analyze',
  },
};

export default function ImageAnalyzePage() {
  return <AnalyzePage />;
}
