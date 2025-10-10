import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const gradientTextVariants = cva('bg-clip-text text-transparent', {
  variants: {
    gradient: {
      primary: 'bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)]',
      secondary: 'bg-gradient-to-r from-[var(--gradient-secondary-from)] to-[var(--gradient-secondary-to)]',
      purple: 'bg-gradient-to-r from-purple-600 to-pink-600',
      orange: 'bg-gradient-to-r from-orange-600 to-red-600',
      green: 'bg-gradient-to-r from-green-600 to-teal-600',
    },
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: {
    gradient: 'primary',
    size: 'base',
    weight: 'bold',
  },
});

export interface GradientTextProps extends React.ComponentProps<'span'>, VariantProps<typeof gradientTextVariants> {
  as?: 'span' | 'p' | 'div';
}

export function GradientText({ className, gradient, size, weight, as: Component = 'span', ...props }: GradientTextProps) {
  return <Component data-slot="gradient-text" className={cn(gradientTextVariants({ gradient, size, weight, className }))} {...props} />;
}
