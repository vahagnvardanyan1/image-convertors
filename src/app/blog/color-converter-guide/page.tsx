import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowLeftRight, Zap, CheckCircle, HelpCircle, Code, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Color Code Converter – HEX, RGB, HSL Converter Online | ImageConvertors',
  description: 'Convert colors between HEX, RGB, HSL, RGBA, HSLA, and HSV formats instantly. Free online color converter for designers and developers. Accurate color code conversion.',
  keywords: ['color converter', 'HEX to RGB', 'RGB to HEX', 'HSL converter', 'color code converter', 'HEX to HSL', 'RGB to HSL', 'color format converter'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/color-converter-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Converting Color Codes',
    description: 'Convert colors between HEX, RGB, HSL, RGBA, HSLA, and HSV formats instantly. Free online color converter for designers and developers.',
    url: 'https://imageconvertors.com/blog/color-converter-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Color Converter Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Converting Color Codes',
    description: 'Convert colors between HEX, RGB, HSL, RGBA, HSLA, and HSV formats instantly.',
    images: ['/og-image.webp'],
  },
};

export default function ColorConverterGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-green-50 to-teal-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <ArrowLeftRight className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to Color Code Converters</h1>
              <p className="text-gray-600 text-lg">Convert Between HEX, RGB, HSL, and More</p>
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
            Different design tools, programming languages, and platforms use different <strong>color code formats</strong>. A color that&apos;s #3B82F6 in CSS might need to be rgb(59, 130, 246) in
            JavaScript or hsl(217, 91%, 60%) in your design software. Converting between these formats manually can be tedious and error-prone.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore the different color code formats, when to use each one, and how to convert between them effortlessly using an online color converter.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-green-100 shadow-xl">
            <Image
              src="/convert.webp"
              alt="Illustration of the ImageConvertors color converter showing HEX, RGB, and HSL values"
              width={1024}
              height={1536}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Convert HEX, RGB, HSL, HSLA, and HSV color codes instantly with the ImageConvertors color converter.</p>
        </div>

        {/* What is a Color Converter */}
        <Card className="p-8 mb-8 border-l-4 border-green-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
              <ArrowLeftRight className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is a Color Code Converter?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>color code converter</strong> is a tool that translates color values from one format to another while maintaining the exact same visual color. This is essential for:
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Cross-Platform Design:</strong> Use the same color across different tools and platforms
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Web Development:</strong> Convert between CSS, JavaScript, and design software formats
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Design Systems:</strong> Maintain color consistency across your entire stack
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Collaboration:</strong> Share colors in the format your team needs
              </p>
            </div>
          </div>
        </Card>

        {/* Color Formats Explained */}
        <Card className="p-8 mb-8 border-l-4 border-teal-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mr-4">
              <Code className="text-teal-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Understanding Color Formats</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">Each color format has its own structure and use cases:</p>

          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">HEX (Hexadecimal)</h3>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#3B82F6' }}></div>
              </div>
              <code className="text-sm bg-white px-3 py-2 rounded block mb-2">#3B82F6</code>
              <p className="text-gray-700 text-sm mb-2">Format: # + 6 characters (RRGGBB) or 3 characters (RGB)</p>
              <p className="text-gray-600 text-sm">✓ Best for: CSS, HTML, web design</p>
              <p className="text-gray-600 text-sm">✓ Why use it: Most common format, compact and widely supported</p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">RGB (Red, Green, Blue)</h3>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'rgb(59, 130, 246)' }}></div>
              </div>
              <code className="text-sm bg-white px-3 py-2 rounded block mb-2">rgb(59, 130, 246)</code>
              <p className="text-gray-700 text-sm mb-2">Format: rgb(red, green, blue) where each value is 0-255</p>
              <p className="text-gray-600 text-sm">✓ Best for: JavaScript, programming, digital displays</p>
              <p className="text-gray-600 text-sm">✓ Why use it: Easy to understand and manipulate programmatically</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">RGBA (RGB with Alpha)</h3>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'rgba(59, 130, 246, 0.8)' }}></div>
              </div>
              <code className="text-sm bg-white px-3 py-2 rounded block mb-2">rgba(59, 130, 246, 0.8)</code>
              <p className="text-gray-700 text-sm mb-2">Format: rgba(red, green, blue, alpha) where alpha is 0-1</p>
              <p className="text-gray-600 text-sm">✓ Best for: Transparent colors, overlays, modern web design</p>
              <p className="text-gray-600 text-sm">✓ Why use it: Supports transparency control</p>
            </div>

            <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">HSL (Hue, Saturation, Lightness)</h3>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'hsl(217, 91%, 60%)' }}></div>
              </div>
              <code className="text-sm bg-white px-3 py-2 rounded block mb-2">hsl(217, 91%, 60%)</code>
              <p className="text-gray-700 text-sm mb-2">Format: hsl(hue 0-360, saturation %, lightness %)</p>
              <p className="text-gray-600 text-sm">✓ Best for: Creating color variations, intuitive color adjustment</p>
              <p className="text-gray-600 text-sm">✓ Why use it: Makes it easy to create lighter/darker variations</p>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg border border-pink-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">HSLA (HSL with Alpha)</h3>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: 'hsla(217, 91%, 60%, 0.8)' }}></div>
              </div>
              <code className="text-sm bg-white px-3 py-2 rounded block mb-2">hsla(217, 91%, 60%, 0.8)</code>
              <p className="text-gray-700 text-sm mb-2">Format: hsla(hue, saturation %, lightness %, alpha)</p>
              <p className="text-gray-600 text-sm">✓ Best for: HSL with transparency control</p>
              <p className="text-gray-600 text-sm">✓ Why use it: Combines HSL benefits with alpha channel</p>
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">HSV (Hue, Saturation, Value)</h3>
                <div className="w-8 h-8 rounded" style={{ backgroundColor: '#3B82F6' }}></div>
              </div>
              <code className="text-sm bg-white px-3 py-2 rounded block mb-2">hsv(217, 76%, 96%)</code>
              <p className="text-gray-700 text-sm mb-2">Format: hsv(hue 0-360, saturation %, value %)</p>
              <p className="text-gray-600 text-sm">✓ Best for: Design software, color theory applications</p>
              <p className="text-gray-600 text-sm">✓ Why use it: Matches how designers think about color brightness</p>
            </div>
          </div>
        </Card>

        {/* Why Use Color Converter */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-green-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-blue-600" size={28} />
            Why Use a Color Converter?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Instant Conversion</h3>
              </div>
              <p className="text-gray-600 text-sm">Convert between any format in milliseconds with perfect accuracy.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">No Math Required</h3>
              </div>
              <p className="text-gray-600 text-sm">Avoid complex manual calculations and potential errors.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <RefreshCw className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">All Formats at Once</h3>
              </div>
              <p className="text-gray-600 text-sm">See the color in every format simultaneously for easy reference.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Copy-Ready Code</h3>
              </div>
              <p className="text-gray-600 text-sm">Get properly formatted code ready to paste into your project.</p>
            </div>
          </div>
        </Card>

        {/* How to Use - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-green-200 bg-green-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Convert Color Codes (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Color Converter</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/colors/converter" className="text-green-600 hover:text-green-800 font-medium underline">
                      ImageConvertors Color Converter
                    </Link>{' '}
                    to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Choose Input Format</h3>
                  <p className="text-gray-700">Select the format you&apos;re converting FROM (HEX, RGB, HSL, etc.).</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Enter Color Code
                    <Code className="ml-2 text-green-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Type or paste your color code (e.g., #3B82F6 or rgb(59, 130, 246)).</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">View All Formats</h3>
                  <p className="text-gray-700">See the color instantly converted to HEX, RGB, HSL, and more.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Copy the Format You Need
                    <ArrowLeftRight className="ml-2 text-green-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Click on any format to copy it to your clipboard.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/colors/converter">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Try Color Converter Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Common Conversions */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <RefreshCw className="mr-2 text-blue-600" size={28} />
            Most Common Color Conversions
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <ArrowLeftRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>HEX to RGB:</strong> Converting CSS hex codes to JavaScript-friendly RGB format
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <ArrowLeftRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>RGB to HEX:</strong> Converting programmatic color values to CSS-friendly hex codes
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <ArrowLeftRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>HEX to HSL:</strong> Converting to HSL for easier color manipulation and variations
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <ArrowLeftRight className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>RGB to RGBA:</strong> Adding transparency to existing RGB colors
              </p>
            </div>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Color Conversion
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use HSL for variations:</strong> Convert to HSL when you need to create lighter/darker versions of a color.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>RGBA for transparency:</strong> Use RGBA when you need the same color with different opacity levels.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Document your colors:</strong> Keep a list of your brand colors in multiple formats for team reference.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Check browser support:</strong> While most formats are widely supported, verify compatibility for your target browsers.
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
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Will converting between formats change the color?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> No! All these formats represent the exact same color, just in different notation systems. Converting between them maintains the precise visual appearance. There may
                be minimal rounding in some conversions, but it&apos;s imperceptible to the human eye.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Which format should I use for CSS?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> HEX (#3B82F6) is most common for solid colors. Use RGBA or HSLA when you need transparency. Modern CSS supports all formats, so choose based on your needs - HSL is
                great when you need to adjust lightness programmatically.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I convert colors with transparency (alpha channel)?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Our converter supports RGBA and HSLA formats that include alpha (transparency) values. Note that HEX can also include alpha as an 8-character code (#3B82F6CC),
                though this is less common.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Convert Your Colors?</h2>
          <p className="text-xl mb-6 text-green-100">Try our free color converter now. Instant, accurate conversions between all formats!</p>
          <Link href="/colors/converter">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Converting Colors Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Color Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/colors/picker">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Picker</h3>
                <p className="text-gray-600 text-sm">Pick colors visually and get codes in multiple formats.</p>
              </Card>
            </Link>
            <Link href="/colors/palettes">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Palettes</h3>
                <p className="text-gray-600 text-sm">Create harmonious color schemes for your projects.</p>
              </Card>
            </Link>
            <Link href="/colors/gradients">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Gradient Generator</h3>
                <p className="text-gray-600 text-sm">Generate beautiful CSS gradients with your colors.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
