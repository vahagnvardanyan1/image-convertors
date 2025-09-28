import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert PNG to WebP - Free Online Converter | ImageConverter',
  description: 'Convert PNG images to WebP format online for free. Reduce file size by up to 30% while maintaining excellent quality. Fast, secure, and easy to use.',
  keywords: 'PNG to WebP, image converter, PNG converter, WebP converter, compress images',
  robots: {
    index: false,
    follow: true,
  },
};

export default function PngToWebpPage() {
  return <ConverterPage from="PNG" to="WebP" title="Convert PNG to WebP" />;
}
