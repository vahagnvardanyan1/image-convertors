import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { ConverterPage } from '@/components/ConverterPage';
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

type Props = {
  params: { locale: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  return generateToolMetadata({
    locale: params.locale,
    path: 'jpg-to-png',
    namespace: 'metadata.jpgToPng',
  });
};

const JpgToPngPage = async ({ params }: Props) => {
  const t = await getTranslations({ locale: params.locale, namespace: 'converterHeaders' });
  return <ConverterPage from="JPG" to="PNG" title={t('jpgToPng.title')} description={t('jpgToPng.description')} />;
};

export default JpgToPngPage;
