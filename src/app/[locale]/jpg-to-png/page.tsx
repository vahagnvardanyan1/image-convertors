import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert JPG to PNG - Free Online Converter | ImageConvertors',
  description: 'Convert JPG/JPEG images to PNG format online for free. Add transparency support and lossless compression. Fast, secure, and easy to use.',
  keywords: 'JPG to PNG, JPEG to PNG, image converter, JPG converter, PNG converter, add transparency',
  alternates: {
    canonical: 'https://imageconvertors.com/jpg-to-png',
  },
};

export default function JpgToPngPage() {
  return <ConverterPage from="JPG" to="PNG" title="Convert JPG to PNG" />;
}
