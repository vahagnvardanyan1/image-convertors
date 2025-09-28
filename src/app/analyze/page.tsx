import { Metadata } from 'next';
import { AnalyzePage } from '@/components/AnalyzePage';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function ImageAnalyzePage() {
  return <AnalyzePage />;
}
