import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const containerVariants = cva('mx-auto w-full px-4 sm:px-6', {
  variants: {
    size: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      '3xl': 'max-w-[1792px]',
      '4xl': 'max-w-[2048px]',
      full: 'max-w-full',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4',
      md: 'px-4 sm:px-6',
      lg: 'px-4 sm:px-6 lg:px-8',
    },
  },
  defaultVariants: {
    size: 'xl',
    padding: 'lg',
  },
});

export interface ContainerProps extends React.ComponentProps<'div'>, VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

export function Container({ className, size, padding, as: Component = 'div', ...props }: ContainerProps) {
  return <Component data-slot="container" className={cn(containerVariants({ size, padding, className }))} {...props} />;
}
