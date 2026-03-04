import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/button';
import convertImage from '@/public/convert.webp';
import cropImage from '@/public/crop.webp';
import layoutDesignImage from '@/public/layout-design.webp';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="w-full py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Image Converter</h1>
        <p className="mt-2">Convert, crop, and design your images effortlessly</p>
      </header>
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image src={convertImage} alt="Convert Image" className="w-full h-auto rounded-lg" />
            <h2 className="mt-4 text-xl font-semibold">Convert</h2>
            <p className="mt-2 text-gray-600">Easily convert images to various formats.</p>
          </div>
          <div className="text-center">
            <Image src={cropImage} alt="Crop Image" className="w-full h-auto rounded-lg" />
            <h2 className="mt-4 text-xl font-semibold">Crop</h2>
            <p className="mt-2 text-gray-600">Crop your images to perfection.</p>
          </div>
          <div className="text-center">
            <Image src={layoutDesignImage} alt="Layout Design" className="w-full h-auto rounded-lg" />
            <h2 className="mt-4 text-xl font-semibold">Design</h2>
            <p className="mt-2 text-gray-600">Create stunning layouts with ease.</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link href="/get-started">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">Get Started</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
