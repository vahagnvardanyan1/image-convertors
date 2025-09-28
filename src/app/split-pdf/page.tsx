import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'Split PDF Files - Extract Pages from PDF Documents Online Free',
  description: 'Split PDF documents into separate files by page ranges. Extract specific pages or split into individual pages. Fast, secure, and completely free PDF splitter tool.',
  keywords: ['split PDF', 'PDF splitter', 'extract PDF pages', 'separate PDF pages', 'divide PDF', 'break PDF', 'PDF page extractor', 'online PDF split', 'free PDF splitter', 'PDF page separator'],
  openGraph: {
    title: 'Split PDF Files - Free Online PDF Splitter',
    description: 'Split PDF documents into separate files by page ranges. Extract specific pages or split into individual pages.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Split PDF Files - Free Online PDF Splitter',
    description: 'Split PDF documents into separate files by page ranges. Extract specific pages or split into individual pages.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/split-pdf',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SplitPDFPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool mode="split-pdf" title="Split PDF Files" description="Split your PDF document into separate files. Define custom page ranges and create multiple PDF files from a single document." />
    </PDFErrorBoundary>
  );
}
