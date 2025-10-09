import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'PNG to PDF Converter - Convert PNG Images to PDF Online Free',
  description:
    'Convert PNG images to PDF documents instantly. Maintain transparency and high quality. Customize page size, orientation, and margins. Fast, secure, and completely free PNG to PDF conversion tool.',
  keywords: [
    'PNG to PDF',
    'convert PNG to PDF',
    'PNG PDF converter',
    'PNG to PDF online',
    'PNG to PDF free',
    'PNG transparency PDF',
    'online PNG converter',
    'batch PNG to PDF',
    'PNG to PDF tool',
    'PNG document converter',
  ],
  openGraph: {
    title: 'PNG to PDF Converter - Free Online Tool',
    description: 'Convert PNG images to PDF documents instantly. Maintain transparency and high quality. Customize page size, orientation, and margins.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNG to PDF Converter - Free Online Tool',
    description: 'Convert PNG images to PDF documents instantly. Maintain transparency and high quality.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/png-to-pdf',
  },
};

export default function PngToPDFPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool
        mode="images-to-pdf"
        title="PNG to PDF Converter"
        description="Convert your PNG images to PDF documents. Upload PNG files with transparency support and create professional PDF documents with custom layouts."
      />
    </PDFErrorBoundary>
  );
}
