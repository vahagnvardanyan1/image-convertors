import { Metadata } from 'next';
import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'PDF to JPG Converter - Convert PDF Pages to JPG Images Online Free',
  description: 'Convert PDF documents to high-quality JPG images instantly. Extract all pages or specific pages from PDF files. Fast, secure, and completely free PDF to JPG conversion tool.',
  keywords: ['PDF to JPG', 'PDF to JPEG', 'convert PDF to JPG', 'PDF to image converter', 'extract PDF pages', 'PDF page to JPG', 'online PDF converter', 'free PDF to JPG', 'PDF image extraction'],
  openGraph: {
    title: 'PDF to JPG Converter - Free Online Tool',
    description: 'Convert PDF documents to high-quality JPG images instantly. Extract all pages or specific pages from PDF files.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PDF to JPG Converter - Free Online Tool',
    description: 'Convert PDF documents to high-quality JPG images instantly. Extract all pages or specific pages from PDF files.',
  },
  alternates: {
    canonical: 'https://imageconvertors.com/pdf-to-jpg',
  },
};

export default async function PDFToJPGPage() {
  const t = await getTranslations('pdfTool');
  return (
    <PDFErrorBoundary>
      <PDFTool mode="pdf-to-images" title={t('pdfToJpgTitle')} description={t('pdfToJpgDescription')} />
    </PDFErrorBoundary>
  );
}
