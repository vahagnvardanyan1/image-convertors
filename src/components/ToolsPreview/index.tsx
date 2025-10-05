import Link from 'next/link';
import { Palette, Type } from 'lucide-react';

const ToolsPreview = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
          <img src="/font-picker.png" alt="Font and Color Tools Preview" className="w-full h-full object-cover" />
        </div>

        {/* Right: Navigation Cards */}
        <div className="space-y-6">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Professional Design Tools</h2>
            <p className="text-gray-600 dark:text-gray-400">Access powerful color and typography tools for your creative projects</p>
          </div>

          {/* Color Tools Card */}
          <Link
            href="/colors"
            className="group block p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">Color Tools</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Color picker, palette generator, gradient creator, and format converter</p>
              </div>
            </div>
          </Link>

          {/* Font Tools Card */}
          <Link
            href="/fonts"
            className="group block p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-xl border-2 border-purple-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                <Type className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors mb-2">Font Tools</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Font preview, pairing suggestions, and typographic scale generator</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToolsPreview;
