import { cn } from '@/lib/utils';
import { designTokens } from '@/styles/design-tokens';
import { Container } from '../Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient';
  containerSize?: 'default' | 'narrow' | 'wide';
  noPadding?: boolean;
  id?: string;
}

/**
 * Section primitive component
 * Provides consistent section spacing and container wrapping
 *
 * @param background - Background color variant
 * @param containerSize - Inner container width variant
 * @param noPadding - Disable default vertical padding
 */
export function Section({ children, className, background = 'white', containerSize = 'default', noPadding = false, id }: SectionProps) {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
  };

  return (
    <section id={id} className={cn(bgClasses[background], !noPadding && designTokens.spacing.sectionY, className)}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
