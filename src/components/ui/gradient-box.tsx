import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const gradientBoxVariants = cva('', {
  variants: {
    gradient: {
      primary: 'bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)]',
      secondary: 'bg-gradient-to-r from-[var(--gradient-secondary-from)] to-[var(--gradient-secondary-to)]',
      accent: 'bg-gradient-to-br from-[var(--gradient-accent-from)] via-[var(--gradient-accent-via)] to-[var(--gradient-accent-to)]',
      purple: 'bg-gradient-to-r from-purple-600 to-pink-600',
      orange: 'bg-gradient-to-r from-orange-600 to-red-600',
      green: 'bg-gradient-to-r from-green-600 to-teal-600',
      blue: 'bg-gradient-to-br from-blue-500 to-cyan-500',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
      full: 'rounded-full',
    },
    padding: {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    },
  },
  defaultVariants: {
    gradient: 'primary',
    rounded: '2xl',
    padding: 'none',
  },
});

export interface GradientBoxProps extends React.ComponentProps<'div'>, VariantProps<typeof gradientBoxVariants> {
  as?: React.ElementType;
}

export function GradientBox({ className, gradient, rounded, padding, as: Component = 'div', ...props }: GradientBoxProps) {
  return <Component data-slot="gradient-box" className={cn(gradientBoxVariants({ gradient, rounded, padding, className }))} {...props} />;
}
