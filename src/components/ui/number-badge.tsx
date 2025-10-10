import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const numberBadgeVariants = cva('inline-flex items-center justify-center shrink-0 text-white font-bold', {
  variants: {
    size: {
      sm: 'size-6 text-xs',
      md: 'size-8 text-sm',
      lg: 'size-10 text-base',
    },
    shape: {
      circle: 'rounded-full',
      square: 'rounded-lg',
    },
    variant: {
      gradient: 'bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)]',
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      muted: 'bg-muted text-muted-foreground',
    },
  },
  defaultVariants: {
    size: 'md',
    shape: 'circle',
    variant: 'gradient',
  },
});

export interface NumberBadgeProps extends Omit<React.ComponentProps<'div'>, 'children'>, VariantProps<typeof numberBadgeVariants> {
  number: number | string;
}

export function NumberBadge({ className, number, size, shape, variant, ...props }: NumberBadgeProps) {
  return (
    <div data-slot="number-badge" className={cn(numberBadgeVariants({ size, shape, variant, className }))} {...props}>
      {number}
    </div>
  );
}
