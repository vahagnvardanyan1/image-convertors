/**
 * Unified Design Token System v2
 * Centralizes all theme values with CSS custom property support
 */

// ============================================================================
// GRADIENT TOKENS
// ============================================================================
export const gradients = {
  primary: 'from-blue-600 to-purple-600',
  primaryHover: 'from-blue-700 to-purple-700',
  primarySubtle: 'from-blue-50 to-purple-50',
  secondary: 'from-purple-600 to-blue-600',
  secondaryHover: 'from-purple-700 to-blue-700',
  orange: 'from-orange-600 to-red-600',
  orangeHover: 'from-orange-700 to-red-700',
  green: 'from-green-600 to-teal-600',
  greenHover: 'from-green-700 to-teal-700',
} as const;

// ============================================================================
// TYPOGRAPHY TOKENS (Tailwind utility classes)
// ============================================================================
export const typography = {
  // Display hierarchy
  displayLg: 'text-4xl lg:text-6xl',
  displayMd: 'text-3xl lg:text-5xl',
  displaySm: 'text-2xl lg:text-4xl',

  // Heading scale
  h1: 'text-3xl font-bold',
  h2: 'text-2xl font-bold',
  h3: 'text-xl font-semibold',
  h4: 'text-lg font-semibold',

  // Body text
  body: 'text-base',
  bodySm: 'text-sm',
  bodyXs: 'text-xs',
  lead: 'text-lg lg:text-xl',
} as const;

// ============================================================================
// SPACING TOKENS
// ============================================================================
export const spacing = {
  // Section spacing
  sectionY: 'py-16 lg:py-24',
  sectionYSm: 'py-12 lg:py-16',

  // Container spacing
  containerX: 'px-4 sm:px-6 lg:px-8',
  containerMax: 'max-w-7xl mx-auto',

  // Component spacing
  cardPadding: 'p-6 lg:p-8',
  cardPaddingSm: 'p-4 lg:p-6',

  // Stack spacing (vertical rhythm)
  stack: {
    xs: 'space-y-2',
    sm: 'space-y-4',
    md: 'space-y-6',
    lg: 'space-y-8',
    xl: 'space-y-12',
  },
} as const;

// ============================================================================
// LAYOUT TOKENS
// ============================================================================
export const layout = {
  container: {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[1440px]',
  },
  borderRadius: {
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    full: 'rounded-full',
  },
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    '2xl': 'shadow-2xl',
    none: 'shadow-none',
  },
} as const;

// ============================================================================
// INTERACTION TOKENS
// ============================================================================
export const interaction = {
  // Transitions
  transition: {
    fast: 'transition-all duration-150',
    base: 'transition-all duration-200',
    slow: 'transition-all duration-300',
    colors: 'transition-colors duration-200',
    transform: 'transition-transform duration-200',
  },

  // Focus states
  focus: {
    ring: 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2',
    ringDark: 'dark:focus-visible:ring-blue-400 dark:focus-visible:ring-offset-gray-900',
  },

  // Hover states
  hover: {
    scale: 'hover:scale-105',
    scaleSm: 'hover:scale-[1.02]',
    lift: 'hover:-translate-y-1',
  },

  // Active states
  active: {
    scale: 'active:scale-95',
  },
} as const;

// ============================================================================
// COMPONENT TOKENS
// ============================================================================
export const components = {
  button: {
    base: 'inline-flex items-center justify-center font-medium rounded-lg transition-all',
    gradient: {
      primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
      orange: 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700',
      green: 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700',
    },
    size: {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    },
  },

  card: {
    base: 'bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-200',
    padding: 'p-6 lg:p-8',
  },

  input: {
    base: 'w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all',
  },

  dropdown: {
    trigger: 'flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors py-2',
    menu: 'absolute top-full left-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50',
    item: 'block px-4 py-2 text-sm transition-colors text-gray-700 hover:text-gray-900 hover:bg-gray-50',
    itemActive: 'text-blue-600 bg-blue-50',
  },
} as const;

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Get gradient Tailwind classes
 * @param variant - Gradient variant key
 * @returns Tailwind gradient classes string
 */
export function getGradientClasses(variant: keyof typeof gradients = 'primary'): string {
  return `bg-gradient-to-r ${gradients[variant]}`;
}

/**
 * Get button gradient with hover state
 * @param variant - Button gradient variant
 * @returns Complete button gradient classes
 */
export function getButtonGradientClasses(variant: keyof typeof components.button.gradient = 'primary'): string {
  return `${components.button.base} ${components.button.gradient[variant]}`;
}

/**
 * Get card utility classes
 * @param hover - Whether to include hover effects
 * @returns Card classes string
 */
export function getCardClasses(hover = true): string {
  return hover ? components.card.base : 'bg-white rounded-2xl border border-gray-200 shadow-sm';
}

/**
 * Get typography classes by variant
 * @param variant - Typography variant key
 * @returns Typography classes string
 */
export function getTypographyClasses(variant: keyof typeof typography): string {
  return typography[variant];
}

// ============================================================================
// CSS-IN-JS GRADIENTS (for inline styles if needed)
// ============================================================================
export const cssGradients = {
  primary: 'linear-gradient(135deg, #2563eb 0%, #9333ea 100%)',
  secondary: 'linear-gradient(135deg, #9333ea 0%, #2563eb 100%)',
  orange: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
  green: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
} as const;

// ============================================================================
// ANIMATION CONSTANTS
// ============================================================================
export const animations = {
  duration: {
    instant: 100,
    fast: 150,
    base: 200,
    slow: 300,
    slower: 500,
  },
  easing: {
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

// ============================================================================
// EXPORT CONSOLIDATED TOKENS
// ============================================================================
export const designTokens = {
  gradients,
  typography,
  spacing,
  layout,
  interaction,
  components,
  animations,
};

export default designTokens;
