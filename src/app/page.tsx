import { Hero } from '@/components/Hero';
import { FormatGrid } from '@/components/FormatGrid';
import { HowTo } from '@/components/HowTo';
import { Features } from '@/components/Features';
import { BannerBlocks } from '@/components/BannerBlock';
import { FAQ } from '@/components/FAQ';
import ToolsPreview from '@/components/ToolsPreview';

export default function HomePage() {
  return (
    <>
      <FormatGrid />
      <Hero />
      <HowTo />
      <ToolsPreview />
      <Features />
      <BannerBlocks />
      <FAQ />
    </>
  );
}
