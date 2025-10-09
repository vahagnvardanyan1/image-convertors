'use client';

import { Mail, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 pb-6 border-b border-gray-800 sm:border-b-0 sm:pb-0">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">IC</span>
              </div>
              <span className="ml-2 text-lg sm:text-xl font-bold">ImageConverter</span>
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-xs sm:text-sm leading-relaxed">
              The fastest and most secure way to convert images and PDFs online. Built for developers, designers, and everyone who works with digital files.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-400 flex-shrink-0" size={14} />
              <a href="mailto:cropimage@gmail.com" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm break-all">
                cropimage@gmail.com
              </a>
            </div>
          </div>

          {/* AI Tools */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button
              onClick={() => toggleSection('ai')}
              className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none py-2 sm:py-0 -mx-2 px-2 sm:mx-0 sm:px-0 rounded-lg active:bg-gray-800 sm:active:bg-transparent touch-manipulation"
            >
              <h3 className="font-semibold mb-0 sm:mb-4 text-base sm:text-lg">AI Tools</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'ai' ? 'rotate-180' : ''}`} size={22} />
            </button>
            <ul className={`space-y-2 mt-3 sm:mt-0 ${openSection === 'ai' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/remove-background" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Remove Background
                </Link>
              </li>
            </ul>
          </div>

          {/* Image Converters */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button
              onClick={() => toggleSection('image')}
              className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none py-2 sm:py-0 -mx-2 px-2 sm:mx-0 sm:px-0 rounded-lg active:bg-gray-800 sm:active:bg-transparent touch-manipulation"
            >
              <h3 className="font-semibold mb-0 sm:mb-4 text-base sm:text-lg">Image Converters</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'image' ? 'rotate-180' : ''}`} size={22} />
            </button>
            <ul className={`space-y-2 mt-3 sm:mt-0 ${openSection === 'image' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/crop-image" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Crop Image
                </Link>
              </li>
              <li>
                <Link href="/resize-image" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Resize Image
                </Link>
              </li>
              <li>
                <Link href="/png-to-webp" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PNG to WebP
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-png" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JPG to PNG
                </Link>
              </li>
              <li>
                <Link href="/webp-to-png" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  WebP to PNG
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JPG to WebP
                </Link>
              </li>
              <li>
                <Link href="/png-to-jpg" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PNG to JPG
                </Link>
              </li>
              <li>
                <Link href="/webp-to-jpg" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  WebP to JPG
                </Link>
              </li>
              <li>
                <Link href="/heic-to-jpg" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  HEIC to JPG
                </Link>
              </li>
              <li>
                <Link href="/heic-to-png" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  HEIC to PNG
                </Link>
              </li>
              <li>
                <Link href="/heic-to-webp" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  HEIC to WebP
                </Link>
              </li>
              <li>
                <Link href="/analyze" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Image Analyzer
                </Link>
              </li>
              <li>
                <Link href="/qr-code-generator" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  QR Code Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* PDF Tools */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button
              onClick={() => toggleSection('pdf')}
              className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none py-2 sm:py-0 -mx-2 px-2 sm:mx-0 sm:px-0 rounded-lg active:bg-gray-800 sm:active:bg-transparent touch-manipulation"
            >
              <h3 className="font-semibold mb-0 sm:mb-4 text-base sm:text-lg">PDF Tools</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'pdf' ? 'rotate-180' : ''}`} size={22} />
            </button>
            <ul className={`space-y-2 mt-3 sm:mt-0 ${openSection === 'pdf' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/pdf-to-jpg" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PDF to JPG
                </Link>
              </li>
              <li>
                <Link href="/pdf-to-png" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PDF to PNG
                </Link>
              </li>
              <li>
                <Link href="/images-to-pdf" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Images to PDF
                </Link>
              </li>
              <li>
                <Link href="/png-to-pdf" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PNG to PDF
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-pdf" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JPG to PDF
                </Link>
              </li>
              <li>
                <Link href="/heic-to-pdf" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  HEIC to PDF
                </Link>
              </li>
              <li>
                <Link href="/webp-to-pdf" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  WebP to PDF
                </Link>
              </li>
              <li>
                <Link href="/merge-pdf" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Merge PDF Files
                </Link>
              </li>
              <li>
                <Link href="/split-pdf" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Split PDF Files
                </Link>
              </li>
              <li>
                <Link href="/pdf-info" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PDF Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Color Tools */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button
              onClick={() => toggleSection('color')}
              className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none py-2 sm:py-0 -mx-2 px-2 sm:mx-0 sm:px-0 rounded-lg active:bg-gray-800 sm:active:bg-transparent touch-manipulation"
            >
              <h3 className="font-semibold mb-0 sm:mb-4 text-base sm:text-lg">Color Tools</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'color' ? 'rotate-180' : ''}`} size={22} />
            </button>
            <ul className={`space-y-2 mt-3 sm:mt-0 ${openSection === 'color' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/colors" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-medium block py-1 active:text-white touch-manipulation">
                  🎨 All Color Tools
                </Link>
              </li>
              <li>
                <Link href="/colors/picker" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Color Picker
                </Link>
              </li>
              <li>
                <Link href="/colors/palettes" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Color Palettes
                </Link>
              </li>
              <li>
                <Link href="/colors/gradients" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Gradient Generator
                </Link>
              </li>
              <li>
                <Link href="/colors/converter" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Color Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Text Tools */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button
              onClick={() => toggleSection('text')}
              className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none py-2 sm:py-0 -mx-2 px-2 sm:mx-0 sm:px-0 rounded-lg active:bg-gray-800 sm:active:bg-transparent touch-manipulation"
            >
              <h3 className="font-semibold mb-0 sm:mb-4 text-base sm:text-lg">Text Tools</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'text' ? 'rotate-180' : ''}`} size={22} />
            </button>
            <ul className={`space-y-2 mt-3 sm:mt-0 ${openSection === 'text' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/texts" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-medium block py-1 active:text-white touch-manipulation">
                  📝 All Text Tools
                </Link>
              </li>
              <li>
                <Link href="/texts/json-validator" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JSON Validator
                </Link>
              </li>
              <li>
                <Link href="/texts/json-comparer" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JSON Comparer
                </Link>
              </li>
              <li>
                <Link href="/texts/json-parser" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JSON Parser
                </Link>
              </li>
              <li>
                <Link href="/texts/emojis" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Emoji Picker
                </Link>
              </li>
              <li>
                <Link href="/texts/symbols" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Symbol Library
                </Link>
              </li>
              <li>
                <Link href="/texts/fonts/preview" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Font Preview
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog & Resources */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button
              onClick={() => toggleSection('blog')}
              className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none py-2 sm:py-0 -mx-2 px-2 sm:mx-0 sm:px-0 rounded-lg active:bg-gray-800 sm:active:bg-transparent touch-manipulation"
            >
              <h3 className="font-semibold mb-0 sm:mb-4 text-base sm:text-lg">Blog & Resources</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'blog' ? 'rotate-180' : ''}`} size={22} />
            </button>
            <ul className={`space-y-2 mt-3 sm:mt-0 max-h-[400px] overflow-y-auto ${openSection === 'blog' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Blog Home
                </Link>
              </li>
              <li>
                <Link href="/blog/qr-code-generator-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  QR Code Generator Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/crop-image-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Crop Image Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/resize-image-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Resize Image Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/remove-background-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Remove Background Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/png-to-webp-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PNG to WebP Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/png-to-jpg-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PNG to JPG Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/webp-to-png-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  WebP to PNG Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/png-to-pdf-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PNG to PDF Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/jpg-to-webp-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JPG to WebP Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/jpg-to-pdf-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JPG to PDF Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/pdf-to-jpg-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  PDF to JPG Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/heic-to-jpg-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  HEIC to JPG Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/heic-to-webp-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  HEIC to WebP Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/compress-images-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Compress Images Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/color-picker-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Color Picker Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/color-palette-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Color Palette Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/gradient-generator-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Gradient Generator Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/color-converter-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Color Converter Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/font-preview-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Font Preview Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/font-pairing-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Font Pairing Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/typographic-scale-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Typographic Scale Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/emoji-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Emoji Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/symbol-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  Symbol Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/json-validator-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JSON Validator Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/json-comparer-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JSON Comparer Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/json-parser-guide" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
                  JSON Parser Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links - Centered */}
        <div className="mt-8 pt-8">
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 mb-6">
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
              Privacy Policy
            </Link>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
              Terms of Use
            </Link>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
              Terms of Service
            </Link>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm block py-1 active:text-white touch-manipulation">
              Cookie Policy
            </Link>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-2">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">© 2025 ImageConverter. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center">
              <span className="text-gray-400 text-xs sm:text-sm">Made with ❤️ for the web</span>
              <span className="text-gray-500 text-[10px] sm:text-xs">100% Client-Side Processing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
