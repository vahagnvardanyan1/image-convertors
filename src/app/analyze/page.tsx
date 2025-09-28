import { Metadata } from 'next';
import { generateMetadata } from '@/lib/metadata';
import { AnalyzePage } from '@/components/AnalyzePage';

// Generate metadata for this specific route
export const metadata: Metadata = generateMetadata('/analyze');

export default function ImageAnalyzePage() {
  return <AnalyzePage />;
}
