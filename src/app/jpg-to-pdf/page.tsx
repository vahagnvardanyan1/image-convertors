import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'JPG to PDF Converter - Convert JPEG Images to PDF Online Free',
  description:
    'Convert JPG/JPEG images to PDF documents instantly. Maintain high quality and optimize file size. Customize page size, orientation, and margins. Fast, secure, and completely free JPG to PDF conversion tool.',
  keywords: [
    'JPG to PDF',
    'JPEG to PDF',
    'convert JPG to PDF',
    'convert JPEG to PDF',
    'JPG PDF converter',
    'JPEG PDF converter',
    'JPG to PDF online',
    'JPEG to PDF free',
    'online JPG converter',
    'batch JPG to PDF',
    'JPG to PDF tool',
    'JPEG document converter',
  ],
  openGraph: {
    title: 'JPG to PDF Converter - Free Online Tool',
    description: 'Convert JPG/JPEG images to PDF documents instantly. Maintain high quality and optimize file size. Customize page size, orientation, and margins.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JPG to PDF Converter - Free Online Tool',
    description: 'Convert JPG/JPEG images to PDF documents instantly. Maintain high quality and optimize file size.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/jpg-to-pdf',
  },
};

export default function JpgToPDFPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool
        mode="images-to-pdf"
        title="JPG to PDF Converter"
        description="Convert your JPG/JPEG images to PDF documents. Upload JPEG files and create professional PDF documents with optimized quality and custom layouts."
      />
    </PDFErrorBoundary>
  );
}
