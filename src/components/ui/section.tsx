import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionVariants = cva('w-full', {
  variants: {
    padding: {
      none: 'py-0',
      sm: 'py-8',
      md: 'py-12',
      lg: 'py-16',
      xl: 'py-20 lg:py-24',
      '2xl': 'py-24 lg:py-32',
    },
    background: {
      none: 'bg-transparent',
      muted: 'bg-gray-50 dark:bg-gray-900',
      card: 'bg-card',
      primary: 'bg-primary text-primary-foreground',
      accent: 'bg-gradient-to-br from-[var(--gradient-accent-from)] via-[var(--gradient-accent-via)] to-[var(--gradient-accent-to)]',
    },
  },
  defaultVariants: {
    padding: 'lg',
    background: 'none',
  },
});

export interface SectionProps extends React.ComponentProps<'section'>, VariantProps<typeof sectionVariants> {
  as?: React.ElementType;
}

export function Section({ className, padding, background, as: Component = 'section', ...props }: SectionProps) {
  return <Component data-slot="section" className={cn(sectionVariants({ padding, background, className }))} {...props} />;
}
