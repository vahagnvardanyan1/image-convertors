/**
 * UI Primitives - Barrel Export
 *
 * Centralized exports for all design system UI components
 */

export { Badge, type BadgeProps } from './badge';
export { Button, buttonVariants, type ButtonProps } from './button';
export { Container, type ContainerProps } from './container';
export { GradientBox, type GradientBoxProps } from './gradient-box';
export { GradientButton, type GradientButtonProps } from './gradient-button';
export { GradientText, type GradientTextProps } from './gradient-text';
export { Heading, type HeadingProps } from './heading';
export { IconBox, type IconBoxProps } from './icon-box';
export { IconButton, type IconButtonProps } from './icon-button';
export { NumberBadge, type NumberBadgeProps } from './number-badge';
export { QualitySlider, type QualitySliderProps } from './quality-slider';
export { Section, type SectionProps } from './section';
export { Stack, type StackProps } from './stack';
export { Text, type TextProps } from './text';

// Re-export Card components
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent } from '../Card';

// Type exports
export type { ButtonProps as ButtonVariants };
