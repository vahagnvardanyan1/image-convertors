/**
 * StatList Pattern
 *
 * Reusable component for displaying statistics or features in a list
 */

import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Stack, Text, Badge } from '@/components/ui';

export interface StatItem {
  icon?: LucideIcon;
  label: string;
  value?: string | number;
  badge?: string;
  color?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

interface StatListProps {
  items: StatItem[];
  orientation?: 'horizontal' | 'vertical';
  spacing?: 2 | 3 | 4 | 6 | 8;
  showIcons?: boolean;
  className?: string;
}

export function StatList({ items, orientation = 'horizontal', spacing = 4, showIcons = true, className }: StatListProps) {
  const isHorizontal = orientation === 'horizontal';

  return (
    <Stack direction={isHorizontal ? 'row' : 'column'} spacing={spacing} wrap={isHorizontal} className={className}>
      {items.map((item, index) => (
        <StatListItem key={index} item={item} showIcon={showIcons} />
      ))}
    </Stack>
  );
}

interface StatListItemProps {
  item: StatItem;
  showIcon: boolean;
}

function StatListItem({ item, showIcon }: StatListItemProps) {
  const Icon = item.icon;

  const colorClasses = {
    default: 'text-gray-900 dark:text-gray-100',
    primary: 'text-blue-600 dark:text-blue-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    error: 'text-red-600 dark:text-red-400',
  };

  return (
    <Stack direction="row" spacing={2} align="center">
      {showIcon && Icon && <Icon className={cn('shrink-0', colorClasses[item.color || 'default'])} size={20} />}

      <Stack spacing={0.5} align="start">
        <Text size="sm" color="muted">
          {item.label}
        </Text>
        {item.value && (
          <Text size="lg" weight="semibold" className={colorClasses[item.color || 'default']}>
            {item.value}
          </Text>
        )}
        {item.badge && (
          <Badge variant="outline" size="sm">
            {item.badge}
          </Badge>
        )}
      </Stack>
    </Stack>
  );
}
