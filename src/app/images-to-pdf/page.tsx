import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'Images to PDF Converter - Convert JPG, PNG, WebP to PDF Online Free',
  description: 'Convert multiple images (JPG, PNG, WebP) into a single PDF document. Customize page size, orientation, and margins. Fast, secure, and completely free image to PDF conversion tool.',
  keywords: [
    'images to PDF',
    'JPG to PDF',
    'PNG to PDF',
    'WebP to PDF',
    'convert images to PDF',
    'combine images PDF',
    'merge images PDF',
    'online PDF creator',
    'free images to PDF',
    'batch image to PDF',
  ],
  openGraph: {
    title: 'Images to PDF Converter - Free Online Tool',
    description: 'Convert multiple images (JPG, PNG, WebP) into a single PDF document. Customize page size, orientation, and margins.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Images to PDF Converter - Free Online Tool',
    description: 'Convert multiple images (JPG, PNG, WebP) into a single PDF document. Customize page size, orientation, and margins.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/images-to-pdf',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImagesToPDFPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool
        mode="images-to-pdf"
        title="Images to PDF Converter"
        description="Convert multiple images into a single PDF document. Upload your JPG, PNG, or WebP files and customize the PDF layout."
      />
    </PDFErrorBoundary>
  );
}
