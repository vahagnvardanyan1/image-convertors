/**
 * FormatSelector Pattern
 *
 * Reusable format selection component with type-safe format options
 */

import * as React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/Select';
import { Text, Stack } from '@/components/ui';
import { useFormats } from '@/hooks';
import type { FormatInfo } from '@/types';

interface FormatSelectorProps {
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  showDescription?: boolean;
  filterFormats?: (format: FormatInfo) => boolean;
  className?: string;
}

export function FormatSelector({ value, onValueChange, label, placeholder = 'Select format', disabled = false, showDescription = false, filterFormats, className }: FormatSelectorProps) {
  const { formats } = useFormats();

  const availableFormats = filterFormats ? formats.filter(filterFormats) : formats;

  return (
    <Stack spacing={2}>
      {label && (
        <Text as="label" size="sm" weight="medium" className="text-gray-700 dark:text-gray-300">
          {label}
        </Text>
      )}
      <Select value={value} onValueChange={onValueChange} disabled={disabled}>
        <SelectTrigger className={className}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {availableFormats.map(format => (
            <SelectItem key={format.value} value={format.value.toUpperCase()}>
              <Stack spacing={0.5}>
                <Text size="sm" weight="medium">
                  {format.label}
                </Text>
                {showDescription && format.description && (
                  <Text size="xs" color="muted">
                    {format.description}
                  </Text>
                )}
              </Stack>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Stack>
  );
}
