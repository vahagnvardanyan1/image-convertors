import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert WebP to JPG - Free Online Converter | ImageConverter',
  description: 'Convert WebP images to JPG/JPEG format online for free. Convert to universally compatible JPG format for maximum compatibility. Fast, secure, and easy to use.',
  keywords: 'WebP to JPG, WebP to JPEG, image converter, WebP converter, JPG converter, universal compatibility',
  robots: {
    index: false,
    follow: true,
  },
};

export default function WebpToJpgPage() {
  return <ConverterPage from="WebP" to="JPG" title="Convert WebP to JPG" />;
}
