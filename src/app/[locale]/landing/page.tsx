import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ToolsPreview from '@/components/ToolsPreview';
import BannerBlock from '@/components/BannerBlock';
import FAQ from '@/components/FAQ';
import { useDropdowns } from '@/hooks/useDropdowns';

export default function LandingPage() {
  const { locale } = useRouter();
  const { isOpen, toggleDropdown } = useDropdowns();

  useEffect(() => {
    // Any side-effects related to the landing page can be handled here
  }, [locale]);

  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <ToolsPreview />
      <BannerBlock />
      <FAQ />
      {/* Example of using the dropdown hook */}
      <div className="relative">
        <button onClick={toggleDropdown} className="btn-primary">
          Toggle Dropdown
        </button>
        {isOpen && <div className="dropdown-content">Dropdown Content</div>}
      </div>
    </div>
  );
}
