/**
 * ToolPreviewCard Pattern
 *
 * Reusable card for tool previews with consistent styling
 */

import * as React from 'react';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Heading, Text, Stack, IconBox, Badge } from '@/components/ui';

export interface ToolPreviewCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  popular?: boolean;
  gradient?: 'primary' | 'purple' | 'orange' | 'green' | 'blue';
  className?: string;
}

const gradientClasses = {
  primary: 'from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500',
  purple: 'from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 border-purple-200 dark:border-gray-600 hover:border-purple-400 dark:hover:border-purple-500',
  green: 'from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-700 border-green-200 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500',
  orange: 'from-orange-50 to-yellow-50 dark:from-gray-800 dark:to-gray-700 border-orange-200 dark:border-gray-600 hover:border-orange-400 dark:hover:border-orange-500',
  blue: 'from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 border-blue-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500',
};

const iconGradients = {
  primary: 'from-blue-500 to-purple-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-teal-500',
  orange: 'from-orange-500 to-yellow-500',
  blue: 'from-blue-500 to-cyan-500',
};

export function ToolPreviewCard({ icon: Icon, title, description, href, popular = false, gradient = 'primary', className }: ToolPreviewCardProps) {
  return (
    <Link href={href} className={cn('group block p-6 bg-gradient-to-br rounded-xl border-2 transition-all duration-300 hover:shadow-xl hover:scale-105', gradientClasses[gradient], className)}>
      <Stack spacing={4}>
        {popular && (
          <Badge variant="default" size="sm" className="self-start">
            Popular
          </Badge>
        )}

        <div className={cn('flex-shrink-0 p-3 rounded-lg bg-gradient-to-br shadow-lg', iconGradients[gradient])}>
          <Icon className="text-white" size={32} />
        </div>

        <Stack spacing={2}>
          <Heading level="h4" weight="bold">
            {title}
          </Heading>
          <Text size="sm" color="muted">
            {description}
          </Text>
        </Stack>
      </Stack>
    </Link>
  );
}
