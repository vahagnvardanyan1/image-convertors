import { Metadata } from 'next';
import { ConverterPage } from '@/components/ConverterPage';
import { getTranslations } from 'next-intl/server';
import { localeMap } from '@/i18n/config';
import { generateAIMeta } from '@/lib/geoHelpers';
import { geoConfig } from '@/lib/geo.config';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.pngToJpg' });

  // Generate GEO-enhanced metadata
  const pathname = `/${locale}/png-to-jpg`;
  const aiMeta = generateAIMeta(pathname);

  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: geoConfig.author.name, url: geoConfig.author.url }],
    creator: geoConfig.author.name,
    publisher: geoConfig.author.name,
    alternates: {
      canonical: `https://imageconvertors.com/${locale}/png-to-jpg`,
      languages: Object.fromEntries(geoConfig.languages.map(lang => [lang, `https://imageconvertors.com/${lang}/png-to-jpg`])),
    },
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `https://imageconvertors.com/${locale}/png-to-jpg`,
      siteName: 'ImageConvertors',
      type: 'website',
      locale: localeMap[locale] || 'en_US',
      alternateLocale: geoConfig.languages.filter(lang => lang !== locale),
      images: [
        {
          url: '/convert.webp',
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
      images: ['/convert.webp'],
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

export default async function PngToJpgPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'converterHeaders' });

  return <ConverterPage from="PNG" to="JPG" title={t('pngToJpg.title')} description={t('pngToJpg.description')} />;
}
