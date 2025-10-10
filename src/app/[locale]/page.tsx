import { Hero } from '@/components/Hero';
import { FormatGrid } from '@/components/FormatGrid';
import { HowTo } from '@/components/HowTo';
import { Features } from '@/components/Features';
import { BannerBlock } from '@/components/BannerBlock';
import { FAQ } from '@/components/FAQ';
import { ToolsPreview } from '@/components/ToolsPreview';
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
    icons: {
      icon: [
        { url: '/favicon.ico', sizes: 'any' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      shortcut: [{ url: '/favicon.ico' }],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
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
      <BannerBlock />
      <FAQ />
    </>
  );
}
