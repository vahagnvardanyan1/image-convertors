import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Palette, Zap, CheckCircle, HelpCircle, Sparkles, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Color Palette Generator – Create Beautiful Color Schemes | ImageConvertors',
  description: 'Generate stunning color palettes online. Create complementary, analogous, and monochromatic color schemes. Save your palettes and browse curated collections. Free palette generator.',
  keywords: ['color palette generator', 'color scheme generator', 'complementary colors', 'analogous colors', 'monochromatic palette', 'color harmony', 'design palette', 'color combinations'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/color-palette-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Creating Perfect Color Palettes',
    description: 'Generate stunning color palettes online. Create complementary, analogous, and monochromatic color schemes. Save your palettes and browse curated collections.',
    url: 'https://imageconvertors.com/blog/color-palette-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Color Palette Generator Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Creating Perfect Color Palettes',
    description: 'Generate stunning color palettes online. Create complementary, analogous, and monochromatic color schemes.',
    images: ['/og-image.webp'],
  },
};

export default function ColorPaletteGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Palette className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to Color Palette Generators</h1>
              <p className="text-gray-600 text-lg">Create Harmonious Color Schemes for Your Designs</p>
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
            Creating a cohesive and visually appealing <strong>color palette</strong> is fundamental to any design project. Whether you&apos;re designing a website, creating a brand identity, or
            working on digital art, the right color combination can make or break your work.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore what color palettes are, the different types of color harmony, and how to use a color palette generator to create stunning color schemes
            that elevate your designs.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-purple-100 shadow-xl">
            <Image
              src="/layout-design.webp"
              alt="Designer workspace showing multiple color palette combinations on screen"
              width={1024}
              height={1536}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Build balanced complementary, analogous, monochromatic, or triadic palettes with the ImageConvertors palette generator.</p>
        </div>

        {/* What is a Color Palette */}
        <Card className="p-8 mb-8 border-l-4 border-purple-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <Palette className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is a Color Palette?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>color palette</strong> is a carefully selected collection of colors that work together harmoniously. It typically consists of 3-7 colors that create visual balance and appeal.
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Brand Identity:</strong> Establish consistent brand colors across all marketing materials
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Web Design:</strong> Create visually cohesive websites and applications
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Digital Art:</strong> Ensure color harmony in illustrations and graphics
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>UI/UX Design:</strong> Improve user experience through thoughtful color choices
              </p>
            </div>
          </div>
        </Card>

        {/* Types of Color Harmony */}
        <Card className="p-8 mb-8 border-l-4 border-pink-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="text-pink-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Types of Color Harmony</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">Understanding different types of color harmony helps you create palettes with specific visual effects:</p>

          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2">Complementary Colors</h3>
              <p className="text-gray-700 text-sm mb-2">Colors opposite each other on the color wheel (e.g., blue and orange).</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#0077be' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#ff8c42' }}></div>
              </div>
              <p className="text-gray-600 text-sm mt-2">✓ Best for: High contrast, bold designs, call-to-action elements</p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-teal-100 p-5 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-2">Analogous Colors</h3>
              <p className="text-gray-700 text-sm mb-2">Colors next to each other on the color wheel (e.g., blue, blue-green, green).</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#0077be' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#00a8a8' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#00d4aa' }}></div>
              </div>
              <p className="text-gray-600 text-sm mt-2">✓ Best for: Serene, harmonious designs, natural themes</p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-2">Monochromatic Colors</h3>
              <p className="text-gray-700 text-sm mb-2">Different shades, tints, and tones of a single color.</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#1a1a4d' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#3b3b99' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#6666cc' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#9999dd' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#ccccee' }}></div>
              </div>
              <p className="text-gray-600 text-sm mt-2">✓ Best for: Elegant, minimalist designs, professional looks</p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-100 p-5 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-gray-900 mb-2">Triadic Colors</h3>
              <p className="text-gray-700 text-sm mb-2">Three colors equally spaced on the color wheel.</p>
              <div className="flex items-center gap-2 mt-3">
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#ff6b35' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#00a8e8' }}></div>
                <div className="w-10 h-10 rounded" style={{ backgroundColor: '#52b788' }}></div>
              </div>
              <p className="text-gray-600 text-sm mt-2">✓ Best for: Vibrant, playful designs, children&apos;s content</p>
            </div>
          </div>
        </Card>

        {/* Why Use Palette Generator */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-blue-600" size={28} />
            Why Use a Color Palette Generator?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Save Time</h3>
              </div>
              <p className="text-gray-600 text-sm">Generate harmonious palettes instantly instead of manual trial and error.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Sparkles className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Color Theory Built-In</h3>
              </div>
              <p className="text-gray-600 text-sm">Get palettes based on proven color theory principles automatically.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Save className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Save & Organize</h3>
              </div>
              <p className="text-gray-600 text-sm">Store your favorite palettes for easy access across projects.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Explore Options</h3>
              </div>
              <p className="text-gray-600 text-sm">Browse curated palettes and discover new color combinations.</p>
            </div>
          </div>
        </Card>

        {/* How to Use - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-purple-200 bg-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Create a Color Palette (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Palette Generator</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/colors/palettes" className="text-purple-600 hover:text-purple-800 font-medium underline">
                      ImageConvertors Color Palettes
                    </Link>{' '}
                    to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Choose a Base Color
                    <Palette className="ml-2 text-purple-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Select a starting color using the color picker.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Generate Color Scheme</h3>
                  <p className="text-gray-700">Click on complementary, analogous, or monochromatic to generate a palette.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Customize Your Palette</h3>
                  <p className="text-gray-700">Add, remove, or adjust colors to perfect your palette.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Save Your Palette
                    <Save className="ml-2 text-purple-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Give it a name and save it to your collection for future use.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/colors/palettes">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Create Your Palette Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Creating Color Palettes
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>60-30-10 Rule:</strong> Use your main color for 60% of the design, secondary color for 30%, and accent color for 10%.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Start with inspiration:</strong> Look at nature, art, or existing designs you admire for color ideas.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider emotions:</strong> Different colors evoke different feelings - choose colors that match your message.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Test accessibility:</strong> Ensure your palette has sufficient contrast for readability and meets WCAG standards.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Less is more:</strong> Stick to 3-5 main colors to maintain visual coherence.
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
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How many colors should be in a palette?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Most effective palettes contain 3-7 colors. This typically includes one or two primary colors, a few supporting colors, and an accent color. Too many colors can
                make your design feel chaotic, while too few may limit your creative options.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I use my saved palettes across different projects?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Your saved palettes are stored locally in your browser, so you can access them anytime you return to our{' '}
                <Link href="/colors/palettes" className="text-purple-600 hover:text-purple-800 font-medium underline">
                  palette generator
                </Link>
                . You can also copy the color codes to use in any design tool or project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What&apos;s the best palette type for beginners?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Monochromatic palettes are easiest for beginners as they use different shades of one color, making it nearly impossible to create clashing combinations. As you gain
                confidence, experiment with analogous and complementary palettes.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Perfect Palette?</h2>
          <p className="text-xl mb-6 text-purple-100">Try our free palette generator now. Create, save, and share beautiful color schemes!</p>
          <Link href="/colors/palettes">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Creating Palettes Now →
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
                <p className="text-gray-600 text-sm">Pick colors and get instant format conversions for your designs.</p>
              </Card>
            </Link>
            <Link href="/colors/gradients">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Gradient Generator</h3>
                <p className="text-gray-600 text-sm">Create stunning gradients with your palette colors.</p>
              </Card>
            </Link>
            <Link href="/colors/converter">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Converter</h3>
                <p className="text-gray-600 text-sm">Convert palette colors between different formats.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
