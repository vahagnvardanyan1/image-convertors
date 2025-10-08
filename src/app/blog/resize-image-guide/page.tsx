import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Maximize2, Zap, CheckCircle, HelpCircle, Upload, Download, Sparkles, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Online Image Resizer — Resize & Scale Photos Instantly | ImageConvertors',
  description:
    'Learn how to resize images online for free with our comprehensive guide. Discover professional resizing techniques, dimensions, and tips for perfect image scaling. No software needed.',
  keywords: [
    'resize image online',
    'free image resizer',
    'how to resize images',
    'resize photos online free',
    'image resize tool',
    'scale images',
    'photo resizer online',
    'resize pictures free',
    'online image resizing tool',
    'resize image without losing quality',
    'batch image resize',
    'resize to specific dimensions',
    'free photo resizer',
    'resize images for web',
    'compress by resizing',
    'make image smaller',
    'reduce image size',
    'enlarge image online',
  ],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/resize-image-guide',
  },
  openGraph: {
    title: 'Free Online Image Resizer — How to Resize & Scale Photos Perfectly',
    description: 'Complete guide to resizing images online for free. Learn professional techniques, optimal dimensions, and best practices for perfect image scaling. No signup required.',
    url: 'https://imageconvertors.com/blog/resize-image-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    locale: 'en_US',
    authors: ['ImageConvertors'],
    tags: ['image resizing', 'photo scaling', 'image dimensions', 'resize tool', 'image optimization', 'web images', 'free tools'],
    images: [
      {
        url: '/crop.webp',
        width: 1200,
        height: 630,
        alt: 'Free Online Image Resizer Tool - Resize Images Instantly',
      },
    ],
  },
};

export default function ResizeImageGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Maximize2 className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Free Online Image Resizer — Resize & Scale Photos Perfectly</h1>
              <p className="text-gray-600 text-lg">Complete guide to resizing images like a pro</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-08').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Whether you&apos;re optimizing images for your website, preparing photos for social media, reducing file sizes for email, or creating thumbnails, <strong>resizing images</strong> is a
            fundamental skill for anyone working with digital media. With our <strong>free online image resizer</strong>, you can scale, shrink, or enlarge your images in seconds—no software
            installation, no signup, and completely free.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll show you exactly <strong>how to resize images online</strong>, explain the best practices for different scenarios, and help you achieve professional
            results while maintaining quality.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-green-100 shadow-xl">
            <Image src="/crop.webp" alt="Screenshot of the ImageConvertors free online image resizer tool showing resizing interface" width={1200} height={630} className="w-full h-auto" priority />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Resize images online with precision using our free image resizer tool — no signup required, completely secure.</p>
        </div>

        {/* What is Image Resizing */}
        <Card className="p-8 mb-8 border-l-4 border-green-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
              <Maximize2 className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is Image Resizing?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Image resizing</strong> is the process of changing the dimensions (width and height) of a digital image, making it larger or smaller. Unlike cropping (which removes portions of an
            image), resizing scales the entire image while optionally maintaining its original proportions (aspect ratio).
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900 mb-4 flex items-center">
                <CheckCircle className="mr-2" size={20} />
                Perfect For:
              </h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Website optimization and faster loading</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Social media posts (Instagram, Facebook, Twitter)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Email attachments and file size reduction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Creating thumbnails and preview images</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Preparing images for printing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Mobile app assets and icons</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h3 className="font-semibold text-emerald-900 mb-4 flex items-center">
                <Sparkles className="mr-2" size={20} />
                Key Benefits:
              </h3>
              <ul className="space-y-2 text-emerald-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reduce file size for faster uploads/downloads</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Meet platform-specific dimension requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Improve website performance and SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Save storage space on devices</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Create consistent image sizes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Prepare images for different devices</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* How to Resize Images - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-green-200 bg-green-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Resize Images Online Free (Step-by-Step)</h2>
          <p className="text-gray-700 mb-6">
            Resizing images with our <strong>free online image resizer</strong> is incredibly simple. No software to download, no signup required, and no technical knowledge needed. Follow these easy
            steps:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Free Image Resizer Tool</h3>
                  <p className="text-gray-700 mb-3">
                    Visit{' '}
                    <Link href="/resize-image" className="text-green-600 hover:text-green-800 font-medium underline">
                      ImageConvertors Free Image Resizer
                    </Link>{' '}
                    in your web browser. The tool works on any device—desktop, tablet, or mobile. No downloads or registration required.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Upload Your Image
                    <Upload className="ml-2 text-green-600" size={20} />
                  </h3>
                  <p className="text-gray-700 mb-2">Click the &quot;Choose Image&quot; button or drag and drop your image file directly into the upload area.</p>
                  <p className="text-gray-600 text-sm">✓ Supports JPG, PNG, WebP, GIF, and HEIC formats</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Select Resize Method
                    <Settings className="ml-2 text-green-600" size={20} />
                  </h3>
                  <p className="text-gray-700 mb-3">Choose your preferred resizing method:</p>
                  <ul className="text-gray-700 space-y-2 ml-4">
                    <li>
                      • <strong>Percentage</strong> — Scale to 50%, 75%, 200%, etc. of original size
                    </li>
                    <li>
                      • <strong>Custom Pixels</strong> — Enter exact width and height dimensions
                    </li>
                    <li>
                      • <strong>Presets</strong> — Quick sizes: Thumbnail (150×150), HD (1280×720), Full HD (1920×1080), 4K (3840×2160)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Set Your Dimensions</h3>
                  <p className="text-gray-700 mb-3">Adjust the size based on your chosen method:</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>
                      • <strong>Percentage mode:</strong> Use the slider (10%-200%)
                    </li>
                    <li>
                      • <strong>Pixels mode:</strong> Enter width/height, lock aspect ratio if needed
                    </li>
                    <li>
                      • <strong>Preset mode:</strong> Select from common sizes
                    </li>
                  </ul>
                  <p className="text-gray-600 text-sm mt-3">💡 Lock aspect ratio to prevent distortion and maintain proportions</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Resize & Download Your Image
                    <Download className="ml-2 text-green-600" size={20} />
                  </h3>
                  <p className="text-gray-700">
                    Preview the output dimensions, then click &quot;Resize & Download&quot;. Your perfectly resized image will be saved as PNG to your device. The original file remains unchanged on
                    your computer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/resize-image">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Try Free Image Resizer Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Understanding Image Dimensions */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Maximize2 className="mr-2 text-green-600" size={28} />
            Understanding Image Dimensions & When to Resize
          </h2>
          <p className="text-gray-700 mb-6">
            Different platforms and use cases require different image dimensions. Choosing the right size ensures your images look professional, load quickly, and display correctly across all devices.
          </p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">📱 Social Media Optimal Sizes</h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>Instagram Posts:</strong> 1080×1080px (1:1 square) or 1080×1350px (4:5 portrait)
                </li>
                <li>
                  <strong>Instagram Stories:</strong> 1080×1920px (9:16 portrait)
                </li>
                <li>
                  <strong>Facebook Posts:</strong> 1200×630px for link shares, 940×788px for regular posts
                </li>
                <li>
                  <strong>Twitter Posts:</strong> 1200×675px (16:9)
                </li>
                <li>
                  <strong>LinkedIn Posts:</strong> 1200×627px for articles, 1104×736px for regular posts
                </li>
                <li>
                  <strong>Pinterest Pins:</strong> 1000×1500px (2:3 vertical)
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🌐 Website & Web Images</h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>Hero Images:</strong> 1920×1080px (Full HD) for full-width headers
                </li>
                <li>
                  <strong>Blog Post Images:</strong> 1200×630px (optimal for sharing)
                </li>
                <li>
                  <strong>Thumbnails:</strong> 150×150px to 300×300px for galleries
                </li>
                <li>
                  <strong>Product Images:</strong> 800×800px to 1500×1500px for e-commerce
                </li>
                <li>
                  <strong>Background Images:</strong> 1920×1080px or larger for full-screen
                </li>
                <li>
                  <strong>Email Width:</strong> 600px max width (prevents horizontal scrolling)
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🖼️ Print & Professional Use</h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>4×6 Photo Print:</strong> 1200×1800px (300 DPI)
                </li>
                <li>
                  <strong>5×7 Print:</strong> 1500×2100px (300 DPI)
                </li>
                <li>
                  <strong>8×10 Print:</strong> 2400×3000px (300 DPI)
                </li>
                <li>
                  <strong>Business Cards:</strong> 1050×600px (3.5×2 inches at 300 DPI)
                </li>
                <li>
                  <strong>Posters (18×24):</strong> 5400×7200px (300 DPI)
                </li>
                <li>
                  <strong>Professional Photography:</strong> Keep original high resolution until final use
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">📺 Video & Display Resolutions</h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  <strong>HD (720p):</strong> 1280×720px — Good for YouTube, streaming
                </li>
                <li>
                  <strong>Full HD (1080p):</strong> 1920×1080px — Standard for modern displays
                </li>
                <li>
                  <strong>2K:</strong> 2560×1440px — High-quality displays
                </li>
                <li>
                  <strong>4K (UHD):</strong> 3840×2160px — Ultra high definition
                </li>
                <li>
                  <strong>8K:</strong> 7680×4320px — Future-proof, professional
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Professional Resizing Tips */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-green-50 to-emerald-50">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={24} />
            Professional Image Resizing Tips
          </h3>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Always keep originals:</strong> Never resize your only copy. Keep the original high-resolution version for future use or re-resizing to different dimensions.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Downsize, don&apos;t upsize:</strong> Reducing image size maintains quality. Enlarging images beyond their original size can result in pixelation and loss of clarity. For best
                results, start with high-resolution images.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Maintain aspect ratio:</strong> Unless you specifically need a different shape, always lock the aspect ratio to prevent distorted, stretched images. This keeps subjects looking
                natural.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider final use:</strong> Resize for your specific purpose. Web images can be smaller (72-96 DPI), while print images need higher resolution (300 DPI minimum).
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Test different sizes:</strong> For web use, try resizing to 80%, 70%, or 50% and compare file sizes. You might be surprised how much smaller you can go while maintaining visual
                quality.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use percentage for consistency:</strong> When resizing multiple images, using percentage scaling ensures all images are reduced by the same ratio, maintaining relative sizes.
              </p>
            </div>
          </div>
        </Card>

        {/* Common Use Cases */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-green-600" size={28} />
            Popular Image Resizing Use Cases
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🚀 Website Performance Optimization</h3>
              <p className="text-gray-700 mb-2">
                Large images slow down websites dramatically. Resize images to appropriate web dimensions (usually 800-1920px wide) to dramatically improve page load speed, SEO rankings, and user
                experience. A 5MB image can become 500KB with proper resizing.
              </p>
              <p className="text-gray-600 text-sm">✓ Faster loading = better SEO, lower bounce rates, happier visitors</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">📧 Email Attachments</h3>
              <p className="text-gray-700 mb-2">
                Most email providers limit attachment sizes (25MB for Gmail). Resize images to 50-70% of original size to easily share photos via email without hitting size limits. Recipients will
                still see high-quality images perfect for viewing on screens.
              </p>
              <p className="text-gray-600 text-sm">✓ Reduce 10MB photos to 1-2MB while maintaining visual quality</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🛍️ E-commerce Product Photos</h3>
              <p className="text-gray-700 mb-2">
                Amazon, eBay, Shopify, and Etsy have specific image size requirements. Resize product photos to 1000×1000px to 2000×2000px for optimal display and zoom features while keeping file
                sizes reasonable for fast loading.
              </p>
              <p className="text-gray-600 text-sm">✓ Perfect balance between quality and page speed</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">📱 Mobile App Development</h3>
              <p className="text-gray-700 mb-2">
                Create app icons, splash screens, and assets at required dimensions. iOS and Android need specific sizes: app icons (1024×1024px), various launcher icons (48px to 512px), and splash
                screens matching device resolutions.
              </p>
              <p className="text-gray-600 text-sm">✓ Meet app store requirements with exact dimensions</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">💾 Storage Space Management</h3>
              <p className="text-gray-700 mb-2">
                Free up disk space by resizing old photos you&apos;re archiving. Modern phone cameras create 12MP+ images (4000×3000px) that are often unnecessary for casual viewing. Resize to
                1920×1440px to save 70% storage while keeping excellent quality.
              </p>
              <p className="text-gray-600 text-sm">✓ Archive thousands more photos in the same space</p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🎨 Thumbnails & Previews</h3>
              <p className="text-gray-700 mb-2">
                Create small preview versions of images for galleries, portfolios, or product listings. Thumbnail sizes (150-300px) load almost instantly, while linking to full-size images for
                detailed viewing.
              </p>
              <p className="text-gray-600 text-sm">✓ Fast-loading galleries with on-demand full-size viewing</p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2 text-green-600" size={28} />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Does resizing reduce image quality?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> When you <strong>reduce</strong> image size (downsize), quality loss is minimal and usually imperceptible. Modern resizing algorithms maintain sharpness and
                clarity. However, <strong>enlarging</strong> images beyond their original size can cause pixelation and blurriness since there&apos;s no additional detail to add.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What&apos;s the difference between resizing and cropping?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> <strong>Resizing</strong> changes the overall dimensions by scaling the entire image (making it larger or smaller). <strong>Cropping</strong> removes outer portions
                to focus on a specific area. You might crop first to get the right composition, then resize to get the right dimensions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Should I lock the aspect ratio when resizing?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> In most cases, <strong>yes</strong>! Locking the aspect ratio maintains the original proportions and prevents distortion. Only unlock it if you specifically need a
                different shape (e.g., converting a 16:9 landscape to 1:1 square), but be aware this may stretch or squish your image.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What&apos;s the best format to save resized images?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> For photos with many colors, use <strong>JPG</strong> for smaller file sizes. For images with transparency, text, or graphics, use <strong>PNG</strong>. For web
                use, consider <strong>WebP</strong> which offers excellent compression. Our tool outputs PNG by default, which you can convert to other formats using our converters.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How much can I resize without losing quality?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> You can safely <strong>reduce</strong> images to 50% or even 25% of original size with minimal visible quality loss. For web use, 60-80% of original camera
                resolution is often ideal. Never enlarge beyond 110-120% of original size, as quality degradation becomes very noticeable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is your image resizer really free?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes, completely free! No hidden costs, no watermarks, no signup required, and no limits on how many images you can resize. All processing happens in your browser
                for complete privacy and security.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I resize multiple images at once?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Currently, our tool processes one image at a time to ensure the best quality and give you control over each resize. However, the process is very quick—you can
                resize multiple images one after another in just minutes.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-green-600 to-emerald-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Resize Your Images?</h2>
          <p className="text-xl mb-6 text-green-100">Try our free online image resizer now. Perfect sizes in seconds. No signup, unlimited use, completely secure!</p>
          <Link href="/resize-image">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Resizing Images Free →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Image Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/crop-image">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Crop Image</h3>
                <p className="text-gray-600 text-sm">Crop images to specific aspect ratios and remove unwanted areas.</p>
              </Card>
            </Link>
            <Link href="/remove-background">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Remove Background</h3>
                <p className="text-gray-600 text-sm">AI-powered background removal for clean product photos and portraits.</p>
              </Card>
            </Link>
            <Link href="/analyze">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Image Analyzer</h3>
                <p className="text-gray-600 text-sm">Check current image dimensions and file size before resizing.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
