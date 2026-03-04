import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// New utility function to conditionally merge styles
export function mergeStyles(condition: boolean, trueStyles: ClassValue, falseStyles: ClassValue): string {
  return condition ? cn(trueStyles) : cn(falseStyles);
}
