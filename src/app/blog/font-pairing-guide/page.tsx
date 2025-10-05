import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, CheckCircle, HelpCircle, Eye, Heart, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Google Font Pairings & Combinations – Free Font Pairing Tool | ImageConvertors',
  description: 'Discover perfect Google Font pairings for your projects. Browse curated font combinations for headings and body text. Free font pairing tool for web designers.',
  keywords: ['font pairing', 'Google Font combinations', 'typography pairing', 'font matching', 'web font pairings', 'font combinations', 'typeface pairing', 'complementary fonts'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/font-pairing-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Google Font Pairings',
    description: 'Discover perfect Google Font pairings for your projects. Browse curated font combinations and create beautiful typography.',
    url: 'https://imageconvertors.com/blog/font-pairing-guide',
    siteName: 'ImageConverter',
    type: 'article',
    images: [
      {
        url: '/font-generator.webp',
        width: 1200,
        height: 630,
        alt: 'Font Pairing Tool Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Google Font Pairings',
    description: 'Discover perfect Google Font pairings and create beautiful typography for your projects.',
    images: ['/font-generator.webp'],
  },
};

export default function FontPairingGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Sparkles className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to Google Font Pairings</h1>
              <p className="text-gray-600 text-lg">Master the Art of Combining Fonts for Beautiful Typography</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-05').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>10 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Creating perfect <strong>font pairings</strong> is one of the most challenging aspects of web design. The right combination of heading and body fonts can elevate your design, while poor
            choices can make even great content hard to read and unprofessional.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore the principles of <strong>font pairing</strong>, show you proven Google Font combinations, and teach you how to create harmonious typography
            for your web projects.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-purple-100 shadow-xl">
            <Image
              src="/font-generator.webp"
              alt="Screenshot of the ImageConvertors font pairing tool showing complementary font combinations"
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Explore curated Google Font pairings and discover perfect typography combinations for your projects.</p>
        </div>

        {/* What is Font Pairing */}
        <Card className="p-8 mb-8 border-l-4 border-purple-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is Font Pairing?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Font pairing</strong> is the art and science of combining two or more typefaces that work well together. Typically, this involves selecting one font for headings and another for
            body text. Good pairings create:
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Visual Hierarchy:</strong> Clear distinction between headings, subheadings, and body text
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Harmony:</strong> Fonts that complement rather than compete with each other
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Readability:</strong> Text that&apos;s easy to read at all sizes and contexts
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Brand Consistency:</strong> Typography that reflects your brand personality and values
              </p>
            </div>
          </div>
        </Card>

        {/* Font Pairing Principles */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Layers className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Key Principles of Font Pairing</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">1. Contrast is Key</h3>
              <p className="text-gray-600 text-sm mb-3">Pair fonts that are different enough to create visual interest but not so different that they clash. Common approaches:</p>
              <ul className="space-y-1 text-gray-600 text-sm ml-4">
                <li>• Serif headings + Sans-serif body (classic and readable)</li>
                <li>• Sans-serif headings + Serif body (modern and elegant)</li>
                <li>• Display headings + Simple body (bold and attention-grabbing)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">2. Match Proportions</h3>
              <p className="text-gray-600 text-sm">Fonts with similar x-heights and proportions create better harmony. Compare the size and shape of lowercase letters to ensure visual balance.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">3. Limit Your Choices</h3>
              <p className="text-gray-600 text-sm">
                Use 2-3 font families maximum per project. Too many fonts create visual chaos and hurt performance. One font for headings, one for body text is often ideal.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">4. Consider Mood and Context</h3>
              <p className="text-gray-600 text-sm">
                Choose fonts that match your project&apos;s personality. Tech startups might use geometric sans-serifs, while law firms might prefer traditional serifs.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">5. Test at Multiple Sizes</h3>
              <p className="text-gray-600 text-sm">Ensure your pairings work at different sizes. A combination that looks great at 48px might fail at 14px. Always test with real content.</p>
            </div>
          </div>
        </Card>

        {/* Popular Pairing Strategies */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Heart className="mr-2 text-pink-600" size={28} />
            Popular Font Pairing Strategies
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
              <h3 className="font-semibold text-gray-900 text-lg mb-3">The Classic: Serif + Sans-Serif</h3>
              <p className="text-gray-700 mb-3">
                This time-tested combination provides excellent contrast and readability. Use serif fonts for headings to convey authority and tradition, with clean sans-serif body text for modern
                readability.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold mb-1">Example Pairings:</p>
                <p className="text-sm text-gray-700">• Playfair Display (headings) + Source Sans Pro (body)</p>
                <p className="text-sm text-gray-700">• Merriweather (headings) + Open Sans (body)</p>
                <p className="text-sm text-gray-700">• Lora (headings) + Roboto (body)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
              <h3 className="font-semibold text-gray-900 text-lg mb-3">The Modern: Sans-Serif + Serif</h3>
              <p className="text-gray-700 mb-3">
                Flip the classic approach for a contemporary feel. Bold sans-serif headings grab attention, while elegant serif body text adds sophistication and improves reading comfort.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold mb-1">Example Pairings:</p>
                <p className="text-sm text-gray-700">• Montserrat (headings) + Merriweather (body)</p>
                <p className="text-sm text-gray-700">• Raleway (headings) + Lora (body)</p>
                <p className="text-sm text-gray-700">• Poppins (headings) + Crimson Text (body)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
              <h3 className="font-semibold text-gray-900 text-lg mb-3">The Minimal: Sans-Serif + Sans-Serif</h3>
              <p className="text-gray-700 mb-3">
                Using two sans-serif fonts creates a clean, modern aesthetic. Vary weights and styles to create hierarchy. Choose fonts with different personalities - geometric paired with humanist
                works well.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold mb-1">Example Pairings:</p>
                <p className="text-sm text-gray-700">• Oswald (headings) + Open Sans (body)</p>
                <p className="text-sm text-gray-700">• Bebas Neue (headings) + Lato (body)</p>
                <p className="text-sm text-gray-700">• Work Sans (headings) + Karla (body)</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-purple-100">
              <h3 className="font-semibold text-gray-900 text-lg mb-3">The Bold: Display + Neutral</h3>
              <p className="text-gray-700 mb-3">
                Pair an expressive display font for headings with a highly readable, neutral font for body text. Great for creative projects, marketing sites, and portfolios.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 font-semibold mb-1">Example Pairings:</p>
                <p className="text-sm text-gray-700">• Abril Fatface (headings) + Lato (body)</p>
                <p className="text-sm text-gray-700">• Pacifico (headings) + Roboto (body)</p>
                <p className="text-sm text-gray-700">• Righteous (headings) + Source Sans Pro (body)</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Top Google Font Pairings */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Sparkles className="mr-2 text-purple-600" size={28} />
            Top 10 Google Font Pairings for 2025
          </h2>

          <div className="space-y-4">
            {[
              { heading: 'Playfair Display', body: 'Source Sans Pro', style: 'Elegant & Professional' },
              { heading: 'Montserrat', body: 'Merriweather', style: 'Modern & Readable' },
              { heading: 'Oswald', body: 'Open Sans', style: 'Bold & Clean' },
              { heading: 'Raleway', body: 'Lora', style: 'Sophisticated & Warm' },
              { heading: 'Poppins', body: 'Roboto', style: 'Contemporary & Friendly' },
              { heading: 'Bebas Neue', body: 'Lato', style: 'Strong & Minimal' },
              { heading: 'Abril Fatface', body: 'Lato', style: 'Dramatic & Stylish' },
              { heading: 'Work Sans', body: 'Crimson Text', style: 'Modern & Classic' },
              { heading: 'Nunito', body: 'Merriweather', style: 'Friendly & Trustworthy' },
              { heading: 'Inter', body: 'Lora', style: 'Tech-Modern & Elegant' },
            ].map((pairing, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-100">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <span className="bg-purple-600 text-white font-bold px-3 py-1 rounded-full text-sm mr-3">{index + 1}</span>
                      <span className="text-sm text-purple-600 font-semibold">{pairing.style}</span>
                    </div>
                    <p className="text-gray-900 font-semibold">
                      <span className="text-purple-600">Heading:</span> {pairing.heading}
                    </p>
                    <p className="text-gray-900">
                      <span className="text-purple-600">Body:</span> {pairing.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* How to Use - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-purple-200 bg-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use the Font Pairing Tool (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Browse Curated Pairings</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/fonts/pairings" className="text-purple-600 hover:text-purple-800 font-medium underline">
                      ImageConvertors Font Pairings
                    </Link>{' '}
                    to explore professionally curated font combinations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Preview Combinations
                    <Eye className="ml-2 text-purple-600" size={20} />
                  </h3>
                  <p className="text-gray-700">See how heading and body fonts look together with sample text and realistic layouts.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Filter by Style</h3>
                  <p className="text-gray-700">Choose pairings based on your project needs - modern, classic, bold, minimal, elegant, or friendly.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Copy CSS Code</h3>
                  <p className="text-gray-700">Click to copy ready-to-use CSS code for both fonts, including Google Fonts imports and font-family declarations.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Test with Your Content</h3>
                  <p className="text-gray-700">Use our Font Preview tool to test the pairing with your actual content and make any necessary adjustments.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/fonts/pairings">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Explore Font Pairings Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Perfect Font Pairings
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Start with body text:</strong> Choose your body font first since it&apos;s used most. Then find a complementary heading font.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use font weights wisely:</strong> Create hierarchy through weight variation. Bold headings with regular body text works well.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Mind the mood:</strong> Fonts have personalities. Ensure your pairing matches your brand voice - playful, serious, modern, traditional, etc.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Check accessibility:</strong> Ensure sufficient contrast and readability, especially at smaller sizes. Test with real users when possible.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider performance:</strong> Each font family adds to page load time. Limit font weights and styles to only what you actually use.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Trust proven combinations:</strong> There&apos;s no shame in using popular pairings. They&apos;re popular because they work well.
              </p>
            </div>
          </div>
        </Card>

        {/* Common Mistakes */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-red-50 to-orange-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Common Font Pairing Mistakes to Avoid</h2>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg border border-red-100">
              <h3 className="font-semibold text-red-700 mb-2">❌ Using Too Many Fonts</h3>
              <p className="text-gray-700 text-sm">More than 2-3 font families creates visual chaos and confuses readers. Stick to one pairing.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-red-100">
              <h3 className="font-semibold text-red-700 mb-2">❌ Pairing Similar Fonts</h3>
              <p className="text-gray-700 text-sm">Fonts that are too similar don&apos;t create enough contrast. Readers won&apos;t see a clear hierarchy.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-red-100">
              <h3 className="font-semibold text-red-700 mb-2">❌ Pairing Conflicting Personalities</h3>
              <p className="text-gray-700 text-sm">A playful cartoon font with a serious corporate serif creates tonal confusion. Match the mood.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-red-100">
              <h3 className="font-semibold text-red-700 mb-2">❌ Ignoring Readability</h3>
              <p className="text-gray-700 text-sm">Prioritizing style over readability hurts user experience. Always ensure text is easy to read.</p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-red-100">
              <h3 className="font-semibold text-red-700 mb-2">❌ Not Testing at Different Sizes</h3>
              <p className="text-gray-700 text-sm">A pairing that works at 48px might fail at 14px. Always test with realistic content and sizes.</p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2 text-purple-600" size={28} />
            Common FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Should I use serif or sans-serif for body text?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> For digital screens, sans-serif fonts generally provide better readability at smaller sizes. However, well-designed serif fonts like Lora or Merriweather work
                excellently for body text, especially for long-form reading. Test both and choose what works best for your specific context.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I pair two serif fonts or two sans-serif fonts?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Pairing fonts from the same category can work beautifully if they have different weights, proportions, or personalities. For example, pairing a geometric
                sans-serif (like Montserrat) with a humanist sans-serif (like Open Sans) creates nice contrast while maintaining consistency.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How many font weights should I load?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Only load the font weights you actually use. Typically, 2-3 weights per font family is sufficient (e.g., Regular 400, Medium 500, Bold 700). Loading unnecessary
                weights slows down your website without benefit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Are these pairings free to use commercially?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! All Google Fonts are open source and free for both personal and commercial use without restrictions or attribution requirements.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Perfect Font Pairings?</h2>
          <p className="text-xl mb-6 text-purple-100">Browse curated Google Font combinations and elevate your typography. Free and easy to use!</p>
          <Link href="/fonts/pairings">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Explore Font Pairings Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Typography Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/fonts/preview">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Font Preview</h3>
                <p className="text-gray-600 text-sm">Test Google Fonts with custom text and styling options.</p>
              </Card>
            </Link>
            <Link href="/fonts/scales">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Typographic Scale</h3>
                <p className="text-gray-600 text-sm">Generate harmonious font size scales for your design system.</p>
              </Card>
            </Link>
            <Link href="/colors/palettes">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Palettes</h3>
                <p className="text-gray-600 text-sm">Create beautiful color schemes to complement your typography.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
