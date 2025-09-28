import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';

export const metadata: Metadata = {
  title: 'PDF Information Analyzer - View PDF Metadata and Properties Online Free',
  description: 'Analyze PDF documents to view detailed information including page count, file size, metadata, creation date, author, and more. Fast, secure, and completely free PDF analyzer tool.',
  keywords: ['PDF info', 'PDF analyzer', 'PDF metadata', 'PDF properties', 'PDF information', 'analyze PDF', 'PDF details', 'PDF inspector', 'online PDF analyzer', 'free PDF info'],
  openGraph: {
    title: 'PDF Information Analyzer - Free Online Tool',
    description: 'Analyze PDF documents to view detailed information including page count, file size, metadata, creation date, author, and more.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF Information Analyzer - Free Online Tool',
    description: 'Analyze PDF documents to view detailed information including page count, file size, metadata, creation date, author, and more.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/pdf-info',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PDFInfoPage() {
  return (
    <PDFErrorBoundary>
      <PDFTool
        mode="pdf-info"
        title="PDF Information Analyzer"
        description="Analyze your PDF document to view detailed information including metadata, page count, file size, author, creation date, and more."
      />
    </PDFErrorBoundary>
  );
}
