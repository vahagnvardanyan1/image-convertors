import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { SITE_URL } from '@/config/constants';
import { Hero } from '@/components/Hero';
import { FormatGrid } from '@/components/FormatGrid';
import { HowTo } from '@/components/HowTo';
import { Features } from '@/components/Features';
import { BannerBlock } from '@/components/BannerBlock';
import { FAQ } from '@/components/FAQ';
import ToolsPreview from '@/components/ToolsPreview';
import { localeMap, type Locale } from '@/i18n/config';
import { generateAIMeta } from '@/lib/metaHelpers'; // Corrected import path
import { geoConfig } from '@/config/geo'; // Corrected import path

// Importing additional components for layout consistency
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';
import GoogleAnalytics from '@/components/GoogleAnalytics';

// Define the viewport theme color
export const viewport = {
  themeColor: '#ffffff',
};

// Global metadata including favicon configuration
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  // Generate GEO-enhanced metadata
  const aiMeta = generateAIMeta('/');

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: Object.fromEntries(geoConfig.languages.map(lang => [lang, `${SITE_URL}/${lang}`])),
    },
    keywords: t('keywords'),
    authors: [{ name: geoConfig.author.name, url: geoConfig.author.url }],
    creator: geoConfig.author.name,
    publisher: geoConfig.author.name,
    verification: {
      google: 'mM2oIIAyburPaxGWhln8gTGmHOappiXVfNebcrHusHE',
    },
    openGraph: {
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      alternateLocale: geoConfig.languages.filter(lang => lang !== locale).map(lang => `${SITE_URL}/${lang}`),
      url: `${SITE_URL}/${locale}`,
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
      site: '@imageconverter',
      creator: '@imageconverter',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // GEO: Custom AI-readable meta tags
    other: {
      ...aiMeta,
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <FormatGrid />
        <Hero />
        <HowTo />
        <ToolsPreview />
        <Features />
        <BannerBlock />
        <FAQ />
      </main>
      <Footer />
      <CookieConsent />
      <StructuredData />
      <GoogleAnalytics />
    </>
  );
}
