import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Smile, Zap, CheckCircle, HelpCircle, Search, Copy, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/Card';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free Emoji Picker & Browser – Copy Emojis with Device Preview | ImageConvertors',
  description: 'Browse and copy thousands of emojis instantly with device-specific rendering. Filter by category and see how emojis appear on Apple, Google, Microsoft, and Samsung devices.',
  keywords: ['emoji picker', 'emoji browser', 'copy emoji', 'device emoji', 'Apple emoji', 'Google emoji', 'emoji categories', 'Unicode emoji', 'emoji search'],
  alternates: {
    canonical: 'https://imageconvertors.com/blog/emoji-guide',
  },
  openGraph: {
    title: 'The Ultimate Guide to Using an Online Emoji Picker',
    description: 'Browse thousands of emojis with device-specific rendering. Filter by category and copy emojis instantly to your clipboard.',
    url: 'https://imageconvertors.com/blog/emoji-guide',
    siteName: 'ImageConvertors',
    type: 'article',
    images: [
      {
        url: '/emoji.webp',
        width: 1200,
        height: 630,
        alt: 'Emoji Picker Tool Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Ultimate Guide to Using an Online Emoji Picker',
    description: 'Browse thousands of emojis with device-specific rendering. Filter by category and copy instantly.',
    images: ['/emoji.webp'],
  },
};

export default function EmojiGuidePage() {
  return (
    <>
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-50 to-pink-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/">
            <Button variant="outline" className="mb-4 flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
              <Smile className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">The Ultimate Guide to Emoji Pickers</h1>
              <p className="text-gray-600 text-lg">Browse, Search, and Copy Emojis for Any Platform</p>
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
            Emojis have become an essential part of digital communication, adding emotion, context, and personality to messages, social media posts, and digital content. An{' '}
            <strong>online emoji picker</strong> makes it easy to browse thousands of emojis, see how they render on different devices, and copy them instantly to your clipboard.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            In this comprehensive guide, we&apos;ll explore what an emoji picker is, why device-specific rendering matters, and how to use it effectively for your projects.
          </p>
        </div>

        <div className="mb-12">
          <div className="relative overflow-hidden rounded-3xl border border-yellow-100 shadow-xl">
            <Image src="/emoji.webp" alt="Screenshot of the ImageConvertors emoji picker interface showing various emoji categories" width={1200} height={630} className="w-full h-auto" priority />
          </div>
          <p className="mt-4 text-sm text-center text-gray-500">Browse thousands of emojis with device-specific rendering and copy them instantly with the ImageConvertors emoji picker.</p>
        </div>

        {/* What is an Emoji Picker */}
        <Card className="p-8 mb-8 border-l-4 border-yellow-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mr-4">
              <Smile className="text-yellow-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">What is an Emoji Picker?</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            An <strong>emoji picker</strong> is an interactive tool that allows you to browse, search, and copy emojis from a comprehensive library. It&apos;s essential for:
          </p>

          <div className="space-y-3">
            <div className="flex items-start border-l-4 border-yellow-500 pl-4 py-2">
              <CheckCircle className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Content Creators:</strong> Adding personality and emotion to social media posts and captions
              </p>
            </div>
            <div className="flex items-start border-l-4 border-yellow-500 pl-4 py-2">
              <CheckCircle className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Developers:</strong> Testing emoji rendering across different platforms and devices
              </p>
            </div>
            <div className="flex items-start border-l-4 border-yellow-500 pl-4 py-2">
              <CheckCircle className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Designers:</strong> Creating mockups and designs with accurate emoji representation
              </p>
            </div>
            <div className="flex items-start border-l-4 border-yellow-500 pl-4 py-2">
              <CheckCircle className="text-yellow-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Marketers:</strong> Enhancing email campaigns and marketing materials with engaging emojis
              </p>
            </div>
          </div>
        </Card>

        {/* Device-Specific Rendering */}
        <Card className="p-8 mb-8 border-l-4 border-pink-500">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mr-4">
              <Heart className="text-pink-600" size={24} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Why Device Rendering Matters</h2>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            Did you know that the same emoji can look completely different on Apple, Google, Microsoft, and Samsung devices? Our emoji picker lets you preview how emojis appear across platforms:
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">🍎 Apple (iOS/macOS)</h3>
              <p className="text-gray-600 text-sm mb-2">Apple&apos;s emojis are known for their glossy, 3D-like appearance with vibrant colors and detailed shading.</p>
              <p className="text-gray-600 text-sm">✓ Best for: iPhone, iPad, Mac users</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">📱 Google (Android)</h3>
              <p className="text-gray-600 text-sm mb-2">Google&apos;s emoji style follows Material Design principles with flat, colorful designs and clean lines.</p>
              <p className="text-gray-600 text-sm">✓ Best for: Android device users, Google Workspace</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">💻 Microsoft (Windows)</h3>
              <p className="text-gray-600 text-sm mb-2">Microsoft&apos;s Fluent Design emojis feature a flat, colorful style with subtle 3D effects.</p>
              <p className="text-gray-600 text-sm">✓ Best for: Windows users, Microsoft Teams</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">📲 Samsung (One UI)</h3>
              <p className="text-gray-600 text-sm mb-2">Samsung&apos;s emojis have a unique style with bold colors and distinctive character designs.</p>
              <p className="text-gray-600 text-sm">✓ Best for: Samsung Galaxy device users</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">🖥️ Native</h3>
              <p className="text-gray-600 text-sm mb-2">See emojis exactly as they appear on your current device using its default emoji font.</p>
              <p className="text-gray-600 text-sm">✓ Best for: Quick reference, system-specific design</p>
            </div>
          </div>
        </Card>

        {/* Why Use Emoji Picker */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-pink-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Zap className="mr-2 text-pink-600" size={28} />
            Why Use an Online Emoji Picker?
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-pink-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <Search className="text-pink-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Smart Search</h3>
              </div>
              <p className="text-gray-600 text-sm">Find emojis quickly by searching keywords like &quot;love&quot;, &quot;food&quot;, or &quot;celebration&quot;.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-pink-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <Copy className="text-pink-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Instant Copy</h3>
              </div>
              <p className="text-gray-600 text-sm">Click any emoji to copy it instantly to your clipboard - no right-clicking needed.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-pink-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <Smile className="text-pink-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Organized Categories</h3>
              </div>
              <p className="text-gray-600 text-sm">Browse emojis by category: Smileys, Animals, Food, Activities, Travel, Objects, and more.</p>
            </div>

            <div className="bg-white p-5 rounded-lg shadow-sm border border-pink-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center mr-3">
                  <CheckCircle className="text-pink-600" size={16} />
                </div>
                <h3 className="font-semibold text-gray-900">Platform Preview</h3>
              </div>
              <p className="text-gray-600 text-sm">See how emojis render on Apple, Google, Microsoft, and Samsung devices before using them.</p>
            </div>
          </div>
        </Card>

        {/* How to Use - Step by Step */}
        <Card className="p-8 mb-8 border-2 border-yellow-200 bg-yellow-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Use the Emoji Picker (Step-by-Step)</h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Open the Emoji Picker</h3>
                  <p className="text-gray-700 mb-3">
                    Go to{' '}
                    <Link href="/texts/emojis" className="text-yellow-600 hover:text-yellow-800 font-medium underline">
                      ImageConvertors Emoji Picker
                    </Link>{' '}
                    to get started.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2 flex items-center">
                    Choose a Category or Search
                    <Search className="ml-2 text-yellow-600" size={20} />
                  </h3>
                  <p className="text-gray-700">Filter by category (Smileys, Animals, Food, etc.) or use the search bar to find specific emojis by keyword.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Select Device Rendering</h3>
                  <p className="text-gray-700">Choose your preferred device rendering style: Native, Apple, Google, Microsoft, or Samsung to see how emojis will appear.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Click to Copy</h3>
                  <p className="text-gray-700">Click any emoji to instantly copy it to your clipboard. You&apos;ll see a confirmation when it&apos;s copied.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-yellow-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-2">Paste Anywhere</h3>
                  <p className="text-gray-700">Paste your emoji in any app, document, message, or social media post with Ctrl+V (Windows) or Cmd+V (Mac).</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/texts/emojis">
              <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3">
                Try Emoji Picker Now →
              </Button>
            </Link>
          </div>
        </Card>

        {/* Emoji Categories */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Emoji Categories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-5 rounded-lg border border-yellow-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">😀 Smileys & People</h3>
              <p className="text-gray-700 text-sm">Facial expressions, emotions, gestures, people, and professions</p>
              <p className="mt-2 text-2xl">😊 😂 🥰 👋 🙏</p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-lg border border-green-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">🐶 Animals & Nature</h3>
              <p className="text-gray-700 text-sm">Animals, plants, flowers, weather, and natural phenomena</p>
              <p className="mt-2 text-2xl">🐕 🐈 🌸 🌲 ☀️</p>
            </div>
            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-5 rounded-lg border border-red-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">🍕 Food & Drink</h3>
              <p className="text-gray-700 text-sm">Fruits, vegetables, meals, desserts, and beverages</p>
              <p className="mt-2 text-2xl">🍕 🍔 🍰 ☕ 🍎</p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">⚽ Activities</h3>
              <p className="text-gray-700 text-sm">Sports, hobbies, games, arts, and entertainment</p>
              <p className="mt-2 text-2xl">⚽ 🎮 🎨 🎵 🎬</p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">✈️ Travel & Places</h3>
              <p className="text-gray-700 text-sm">Transportation, buildings, landmarks, and geographic locations</p>
              <p className="mt-2 text-2xl">✈️ 🚗 🏠 🗽 🌍</p>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">💡 Objects</h3>
              <p className="text-gray-700 text-sm">Everyday items, tools, technology, and household objects</p>
              <p className="mt-2 text-2xl">💡 📱 💻 📚 🎁</p>
            </div>
          </div>
        </Card>

        {/* Pro Tips */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <CheckCircle className="mr-2 text-green-600" size={28} />
            Pro Tips for Using Emojis
          </h2>

          <div className="space-y-4">
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Don&apos;t overuse:</strong> Use emojis strategically to enhance your message, not overwhelm it. 2-3 emojis per message is usually ideal.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Consider your audience:</strong> Different platforms and demographics may interpret emojis differently. Preview them before sending.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Test across devices:</strong> If designing for multiple platforms, check how emojis render on different devices using our picker.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Use descriptive alt text:</strong> When using emojis in web content, include descriptive alternative text for accessibility.
              </p>
            </div>
            <div className="flex items-start border-l-4 border-green-500 pl-4 py-2">
              <CheckCircle className="text-green-600 mr-3 mt-1 flex-shrink-0" size={20} />
              <p className="text-gray-700">
                <strong>Combine for expression:</strong> Mix emojis with text to create more nuanced communication and ensure your message is clear.
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-8 mb-8 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <HelpCircle className="mr-2 text-yellow-600" size={28} />
            Common FAQs
          </h2>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Why do emojis look different on different devices?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Each platform (Apple, Google, Microsoft, Samsung) designs its own emoji fonts. While Unicode standardizes what each emoji represents, the visual design is up to
                each company. This means 😀 looks slightly different on iPhone vs Android.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Are all emojis supported on all devices?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Most modern devices support the latest Unicode emoji standard, but older devices may not display newer emojis correctly. They might show as boxes or question marks.
                Our emoji picker shows the most widely-supported emojis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Can I use emojis in professional communication?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes, but use them thoughtfully! Emojis are increasingly acceptable in professional settings for emails, Slack messages, and presentations. They can help convey tone
                and add personality, but keep it appropriate for your workplace culture.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Q: Is the emoji picker free to use?</h3>
              <p className="text-gray-700">
                <strong>A:</strong> Yes! Our emoji picker is completely free with no sign-up required. Browse, search, and copy unlimited emojis for personal or commercial projects.
              </p>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <Card className="p-8 text-center bg-gradient-to-r from-yellow-600 to-pink-600 text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Emoji?</h2>
          <p className="text-xl mb-6 text-yellow-100">Browse thousands of emojis with device preview. Fast, free, and easy to use!</p>
          <Link href="/texts/emojis">
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Browsing Emojis Now →
            </Button>
          </Link>
        </Card>

        {/* Related Tools */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Text Tools</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/texts/symbols">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer h-full">
                <h3 className="font-semibold text-gray-900 mb-2">Symbol Library</h3>
                <p className="text-gray-600 text-sm">Browse and copy Unicode symbols and special characters for your projects.</p>
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
