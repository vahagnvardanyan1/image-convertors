import { Twitter, Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">IC</span>
              </div>
              <span className="ml-2 text-xl font-bold">ImageConverter</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">The fastest and most secure way to convert images online. Built for developers, designers, and everyone who works with images.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Converters */}
          <div>
            <h3 className="font-semibold mb-4">Converters</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/png-to-webp" className="text-gray-400 hover:text-white transition-colors">
                  PNG to WebP
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-png" className="text-gray-400 hover:text-white transition-colors">
                  JPG to PNG
                </Link>
              </li>
              <li>
                <Link href="/webp-to-png" className="text-gray-400 hover:text-white transition-colors">
                  WebP to PNG
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-webp" className="text-gray-400 hover:text-white transition-colors">
                  JPG to WebP
                </Link>
              </li>
              <li>
                <Link href="/png-to-jpg" className="text-gray-400 hover:text-white transition-colors">
                  PNG to JPG
                </Link>
              </li>
              <li>
                <Link href="/webp-to-jpg" className="text-gray-400 hover:text-white transition-colors">
                  WebP to JPG
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 ImageConverter. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Made with ❤️ for the web</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
