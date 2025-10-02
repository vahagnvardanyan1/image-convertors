import Link from 'next/link';
import { ArrowLeft, Zap, TrendingDown, CheckCircle, HelpCircle, Download, Upload, Image as ImageIcon, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compress Images Without Losing Quality – Free Image Compressor | ImageConvertors',
  description: 'Reduce image file size for faster websites and SEO. Compress JPG, PNG, and WebP images online without losing quality.',
  keywords: ['compress images', 'image compression', 'reduce file size', 'image optimizer', 'lossless compression', 'web optimization', 'SEO images'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/compress-images-guide',
  },
  openGraph: {
    title: 'Best Way to Compress Images for the Web Without Losing Quality | ImageConvertors',
    description: 'Reduce image file size for faster websites and SEO. Compress JPG, PNG, and WebP images online without losing quality.',
    url: 'https://imageconvertors.com/blog/compress-images-guide',
    siteName: 'ImageConverter',
    type: 'article',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Image Compression Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Way to Compress Images for the Web Without Losing Quality',
    description: 'Reduce image file size for faster websites and SEO. Compress JPG, PNG, and WebP images online without losing quality.',
    images: ['/images/og-image.webp'],
  },
};

export default function CompressImagesGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <TrendingDown className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Compress Images for the Web Without Losing Quality</h1>
              <p className="text-gray-600 text-lg">Speed up your website and improve SEO with proper image compression</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-02').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>9 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Images are essential for engaging web content, but they can significantly slow down your website if not optimized properly. <strong>Large images mean slow websites</strong>, which leads to
            poor user experience, higher bounce rates, and lower search engine rankings.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            The good news? You can <strong>compress images without losing visible quality</strong>. In this guide, we&apos;ll show you how to reduce image file sizes dramatically while maintaining
            professional-looking results that keep visitors happy and search engines satisfied.
          </p>
        </div>

        {/* Why Compression Matters */}
        <Card className="p-8 mb-8 border-l-4 border-emerald-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mr-4">
              <Zap className="text-emerald-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Why Image Compression Matters</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">Large, uncompressed images are one of the biggest culprits behind slow-loading websites. Here&apos;s why compression is crucial:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                <Gauge className="mr-2" size={20} />
                Website Performance
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Faster page load times improve user experience</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reduces bandwidth usage and hosting costs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Better performance on mobile devices</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                <TrendingDown className="mr-2" size={20} />
                SEO Benefits
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Google rewards fast-loading sites with better rankings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Lower bounce rates keep visitors engaged</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Core Web Vitals directly impact search visibility</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-900 font-medium">
              <strong>Did you know?</strong> According to Google, 53% of mobile users abandon websites that take longer than 3 seconds to load. Image compression is your first line of defense against
              slow load times.
            </p>
          </div>
        </Card>

        {/* How to Compress - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-emerald-200 bg-emerald-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Compress Images Using ImageConvertors</h2>
          <p className="text-gray-700 mb-6">Our online image compressor makes it easy to reduce file sizes while preserving quality. Here&apos;s how:</p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Image Compressor Tool</h3>
                  <p className="text-gray-700 mb-3">
                    Visit ImageConvertors and select the appropriate format converter (
                    <Link href="/png-to-jpg" className="text-emerald-600 hover:text-emerald-800 font-medium underline">
                      PNG to JPG
                    </Link>
                    ,{' '}
                    <Link href="/jpg-to-webp" className="text-emerald-600 hover:text-emerald-800 font-medium underline">
                      JPG to WebP
                    </Link>
                    , etc.) for automatic compression.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Upload Your Files
                    <Upload className="ml-2 text-emerald-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Drag and drop your images or click to browse. Upload multiple files for batch compression.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Choose Lossless or Lossy</h3>
                  <p className="text-gray-700">
                    Select your compression level based on your needs. Convert to WebP or use JPG with quality settings for optimal results (see compression levels explained below).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Download Optimized Images
                    <Download className="ml-2 text-emerald-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Get your compressed images and upload them to your website for instant performance improvements.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/png-to-jpg">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                Start Compressing Images Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Compression Levels */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-purple-600" size={24} />
            Compression Levels Explained
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border-2 border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-3 text-lg flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Lossless Compression
              </h4>
              <p className="text-gray-700 mb-3">
                <strong>Keeps all image details</strong> without any quality loss. Ideal for graphics, logos, and images where every pixel matters.
              </p>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Best for:</strong> Logos, screenshots, diagrams, PNG files
                </p>
                <p className="text-sm text-purple-800 mt-1">
                  <strong>File reduction:</strong> 10-30%
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-pink-200">
              <h4 className="font-semibold text-pink-900 mb-3 text-lg flex items-center">
                <TrendingDown className="mr-2" size={20} />
                Lossy Compression
              </h4>
              <p className="text-gray-700 mb-3">
                <strong>Maximum file size reduction</strong> with minimal visible quality loss. Perfect for photos and web images where small quality trade-offs are acceptable.
              </p>
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="text-sm text-pink-800">
                  <strong>Best for:</strong> Photographs, web images, social media
                </p>
                <p className="text-sm text-pink-800 mt-1">
                  <strong>File reduction:</strong> 50-90%
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white border-2 border-green-200 rounded-lg">
            <p className="text-gray-900 font-medium mb-2">💡 Pro Tip: Use Quality Settings Wisely</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>85-95% quality:</strong> Excellent for hero images and important photos
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>75-85% quality:</strong> Perfect balance for most web images
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  <strong>60-75% quality:</strong> Good for thumbnails and background images
                </span>
              </li>
            </ul>
          </div>
        </Card>

        {/* Best Formats */}
        <Card className="p-8 mb-8 border-l-4 border-teal-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
              <ImageIcon className="text-teal-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Best Formats for Web</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h4 className="font-bold text-green-900 mb-2 flex items-center">
                <span className="bg-green-600 text-white px-2 py-1 rounded text-xs mr-2">RECOMMENDED</span>
                WebP
              </h4>
              <p className="text-gray-700 mb-2">Modern format with excellent compression and quality. 25-35% smaller than JPG with better quality.</p>
              <p className="text-sm text-green-800">
                <strong>Use for:</strong> All web images on modern browsers
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">AVIF</h4>
              <p className="text-gray-700 mb-2">Next-generation format with even better compression than WebP, but limited browser support.</p>
              <p className="text-sm text-gray-600">
                <strong>Use for:</strong> Progressive enhancement on cutting-edge sites
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">JPG</h4>
              <p className="text-gray-700 mb-2">Universal support, great for photos. Use 80-90% quality for web.</p>
              <p className="text-sm text-blue-800">
                <strong>Use for:</strong> Fallback format, maximum compatibility
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">PNG</h4>
              <p className="text-gray-700 mb-2">Lossless format, supports transparency. Good for logos and graphics.</p>
              <p className="text-sm text-purple-800">
                <strong>Use for:</strong> Logos, icons, images requiring transparency
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
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Will compressing images hurt SEO?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> No, quite the opposite! Compressing images improves page speed, which is a direct ranking factor for Google. Faster sites rank better and retain more visitors. Just
                maintain reasonable quality so images remain clear and professional.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I compress multiple images?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Absolutely! Our tool supports batch processing, allowing you to compress dozens or even hundreds of images at once. This is perfect for optimizing entire photo
                galleries or product catalogs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Which is better, JPG or WebP?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> WebP is superior for web use—it offers better compression and quality than JPG. However, JPG has universal support. Best practice: use WebP with JPG fallback, or
                simply convert all your images to WebP if you&apos;re targeting modern browsers (95%+ support as of 2025).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How much can I compress an image before quality suffers?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> It depends on the image type. For photos, 75-85% quality is usually perfect for web use. For graphics and screenshots, use higher quality (90-100%) or lossless
                formats like PNG. Always preview before finalizing to ensure quality meets your standards.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Speed Up Your Website?</h2>
          <p className="text-xl mb-6 text-emerald-100">Try our free image converter and start optimizing your images today. Fast, secure, and no sign-up required!</p>
          <Link href="/png-to-jpg">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Compressing Now →
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
                <p className="text-gray-600 text-sm">Convert PNG to WebP for maximum compression and quality.</p>
              </Card>
            </Link>
            <Link href="/jpg-to-webp">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">JPG to WebP</h3>
                <p className="text-gray-600 text-sm">Optimize your JPG images by converting to modern WebP format.</p>
              </Card>
            </Link>
            <Link href="/png-to-jpg">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">PNG to JPG</h3>
                <p className="text-gray-600 text-sm">Convert PNG to JPG for smaller file sizes and faster loading.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
