import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'HEIC to PDF Converter - Convert HEIC Images to PDF Online Free',
  description:
    'Convert HEIC/HEIF images to PDF documents instantly. Transform Apple photos to PDF format. Maintain high quality and optimize file size. Customize page size, orientation, and margins. Fast, secure, and completely free HEIC to PDF conversion tool.',
  keywords: [
    'HEIC to PDF',
    'HEIF to PDF',
    'convert HEIC to PDF',
    'convert HEIF to PDF',
    'HEIC PDF converter',
    'HEIF PDF converter',
    'HEIC to PDF online',
    'HEIF to PDF free',
    'Apple photos to PDF',
    'batch HEIC to PDF',
    'HEIC to PDF tool',
    'HEIF document converter',
  ],
  openGraph: {
    title: 'HEIC to PDF Converter - Free Online Tool',
    description:
      'Convert HEIC/HEIF images to PDF documents instantly. Transform Apple photos to PDF format. Maintain high quality and optimize file size. Customize page size, orientation, and margins.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HEIC to PDF Converter - Free Online Tool',
    description: 'Convert HEIC/HEIF images to PDF documents instantly. Transform Apple photos to PDF format. Maintain high quality and optimize file size.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/heic-to-pdf',
  },
};

export default function HeicToPDFPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool
        mode="images-to-pdf"
        title="HEIC to PDF Converter"
        description="Convert your HEIC/HEIF images to PDF documents. Upload Apple photos and create professional PDF documents with optimized quality and custom layouts."
      />
    </PDFErrorBoundary>
  );
}
