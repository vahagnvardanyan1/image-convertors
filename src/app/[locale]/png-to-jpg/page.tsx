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
    path: 'png-to-jpg',
    namespace: 'metadata.pngToJpg',
  });
};

const PngToJpgPage = async ({ params }: Props) => {
  const t = await getTranslations({ locale: params.locale, namespace: 'converterHeaders' });
  return <ConverterPage from="PNG" to="JPG" title={t('pngToJpg.title')} description={t('pngToJpg.description')} />;
};

export default PngToJpgPage;
