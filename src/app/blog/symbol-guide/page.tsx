import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Sparkles, Zap, CheckCircle, HelpCircle, Search, Copy, Stars } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Symbol Library & Unicode Characters – Copy Special Symbols Instantly | ImageConvertors',
  description: 'Browse and copy thousands of Unicode symbols and special characters instantly. Find mathematical symbols, arrows, currency signs, and decorative characters for your projects.',
  keywords: ['symbol library', 'unicode symbols', 'special characters', 'copy symbols', 'mathematical symbols', 'arrow symbols', 'currency symbols', 'unicode characters', 'symbol picker'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/symbol-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Using a Symbol Library',
    description: 'Browse thousands of Unicode symbols and special characters. Copy mathematical symbols, arrows, and decorative characters instantly to your clipboard.',
    url: 'https://imageconvertors.com/blog/symbol-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    images: [
      {
        url: '/symbol.webp',
        width: 1200,
        height: 630,
        alt: 'Symbol Library Tool Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Using a Symbol Library',
    description: 'Browse thousands of Unicode symbols and special characters. Copy instantly to your clipboard.',
    images: ['/symbol.webp'],
  },
};

export default function SymbolGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Sparkles className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to Unicode Symbols</h1>
              <p className="text-gray-600 text-lg">Browse, Search, and Copy Special Characters & Symbols</p>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Published on {new Date('2025-10-05').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Special characters and symbols are powerful tools for adding visual interest, clarity, and professionalism to your content. An <strong>online symbol library</strong> makes it easy to
            browse thousands of Unicode symbols, special characters, and decorative elements, and copy them instantly to your clipboard.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we'll explore what a symbol library is, the different types of symbols available, and how to use them effectively in your projects.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-purple-100 shadow-xl">
            <Image
              src="/symbol.webp"
              alt="Screenshot of the ImageConvertors symbol library interface showing various Unicode symbols and special characters"
              width={1200}
              height={630}
              className="w-full h-auto"
              priority
            />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Browse thousands of Unicode symbols and special characters with the ImageConvertors symbol library.</p>
        </div>

        {/* What is a Symbol Library */}
        <Card className="p-8 mb-8 border-l-4 border-purple-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
              <Sparkles className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is a Symbol Library?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            A <strong>symbol library</strong> is a comprehensive collection of Unicode characters and special symbols that you can easily browse, search, and copy. It&apos;s essential for:
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Developers:</strong> Adding mathematical symbols, arrows, and special characters to documentation and code comments
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Designers:</strong> Incorporating decorative elements, bullets, and dividers in design projects
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Writers:</strong> Enhancing articles, blog posts, and documents with special characters and punctuation
              </p>
            </div>
            <div className="flex items-start border-l-4 border-purple-500 pl-4 py-2">
              <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Social Media Managers:</strong> Creating eye-catching posts with unique symbols and decorative characters
              </p>
            </div>
          </div>
        </Card>

        {/* Types of Symbols */}
        <Card className="p-8 mb-8 border-l-4 border-blue-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Stars className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Types of Symbols Available</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">Unicode includes over 140,000 characters covering a vast range of symbols. Here are the most popular categories:</p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">🔣 Mathematical Symbols</h3>
              <p className="text-gray-600 text-sm mb-2">Operators, equations, set theory, and advanced mathematical notation</p>
              <p className="text-2xl">∑ ∫ ∞ ≠ ≈ ± × ÷ √ π</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">➡️ Arrows & Pointers</h3>
              <p className="text-gray-600 text-sm mb-2">Directional arrows, curved arrows, and pointer symbols</p>
              <p className="text-2xl">→ ← ↑ ↓ ↔ ⇒ ⇐ ➜ ➤</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">💰 Currency Symbols</h3>
              <p className="text-gray-600 text-sm mb-2">International currency signs and financial symbols</p>
              <p className="text-2xl">$ € £ ¥ ₹ ₽ ¢ ₿ ₩</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">★ Stars & Shapes</h3>
              <p className="text-gray-600 text-sm mb-2">Decorative stars, geometric shapes, and ornamental elements</p>
              <p className="text-2xl">★ ☆ ✦ ✧ ◆ ◇ ● ○ ■ □</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">✓ Checkmarks & Symbols</h3>
              <p className="text-gray-600 text-sm mb-2">Check marks, crosses, and common UI symbols</p>
              <p className="text-2xl">✓ ✔ ✗ ✘ ☑ ☒ ⚠ ⚡ ♠ ♣</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">© Legal & Punctuation</h3>
              <p className="text-gray-600 text-sm mb-2">Copyright, trademark, and special punctuation marks</p>
              <p className="text-2xl">© ® ™ § ¶ † ‡ • … –</p>
            </div>
          </div>
        </Card>

        {/* Why Use Symbol Library */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-purple-50 to-blue-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-purple-600" size={28} />
            Why Use an Online Symbol Library?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Search className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Quick Search</h3>
              </div>
              <p className="text-gray-600 text-sm">Find any symbol quickly by searching keywords like &quot;arrow&quot;, &quot;star&quot;, or &quot;math&quot;.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Copy className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">One-Click Copy</h3>
              </div>
              <p className="text-gray-600 text-sm">Click any symbol to instantly copy it to your clipboard - no complex keyboard shortcuts needed.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <Sparkles className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Categorized Library</h3>
              </div>
              <p className="text-gray-600 text-sm">Browse symbols by category: Math, Arrows, Currency, Stars, Checkmarks, and more.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-purple-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Universal Support</h3>
              </div>
              <p className="text-gray-600 text-sm">All symbols are standard Unicode characters that work across all modern platforms and devices.</p>
            </div>
          </div>
        </Card>

        {/* How to Use - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-purple-200 bg-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use the Symbol Library (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Symbol Library</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/texts/symbols" className="text-purple-600 hover:text-purple-800 font-medium underline">
                      ImageConvertors Symbol Library
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
                    Browse Categories or Search
                    <Search className="ml-2 text-purple-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Filter by category (Math, Arrows, Currency, etc.) or use the search bar to find specific symbols by keyword or name.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Preview Symbols</h3>
                  <p className="text-gray-700">Hover over any symbol to see its name and Unicode code point. This helps ensure you're selecting the right character.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Click to Copy</h3>
                  <p className="text-gray-700">Click any symbol to instantly copy it to your clipboard. You&apos;ll see a confirmation when it&apos;s copied successfully.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Paste Anywhere</h3>
                  <p className="text-gray-700">Paste your symbol in any app, document, website, or design tool with Ctrl+V (Windows) or Cmd+V (Mac).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/texts/symbols">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                Try Symbol Library Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Popular Use Cases */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Use Cases for Symbols</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">📝 Documentation & Technical Writing</h3>
              <p className="text-gray-700 text-sm mb-3">Enhance documentation with mathematical symbols, arrows, and special notation.</p>
              <p className="text-sm text-gray-600">Example: "If x ≥ 10 → result ≠ null"</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">💼 Business & Finance</h3>
              <p className="text-gray-700 text-sm mb-3">Add currency symbols and financial notation to reports and presentations.</p>
              <p className="text-sm text-gray-600">Example: "Revenue: $1.5M | €1.2M | £1.0M"</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">🎨 Design & Layout</h3>
              <p className="text-gray-700 text-sm mb-3">Use decorative symbols, bullets, and dividers in designs and layouts.</p>
              <p className="text-sm text-gray-600">Example: "★★★★★ • Premium Quality • ✓ Verified"</p>
            </div>
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-5 rounded-lg border border-pink-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">📱 Social Media Posts</h3>
              <p className="text-gray-700 text-sm mb-3">Create eye-catching posts with special characters and decorative symbols.</p>
              <p className="text-sm text-gray-600">Example: "✨ New Product Launch ➜ 50% OFF ✓"</p>
            </div>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Using Symbols
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Check browser support:</strong> While most symbols work everywhere, test obscure characters on your target platforms to ensure compatibility.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use appropriate fonts:</strong> Some symbols may render better with specific fonts. Choose fonts that support a wide range of Unicode characters.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider accessibility:</strong> When using decorative symbols, include descriptive alt text or aria labels for screen readers.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Save favorites:</strong> Keep a document of frequently used symbols for quick access without searching each time.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Mind the context:</strong> Use symbols appropriately - mathematical symbols in technical docs, decorative symbols in creative content.
              </p>
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
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: What is Unicode and why does it matter?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Unicode is an international standard that assigns a unique number to every character across all writing systems and symbol sets. It ensures that symbols display
                consistently across all platforms and devices, making your content universally readable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Will these symbols work in all applications?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Most modern applications support Unicode characters. However, very old software or systems might not display all symbols correctly. When in doubt, test the symbol
                in your target application before finalizing your content.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I use symbols in programming code?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Many programming languages support Unicode in strings, comments, and variable names. However, it&apos;s best practice to stick to ASCII for code identifiers
                and use Unicode symbols mainly in strings, comments, and documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is the symbol library free to use?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Absolutely! Our symbol library is completely free with no registration required. Browse and copy unlimited symbols for personal or commercial projects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: How are symbols different from emojis?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Symbols are typically monochrome characters used for technical, decorative, or functional purposes (like ©, ™, →, ±). Emojis are colorful pictographs used for
                emotional expression (😊, 🎉). Both are part of Unicode but serve different purposes.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Symbol?</h2>
          <p className="text-xl mb-6 text-purple-100">Browse thousands of Unicode symbols and special characters. Fast, free, and easy to use!</p>
          <Link href="/texts/symbols">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Browsing Symbols Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Text Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/texts/emojis">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Emoji Picker</h3>
                <p className="text-gray-600 text-sm">Browse and copy emojis with device-specific rendering for your content.</p>
              </Card>
            </Link>
            <Link href="/texts/fonts">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Font Preview</h3>
                <p className="text-gray-600 text-sm">Preview Google Fonts instantly with custom text and styling options.</p>
              </Card>
            </Link>
            <Link href="/texts/fonts/pairings">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Font Pairings</h3>
                <p className="text-gray-600 text-sm">Discover perfect Google Font combinations for your design projects.</p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
