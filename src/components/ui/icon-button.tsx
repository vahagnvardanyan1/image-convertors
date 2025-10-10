import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const iconButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-white hover:bg-destructive/90',
        outline: 'border bg-background text-foreground hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'size-8',
        md: 'size-9',
        lg: 'size-10',
        xl: 'size-12',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface IconButtonProps extends React.ComponentProps<'button'>, VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
}

export function IconButton({ className, variant, size, asChild = false, ...props }: IconButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return <Comp data-slot="icon-button" className={cn(iconButtonVariants({ variant, size, className }))} {...props} />;
}
