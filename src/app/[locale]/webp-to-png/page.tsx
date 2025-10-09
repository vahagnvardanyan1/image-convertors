import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert WebP to PNG - Free Online Converter | ImageConvertors',
  description: 'Convert WebP images to PNG format online for free. Convert modern WebP to widely supported PNG with transparency. Fast, secure, and easy to use.',
  keywords: 'WebP to PNG, image converter, WebP converter, PNG converter, transparency support',
  alternates: {
    canonical: 'https://imageconvertors.com/webp-to-png',
  },
};

export default function WebpToPngPage() {
  return <ConverterPage from="WebP" to="PNG" title="Convert WebP to PNG" />;
}
