import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'PDF to PNG Converter - Convert PDF Pages to PNG Images Online Free',
  description:
    'Convert PDF documents to high-quality PNG images with transparency support. Extract all pages or specific pages from PDF files. Fast, secure, and completely free PDF to PNG conversion tool.',
  keywords: [
    'PDF to PNG',
    'convert PDF to PNG',
    'PDF to image converter',
    'extract PDF pages',
    'PDF page to PNG',
    'online PDF converter',
    'free PDF to PNG',
    'PDF image extraction',
    'PNG with transparency',
  ],
  openGraph: {
    title: 'PDF to PNG Converter - Free Online Tool',
    description: 'Convert PDF documents to high-quality PNG images with transparency support. Extract all pages or specific pages from PDF files.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to PNG Converter - Free Online Tool',
    description: 'Convert PDF documents to high-quality PNG images with transparency support. Extract all pages or specific pages from PDF files.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/pdf-to-png',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PDFToPNGPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool
        mode="pdf-to-images"
        title="PDF to PNG Converter"
        description="Convert your PDF documents to high-quality PNG images with transparency support. Extract all pages or select specific pages to convert."
      />
    </PDFErrorBoundary>
  );
}
