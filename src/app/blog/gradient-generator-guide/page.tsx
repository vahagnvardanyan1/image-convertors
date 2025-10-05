import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Blend, Zap, CheckCircle, HelpCircle, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free CSS Gradient Generator – Create Beautiful Gradients Online | ImageConvertors',
  description: 'Generate stunning CSS gradients online. Create linear and radial gradients with multiple colors. Get ready-to-use CSS code. Free gradient generator for web design.',
  keywords: ['gradient generator', 'CSS gradient', 'linear gradient', 'radial gradient', 'gradient maker', 'CSS gradient generator', 'web gradient', 'color gradient'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/gradient-generator-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Creating CSS Gradients',
    description: 'Generate stunning CSS gradients online. Create linear and radial gradients with multiple colors. Get ready-to-use CSS code.',
    url: 'https://imageconvertors.com/blog/gradient-generator-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Gradient Generator Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Creating CSS Gradients',
    description: 'Generate stunning CSS gradients online. Create linear and radial gradients with multiple colors.',
    images: ['/og-image.webp'],
  },
};

export default function GradientGeneratorGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Blend className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to CSS Gradient Generators</h1>
              <p className="text-gray-600 text-lg">Create Beautiful Color Transitions for Your Designs</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-04').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            <strong>CSS gradients</strong> are powerful design elements that create smooth transitions between colors, adding depth and visual interest to websites and applications. Modern web design
            heavily relies on gradients for backgrounds, buttons, cards, and other UI elements.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore what CSS gradients are, the different types available, and how to use a gradient generator to create stunning color transitions that elevate
            your web designs.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-orange-100 shadow-xl">
            <Image
              src="/person-with-laptop.webp"
              alt="Designer experimenting with gradient backgrounds on a laptop"
              width={1024}
              height={1536}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Experiment with linear and radial gradients using the ImageConvertors CSS gradient generator and copy ready-to-use code.</p>
        </div>

        {/* What is a Gradient */}
        <Card className="p-8 mb-8 border-l-4 border-orange-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
              <Blend className="text-orange-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is a CSS Gradient?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>CSS gradient</strong> is a smooth transition between two or more colors. Unlike solid colors or images, gradients are generated by the browser using CSS, making them lightweight
            and scalable.
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
              <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Backgrounds:</strong> Create eye-catching hero sections and page backgrounds
              </p>
            </div>
            <div className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
              <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Buttons & CTAs:</strong> Make interactive elements more engaging and noticeable
              </p>
            </div>
            <div className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
              <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Cards & Containers:</strong> Add depth and visual hierarchy to content sections
              </p>
            </div>
            <div className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
              <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Text Effects:</strong> Create gradient text for headlines and emphasis
              </p>
            </div>
          </div>
        </Card>

        {/* Types of Gradients */}
        <Card className="p-8 mb-8 border-l-4 border-red-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="text-red-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Types of CSS Gradients</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">CSS offers several types of gradients, each with unique characteristics:</p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border border-gray-200" style={{ background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)' }}>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Linear Gradient</h3>
                <p className="text-gray-700 text-sm mb-2">Colors transition in a straight line at any angle.</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-2">linear-gradient(90deg, #667eea 0%, #764ba2 100%)</code>
                <p className="text-gray-600 text-sm mt-2">✓ Best for: Modern backgrounds, headers, buttons</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200" style={{ background: 'radial-gradient(circle, #f093fb 0%, #f5576c 100%)' }}>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Radial Gradient</h3>
                <p className="text-gray-700 text-sm mb-2">Colors radiate from a center point outward.</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-2">radial-gradient(circle, #f093fb 0%, #f5576c 100%)</code>
                <p className="text-gray-600 text-sm mt-2">✓ Best for: Spotlight effects, circular elements, focus areas</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200" style={{ background: 'linear-gradient(45deg, #fa709a 0%, #fee140 100%)' }}>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Diagonal Gradient</h3>
                <p className="text-gray-700 text-sm mb-2">Linear gradient at an angle (e.g., 45deg).</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-2">linear-gradient(45deg, #fa709a 0%, #fee140 100%)</code>
                <p className="text-gray-600 text-sm mt-2">✓ Best for: Dynamic, energetic designs</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200" style={{ background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #4facfe 100%)' }}>
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Multi-Stop Gradient</h3>
                <p className="text-gray-700 text-sm mb-2">Three or more colors with custom positions.</p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded block mt-2">linear-gradient(90deg, #4facfe 0%, #00f2fe 50%, #4facfe 100%)</code>
                <p className="text-gray-600 text-sm mt-2">✓ Best for: Complex, artistic designs</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Why Use Gradient Generator */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-blue-600" size={28} />
            Why Use a CSS Gradient Generator?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Visual Creation</h3>
              </div>
              <p className="text-gray-600 text-sm">See your gradient in real-time as you adjust colors and angles.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Ready-to-Use CSS</h3>
              </div>
              <p className="text-gray-600 text-sm">Get instant CSS code that you can copy and paste into your project.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Sparkles className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Experimentation</h3>
              </div>
              <p className="text-gray-600 text-sm">Try different combinations quickly without writing code.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">No Errors</h3>
              </div>
              <p className="text-gray-600 text-sm">Avoid syntax mistakes with automatically generated, valid CSS.</p>
            </div>
          </div>
        </Card>

        {/* How to Use - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-orange-200 bg-orange-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Create a CSS Gradient (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Gradient Generator</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/colors/gradients" className="text-orange-600 hover:text-orange-800 font-medium underline">
                      ImageConvertors Gradient Generator
                    </Link>{' '}
                    to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Choose Your Colors
                    <Blend className="ml-2 text-orange-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Select your starting color and ending color for the gradient.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Adjust the Direction</h3>
                  <p className="text-gray-700">Choose the angle or direction of your gradient (horizontal, vertical, diagonal).</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Add More Colors (Optional)</h3>
                  <p className="text-gray-700">Create multi-color gradients by adding additional color stops.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Copy CSS Code
                    <Code className="ml-2 text-orange-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Click to copy the generated CSS code and paste it into your stylesheet.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/colors/gradients">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                Create Your Gradient Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Creating Gradients
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use similar hues:</strong> Gradients between related colors (e.g., blue to purple) look more natural than extreme contrasts.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider readability:</strong> If placing text over gradients, ensure sufficient contrast throughout the entire gradient.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Subtle works best:</strong> Gentle gradients often look more professional than intense color transitions.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Browser compatibility:</strong> Modern gradient syntax works in all current browsers, but consider fallback solid colors for older browsers.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Performance:</strong> CSS gradients are more performant than background images and don&apos;t require additional HTTP requests.
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
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I use gradients for text color?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Use <code className="bg-gray-100 px-2 py-1 rounded">background-clip: text</code> with{' '}
                <code className="bg-gray-100 px-2 py-1 rounded">-webkit-background-clip: text</code> and make the text color transparent to create gradient text effects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How many colors can I use in a gradient?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Technically unlimited! However, 2-4 colors usually create the most visually pleasing gradients. Too many colors can make the gradient look muddy or chaotic.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Are CSS gradients better than gradient images?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes, for most cases. CSS gradients are scalable, lightweight (no image download), and easier to modify. They&apos;re perfect for solid color transitions. Use images
                only for complex photographic or textured gradients.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Stunning Gradients?</h2>
          <p className="text-xl mb-6 text-orange-100">Try our free gradient generator now. Visual editor, instant CSS code, and endless possibilities!</p>
          <Link href="/colors/gradients">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Creating Gradients Now →
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
                <p className="text-gray-600 text-sm">Pick perfect colors for your gradient combinations.</p>
              </Card>
            </Link>
            <Link href="/colors/palettes">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Palettes</h3>
                <p className="text-gray-600 text-sm">Create harmonious color schemes for your designs.</p>
              </Card>
            </Link>
            <Link href="/colors/converter">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Converter</h3>
                <p className="text-gray-600 text-sm">Convert gradient colors between different formats.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
