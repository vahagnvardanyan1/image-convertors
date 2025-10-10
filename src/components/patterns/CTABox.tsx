/**
 * CTABox Pattern
 *
 * Reusable call-to-action component with gradient background
 */

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Heading, Text, Stack, GradientBox } from '@/components/ui';
import type { LucideIcon } from 'lucide-react';

interface CTAAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: LucideIcon;
}

export interface CTABoxProps {
  title: string;
  description?: string;
  action: CTAAction;
  gradient?: 'primary' | 'secondary' | 'purple' | 'orange' | 'green' | 'blue';
  rounded?: 'lg' | 'xl' | '2xl' | '3xl';
  className?: string;
}

export function CTABox({ title, description, action, gradient = 'primary', rounded = '2xl', className }: CTABoxProps) {
  const ActionIcon = action.icon;

  const buttonContent = (
    <>
      {action.label}
      {ActionIcon && <ActionIcon className="ml-2" size={16} />}
    </>
  );

  return (
    <GradientBox gradient={gradient} rounded={rounded} padding="lg" className={cn('text-white text-center', className)}>
      <Stack spacing={4} align="center">
        <Heading level="h4" weight="bold" color="inverse">
          {title}
        </Heading>
        {description && (
          <Text color="inverse" className="text-blue-100 dark:text-blue-200">
            {description}
          </Text>
        )}
        {action.href ? (
          <Link href={action.href} className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            {buttonContent}
          </Link>
        ) : (
          <button onClick={action.onClick} className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
            {buttonContent}
          </button>
        )}
      </Stack>
    </GradientBox>
  );
}
