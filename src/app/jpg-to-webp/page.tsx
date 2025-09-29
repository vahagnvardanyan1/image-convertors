import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert JPG to WebP - Free Online Converter | ImageConverter',
  description: 'Convert JPG/JPEG images to WebP format online for free. Optimize for web with smaller file sizes and excellent quality. Fast, secure, and easy to use.',
  keywords: 'JPG to WebP, JPEG to WebP, image converter, JPG converter, WebP converter, optimize images',
  alternates: {
    canonical: 'https://imageconvertors.com/jpg-to-webp',
  },
};

export default function JpgToWebpPage() {
  return <ConverterPage from="JPG" to="WebP" title="Convert JPG to WebP" />;
}
