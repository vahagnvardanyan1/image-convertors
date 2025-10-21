import type { Metadata } from 'next';
import { type Locale } from '@/i18n/config';

import { ImageCompressor } from '@/components/ImageCompressor';
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

type Props = {
  params: { locale: Locale };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  return generateToolMetadata({
    locale: params.locale,
    path: 'compress-image',
    namespace: 'metadata.compressImage',
  });
};

const CompressImagePage = () => {
  return <ImageCompressor />;
};

export default CompressImagePage;
