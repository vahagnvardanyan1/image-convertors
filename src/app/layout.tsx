import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'ImageConverter - Free Online Image Format Converter',
  description: 'Convert images between PNG, JPG, WebP, GIF and more formats instantly. Fast, secure, and completely free online image converter tool.',
  keywords: 'image converter, PNG to WebP, JPG to PNG, image format converter, online image tool',
  authors: [{ name: 'ImageConverter Team' }],
  openGraph: {
    title: 'ImageConverter - Free Online Image Format Converter',
    description: 'Convert images between PNG, JPG, WebP, GIF and more formats instantly. Fast, secure, and completely free.',
    type: 'website',
  },
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
