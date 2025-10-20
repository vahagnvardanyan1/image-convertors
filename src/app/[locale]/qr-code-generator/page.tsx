import type { Metadata } from 'next';

import { QRCodeGenerator } from '@/components/QRCodeGenerator';
import { generateToolMetadata } from '@/lib/metadata/toolMetadata';

type Props = {
  params: { locale: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  return generateToolMetadata({
    locale: params.locale,
    path: 'qr-code-generator',
    namespace: 'metadata.qrCode',
  });
};

const QRCodeGeneratorPage = () => {
  return <QRCodeGenerator />;
};

export default QRCodeGeneratorPage;
