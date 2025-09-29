import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'WebP to PDF Converter - Convert WebP Images to PDF Online Free',
  description:
    'Convert WebP images to PDF documents instantly. Maintain excellent quality and compression. Customize page size, orientation, and margins. Fast, secure, and completely free WebP to PDF conversion tool.',
  keywords: [
    'WebP to PDF',
    'convert WebP to PDF',
    'WebP PDF converter',
    'WebP to PDF online',
    'WebP to PDF free',
    'WebP compression PDF',
    'online WebP converter',
    'batch WebP to PDF',
    'WebP to PDF tool',
    'WebP document converter',
  ],
  openGraph: {
    title: 'WebP to PDF Converter - Free Online Tool',
    description: 'Convert WebP images to PDF documents instantly. Maintain excellent quality and compression. Customize page size, orientation, and margins.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebP to PDF Converter - Free Online Tool',
    description: 'Convert WebP images to PDF documents instantly. Maintain excellent quality and compression.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/webp-to-pdf',
  },
};

export default function WebpToPDFPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool
        mode="images-to-pdf"
        title="WebP to PDF Converter"
        description="Convert your WebP images to PDF documents. Upload modern WebP files and create professional PDF documents with excellent compression and custom layouts."
      />
    </PDFErrorBoundary>
  );
}
