import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CookieConsent } from '@/components/CookieConsent';
import { StructuredData } from '@/components/StructuredData';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ImageConverter - Free Online Image & PDF Converter Tool',
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
  authors: [{ name: 'ImageConverter Team', url: 'https://imageconvertors.com' }],
  creator: 'ImageConverter Team',
  publisher: 'ImageConverter',
  applicationName: 'ImageConverter',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://imageconvertors.com',
  },
  themeColor: '#ffffff',
  metadataBase: new URL('https://imageconvertors.com'),
  openGraph: {
    title: 'ImageConverter - Free Online Image & PDF Converter Tool',
    description:
      'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Complete PDF tools for conversion, merging, splitting, and analysis. Fast, secure, and completely free.',
    url: 'https://imageconvertors.com',
    siteName: 'ImageConverter',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ImageConverter - Free Online Image & PDF Tool',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@imageconverter',
    creator: '@imageconverter',
    title: 'ImageConverter - Free Online Image & PDF Converter Tool',
    description: 'Convert and analyze images between PNG, JPG, WebP, GIF and more formats instantly. Complete PDF tools included. Fast, secure, and completely free.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  category: 'utilities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
