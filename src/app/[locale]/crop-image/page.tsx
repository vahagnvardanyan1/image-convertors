import type { Metadata } from 'next';
import { type Locale } from '@/i18n/config';

import { ImageCropper } from '@/components/ImageCropper';
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

type Props = {
  params: { locale: Locale };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  return generateToolMetadata({
    locale: params.locale,
    path: 'crop-image',
    namespace: 'metadata.cropImage',
  });
};

const CropImagePage = () => {
  return <ImageCropper />;
};

export default CropImagePage;
