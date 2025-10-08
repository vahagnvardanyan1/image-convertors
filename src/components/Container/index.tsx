import { cn } from '@/lib/utils';
import { designTokens } from '@/styles/design-tokens';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide';
}

/**
 * Container primitive component
 * Provides consistent max-width and horizontal padding across the application
 *
 * @param size - Container width variant (narrow: 4xl, default: 7xl, wide: 1440px)
 */
export function Container({ children, className, size = 'default' }: ContainerProps) {
  const sizeClasses = {
    narrow: designTokens.layout.container.narrow,
    default: designTokens.layout.container.default,
    wide: designTokens.layout.container.wide,
  };

  return <div className={cn(sizeClasses[size], 'mx-auto', designTokens.spacing.containerX, className)}>{children}</div>;
}
