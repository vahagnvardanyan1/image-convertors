import { Metadata } from 'next';
import { QRCodeGenerator } from '@/components/QRCodeGenerator';

export const metadata: Metadata = {
  title: 'Free QR Code Generator - Create Custom QR Codes Online | ImageConvertors',
  description: 'Generate free QR codes for URLs, WiFi, contact cards, text, and more. Customize colors, sizes, and download as PNG or SVG. No signup required, completely secure and private.',
  keywords: [
    'qr code generator',
    'free qr code',
    'create qr code',
    'qr code maker',
    'custom qr code',
    'qr code online',
    'wifi qr code',
    'vcard qr code',
    'url qr code',
    'qr code creator',
    'generate qr code free',
    'qr code download',
  ],
  alternates: {
    canonical: 'https://imageconvertors.com/qr-code-generator',
  },
  openGraph: {
    title: 'Free QR Code Generator - Create Custom QR Codes Instantly',
    description: 'Generate QR codes for URLs, WiFi, contacts, and more. Customize colors and download for free. No signup required.',
    url: 'https://imageconvertors.com/qr-code-generator',
    siteName: 'ImageConvertors',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/qr-code.webp',
        width: 1200,
        height: 630,
        alt: 'Free QR Code Generator Tool - Create Custom QR Codes',
      },
    ],
  },
};

export default function QRCodeGeneratorPage() {
  return <QRCodeGenerator />;
}
