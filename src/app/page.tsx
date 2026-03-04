import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Image Converter</h1>
        <p className="text-gray-600 mb-8">Convert your images easily and quickly with our tools.</p>
        <div className="space-y-4">
          <Link href="/landing">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              Visit Landing Page
            </Button>
          </Link>
          <Link href="/#format-grid">
            <Button variant="outline" className="w-full">
              Start Converting
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
