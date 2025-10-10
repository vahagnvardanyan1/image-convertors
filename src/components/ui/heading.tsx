import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold tracking-tight', {
  variants: {
    level: {
      h1: 'text-4xl lg:text-6xl',
      h2: 'text-3xl lg:text-5xl',
      h3: 'text-2xl lg:text-4xl',
      h4: 'text-xl lg:text-3xl',
      h5: 'text-lg lg:text-2xl',
      h6: 'text-base lg:text-xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    gradient: {
      none: '',
      primary: 'bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] bg-clip-text text-transparent',
      secondary: 'bg-gradient-to-r from-[var(--gradient-secondary-from)] to-[var(--gradient-secondary-to)] bg-clip-text text-transparent',
    },
  },
  defaultVariants: {
    level: 'h2',
    weight: 'bold',
    align: 'left',
    gradient: 'none',
  },
});

export interface HeadingProps extends Omit<React.ComponentProps<'h1'>, 'color'>, VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function Heading({ className, level, weight, align, gradient, as, children, ...props }: HeadingProps) {
  const Component = as || level || 'h2';

  return (
    <Component data-slot="heading" className={cn(headingVariants({ level: level || (as as typeof level), weight, align, gradient, className }))} {...props}>
      {children}
    </Component>
  );
}
