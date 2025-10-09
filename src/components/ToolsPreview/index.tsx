import Link from 'next/link';
import { Palette, Type, Smile, FileJson } from 'lucide-react';

const ToolsPreview = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 px-4">Professional Design Tools</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 px-4">Access powerful color, typography, and text tools for your creative projects</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {/* Color Tools Card */}
        <Link
          href="/colors"
          className="group block p-4 sm:p-5 lg:p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg sm:rounded-xl border-2 border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl active:scale-[0.98] sm:hover:scale-105 touch-manipulation"
        >
          <div className="flex flex-col items-center text-center gap-3 sm:gap-4">
            <div className="flex-shrink-0 p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
              <Palette className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1.5 sm:mb-2">
                Color Tools
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">Color picker, palette generator, gradient creator, and format converter</p>
            </div>
          </div>
        </Link>

        {/* Font Tools Card */}
        <Link
          href="/texts/fonts"
          className="group block p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-purple-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
              <Type className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">Font Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Font preview, pairing suggestions, and typographic scale generator</p>
            </div>
          </div>
        </Link>

        {/* Text Tools Card */}
        <Link
          href="/texts"
          className="group block p-6 bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-green-200 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 shadow-lg">
              <Smile className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors mb-2">Text Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Browse emojis, symbols, and special characters for your projects</p>
            </div>
          </div>
        </Link>

        {/* JSON Tools Card */}
        <Link
          href="/texts/json-validator"
          className="group block p-6 bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-orange-200 dark:border-gray-600 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:scale-105"
        >
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-orange-500 to-yellow-500 shadow-lg">
              <FileJson className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors mb-2">JSON Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Validate, compare, and parse JSON with powerful online tools</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ToolsPreview;
