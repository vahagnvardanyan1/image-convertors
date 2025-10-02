import Link from 'next/link';
import { ArrowLeft, Image as ImageIcon, Zap, Shield, CheckCircle, TrendingDown, HelpCircle, Download, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convert JPG to WebP Online Free – Best JPG to WebP Converter | ImageConvertors',
  description: 'Convert JPG images to modern WebP format online for free. Reduce file sizes, speed up websites, and maintain image quality with our fast JPG to WebP converter.',
  keywords: ['convert JPG to WebP', 'JPG to WebP online', 'free JPG to WebP converter', 'JPG to WebP tool'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/jpg-to-webp-guide',
  },
  openGraph: {
    title: 'Convert JPG to WebP Online (Free & Fast) - Complete Guide',
    description: 'Convert JPG images to modern WebP format online for free. Reduce file sizes, speed up websites, and maintain image quality with our fast JPG to WebP converter.',
    url: 'https://imageconvertors.com/blog/jpg-to-webp-guide',
    siteName: 'ImageConverter',
    type: 'article',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'JPG to WebP Converter Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Convert JPG to WebP Online (Free & Fast) - Complete Guide',
    description: 'Convert JPG images to modern WebP format online for free. Reduce file sizes, speed up websites, and maintain image quality.',
    images: ['/images/og-image.webp'],
  },
};

export default function JpgToWebpGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <TrendingDown className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Convert JPG to WebP Online (Free & Fast)</h1>
              <p className="text-gray-600 text-lg">Reduce file sizes and speed up your website</p>
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
            JPG has been the most popular image format for years, but with the rise of modern web technologies, WebP has become the new standard for faster and more efficient image delivery. Many
            website owners, bloggers, developers, and digital marketers now <strong>convert JPG to WebP online</strong> to improve performance and SEO. In this guide, we&apos;ll explain why WebP is
            better, how to convert JPG images to WebP, and tips to get the best results.
          </p>
        </div>

        {/* What is JPG */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <ImageIcon className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is JPG?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            JPG (or JPEG) is a widely used compressed image format that balances quality and file size. It&apos;s best suited for photographs and web use but is less efficient compared to newer
            formats.
          </p>
        </Card>

        {/* What is WebP */}
        <Card className="p-8 mb-8 border-l-4 border-green-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
              <Zap className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is WebP?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            WebP is an image format developed by Google that offers superior compression without noticeable quality loss. It supports both lossy and lossless compression, as well as transparency (like
            PNG) and animation (like GIF).
          </p>
        </Card>

        {/* Why Convert */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-green-50 to-teal-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-green-600" size={28} />
            Why Convert JPG to WebP?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-green-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <TrendingDown className="text-green-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Reduce File Size</h3>
              </div>
              <p className="text-gray-600 text-sm">Reduce file size by up to 35% compared to JPG without quality loss.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-green-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="text-green-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Speed Up Websites</h3>
              </div>
              <p className="text-gray-600 text-sm">Speed up website loading time with better Core Web Vitals scores.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-green-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <Shield className="text-green-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Save Storage Space</h3>
              </div>
              <p className="text-gray-600 text-sm">Save storage space for hosting or mobile devices.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-green-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-green-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Improve SEO</h3>
              </div>
              <p className="text-gray-600 text-sm">Improve SEO by delivering faster, optimized content to users.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-green-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                  <ImageIcon className="text-green-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Browser Support</h3>
              </div>
              <p className="text-gray-600 text-sm">WebP is supported by most modern browsers including Chrome, Firefox, Edge, and Safari.</p>
            </div>
          </div>
        </Card>

        {/* How to Convert - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-green-200 bg-green-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Convert JPG to WebP Online (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Go to ImageConvertors or any reliable JPG to WebP converter</h3>
                  <p className="text-gray-700 mb-3">
                    Open{' '}
                    <Link href="/jpg-to-webp" className="text-green-600 hover:text-green-800 font-medium underline">
                      ImageConvertors
                    </Link>{' '}
                    for a free and fast conversion experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Upload your JPG image
                    <Upload className="ml-2 text-green-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Drag and drop supported for easy uploading.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Choose WebP as the output format</h3>
                  <p className="text-gray-700">Select WebP from the format options.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Click Convert and wait a few seconds</h3>
                  <p className="text-gray-700">The conversion process is fast and secure.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Download your WebP image
                    <Download className="ml-2 text-green-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Use it on your website, blog, or app for improved performance.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/jpg-to-webp">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Try JPG to WebP Converter Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Tips for Best Conversion */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Tips for Best JPG to WebP Conversion
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use lossless WebP</strong> for logos or images where sharpness matters.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use lossy WebP</strong> for photos to maximize compression and reduce file size.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Test images on your website</strong> to ensure browser compatibility.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Combine with lazy-loading techniques</strong> for maximum performance benefits.
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2 text-blue-600" size={28} />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Does WebP work on all browsers?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes, WebP is supported by most major browsers like Chrome, Firefox, Edge, and Safari (since version 14). Browser support is now excellent across all modern
                platforms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Will WebP reduce the quality of my JPGs?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> No, WebP preserves visual quality while reducing file size significantly. You can choose between lossy and lossless compression depending on your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I batch convert multiple JPGs to WebP?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes, many converters including{' '}
                <Link href="/jpg-to-webp" className="text-green-600 hover:text-green-800 font-medium underline">
                  ImageConvertors
                </Link>{' '}
                support batch processing, allowing you to convert multiple images at once.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is WebP better than PNG or JPG?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes, WebP is more efficient and versatile, offering smaller file sizes and transparency support. It combines the best features of both JPG and PNG formats.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Convert Your Images?</h2>
          <p className="text-xl mb-6 text-green-100">Try our free JPG to WebP converter now. Fast, secure, and no sign-up required!</p>
          <Link href="/jpg-to-webp">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Converting Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/png-to-webp">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">PNG to WebP</h3>
                <p className="text-gray-600 text-sm">Convert PNG images to WebP format for better compression.</p>
              </Card>
            </Link>
            <Link href="/webp-to-jpg">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">WebP to JPG</h3>
                <p className="text-gray-600 text-sm">Convert WebP images back to JPG for compatibility.</p>
              </Card>
            </Link>
            <Link href="/heic-to-jpg">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">HEIC to JPG</h3>
                <p className="text-gray-600 text-sm">Convert iPhone HEIC photos to JPG format.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
