import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Droplet, Zap, CheckCircle, HelpCircle, Eye, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Online Color Picker Tool – HEX, RGB, HSL Color Selector | ImageConvertors',
  description: 'Pick colors instantly with our free online color picker. Get HEX, RGB, HSL, RGBA, and HSLA codes. Perfect for web designers, developers, and digital artists.',
  keywords: ['color picker', 'online color picker', 'free color selector', 'HEX color picker', 'RGB color picker', 'HSL color picker', 'web color tool', 'design tool'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/color-picker-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Using an Online Color Picker',
    description: 'Pick colors instantly with our free online color picker. Get HEX, RGB, HSL, RGBA, and HSLA codes. Perfect for web designers and developers.',
    url: 'https://imageconvertors.com/blog/color-picker-guide',
    siteName: 'ImageConverter',
    type: 'article',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Color Picker Tool Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Using an Online Color Picker',
    description: 'Pick colors instantly with our free online color picker. Get HEX, RGB, HSL, RGBA, and HSLA codes.',
    images: ['/og-image.webp'],
  },
};

export default function ColorPickerGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Droplet className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to Online Color Pickers</h1>
              <p className="text-gray-600 text-lg">Choose Perfect Colors for Your Design Projects</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-04').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>7 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Choosing the right colors is crucial for any design project, whether you&apos;re building a website, creating graphics, or developing a brand identity. An{' '}
            <strong>online color picker</strong> makes it easy to select, explore, and obtain exact color codes in multiple formats like HEX, RGB, HSL, and more.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore what a color picker is, why it&apos;s essential for designers and developers, and how to use it effectively for your projects.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 shadow-xl">
            <Image src="/color-picker.webp" alt="Screenshot of the ImageConvertors online color picker interface" width={810} height={821} className="w-full h-auto" priority />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Explore colors visually and copy HEX, RGB, or HSL codes instantly with the ImageConvertors color picker.</p>
        </div>

        {/* What is a Color Picker */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Droplet className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is a Color Picker?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>color picker</strong> is an interactive tool that allows you to visually select colors and instantly get their codes in various formats. It&apos;s essential for:
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Web Designers:</strong> Creating consistent color schemes for websites and apps
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Developers:</strong> Getting exact color codes for CSS, HTML, and styling frameworks
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Digital Artists:</strong> Exploring color variations and finding perfect shades
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Marketers:</strong> Maintaining brand color consistency across materials
              </p>
            </div>
          </div>
        </Card>

        {/* Color Formats */}
        <Card className="p-8 mb-8 border-l-4 border-purple-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <Code className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Understanding Color Formats</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">Our color picker supports multiple color formats, each with its own use case:</p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">HEX (Hexadecimal)</h3>
              <p className="text-gray-600 text-sm mb-2">
                Most common format for web design. Example: <code className="bg-blue-100 px-2 py-1 rounded">#3B82F6</code>
              </p>
              <p className="text-gray-600 text-sm">✓ Best for: CSS, HTML, web design</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">RGB (Red, Green, Blue)</h3>
              <p className="text-gray-600 text-sm mb-2">
                Defines colors using red, green, and blue values (0-255). Example: <code className="bg-blue-100 px-2 py-1 rounded">rgb(59, 130, 246)</code>
              </p>
              <p className="text-gray-600 text-sm">✓ Best for: Digital displays, programming</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">RGBA (RGB with Alpha)</h3>
              <p className="text-gray-600 text-sm mb-2">
                RGB with transparency control. Example: <code className="bg-blue-100 px-2 py-1 rounded">rgba(59, 130, 246, 0.8)</code>
              </p>
              <p className="text-gray-600 text-sm">✓ Best for: Transparent overlays, modern web design</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">HSL (Hue, Saturation, Lightness)</h3>
              <p className="text-gray-600 text-sm mb-2">
                More intuitive for designers. Example: <code className="bg-blue-100 px-2 py-1 rounded">hsl(217, 91%, 60%)</code>
              </p>
              <p className="text-gray-600 text-sm">✓ Best for: Color manipulation, creating variations</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">HSV (Hue, Saturation, Value)</h3>
              <p className="text-gray-600 text-sm mb-2">
                Similar to HSL but uses brightness instead of lightness. Example: <code className="bg-blue-100 px-2 py-1 rounded">hsv(217, 76%, 96%)</code>
              </p>
              <p className="text-gray-600 text-sm">✓ Best for: Color theory, design software</p>
            </div>
          </div>
        </Card>

        {/* Why Use Color Picker */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-purple-600" size={28} />
            Why Use an Online Color Picker?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Instant Access</h3>
              </div>
              <p className="text-gray-600 text-sm">No installation required - use it directly in your browser anywhere, anytime.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Multiple Formats</h3>
              </div>
              <p className="text-gray-600 text-sm">Get color codes in HEX, RGB, HSL, and more - all at once.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Eye className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Visual Selection</h3>
              </div>
              <p className="text-gray-600 text-sm">See exactly what you&apos;re choosing with real-time color preview.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Precision</h3>
              </div>
              <p className="text-gray-600 text-sm">Get exact color values for pixel-perfect design consistency.</p>
            </div>
          </div>
        </Card>

        {/* How to Use - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-blue-200 bg-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use the Color Picker (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Color Picker</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/colors/picker" className="text-blue-600 hover:text-blue-800 font-medium underline">
                      ImageConvertors Color Picker
                    </Link>{' '}
                    to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Select Your Color
                    <Droplet className="ml-2 text-blue-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Click and drag on the color spectrum to find your desired color.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Adjust Brightness</h3>
                  <p className="text-gray-700">Use the brightness slider to make your color lighter or darker.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Copy Color Code</h3>
                  <p className="text-gray-700">Click on any format (HEX, RGB, HSL) to copy the color code to your clipboard.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Use in Your Project</h3>
                  <p className="text-gray-700">Paste the color code into your CSS, design software, or anywhere you need it.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/colors/picker">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Try Color Picker Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Choosing Colors
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider accessibility:</strong> Ensure sufficient contrast between text and background colors for readability.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Save your favorites:</strong> Keep a collection of colors that match your brand or project theme.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use HSL for variations:</strong> HSL format makes it easy to create lighter or darker versions of the same color.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Test on multiple screens:</strong> Colors may appear differently on various devices and monitors.
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2 text-blue-600" size={28} />
            Common FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What&apos;s the difference between HEX and RGB?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> HEX is a hexadecimal representation (e.g., #FF5733), while RGB uses decimal values for red, green, and blue (e.g., rgb(255, 87, 51)). They represent the same
                colors, just in different formats. HEX is more common in web design, while RGB is easier to understand and manipulate programmatically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I pick colors from an image?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> While our color picker allows manual selection, you can use our{' '}
                <Link href="/analyze" className="text-blue-600 hover:text-blue-800 font-medium underline">
                  Image Analyzer
                </Link>{' '}
                to extract colors from uploaded images.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is the color picker free to use?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Our color picker is completely free with no sign-up required. Use it as many times as you need for personal or commercial projects.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Pick Your Perfect Colors?</h2>
          <p className="text-xl mb-6 text-blue-100">Try our free color picker now. Fast, accurate, and easy to use!</p>
          <Link href="/colors/picker">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Picking Colors Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Color Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/colors/palettes">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Palettes</h3>
                <p className="text-gray-600 text-sm">Create and save beautiful color palettes for your projects.</p>
              </Card>
            </Link>
            <Link href="/colors/gradients">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Gradient Generator</h3>
                <p className="text-gray-600 text-sm">Generate stunning gradients with custom color combinations.</p>
              </Card>
            </Link>
            <Link href="/colors/converter">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Converter</h3>
                <p className="text-gray-600 text-sm">Convert between HEX, RGB, HSL, and other color formats.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
