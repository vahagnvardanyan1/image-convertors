import { Hero } from '@/components/Hero';
import { FormatGrid } from '@/components/FormatGrid';
import { HowTo } from '@/components/HowTo';
import { Features } from '@/components/Features';
import { BannerBlocks } from '@/components/BannerBlock';
import { FAQ } from '@/components/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <FormatGrid />
      <HowTo />
      <Features />
      <BannerBlocks />
      <FAQ />
    </>
  );
}
