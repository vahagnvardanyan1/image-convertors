import { Hero } from '@/components/Hero';
import { FormatGrid } from '@/components/FormatGrid';
import { HowTo } from '@/components/HowTo';
import { Features } from '@/components/Features';
import { BannerBlocks } from '@/components/BannerBlock';
import { FAQ } from '@/components/FAQ';
import ToolsPreview from '@/components/ToolsPreview';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { localeMap } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://imageconvertors.com'),
    alternates: { canonical: `https://imageconvertors.com/${locale}` },
    keywords: t('keywords'),
    verification: {
      google: 'mM2oIIAyburPaxGWhln8gTGmHOappiXVfNebcrHusHE',
    },
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      url: `https://imageconvertors.com/${locale}`,
      siteName: 'ImageConvertors',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [
        {
          url: '/og-image.webp',
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
      images: ['/og-image.webp'],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <FormatGrid />
      <Hero />
      <HowTo />
      <ToolsPreview />
      <Features />
      <BannerBlocks />
      <FAQ />
    </>
  );
}
