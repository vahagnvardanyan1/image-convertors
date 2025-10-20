import type { Metadata } from 'next';

import { ImageCompressor } from '@/components/ImageCompressor';
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

type Props = {
  params: { locale: string };
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
