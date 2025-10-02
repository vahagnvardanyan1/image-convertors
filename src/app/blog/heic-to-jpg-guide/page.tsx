import Link from 'next/link';
import { ArrowLeft, Zap, CheckCircle, HelpCircle, Download, Upload, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convert HEIC to JPG Online – Free HEIC Converter | ImageConvertors',
  description: 'Convert HEIC photos from iPhone to JPG quickly and securely. No signup required. High-quality HEIC to JPG online conversion.',
  keywords: ['convert HEIC to JPG', 'HEIC to JPG online', 'free HEIC converter', 'iPhone photo converter', 'HEIC format', 'image converter'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/heic-to-jpg-guide',
  },
  openGraph: {
    title: 'Convert HEIC to JPG Online — Fast & Secure | ImageConvertors',
    description: 'Convert HEIC photos from iPhone to JPG quickly and securely. No signup required. High-quality HEIC to JPG online conversion.',
    url: 'https://imageconvertors.com/blog/heic-to-jpg-guide',
    siteName: 'ImageConverter',
    type: 'article',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'HEIC to JPG Converter Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert HEIC to JPG Online — Fast & Secure',
    description: 'Convert HEIC photos from iPhone to JPG quickly and securely. No signup required.',
    images: ['/images/og-image.webp'],
  },
};

export default function HeicToJpgGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Smartphone className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Convert HEIC to JPG Online — Fast & Secure</h1>
              <p className="text-gray-600 text-lg">The ultimate guide to converting iPhone photos</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-02').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>7 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            If you&apos;ve taken photos on an iPhone and tried to share them on a Windows PC or upload them to certain websites, you may have encountered the{' '}
            <strong>HEIC (High Efficiency Image Coding)</strong> format. While HEIC offers excellent quality at smaller file sizes, it&apos;s not universally supported. Converting HEIC to JPG ensures
            your photos work everywhere.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this guide, we&apos;ll explain what HEIC is, why you might need to convert it, and provide a simple step-by-step process to <strong>convert HEIC to JPG online</strong> quickly and
            securely.
          </p>
        </div>

        {/* What is HEIC */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Smartphone className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is HEIC and Why Convert It?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>HEIC (High Efficiency Image Coding)</strong> is Apple&apos;s default photo format introduced with iOS 11. It uses advanced compression to save storage space while maintaining high
            image quality. However, HEIC has limited compatibility outside the Apple ecosystem.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Benefits of HEIC:
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Smaller file sizes than JPG</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Better image quality at same file size</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Supports transparency and 16-bit color</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-4 flex items-center">
                <Zap className="mr-2" size={20} />
                Why Convert to JPG:
              </h3>
              <ul className="space-y-2 text-amber-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Universal compatibility across all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Works on Windows, Android, and web platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Supported by all social media and websites</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* How to Convert - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-blue-200 bg-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Convert HEIC to JPG with ImageConvertors (Step-by-Step)</h2>
          <p className="text-gray-700 mb-6">Converting HEIC files to JPG is quick and easy with our online tool. No software installation required—everything happens securely in your browser.</p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Go to HEIC to JPG Converter</h3>
                  <p className="text-gray-700 mb-3">
                    Open{' '}
                    <Link href="/heic-to-jpg" className="text-blue-600 hover:text-blue-800 font-medium underline">
                      ImageConvertors HEIC to JPG tool
                    </Link>{' '}
                    in your browser.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Upload Your HEIC Files
                    <Upload className="ml-2 text-blue-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Drag and drop your HEIC images or click to browse. You can upload multiple files at once for batch conversion.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Download Your JPG Files Instantly
                    <Download className="ml-2 text-blue-600" size={20} />
                  </h3>
                  <p className="text-gray-700">The conversion happens automatically. Download your converted JPG images and use them anywhere—on Windows, Android, social media, or websites.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/heic-to-jpg">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Try HEIC to JPG Converter Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Preserve Quality */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-green-50 to-emerald-50">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={24} />
            Preserve Quality While Converting
          </h3>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Export at full resolution:</strong> Our tool maintains the original image dimensions and quality during conversion.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Avoid re-saving JPG multiple times:</strong> Each time you save a JPG, it loses a small amount of quality. Keep your original HEIC files as a backup if possible.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Client-side processing:</strong> All conversions happen locally in your browser, ensuring your photos never leave your device—maximum privacy and security.
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2 text-blue-600" size={28} />
            FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is the conversion free?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Our HEIC to JPG converter is completely free with no limits on the number of conversions. No sign-up or registration required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Will my photos lose quality?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> The quality difference is minimal. While JPG uses lossy compression, we use high-quality settings to preserve as much detail as possible. For most use cases, the
                difference is imperceptible to the human eye.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is it safe to upload private photos?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Absolutely. All conversions happen directly in your browser using client-side processing. Your photos are never uploaded to our servers, ensuring complete privacy
                and security.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I convert multiple HEIC files at once?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Our tool supports batch conversion, allowing you to convert multiple HEIC files to JPG simultaneously, saving you time.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Convert Your iPhone Photos?</h2>
          <p className="text-xl mb-6 text-blue-100">Try our free HEIC to JPG converter now. Fast, secure, and works directly in your browser!</p>
          <Link href="/heic-to-jpg">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Converting Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/heic-to-png">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">HEIC to PNG</h3>
                <p className="text-gray-600 text-sm">Convert HEIC images to PNG format with transparency support.</p>
              </Card>
            </Link>
            <Link href="/heic-to-webp">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">HEIC to WebP</h3>
                <p className="text-gray-600 text-sm">Convert HEIC to modern WebP format for web optimization.</p>
              </Card>
            </Link>
            <Link href="/heic-to-pdf">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">HEIC to PDF</h3>
                <p className="text-gray-600 text-sm">Convert your HEIC images to PDF documents.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
