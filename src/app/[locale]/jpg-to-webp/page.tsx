import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { type Locale } from '@/i18n/config';

import { ConverterPage } from '@/components/ConverterPage';
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

type Props = {
  params: { locale: Locale };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  return generateToolMetadata({
    locale: params.locale,
    path: 'jpg-to-webp',
    namespace: 'metadata.jpgToWebp',
  });
};

const JpgToWebpPage = async ({ params }: Props) => {
  const t = await getTranslations({ locale: params.locale, namespace: 'converterHeaders' });
  return <ConverterPage from="JPG" to="WEBP" title={t('jpgToWebp.title')} description={t('jpgToWebp.description')} />;
};

export default JpgToWebpPage;
