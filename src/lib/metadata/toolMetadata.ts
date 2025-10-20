import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { localeMap } from '@/i18n/config';
import { generateAIMeta } from '@/lib/geoHelpers';
import { geoConfig } from '@/lib/geo.config';

interface ToolMetadataOptions {
  locale: string;
  path: string;
  namespace: string;
  ogImage?: string;
}

export const generateToolMetadata = async ({ locale, path, namespace, ogImage = '/convert.webp' }: ToolMetadataOptions): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace });

  const pathname = `/${locale}/${path}`;
  const aiMeta = generateAIMeta(pathname);
  const canonicalUrl = `https://imageconvertors.com/${locale}/${path}`;

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: geoConfig.author.name, url: geoConfig.author.url }],
    creator: geoConfig.author.name,
    publisher: geoConfig.author.name,
    alternates: {
      canonical: canonicalUrl,
      languages: Object.fromEntries(geoConfig.languages.map(lang => [lang, `https://imageconvertors.com/${lang}/${path}`])),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: canonicalUrl,
      siteName: 'ImageConvertors',
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      alternateLocale: geoConfig.languages.filter(lang => lang !== locale),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('ogTitle'),
      description: t('ogDescription'),
      images: [ogImage],
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
    other: {
      ...aiMeta,
    },
  };
};
