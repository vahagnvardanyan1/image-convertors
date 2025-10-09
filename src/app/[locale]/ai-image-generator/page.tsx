import { Metadata } from 'next';
import { AIImageGenerator } from '@/components/AIImageGenerator';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.aiImageGenerator' });

  const localeMap: Record<string, string> = {
    en: 'en_US',
    hi: 'hi_IN',
  };

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    alternates: {
      canonical: `https://imageconvertors.com/${locale}/ai-image-generator`,
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://imageconvertors.com/${locale}/ai-image-generator`,
      siteName: 'ImageConvertors',
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      images: [
        {
          url: '/t2i.webp',
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
      images: ['/t2i.webp'],
    },
  };
}

export default function AIImageGeneratorPage() {
  return <AIImageGenerator />;
}
