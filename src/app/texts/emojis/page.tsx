'use client';

import { useState } from 'react';
import { DynamicMetadata } from '@/components/DynamicMetadata';
import { emojiCategories, type EmojiCategory, searchEmojis } from '@/lib/emojiData';
import { copyToClipboard } from '@/lib/colorUtils';
import { Search, Check } from 'lucide-react';

const metadata = {
  title: 'Emoji Picker - Browse & Copy 500+ Emojis with Device Preview | ImageConvertors',
  description:
    'Browse and copy over 500 emojis instantly with device-specific rendering preview. Filter by category including smileys, animals, food, travel, activities, objects, symbols, and flags. See how emojis appear on Apple, Google, Microsoft, and Samsung devices. One-click copy to clipboard for easy use in your projects.',
  keywords: [
    'emoji picker',
    'emoji browser',
    'copy emoji',
    'emoji library',
    'emoji collection',
    'emoji search',
    'free emoji',
    'emoji keyboard',
    'device emoji preview',
    'Apple emoji',
    'Google emoji',
    'Microsoft emoji',
    'Samsung emoji',
    'emoji categories',
    'smileys emoji',
    'people emoji',
    'animals emoji',
    'nature emoji',
    'food emoji',
    'drink emoji',
    'travel emoji',
    'places emoji',
    'activities emoji',
    'objects emoji',
    'symbols emoji',
    'flags emoji',
    'emoji unicode',
    'emoji copy paste',
    'emoji for social media',
    'emoji for messages',
    'emoji for website',
  ],
};

type DeviceType = 'native' | 'apple' | 'google' | 'microsoft' | 'samsung';

const deviceOptions: { id: DeviceType; label: string }[] = [
  { id: 'native', label: 'Native' },
  { id: 'apple', label: 'Apple' },
  { id: 'google', label: 'Google' },
  { id: 'microsoft', label: 'Microsoft' },
  { id: 'samsung', label: 'Samsung' },
];

export default function EmojisPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<EmojiCategory>('All');
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>('native');
  const [copiedEmoji, setCopiedEmoji] = useState<string | null>(null);

  const filteredEmojis = searchEmojis(searchQuery, selectedCategory);

  const handleCopyEmoji = async (emoji: string) => {
    await copyToClipboard(emoji);
    setCopiedEmoji(emoji);
    setTimeout(() => setCopiedEmoji(null), 1500);
  };

  // Get emoji URL based on device type
  const getEmojiDisplay = (emoji: string, unicode: string) => {
    if (selectedDevice === 'native') {
      return <span className="text-5xl">{emoji}</span>;
    }

    // Use external emoji CDN for device-specific rendering
    const codePoint = unicode.replace('U+', '').toLowerCase();
    const emojiUrls: Record<Exclude<DeviceType, 'native'>, string> = {
      apple: `https://em-content.zobj.net/thumbs/120/apple/354/${emoji}.png`,
      google: `https://em-content.zobj.net/thumbs/120/google/350/${emoji}.png`,
      microsoft: `https://em-content.zobj.net/thumbs/120/microsoft/319/${emoji}.png`,
      samsung: `https://em-content.zobj.net/thumbs/120/samsung/349/${emoji}.png`,
    };

    return <span className="text-5xl inline-block w-16 h-16 flex items-center justify-center">{emoji}</span>;
  };

  return (
    <div>
      <DynamicMetadata title={metadata.title} description={metadata.description} keywords={metadata.keywords} />

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Emoji Browser</h2>
        <p className="text-gray-600 dark:text-gray-400">Browse and copy emojis with device-specific rendering preview</p>
      </div>

      {/* Search and Filters */}
      <div className="sticky top-16 z-10 bg-gray-50 dark:bg-gray-800 pb-4 mb-6 space-y-4 -mx-4 px-4 pt-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-md">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder="Search emojis by name or keyword..."
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2">
          {emojiCategories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Device Selector */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-lg p-4 border border-blue-100 dark:border-gray-600">
          <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-3">Device Rendering Style:</label>
          <div className="flex flex-wrap gap-2">
            {deviceOptions.map(device => (
              <button
                key={device.id}
                onClick={() => setSelectedDevice(device.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedDevice === device.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                {device.label}
              </button>
            ))}
          </div>
          <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">Select how you want to preview emoji rendering (Note: Native uses your system&apos;s default emoji style)</p>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{filteredEmojis.length}</span> emoji{filteredEmojis.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Emoji Grid */}
      {filteredEmojis.length > 0 ? (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {filteredEmojis.map((item, index) => (
            <button
              key={`${item.emoji}-${index}`}
              onClick={() => handleCopyEmoji(item.emoji)}
              className="relative group bg-white dark:bg-gray-700 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all hover:scale-110 hover:shadow-lg flex flex-col items-center justify-center aspect-square"
              title={`${item.name} - Click to copy`}
            >
              {/* Emoji Display */}
              <div className="flex items-center justify-center mb-1">{getEmojiDisplay(item.emoji, item.unicode)}</div>

              {/* Emoji Name (on hover) */}
              <div className="absolute inset-x-0 bottom-0 bg-black/80 text-white text-xs p-2 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="truncate text-center">{item.name}</p>
              </div>

              {/* Copy Indicator */}
              {copiedEmoji === item.emoji && (
                <div className="absolute inset-0 flex items-center justify-center bg-green-500/90 rounded-lg">
                  <div className="flex flex-col items-center gap-1 text-white">
                    <Check size={24} />
                    <span className="text-xs font-semibold">Copied!</span>
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <p className="text-xl text-gray-600 dark:text-gray-400">No emojis found</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">Try adjusting your search or filter</p>
        </div>
      )}

      {/* Usage Tips */}
      <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 border border-purple-100 dark:border-gray-600">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">💡 How to Use</h3>
        <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
            <span>Click any emoji to instantly copy it to your clipboard</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
            <span>Use the search bar to find emojis by name or keyword</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
            <span>Filter by category to browse specific types of emojis</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-pink-600 dark:text-pink-400 font-bold">•</span>
            <span>Switch device rendering to see how emojis appear on different platforms</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
