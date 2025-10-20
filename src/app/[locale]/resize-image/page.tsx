import type { Metadata } from 'next';

import { ImageResizer } from '@/components/ImageResizer';
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

type Props = {
  params: { locale: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  return generateToolMetadata({
    locale: params.locale,
    path: 'resize-image',
    namespace: 'metadata.resizeImage',
  });
};

const ResizeImagePage = () => {
  return <ImageResizer />;
};

export default ResizeImagePage;
