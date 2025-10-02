import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Head from 'next/head';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Image Converter - Free Online Image & PDF Converter Tool',
  description:
    'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Complete PDF tools for conversion, merging, splitting, and analysis. Fast, secure, and completely free online converter.',
  keywords: [
    'image converter',
    'PDF converter',
    'image analyzer',
    'PNG to WebP',
    'JPG to PNG',
    'WebP to PNG',
    'PDF to JPG',
    'PDF to PNG',
    'images to PDF',
    'merge PDF',
    'split PDF',
    'PDF tools',
    'image format converter',
    'online image tool',
    'online PDF tool',
    'image analysis',
    'PDF analysis',
    'image properties',
    'EXIF data',
    'image metadata',
    'PDF metadata',
    'free image converter',
    'free PDF converter',
    'batch image converter',
    'image optimizer',
    'PDF optimizer',
    'image quality checker',
  ],
  authors: [{ name: 'Image Converter Team', url: 'https://imageconvertors.com' }],
  creator: 'ImageConverter Team',
  publisher: 'ImageConverter',
  applicationName: 'ImageConverter',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  alternates: {
    canonical: 'https://imageconvertors.com',
  },
  metadataBase: new URL('https://imageconvertors.com'),
  openGraph: {
    title: 'Image Converter - Free Online Image & PDF Converter Tool',
    description:
      'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Complete PDF tools for conversion, merging, splitting, and analysis. Fast, secure, and completely free.',
    url: 'https://imageconvertors.com',
    siteName: 'ImageConverter',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Image Converter - Free Online Image & PDF Tool',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@imageconverter',
    creator: '@imageconverter',
    title: 'Image Converter - Free Online Image & PDF Converter Tool',
    description: 'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Complete PDF tools included. Fast, secure, and completely free.',
    images: ['/images/og-image.png'],
  },
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
    shortcut: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  category: 'utilities',
};

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="mM2oIIAyburPaxGWhln8gTGmHOappiXVfNebcrHusHE" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <title>Image Converter</title>
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17602920334" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17602920334');
          `}
        </Script>

        <Header />
        <StructuredData />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
