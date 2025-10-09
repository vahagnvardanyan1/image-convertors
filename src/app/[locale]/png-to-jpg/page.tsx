import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';

export const metadata: Metadata = {
  title: 'Convert PNG to JPG - Free Online Converter | ImageConvertors',
  description: 'Convert PNG images to JPG/JPEG format online for free. Remove transparency and reduce file size for universal compatibility. Fast, secure, and easy to use.',
  keywords: 'PNG to JPG, PNG to JPEG, image converter, PNG converter, JPG converter, reduce file size',
  alternates: {
    canonical: 'https://imageconvertors.com/png-to-jpg',
  },
};

export default function PngToJpgPage() {
  return <ConverterPage from="PNG" to="JPG" title="Convert PNG to JPG" />;
}
