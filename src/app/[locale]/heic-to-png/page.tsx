import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';
import { getTranslations } from 'next-intl/server';
import { localeMap, type Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.heicToPng' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `https://imageconvertors.com/${locale}/heic-to-png`,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://imageconvertors.com/${locale}/heic-to-png`,
      siteName: 'ImageConvertors',
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      images: [
        {
          url: '/convert.webp',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
  };
}

export default async function HeicToPngPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'converterHeaders' });

  return <ConverterPage from="HEIC" to="PNG" title={t('heicToPng.title')} description={t('heicToPng.description')} />;
}
