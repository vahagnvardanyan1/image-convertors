import { Metadata } from 'next';
import { BackgroundRemover } from '@/components/BackgroundRemover';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.removeBackground' });

  const localeMap: Record<string, string> = {
    en: 'en_US',
    hi: 'hi_IN',
  };

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `https://imageconvertors.com/${locale}/remove-background`,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://imageconvertors.com/${locale}/remove-background`,
      siteName: 'ImageConvertors',
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      images: [
        {
          url: '/bg-remove.webp',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('twitterTitle'),
      description: t('twitterDescription'),
      images: ['/bg-remove.webp'],
    },
  };
}

export default function RemoveBackgroundPage() {
  return <BackgroundRemover />;
}
