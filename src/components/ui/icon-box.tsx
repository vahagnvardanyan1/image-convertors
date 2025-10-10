import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import type { LucideIcon } from 'lucide-react';

const iconBoxVariants = cva('inline-flex items-center justify-center shrink-0', {
  variants: {
    size: {
      sm: 'size-8',
      md: 'size-10',
      lg: 'size-12',
      xl: 'size-16',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      full: 'rounded-full',
    },
    variant: {
      gradient: 'bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] text-white',
      muted: 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400',
      primary: 'bg-primary text-primary-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
    },
  },
  defaultVariants: {
    size: 'md',
    rounded: 'lg',
    variant: 'gradient',
  },
});

export interface IconBoxProps extends Omit<React.ComponentProps<'div'>, 'children'>, VariantProps<typeof iconBoxVariants> {
  icon: LucideIcon;
  iconSize?: number;
}

export function IconBox({ className, icon: Icon, iconSize, size, rounded, variant, ...props }: IconBoxProps) {
  const defaultIconSizes = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32,
  };

  const computedIconSize = iconSize || (size ? defaultIconSizes[size] : defaultIconSizes.md);

  return (
    <div data-slot="icon-box" className={cn(iconBoxVariants({ size, rounded, variant, className }))} {...props}>
      <Icon size={computedIconSize} />
    </div>
  );
}
