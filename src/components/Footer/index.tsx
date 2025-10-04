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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 pb-6 border-b border-gray-800 sm:border-b-0 sm:pb-0">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <span className="ml-2 text-xl font-bold">ImageConverter</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md text-sm">
              The fastest and most secure way to convert images and PDFs online. Built for developers, designers, and everyone who works with digital files.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="text-gray-400" size={16} />
              <a href="mailto:cropimage@gmail.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                cropimage@gmail.com
              </a>
            </div>
          </div>

          {/* Image Converters */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button onClick={() => toggleSection('image')} className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none">
              <h3 className="font-semibold mb-4 sm:mb-4">Image Converters</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'image' ? 'rotate-180' : ''}`} size={20} />
            </button>
            <ul className={`space-y-2 ${openSection === 'image' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/png-to-webp" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PNG to WebP
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-png" className="text-gray-400 hover:text-white transition-colors text-sm">
                  JPG to PNG
                </Link>
              </li>
              <li>
                <Link href="/webp-to-png" className="text-gray-400 hover:text-white transition-colors text-sm">
                  WebP to PNG
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-gray-400 hover:text-white transition-colors text-sm">
                  JPG to WebP
                </Link>
              </li>
              <li>
                <Link href="/png-to-jpg" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PNG to JPG
                </Link>
              </li>
              <li>
                <Link href="/webp-to-jpg" className="text-gray-400 hover:text-white transition-colors text-sm">
                  WebP to JPG
                </Link>
              </li>
              <li>
                <Link href="/heic-to-jpg" className="text-gray-400 hover:text-white transition-colors text-sm">
                  HEIC to JPG
                </Link>
              </li>
              <li>
                <Link href="/heic-to-png" className="text-gray-400 hover:text-white transition-colors text-sm">
                  HEIC to PNG
                </Link>
              </li>
              <li>
                <Link href="/heic-to-webp" className="text-gray-400 hover:text-white transition-colors text-sm">
                  HEIC to WebP
                </Link>
              </li>
              <li>
                <Link href="/analyze" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Image Analyzer
                </Link>
              </li>
              <li>
                <a href="http://cropsimage.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Crop Images
                </a>
              </li>
            </ul>
          </div>

          {/* PDF Tools */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button onClick={() => toggleSection('pdf')} className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none">
              <h3 className="font-semibold mb-4 sm:mb-4">PDF Tools</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'pdf' ? 'rotate-180' : ''}`} size={20} />
            </button>
            <ul className={`space-y-2 ${openSection === 'pdf' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/pdf-to-jpg" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PDF to JPG
                </Link>
              </li>
              <li>
                <Link href="/pdf-to-png" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PDF to PNG
                </Link>
              </li>
              <li>
                <Link href="/images-to-pdf" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Images to PDF
                </Link>
              </li>
              <li>
                <Link href="/png-to-pdf" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PNG to PDF
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-pdf" className="text-gray-400 hover:text-white transition-colors text-sm">
                  JPG to PDF
                </Link>
              </li>
              <li>
                <Link href="/heic-to-pdf" className="text-gray-400 hover:text-white transition-colors text-sm">
                  HEIC to PDF
                </Link>
              </li>
              <li>
                <Link href="/webp-to-pdf" className="text-gray-400 hover:text-white transition-colors text-sm">
                  WebP to PDF
                </Link>
              </li>
              <li>
                <Link href="/merge-pdf" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Merge PDF Files
                </Link>
              </li>
              <li>
                <Link href="/split-pdf" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Split PDF Files
                </Link>
              </li>
              <li>
                <Link href="/pdf-info" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PDF Information
                </Link>
              </li>
            </ul>
          </div>

          {/* Color Tools */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button onClick={() => toggleSection('color')} className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none">
              <h3 className="font-semibold mb-4 sm:mb-4">Color Tools</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'color' ? 'rotate-180' : ''}`} size={20} />
            </button>
            <ul className={`space-y-2 ${openSection === 'color' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/colors" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                  🎨 All Color Tools
                </Link>
              </li>
              <li>
                <Link href="/colors/picker" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Color Picker
                </Link>
              </li>
              <li>
                <Link href="/colors/palettes" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Color Palettes
                </Link>
              </li>
              <li>
                <Link href="/colors/gradients" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Gradient Generator
                </Link>
              </li>
              <li>
                <Link href="/colors/converter" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Color Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog & Resources */}
          <div className="border-b border-gray-800 pb-4 sm:border-b-0 sm:pb-0">
            <button onClick={() => toggleSection('blog')} className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none">
              <h3 className="font-semibold mb-4 sm:mb-4">Blog & Resources</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'blog' ? 'rotate-180' : ''}`} size={20} />
            </button>
            <ul className={`space-y-2 ${openSection === 'blog' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog Home
                </Link>
              </li>
              <li>
                <Link href="/blog/png-to-webp-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PNG to WebP Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/png-to-jpg-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PNG to JPG Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/webp-to-png-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  WebP to PNG Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/png-to-pdf-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PNG to PDF Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/jpg-to-webp-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  JPG to WebP Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/jpg-to-pdf-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  JPG to PDF Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/pdf-to-jpg-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  PDF to JPG Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/heic-to-jpg-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  HEIC to JPG Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/heic-to-webp-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  HEIC to WebP Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/compress-images-guide" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Compress Images Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <button onClick={() => toggleSection('legal')} className="flex items-center justify-between w-full sm:cursor-default sm:pointer-events-none">
              <h3 className="font-semibold mb-4 sm:mb-4">Legal & Support</h3>
              <ChevronDown className={`sm:hidden transition-transform ${openSection === 'legal' ? 'rotate-180' : ''}`} size={20} />
            </button>
            <ul className={`space-y-2 ${openSection === 'legal' ? 'block' : 'hidden sm:block'}`}>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm text-center sm:text-left">© 2025 ImageConverter. All rights reserved.</p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-400 text-sm">Made with ❤️ for the web</span>
              <span className="text-gray-500 text-xs">100% Client-Side Processing</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
