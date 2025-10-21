import { Metadata } from 'next';
import { AnalyzePage } from '@/components/AnalyzePage';
import { getTranslations } from 'next-intl/server';
import { localeMap, type Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: Locale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.analyze' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `https://imageconvertors.com/${locale}/analyze`,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://imageconvertors.com/${locale}/analyze`,
      siteName: 'ImageConvertors',
      type: 'website',
      locale: localeMap[locale] || 'en_US',
    },
  };
}

export default function ImageAnalyzePage() {
  return <AnalyzePage />;
}
