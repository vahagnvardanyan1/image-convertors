import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'Merge PDF Files - Combine Multiple PDF Documents Online Free',
  description: 'Merge multiple PDF files into a single document instantly. Combine PDFs in any order while maintaining quality. Fast, secure, and completely free PDF merger tool.',
  keywords: ['merge PDF', 'combine PDF', 'PDF merger', 'join PDF files', 'concatenate PDF', 'unite PDF documents', 'online PDF merge', 'free PDF merger', 'combine PDF files', 'PDF joiner'],
  openGraph: {
    title: 'Merge PDF Files - Free Online PDF Merger',
    description: 'Merge multiple PDF files into a single document instantly. Combine PDFs in any order while maintaining quality.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Merge PDF Files - Free Online PDF Merger',
    description: 'Merge multiple PDF files into a single document instantly. Combine PDFs in any order while maintaining quality.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/merge-pdf',
  },
};

export default function MergePDFPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool mode="merge-pdf" title="Merge PDF Files" description="Combine multiple PDF documents into a single file. Upload your PDF files and they will be merged in the order you select them." />
    </PDFErrorBoundary>
  );
}
