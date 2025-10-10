import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const gradientButtonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shadow-lg hover:shadow-xl outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      gradient: {
        primary: 'bg-gradient-to-r from-[var(--gradient-primary-from)] to-[var(--gradient-primary-to)] hover:from-blue-700 hover:to-purple-700 text-white',
        secondary: 'bg-gradient-to-r from-[var(--gradient-secondary-from)] to-[var(--gradient-secondary-to)] hover:from-blue-600 hover:to-purple-600 text-white',
        green: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-lg px-3',
        lg: 'h-11 px-8 py-3',
        xl: 'h-12 px-10 py-4 text-base',
      },
    },
    defaultVariants: {
      gradient: 'primary',
      size: 'default',
    },
  },
);

export interface GradientButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof gradientButtonVariants> {
  asChild?: boolean;
}

export function GradientButton({ className, gradient, size, asChild = false, ...props }: GradientButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="gradient-button" className={cn(gradientButtonVariants({ gradient, size, className }))} {...props} />;
}
