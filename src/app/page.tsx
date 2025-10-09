import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'
import { FormatGrid } from '@/components/FormatGrid'
import { HowTo } from '@/components/HowTo'
import { Features } from '@/components/Features'
import { Testimonials } from '@/components/Testimonials'
import { CTA } from '@/components/CTA'
import { BannerBlocks } from '@/components/BannerBlock'
import { FAQ } from '@/components/FAQ'
import ToolsPreview from '@/components/ToolsPreview'
import { Metadata } from 'next'

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
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <FormatGrid />
      <HowTo />
      <Features />
      <ToolsPreview />
      <Testimonials />
      <CTA />
      <FAQ />
      <BannerBlocks />
    </>
  )
}
