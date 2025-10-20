import Link from 'next/link';
import { ArrowLeft, Zap, TrendingDown, CheckCircle, HelpCircle, Download, Upload, Image as ImageIcon, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Compress Image to 20KB, 50KB, 100KB Without Losing Quality',
  description: 'Complete guide to compress images online free. Reduce image size to 20KB, 50KB, 100KB. Best image compressor tool for web, social media. No signup required.',
  keywords: [
    'compress image',
    'compress image online',
    'compress image to 20kb',
    'compress image to 50kb',
    'compress image to 100kb',
    'image compressor',
    'reduce image size',
    'compress image without losing quality',
    'image compression',
    'optimize images for web',
    'reduce photo size',
    'compress jpg',
    'compress png',
  ],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/compress-images-guide',
  },
  openGraph: {
    title: 'How to Compress Image to 20KB, 50KB Without Losing Quality - Complete Guide',
    description: 'Complete guide to compress images online free. Reduce image size to 20KB, 50KB, 100KB with our free image compressor tool.',
    url: 'https://imageconvertors.com/blog/compress-images-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'How to Compress Images Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Compress Image to 20KB, 50KB Without Losing Quality',
    description: 'Complete guide to compress images online free. Reduce image size with our free image compressor tool.',
    images: ['/og-image.webp'],
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
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">How to Compress Image to 20KB, 50KB, 100KB Without Losing Quality</h1>
              <p className="text-gray-600 text-lg">Complete guide to compress images online free with our image compressor tool</p>
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
            Need to <strong>compress image to 20KB</strong> for a profile picture? Want to <strong>reduce image size to 50KB</strong> for faster website loading? Or perhaps you need to{' '}
            <strong>compress image to 100KB</strong> for email attachments? You are in the right place!
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Image compression</strong> is the process of reducing file size without significant quality loss. Whether you are optimizing images for web, social media, email, or storage, proper
            compression can reduce file sizes by 50-90% while maintaining excellent visual quality.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we will show you exactly <strong>how to compress images online free</strong> using our powerful image compressor tool, explain different compression
            techniques, and provide tips for achieving specific file size targets like 20KB, 50KB, or 100KB.
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
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Compress Images Online Free (Step-by-Step)</h2>
          <p className="text-gray-700 mb-6">
            Our free online image compressor makes it easy to compress images to any target size. Here&apos;s how to compress image to 20KB, 50KB, or any custom size:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Free Image Compressor</h3>
                  <p className="text-gray-700 mb-3">
                    Visit our{' '}
                    <Link href="/compress-image" className="text-emerald-600 hover:text-emerald-800 font-medium underline">
                      Free Image Compressor Tool
                    </Link>
                    . No signup required, completely free, works in your browser.
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
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Choose Compression Mode</h3>
                  <p className="text-gray-700 mb-3">Select your compression method:</p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>
                      • <strong>Target File Size</strong> — Set exact target like 20KB, 50KB, or 100KB
                    </li>
                    <li>
                      • <strong>By Quality</strong> — Adjust quality slider (10-100%)
                    </li>
                    <li>
                      • <strong>Custom</strong> — Advanced settings for specific needs
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Set Target Size (Optional)</h3>
                  <p className="text-gray-700">
                    For specific file size requirements, select target file size mode and choose from presets (20KB, 50KB, 100KB, 200KB) or enter a custom value. The tool will automatically adjust
                    compression to reach your target.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Compress & Download
                    <Download className="ml-2 text-emerald-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Click &quot;Compress Now&quot; and download your optimized image. See before/after comparison and file size reduction percentage.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/compress-image">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3">
                Try Free Image Compressor Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Target File Size Guide */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Gauge className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">How to Compress Image to Specific Sizes</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">Different use cases require different file sizes. Here is how to achieve specific target sizes:</p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🎯 Compress Image to 20KB</h3>
              <p className="text-gray-700 mb-3">
                <strong>Perfect for:</strong> Profile pictures, avatars, thumbnails, icons
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>How to achieve:</strong> Use target file size mode and select 20KB. The tool will optimize quality automatically. Alternatively, start with 40-50% quality and adjust.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Pro tip:</strong> For 20KB targets, resize image to 400-600px first for better results.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🎯 Compress Image to 50KB</h3>
              <p className="text-gray-700 mb-3">
                <strong>Perfect for:</strong> Email attachments, blog thumbnails, social media posts
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>How to achieve:</strong> Select 50KB target size preset. The compressor will find the optimal balance between quality and size.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Pro tip:</strong> 50KB is ideal for images displayed at 800px wide or smaller.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🎯 Compress Image to 100KB</h3>
              <p className="text-gray-700 mb-3">
                <strong>Perfect for:</strong> Website images, product photos, blog featured images
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>How to achieve:</strong> Use 100KB preset or set quality to 70-80%. This provides excellent quality for full-width web images.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Pro tip:</strong> 100KB is the sweet spot for most website images under 1920px wide.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🎯 Compress Image to 200KB</h3>
              <p className="text-gray-700 mb-3">
                <strong>Perfect for:</strong> High-quality photos, hero images, portfolio images
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <strong>How to achieve:</strong> Select 200KB preset or use 80-85% quality setting.
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Pro tip:</strong> Great for images that need to look sharp at full HD (1920×1080px) resolution.
              </p>
            </div>
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
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How to compress image to 20KB?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> To compress an image to 20KB: 1) Upload your image to our compressor tool, 2) Select &quot;Target File Size&quot; mode, 3) Choose 20KB preset or enter 20 manually,
                4) Click &quot;Compress Now&quot;. Our tool will automatically optimize the image to reach approximately 20KB while maintaining the best possible quality. For better results with 20KB
                targets, resize your image to 400-600px first.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How to compress image without losing quality?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> To compress images without noticeable quality loss: 1) Use our image compressor tool, 2) Select &quot;By Quality&quot; mode, 3) Set quality to 80-90%, 4) Click
                &quot;Compress Now&quot;. This range provides excellent balance between file size reduction and visual quality. For web images, 80% quality is usually optimal and the difference from
                100% is imperceptible to most viewers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What is the best image compressor online?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> ImageConvertors offers one of the best free image compressors online with quality control, target file size compression (20KB, 50KB, 100KB, 200KB presets), and
                instant browser-based processing. All compression happens locally in your browser, ensuring complete privacy and security. No signup required, unlimited use, and works with JPG, PNG,
                and WebP formats.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How do I reduce image file size?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> To reduce image file size: 1) Use our image compressor, 2) Choose between quality-based or target file size compression, 3) Set your desired output (e.g., 50KB or
                80% quality), 4) Compress and download. You can typically reduce file sizes by 50-90% while maintaining good visual quality. Combine compression with resizing for maximum file size
                reduction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Will compressing images hurt SEO?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> No! Compressing images actually improves SEO by making your website load faster. Page speed is a direct ranking factor for Google. Compressed images mean faster
                loading times, better user experience, lower bounce rates, and improved Core Web Vitals scores—all of which help your search engine rankings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I compress JPG and PNG images?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Our image compressor works with JPG, PNG, and WebP formats. JPG images compress well with lossy compression (50-90% size reduction). PNG images can be
                compressed losslessly or converted to JPG/WebP for better compression ratios. Upload any image format and get optimized output with our free tool.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is your image compressor really free?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes, completely free! No hidden costs, no watermarks, no signup required, and unlimited compressions. All processing happens directly in your browser for maximum
                privacy and security. Your images never leave your device, ensuring complete confidentiality.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Compress Your Images?</h2>
          <p className="text-xl mb-6 text-emerald-100">Try our free image compressor and reduce image size to 20KB, 50KB, or any target. Fast, secure, and no sign-up required!</p>
          <Link href="/compress-image">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Compress Images Free Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Image Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/compress-image">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full border-2 border-emerald-200">
                <h3 className="font-semibold text-gray-900 mb-2">🎯 Image Compressor</h3>
                <p className="text-gray-600 text-sm">Compress images to 20KB, 50KB, or any target size online free.</p>
              </Card>
            </Link>
            <Link href="/resize-image">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Resize Image</h3>
                <p className="text-gray-600 text-sm">Resize images by pixels, percentage, or presets for optimal dimensions.</p>
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
