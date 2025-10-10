/**
 * Design System Tokens
 *
 * Centralized design tokens for spacing, typography, colors, radius, and shadows.
 * These tokens integrate with Tailwind CSS variables and provide type-safe access.
 */

// Spacing Scale (in rem)
export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
} as const;

// Typography Scale
export const typography = {
  fontSize: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem', // 72px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// Border Radius
export const radius = {
  none: '0',
  sm: 'calc(var(--radius) - 4px)', // ~6px
  md: 'calc(var(--radius) - 2px)', // ~8px
  lg: 'var(--radius)', // ~10px
  xl: 'calc(var(--radius) + 4px)', // ~14px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  '4xl': '2rem', // 32px
  full: '9999px',
} as const;

// Shadows
export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// Gradients
export const gradients = {
  primary: 'linear-gradient(to right, var(--gradient-primary-from), var(--gradient-primary-to))',
  secondary: 'linear-gradient(to right, var(--gradient-secondary-from), var(--gradient-secondary-to))',
  accent: 'linear-gradient(to bottom right, var(--gradient-accent-from), var(--gradient-accent-via), var(--gradient-accent-to))',
  hero: 'linear-gradient(to bottom right, var(--gradient-hero-from), var(--gradient-hero-via), var(--gradient-hero-to))',
} as const;

// Breakpoints (for reference in JS)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Z-index scale
export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  modal: 1000,
  popover: 2000,
  toast: 3000,
  tooltip: 4000,
} as const;

// Animation durations
export const duration = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

// Transitions
export const transitions = {
  all: `all ${duration.base} ease-in-out`,
  colors: `color ${duration.base}, background-color ${duration.base}, border-color ${duration.base}`,
  transform: `transform ${duration.base} ease-in-out`,
  opacity: `opacity ${duration.base} ease-in-out`,
} as const;

// Container widths
export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  '3xl': '1792px',
  '4xl': '2048px',
  full: '100%',
} as const;

// Type exports for autocomplete
export type Spacing = keyof typeof spacing;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
export type Radius = keyof typeof radius;
export type Shadow = keyof typeof shadows;
export type Gradient = keyof typeof gradients;
export type Breakpoint = keyof typeof breakpoints;
export type ZIndex = keyof typeof zIndex;
export type Duration = keyof typeof duration;
export type Transition = keyof typeof transitions;
export type Container = keyof typeof container;
