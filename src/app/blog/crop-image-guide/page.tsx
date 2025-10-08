import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Crop, Zap, CheckCircle, HelpCircle, Upload, Download, Sparkles, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Online Image Cropper — Crop & Resize Photos Instantly | ImageConvertors',
  description:
    'Learn how to crop images online for free with our comprehensive guide. Discover professional cropping techniques, aspect ratios, and tips for perfect image dimensions. No software needed.',
  keywords: [
    'crop image online',
    'free image cropper',
    'how to crop images',
    'crop photos online free',
    'image crop tool',
    'resize and crop images',
    'photo cropper online',
    'crop pictures free',
    'online image cropping tool',
    'crop image without losing quality',
    'aspect ratio cropping',
    'crop to specific dimensions',
    'free photo editor crop',
    'crop images for social media',
    'profile picture cropper',
    'square image cropper',
    'crop image to size',
    'online crop tool no download',
  ],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/crop-image-guide',
  },
  openGraph: {
    title: 'Free Online Image Cropper — How to Crop & Resize Photos Perfectly',
    description: 'Complete guide to cropping images online for free. Learn professional techniques, aspect ratios, and best practices for perfect image dimensions. No signup required.',
    url: 'https://imageconvertors.com/blog/crop-image-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    locale: 'en_US',
    authors: ['ImageConvertors'],
    tags: ['image cropping', 'photo editing', 'image resize', 'crop tool', 'image dimensions', 'aspect ratio', 'free tools'],
    images: [
      {
        url: '/crop.webp',
        width: 1200,
        height: 630,
        alt: 'Free Online Image Cropper Tool - Crop Images Instantly',
      },
    ],
  },
};

export default function CropImageGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Crop className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Free Online Image Cropper — Crop & Resize Photos Perfectly</h1>
              <p className="text-gray-600 text-lg">Complete guide to cropping images like a pro</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-08').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>10 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Whether you&apos;re preparing images for social media, creating a professional portfolio, designing marketing materials, or just want that perfect profile picture,{' '}
            <strong>cropping images</strong> is an essential skill. With our <strong>free online image cropper</strong>, you can crop, resize, rotate, and perfect your images in seconds—no software
            installation, no signup, and completely free.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll show you exactly <strong>how to crop images online</strong>, explain the best practices for different use cases, and help you achieve professional
            results every time.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 shadow-xl">
            <Image src="/crop.webp" alt="Screenshot of the ImageConvertors free online image cropper tool showing cropping interface" width={1200} height={630} className="w-full h-auto" priority />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Crop images online with precision using our free image cropper tool — no signup required, completely secure.</p>
        </div>

        {/* What is Image Cropping */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Crop className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is Image Cropping?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Image cropping</strong> is the process of removing unwanted outer areas from a photograph or image to improve framing, emphasize a subject, or fit specific dimensions. It&apos;s
            one of the most fundamental photo editing techniques used by photographers, designers, and content creators worldwide.
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
                  <span>Social media posts (Instagram, Facebook, Twitter)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Profile pictures and avatars</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Website headers and banners</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Product photography</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document photos and ID pictures</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Thumbnail images</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-4 flex items-center">
                <Sparkles className="mr-2" size={20} />
                Key Benefits:
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Improve composition and focus</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Meet specific dimension requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reduce file size by removing excess</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Remove distractions and unwanted elements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Create consistent image ratios</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Optimize for different platforms</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>

        {/* How to Crop Images - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-blue-200 bg-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Crop Images Online Free (Step-by-Step)</h2>
          <p className="text-gray-700 mb-6">
            Cropping images with our <strong>free online image cropper</strong> is incredibly simple. No software to download, no signup required, and no technical knowledge needed. Follow these easy
            steps:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Free Image Cropper Tool</h3>
                  <p className="text-gray-700 mb-3">
                    Visit{' '}
                    <Link href="/crop-image" className="text-blue-600 hover:text-blue-800 font-medium underline">
                      ImageConvertors Free Image Cropper
                    </Link>{' '}
                    in your web browser. The tool works on any device—desktop, tablet, or mobile. No downloads or registration required.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Upload Your Image
                    <Upload className="ml-2 text-blue-600" size={20} />
                  </h3>
                  <p className="text-gray-700 mb-2">Click the &quot;Choose Image&quot; button or drag and drop your image file directly into the upload area.</p>
                  <p className="text-gray-600 text-sm">✓ Supports JPG, PNG, WebP, GIF, and HEIC formats</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Select Aspect Ratio (Optional)
                    <Maximize className="ml-2 text-blue-600" size={20} />
                  </h3>
                  <p className="text-gray-700 mb-3">Choose a preset aspect ratio or crop freely:</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>
                      • <strong>Free</strong> — Crop to any custom dimensions
                    </li>
                    <li>
                      • <strong>1:1 (Square)</strong> — Perfect for Instagram posts, profile pictures
                    </li>
                    <li>
                      • <strong>16:9</strong> — YouTube thumbnails, widescreen displays
                    </li>
                    <li>
                      • <strong>4:3</strong> — Traditional photos, presentations
                    </li>
                    <li>
                      • <strong>3:2</strong> — Standard photo prints
                    </li>
                    <li>
                      • <strong>2:3 (Portrait)</strong> — Vertical Instagram stories, portraits
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Adjust the Crop Area</h3>
                  <p className="text-gray-700 mb-3">Drag the corners or edges of the crop box to select the area you want to keep. You can also:</p>
                  <ul className="text-gray-700 space-y-1 ml-4">
                    <li>
                      • <strong>Zoom In/Out</strong> — Get closer to fine details
                    </li>
                    <li>
                      • <strong>Rotate</strong> — Fix image orientation (90° left or right)
                    </li>
                    <li>
                      • <strong>Flip</strong> — Mirror horizontally or vertically
                    </li>
                    <li>
                      • <strong>Move</strong> — Drag the image to reposition it within the crop area
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Crop & Download Your Image
                    <Download className="ml-2 text-blue-600" size={20} />
                  </h3>
                  <p className="text-gray-700">
                    Once you&apos;re happy with your crop, click the &quot;Crop & Download&quot; button. Your perfectly cropped image will be saved to your device instantly. The original file remains
                    unchanged on your computer.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/crop-image">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Try Free Image Cropper Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Understanding Aspect Ratios */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Maximize className="mr-2 text-blue-600" size={28} />
            Understanding Aspect Ratios for Perfect Crops
          </h2>
          <p className="text-gray-700 mb-6">
            <strong>Aspect ratio</strong> is the proportional relationship between an image&apos;s width and height (expressed as width:height). Using the correct aspect ratio ensures your images
            display perfectly on different platforms and devices without awkward cropping or distortion.
          </p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">1:1 (Square) — 1080×1080px</h3>
              <p className="text-gray-700 mb-2">
                <strong>Best for:</strong> Instagram posts, Facebook posts, profile pictures, Pinterest pins, Twitter posts
              </p>
              <p className="text-gray-600 text-sm">Most versatile ratio for social media. Creates a clean, balanced look that works everywhere.</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">16:9 (Widescreen) — 1920×1080px</h3>
              <p className="text-gray-700 mb-2">
                <strong>Best for:</strong> YouTube thumbnails, video covers, website headers, desktop backgrounds, TV displays
              </p>
              <p className="text-gray-600 text-sm">Standard widescreen format. Perfect for landscape photos and video content.</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">4:3 (Classic) — 1024×768px</h3>
              <p className="text-gray-700 mb-2">
                <strong>Best for:</strong> Presentations, older displays, digital photo frames, computer screens
              </p>
              <p className="text-gray-600 text-sm">Traditional photo ratio. Slightly wider than it is tall, natural for many scenes.</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">3:2 (Photo Standard) — 3000×2000px</h3>
              <p className="text-gray-700 mb-2">
                <strong>Best for:</strong> Professional prints (4×6, 6×9), DSLR cameras, photo printing
              </p>
              <p className="text-gray-600 text-sm">Classic 35mm film ratio. Ideal for traditional photography and professional printing.</p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">2:3 (Portrait) — 1080×1620px</h3>
              <p className="text-gray-700 mb-2">
                <strong>Best for:</strong> Instagram Stories, portrait photography, vertical video, mobile displays
              </p>
              <p className="text-gray-600 text-sm">Vertical format perfect for mobile viewing. Great for full-screen mobile content.</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Free Crop (Custom Dimensions)</h3>
              <p className="text-gray-700 mb-2">
                <strong>Best for:</strong> Specific requirements, custom projects, unique dimensions, creative layouts
              </p>
              <p className="text-gray-600 text-sm">Complete freedom to crop to any size or shape you need.</p>
            </div>
          </div>
        </Card>

        {/* Professional Cropping Tips */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-green-50 to-emerald-50">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={24} />
            Professional Image Cropping Tips
          </h3>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Rule of Thirds:</strong> Imagine your image divided into a 3×3 grid. Place key subjects along these lines or at their intersections for more engaging compositions.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Leave breathing room:</strong> Don&apos;t crop too tightly around subjects, especially faces. Leave some space around the edges for a more natural look.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Maintain quality:</strong> Avoid cropping too much, which reduces resolution. For best results, start with high-resolution images (at least 1920px on the longest side).
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Check platform requirements:</strong> Different platforms have different optimal dimensions. Instagram prefers 1080×1080px for posts, YouTube needs 1280×720px for thumbnails.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider the subject:</strong> For portraits, include heads and shoulders. For products, show the full item with minimal background. For landscapes, keep the horizon straight.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use the zoom feature:</strong> Zoom in to fine-tune your crop for precise positioning. This is especially important for profile pictures and detailed product shots.
              </p>
            </div>
          </div>
        </Card>

        {/* Common Use Cases */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-blue-600" size={28} />
            Popular Image Cropping Use Cases
          </h2>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">📱 Social Media Content Creation</h3>
              <p className="text-gray-700 mb-2">
                Crop images to fit perfectly on Instagram (1:1 or 4:5), Twitter (16:9), Facebook (1200×630px for links), LinkedIn (1200×627px), or Pinterest (2:3). Each platform has optimal dimensions
                for maximum engagement.
              </p>
              <p className="text-gray-600 text-sm">✓ Ensures your content looks professional and isn&apos;t auto-cropped poorly by the platform</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">👤 Profile Pictures & Avatars</h3>
              <p className="text-gray-700 mb-2">
                Create perfect square profile photos for LinkedIn, Facebook, Twitter, Discord, Slack, or professional directories. Center your face and leave appropriate headroom for the best results.
              </p>
              <p className="text-gray-600 text-sm">✓ Professional headshots should be 1:1 ratio with your face taking up 60-70% of the frame</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🖼️ Website Headers & Banners</h3>
              <p className="text-gray-700 mb-2">
                Crop images to fit website hero sections, blog headers, email banners, or landing page backgrounds. Common sizes include 1920×600px for full-width headers or 1200×400px for blog
                headers.
              </p>
              <p className="text-gray-600 text-sm">✓ Keep important content centered—edges may be cut off on smaller screens</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">📸 Photo Printing & Framing</h3>
              <p className="text-gray-700 mb-2">
                Crop photos to standard print sizes (4×6, 5×7, 8×10, 11×14 inches). Use the 3:2 ratio for most print formats, or match your specific frame dimensions to avoid white borders.
              </p>
              <p className="text-gray-600 text-sm">✓ Keep resolution high (300 DPI minimum) for crisp, professional prints</p>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">🎥 Video Thumbnails</h3>
              <p className="text-gray-700 mb-2">
                Create eye-catching thumbnails for YouTube (1280×720px), Vimeo, or other video platforms. The 16:9 ratio is standard, and text/faces should be clearly visible even at small sizes.
              </p>
              <p className="text-gray-600 text-sm">✓ Test how your thumbnail looks at different sizes before finalizing</p>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">📄 Documents & ID Photos</h3>
              <p className="text-gray-700 mb-2">
                Crop passport photos, visa applications, ID cards, or driver&apos;s licenses to exact government specifications. Typically 2×2 inches (600×600px) with specific head size and
                positioning requirements.
              </p>
              <p className="text-gray-600 text-sm">✓ Check official requirements for your specific document type and country</p>
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
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is your image cropper really free?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes, completely free! No hidden costs, no watermarks, no signup required, and no limits on how many images you can crop. We believe everyone should have access to
                quality image editing tools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Will cropping reduce my image quality?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Cropping itself doesn&apos;t reduce quality—you&apos;re simply selecting a portion of the original image. However, if you crop a small section and then enlarge it
                significantly, you may notice reduced sharpness. Start with high-resolution images for best results.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Are my images safe and private?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Absolutely! All image processing happens directly in your browser using client-side JavaScript. Your images never leave your device or get uploaded to our servers.
                It&apos;s 100% private and secure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What image formats can I crop?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Our cropper supports all common image formats including JPG/JPEG, PNG, WebP, GIF, and HEIC (iPhone photos). The output is typically saved as PNG for quality or JPG
                for smaller file size.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I crop images on my phone or tablet?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Our image cropper works perfectly on all devices—desktop computers, laptops, tablets, and smartphones. The interface adapts to your screen size for easy
                cropping on any device.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How do I crop to specific pixel dimensions?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> While our tool primarily uses aspect ratios, you can achieve specific dimensions by selecting &quot;Free&quot; mode, making your crop, and then the output will
                match your selection. For exact dimensions, choose an aspect ratio close to your target, then resize the output if needed using our other tools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I undo changes while cropping?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Use the &quot;Reset&quot; button to restore your image to its original state. You can also re-upload the image to start fresh. Your original file on your
                computer remains completely unchanged.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Crop Your Images?</h2>
          <p className="text-xl mb-6 text-blue-100">Try our free online image cropper now. Perfect crops in seconds. No signup, unlimited use, completely secure!</p>
          <Link href="/crop-image">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Cropping Images Free →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Image Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/remove-background">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Remove Background</h3>
                <p className="text-gray-600 text-sm">AI-powered background removal for clean product photos and portraits.</p>
              </Card>
            </Link>
            <Link href="/analyze">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Image Analyzer</h3>
                <p className="text-gray-600 text-sm">Check image dimensions, file size, and metadata before cropping.</p>
              </Card>
            </Link>
            <Link href="/png-to-jpg">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">PNG to JPG</h3>
                <p className="text-gray-600 text-sm">Convert image formats after cropping to reduce file size.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
