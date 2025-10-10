/**
 * FeatureGrid Pattern
 *
 * Reusable component for displaying features in a grid layout
 */

import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Stack, Heading, Text } from '@/components/ui';

export interface Feature {
  icon?: LucideIcon;
  iconColor?: string;
  title: string;
  description: string;
  badge?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 1 | 2 | 3 | 4;
  spacing?: 'sm' | 'md' | 'lg';
  showIcons?: boolean;
  className?: string;
}

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
};

const spacingClasses = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
};

export function FeatureGrid({ features, columns = 3, spacing = 'md', showIcons = true, className }: FeatureGridProps) {
  return (
    <div className={cn('grid w-full', columnClasses[columns], spacingClasses[spacing], className)}>
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} showIcon={showIcons} />
      ))}
    </div>
  );
}

interface FeatureCardProps {
  feature: Feature;
  showIcon: boolean;
}

function FeatureCard({ feature, showIcon }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <Stack spacing={3} className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-md transition-shadow">
      {showIcon && Icon && (
        <div className={cn('inline-flex items-center justify-center size-12 rounded-lg', feature.iconColor || 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400')}>
          <Icon size={24} />
        </div>
      )}

      <Stack spacing={2}>
        <Heading level="h5" className="text-gray-900 dark:text-gray-100">
          {feature.title}
        </Heading>
        <Text color="muted">{feature.description}</Text>
      </Stack>

      {feature.badge && (
        <Text size="xs" weight="medium" className="text-blue-600 dark:text-blue-400">
          {feature.badge}
        </Text>
      )}
    </Stack>
  );
}
