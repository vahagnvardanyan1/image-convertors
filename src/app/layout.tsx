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
import GoogleAnalytics from '@/components/GoogleAnalytics';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Free Online Tools: Image, Fonts & Colors | ImageConvertors',
  description: 'Free online image converter & font generator. Convert PNG/JPG/WebP images, create fancy text, and design color schemes—all without installing any software.',
  metadataBase: new URL('https://imageconvertors.com'),
  alternates: { canonical: 'https://imageconvertors.com' },
  keywords: 'free image converter, online image tools, font generator, fancy text, color palette generator, color picker, PNG to JPG, WebP converter, free online tools',
  verification: {
    google: 'mM2oIIAyburPaxGWhln8gTGmHOappiXVfNebcrHusHE',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://imageconvertors.com',
    siteName: 'ImageConvertors',
    title: 'Free Online Tools: Image, Fonts & Colors | ImageConvertors',
    description: 'Free online image converter & font generator. Convert PNG/JPG/WebP images, create fancy text, and design color schemes—all without installing any software.',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ImageConvertors - Free Online Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Online Tools: Image, Fonts & Colors | ImageConvertors',
    description: 'Free online image converter & font generator. Convert PNG/JPG/WebP images, create fancy text, and design color schemes—all without installing any software.',
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

export const viewport = {
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <GoogleAnalytics />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
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
