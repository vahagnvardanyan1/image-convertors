'use client';

import React from 'react';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { SITE_URL } from '@/config/constants';
import { Hero } from '@/components/Hero';
import { FormatGrid } from '@/components/FormatGrid';
import { HowTo } from '@/components/HowTo';
import { Features } from '@/components/Features';
import { BannerBlocks } from '@/components/BannerBlock';
import { FAQ } from '@/components/FAQ';
import ToolsPreview from '@/components/ToolsPreview';
import { localeMap, type Locale } from '@/i18n/config';
import { geoConfig } from '@/lib/geo.config';

// Corrected import path for generateAIMeta
import { generateAIMeta } from '@/lib/geoHelpers'; // Ensure this path exists or correct it if necessary

/**
 * Props type for the HomePage component.
 * @typedef {Object} Props
 * @property {{ locale: Locale }} params - Object containing the locale.
 */
type Props = {
  params: { locale: Locale };
};

/**
 * Generates metadata for the HomePage component.
 * This function fetches translations and constructs metadata including GEO-enhanced tags.
 *
 * @param {Props} props - The properties object containing params.
 * @returns {Promise<Metadata>} - A promise that resolves to the metadata object.
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  // Generate GEO-enhanced metadata
  let aiMeta;
  try {
    aiMeta = generateAIMeta('/');
  } catch (error) {
    console.error('Failed to generate AI metadata:', error);
    aiMeta = {};
  }

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
      alternateLocale: geoConfig.languages.filter(lang => lang !== locale),
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

/**
 * HomePage component renders the main content of the home page.
 * It includes various sections such as FormatGrid, Hero, HowTo, ToolsPreview, Features, BannerBlocks, and FAQ.
 *
 * @returns {JSX.Element} - The JSX code for the home page.
 */
export default function HomePage() {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<Error | null>(null);
  const [data, setData] = React.useState<unknown>(null);

  React.useEffect(() => {
    async function fetchData() {
      try {
        // Simulate data fetching
        const response = await fetch('/api/data');
        if (!response.ok) throw new Error('Failed to fetch data');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data available</div>;

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
