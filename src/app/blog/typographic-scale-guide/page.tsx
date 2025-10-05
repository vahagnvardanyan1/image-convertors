import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Ruler, Zap, CheckCircle, HelpCircle, Music, Code, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Typographic Scale Generator – Create Perfect Font Size Scales | ImageConvertors',
  description: 'Generate harmonious typographic scales using musical ratios. Create perfect font size hierarchies for your design system. Free CSS typography scale tool.',
  keywords: ['typographic scale', 'font size scale', 'type scale generator', 'modular scale', 'typography system', 'font hierarchy', 'CSS font sizes', 'design system'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/typographic-scale-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Typographic Scales',
    description: 'Generate harmonious typographic scales using musical ratios. Create perfect font size hierarchies for your design system.',
    url: 'https://imageconvertors.com/blog/typographic-scale-guide',
    siteName: 'ImageConverter',
    type: 'article',
    images: [
      {
        url: '/font-generator.jpg',
        width: 1200,
        height: 630,
        alt: 'Typographic Scale Generator Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Typographic Scales',
    description: 'Generate harmonious typographic scales using musical ratios for perfect typography.',
    images: ['/font-generator.jpg'],
  },
};

export default function TypographicScaleGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Ruler className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to Typographic Scales</h1>
              <p className="text-gray-600 text-lg">Create Perfect Font Size Hierarchies for Your Design System</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-05').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>11 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Creating consistent and harmonious typography is essential for professional web design. A <strong>typographic scale</strong> provides a systematic approach to font sizing, ensuring visual
            hierarchy and readability across your entire design system.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore what typographic scales are, how musical ratios create harmony in design, and how to generate and implement perfect font size scales for
            your projects.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-orange-100 shadow-xl">
            <Image src="/font-generator.jpg" alt="Screenshot of the ImageConvertors typographic scale generator interface" width={1200} height={630} className="w-full h-auto" priority />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Generate harmonious font size scales using mathematical ratios and export CSS custom properties.</p>
        </div>

        {/* What is Typographic Scale */}
        <Card className="p-8 mb-8 border-l-4 border-orange-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4">
              <Ruler className="text-orange-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is a Typographic Scale?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>typographic scale</strong> (also called a modular scale or type scale) is a sequence of font sizes based on a mathematical ratio. Instead of randomly choosing font sizes like
            14px, 18px, 24px, 32px, a typographic scale uses consistent mathematical relationships to create harmony and visual rhythm.
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
              <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Visual Hierarchy:</strong> Clear distinction between heading levels and body text
              </p>
            </div>
            <div className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
              <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consistency:</strong> Predictable sizing across your entire design system
              </p>
            </div>
            <div className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
              <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Mathematical Harmony:</strong> Sizes that feel naturally balanced and pleasing
              </p>
            </div>
            <div className="flex items-start border-l-4 border-orange-500 pl-4 py-2">
              <CheckCircle className="text-orange-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Easy Maintenance:</strong> Systematic approach makes design decisions faster and updates easier
              </p>
            </div>
          </div>
        </Card>

        {/* Musical Ratios */}
        <Card className="p-8 mb-8 border-l-4 border-purple-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <Music className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Understanding Musical Ratios in Typography</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Typographic scales are based on <strong>musical ratios</strong> - the same mathematical relationships that create harmony in music also create visual harmony in typography. Here are the
            most popular ratios:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Minor Second (1.067)</h3>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">Subtle</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Smallest ratio, creates subtle differences between sizes. Best for minimalist designs or when you need many size steps close together.</p>
              <p className="text-xs text-gray-500">Example: 16px → 17px → 18px → 19px</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Major Second (1.125)</h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Balanced</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Conservative scale with noticeable but gentle progression. Great for text-heavy sites and professional applications.</p>
              <p className="text-xs text-gray-500">Example: 16px → 18px → 20px → 23px</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Minor Third (1.2)</h3>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Popular</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">One of the most versatile ratios. Creates clear hierarchy without being too dramatic. Works well for most web projects.</p>
              <p className="text-xs text-gray-500">Example: 16px → 19px → 23px → 28px</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Major Third (1.25)</h3>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded">Recommended</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Perfect for modern web design. Creates strong but not overwhelming hierarchy. Excellent for marketing sites and portfolios.</p>
              <p className="text-xs text-gray-500">Example: 16px → 20px → 25px → 31px</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Perfect Fourth (1.333)</h3>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Bold</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Creates strong visual contrast. Great for designs that need dramatic hierarchy and impact. Popular for landing pages.</p>
              <p className="text-xs text-gray-500">Example: 16px → 21px → 28px → 38px</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Golden Ratio (1.618)</h3>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">Classic</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">Based on the mathematical golden ratio found in nature. Creates dramatic size differences. Best for designs with fewer hierarchy levels.</p>
              <p className="text-xs text-gray-500">Example: 16px → 26px → 42px → 68px</p>
            </div>
          </div>
        </Card>

        {/* Why Use Typography Scale */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-blue-600" size={28} />
            Why Use a Typographic Scale?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Layers className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Professional Results</h3>
              </div>
              <p className="text-gray-600 text-sm">Create polished, professional designs with mathematically harmonious typography.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Faster Decisions</h3>
              </div>
              <p className="text-gray-600 text-sm">No more guessing font sizes. Your scale provides predetermined, harmonious options.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Consistent UI</h3>
              </div>
              <p className="text-gray-600 text-sm">Maintain consistency across pages, components, and team members.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-blue-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Easy Implementation</h3>
              </div>
              <p className="text-gray-600 text-sm">Export as CSS custom properties and use throughout your entire project.</p>
            </div>
          </div>
        </Card>

        {/* How to Use */}
        <Card className="p-8 mb-8 border-2 border-orange-200 bg-orange-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Generate Your Typographic Scale (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Scale Generator</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/fonts/scales" className="text-orange-600 hover:text-orange-800 font-medium underline">
                      ImageConvertors Typographic Scale
                    </Link>{' '}
                    to access the generator tool.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Set Your Base Font Size</h3>
                  <p className="text-gray-700">Choose your base font size (typically 16px for body text). All other sizes will be calculated from this base.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Choose a Ratio
                    <Music className="ml-2 text-orange-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Select a musical ratio. Try Major Third (1.25) or Perfect Fourth (1.333) for most projects.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Preview the Scale</h3>
                  <p className="text-gray-700">See your complete font size scale visualized with sample text at each size level.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Export CSS Variables</h3>
                  <p className="text-gray-700">Copy the generated CSS custom properties to use throughout your project for consistent sizing.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">6</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Implement in Your Design</h3>
                  <p className="text-gray-700">Add the CSS to your stylesheet and reference the variables throughout your components and pages.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/fonts/scales">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                Generate Your Scale Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Implementation Example */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Code className="mr-2 text-blue-600" size={28} />
            CSS Implementation Example
          </h2>

          <div className="bg-gray-900 rounded-lg p-6 mb-4 overflow-x-auto">
            <pre className="text-green-400 text-sm">
              <code>{`:root {
  /* Base size */
  --font-size-base: 16px;
  
  /* Scale using Major Third (1.25) */
  --font-size-xs: 10px;
  --font-size-sm: 13px;
  --font-size-base: 16px;
  --font-size-md: 20px;
  --font-size-lg: 25px;
  --font-size-xl: 31px;
  --font-size-2xl: 39px;
  --font-size-3xl: 49px;
  --font-size-4xl: 61px;
}

/* Usage in your CSS */
body {
  font-size: var(--font-size-base);
}

h1 {
  font-size: var(--font-size-4xl);
}

h2 {
  font-size: var(--font-size-3xl);
}

h3 {
  font-size: var(--font-size-2xl);
}

.small-text {
  font-size: var(--font-size-sm);
}`}</code>
            </pre>
          </div>

          <p className="text-gray-700 text-sm">Using CSS custom properties makes it easy to maintain consistency and update your scale globally if needed.</p>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Using Typographic Scales
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Start with 16px base:</strong> This is the web standard and provides good readability for most users.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>You don&apos;t need every size:</strong> Generate a full scale but only use the sizes you need. Skip steps if needed.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Responsive adjustments:</strong> Consider using a smaller ratio on mobile devices where space is limited.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Document your system:</strong> Keep a style guide showing which scale level to use for each element type.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Test with real content:</strong> Preview your scale with actual content to ensure it works in context.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Combine with line height:</strong> Use proportional line heights (e.g., 1.5 for body, 1.2 for headings) for optimal readability.
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2 text-orange-600" size={28} />
            Common FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What&apos;s the best ratio for web design?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> The Major Third (1.25) and Perfect Fourth (1.333) ratios are most popular for web design. Major Third creates clear but not overwhelming hierarchy, while Perfect
                Fourth provides more dramatic contrast. Start with Major Third and adjust based on your needs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Should I use pixels or rem units?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Rem units are generally better for accessibility as they respect user browser settings. However, the scale principles work the same regardless of units. You can
                generate in pixels and convert to rem by dividing by 16 (e.g., 20px = 1.25rem).
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I modify individual sizes in my scale?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> While you can make adjustments, doing so defeats the purpose of a systematic scale. If sizes don&apos;t work, try a different ratio or base size instead of manual
                adjustments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How many size steps should I generate?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Generate 8-10 steps (from extra small to extra large). This gives you flexibility while maintaining consistency. You don&apos;t have to use every step - pick the
                ones that work for your design.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Typographic Scale?</h2>
          <p className="text-xl mb-6 text-orange-100">Generate harmonious font size scales with mathematical precision. Free and easy to use!</p>
          <Link href="/fonts/scales">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Generate Scale Now →
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
                <p className="text-gray-600 text-sm">Test your scale with different Google Fonts and styling options.</p>
              </Card>
            </Link>
            <Link href="/fonts/pairings">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Font Pairings</h3>
                <p className="text-gray-600 text-sm">Find perfect font combinations to use with your scale.</p>
              </Card>
            </Link>
            <Link href="/colors/picker">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Picker</h3>
                <p className="text-gray-600 text-sm">Choose perfect colors to complement your typography system.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
