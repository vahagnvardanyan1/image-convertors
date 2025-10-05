import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Type, Zap, CheckCircle, HelpCircle, Eye, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Google Fonts Preview Tool – Test & Compare Web Fonts Online | ImageConvertors',
  description: 'Preview Google Fonts instantly with our free online font playground. Test typography, compare fonts, adjust sizes & weights. Perfect for web designers and developers.',
  keywords: ['font preview', 'Google Fonts preview', 'web font tester', 'typography preview', 'font playground', 'test fonts online', 'font comparison tool', 'web typography'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/font-preview-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Previewing Google Fonts Online',
    description: 'Preview Google Fonts instantly with our free online font playground. Test typography, compare fonts, and find the perfect typeface for your project.',
    url: 'https://imageconvertors.com/blog/font-preview-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    images: [
      {
        url: '/font-picker.webp',
        width: 1200,
        height: 630,
        alt: 'Google Font Preview Tool Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Previewing Google Fonts Online',
    description: 'Preview Google Fonts instantly with our free online font playground. Test typography and compare fonts.',
    images: ['/font-picker.webp'],
  },
};

export default function FontPreviewGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/blog">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Blog
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Type className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to Previewing Google Fonts</h1>
              <p className="text-gray-600 text-lg">Test, Compare, and Choose Perfect Typography for Your Projects</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-05').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>9 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Choosing the right typography can make or break your design. With thousands of <strong>Google Fonts</strong> available, having a reliable <strong>font preview tool</strong> is essential
            for designers and developers to test fonts with real content before implementation.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore how to effectively preview and test Google Fonts online, compare different typefaces, and make informed typography decisions for your web
            projects.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-blue-100 shadow-xl">
            <Image src="/font-picker.webp" alt="Screenshot of the ImageConvertors Google Fonts preview interface" width={1200} height={630} className="w-full h-auto" priority />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Preview Google Fonts with custom text, sizes, weights, and styling options in real-time.</p>
        </div>

        {/* What is Font Preview */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Type className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is a Font Preview Tool?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>font preview tool</strong> is an interactive typography playground that allows you to test Google Fonts with your own text, customize styling options, and see exactly how fonts
            will look in your project. It&apos;s essential for:
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Web Designers:</strong> Visualizing how fonts will appear in website layouts and interfaces
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Developers:</strong> Testing font performance and readability before adding to CSS
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Graphic Designers:</strong> Comparing multiple typefaces for branding and marketing materials
              </p>
            </div>
            <div className="flex items-start border-l-4 border-blue-500 pl-4 py-2">
              <CheckCircle className="text-blue-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Content Creators:</strong> Ensuring text readability across different devices and screen sizes
              </p>
            </div>
          </div>
        </Card>

        {/* Key Features */}
        <Card className="p-8 mb-8 border-l-4 border-purple-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Key Features of Our Font Preview Tool</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Type className="mr-2 text-blue-600" size={20} />
                Custom Text Preview
              </h3>
              <p className="text-gray-600 text-sm">Type your own text to see exactly how fonts will look with your actual content. Perfect for headlines, body text, or any custom messaging.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Code className="mr-2 text-blue-600" size={20} />
                Font Size Adjustment
              </h3>
              <p className="text-gray-600 text-sm">Test fonts from 12px to 120px to ensure readability at all sizes. See how typefaces perform for both large headings and small body text.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Eye className="mr-2 text-blue-600" size={20} />
                Weight & Style Options
              </h3>
              <p className="text-gray-600 text-sm">Explore different font weights (light, regular, medium, bold, black) and styles (normal, italic) to find the perfect variation.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Zap className="mr-2 text-blue-600" size={20} />
                Real-time CSS Code
              </h3>
              <p className="text-gray-600 text-sm">Copy ready-to-use CSS code including Google Fonts import link and font-family declaration. Save time with instant implementation.</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                <CheckCircle className="mr-2 text-blue-600" size={20} />
                Letter Spacing & Line Height
              </h3>
              <p className="text-gray-600 text-sm">Fine-tune typography with adjustable letter spacing (tracking) and line height (leading) for optimal readability and aesthetics.</p>
            </div>
          </div>
        </Card>

        {/* Why Use Font Preview */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-purple-50 to-pink-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-purple-600" size={28} />
            Why Preview Google Fonts Before Using Them?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Eye className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Visual Accuracy</h3>
              </div>
              <p className="text-gray-600 text-sm">See exactly how fonts will look with your content before committing to implementation.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Save Development Time</h3>
              </div>
              <p className="text-gray-600 text-sm">Test multiple fonts quickly without writing code or importing unnecessary font files.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Better Typography Decisions</h3>
              </div>
              <p className="text-gray-600 text-sm">Compare fonts side-by-side and make informed choices based on readability and aesthetics.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Code className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Instant CSS Code</h3>
              </div>
              <p className="text-gray-600 text-sm">Get production-ready CSS code with proper Google Fonts imports and declarations.</p>
            </div>
          </div>
        </Card>

        {/* How to Use - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-blue-200 bg-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use the Font Preview Tool (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Font Preview Tool</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/fonts/preview" className="text-blue-600 hover:text-blue-800 font-medium underline">
                      ImageConvertors Font Preview
                    </Link>{' '}
                    to access the typography playground.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Select a Google Font
                    <Type className="ml-2 text-blue-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Browse through thousands of Google Fonts and select one from the dropdown menu.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Enter Your Custom Text</h3>
                  <p className="text-gray-700">Type your own text to see how the font looks with your actual content. Test headlines, paragraphs, or any custom messaging.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Customize Styling Options</h3>
                  <p className="text-gray-700">Adjust font size, weight, style, letter spacing, and line height to perfect your typography.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Copy CSS Code</h3>
                  <p className="text-gray-700">Click the copy button to get ready-to-use CSS code including Google Fonts import and font-family declaration.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">6</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Implement in Your Project</h3>
                  <p className="text-gray-700">Paste the CSS code into your stylesheet or HTML head section and start using your chosen font.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/fonts/preview">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Try Font Preview Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Choosing the Perfect Font
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Test with real content:</strong> Use actual text from your project instead of lorem ipsum to see how the font performs in context.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Check multiple sizes:</strong> Test fonts at different sizes - what looks great at 48px might be unreadable at 14px.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider readability:</strong> Prioritize legibility over style, especially for body text. Decorative fonts work best for headlines.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Limit font families:</strong> Use 2-3 font families maximum per project to maintain visual consistency and performance.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Test on multiple devices:</strong> Fonts may appear differently on various screens, browsers, and operating systems.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Check font weights availability:</strong> Not all Google Fonts offer the same weight variations. Ensure your chosen font has the weights you need.
              </p>
            </div>
          </div>
        </Card>

        {/* Best Practices */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-blue-50 to-cyan-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Typography Best Practices</h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">For Body Text</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Use font sizes between 16-18px for comfortable reading</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Set line height to 1.5-1.6 for optimal readability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Choose fonts with clear letterforms and good x-height</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Prefer regular or medium weights for body text</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-3">For Headlines</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Experiment with bold, distinctive typefaces that grab attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Use larger sizes (32-72px) to create visual hierarchy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Consider tighter letter spacing for large headlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span>Choose fonts that complement your brand personality</span>
                </li>
              </ul>
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
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How do I add Google Fonts to my website?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> After choosing a font in our preview tool, copy the provided CSS code. Add the @import line to your stylesheet or the &lt;link&gt; tag to your HTML head section.
                Then use the font-family property in your CSS.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Are Google Fonts free for commercial use?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! All Google Fonts are open source and free to use for both personal and commercial projects without any restrictions or attribution requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Will using Google Fonts slow down my website?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Google Fonts are optimized for web performance and served from fast CDNs. To minimize impact, only load the font weights and styles you actually use, and consider
                using font-display: swap in your CSS.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I preview multiple fonts at once?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> While our preview tool focuses on one font at a time for detailed testing, you can quickly switch between fonts to compare them. For pre-made font combinations,
                check our{' '}
                <Link href="/fonts/pairings" className="text-blue-600 hover:text-blue-800 font-medium underline">
                  Font Pairings tool
                </Link>
                .
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What&apos;s the difference between serif and sans-serif fonts?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Serif fonts have decorative strokes (serifs) at the end of letters, giving a traditional feel (e.g., Times New Roman). Sans-serif fonts lack these strokes,
                appearing more modern and clean (e.g., Arial). Sans-serif fonts generally work better for digital screens.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Font?</h2>
          <p className="text-xl mb-6 text-blue-100">Preview thousands of Google Fonts with our free online tool. Fast, easy, and no sign-up required!</p>
          <Link href="/fonts/preview">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Previewing Fonts Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Typography Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/fonts/pairings">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Font Pairings</h3>
                <p className="text-gray-600 text-sm">Discover perfect font combinations for headings and body text.</p>
              </Card>
            </Link>
            <Link href="/fonts/scales">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Typographic Scale</h3>
                <p className="text-gray-600 text-sm">Generate harmonious font size scales for your design system.</p>
              </Card>
            </Link>
            <Link href="/colors/picker">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Color Picker</h3>
                <p className="text-gray-600 text-sm">Choose perfect colors to complement your typography.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
