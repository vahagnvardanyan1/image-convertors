import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const textVariants = cva('', {
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary-foreground',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-yellow-600 dark:text-yellow-400',
      error: 'text-destructive',
      inverse: 'text-white dark:text-gray-100',
    },
    truncate: {
      true: 'truncate',
      false: '',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    align: 'left',
    color: 'default',
    truncate: false,
  },
});

type TextElement = 'p' | 'span' | 'div' | 'label';

export interface TextProps extends VariantProps<typeof textVariants> {
  as?: TextElement;
  className?: string;
  children?: React.ReactNode;
  htmlFor?: string;
  id?: string;
  title?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function Text({ className, size, weight, align, color, truncate, as: Component = 'p', children, ...props }: TextProps) {
  return (
    <Component data-slot="text" className={cn(textVariants({ size, weight, align, color, truncate, className }))} {...props}>
      {children}
    </Component>
  );
}
