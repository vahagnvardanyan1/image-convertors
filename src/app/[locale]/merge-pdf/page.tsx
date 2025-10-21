import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { type Locale } from '@/i18n/config';

import { PDFTool } from '@/components/PDFTool';
import { PDFErrorBoundary } from '@/components/PDFErrorBoundary';
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

type Props = {
  params: { locale: Locale };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  return generateToolMetadata({
    locale: params.locale,
    path: 'merge-pdf',
    namespace: 'metadata.mergePdf',
  });
};

const MergePDFPage = async ({ params }: Props) => {
  const headers = await getTranslations({ locale: params.locale, namespace: 'pdfToolHeaders' });

  return (
    <PDFErrorBoundary>
      <PDFTool mode="merge-pdf" title={headers('mergePdf.title')} description={headers('mergePdf.description')} />
    </PDFErrorBoundary>
  );
};

export default MergePDFPage;
