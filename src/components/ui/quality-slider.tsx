import * as React from 'react';
import { cn } from '@/lib/utils';
import { Text, Stack } from '@/components/ui';

export interface QualitySliderProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  showPercentage?: boolean;
  lowLabel?: string;
  highLabel?: string;
  className?: string;
}

export function QualitySlider({
  value,
  onChange,
  min = 0.1,
  max = 1,
  step = 0.1,
  label = 'Quality',
  showPercentage = true,
  lowLabel = 'Lower Quality',
  highLabel = 'Higher Quality',
  className,
}: QualitySliderProps) {
  return (
    <Stack spacing={2} className={className}>
      <Text as="label" size="sm" weight="medium" className="text-gray-700 dark:text-gray-300">
        {label}
        {showPercentage && `: ${Math.round(value * 100)}%`}
      </Text>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(parseFloat(e.target.value))}
        className={cn(
          'w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer',
          '[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600 [&::-webkit-slider-thumb]:cursor-pointer',
          '[&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-600 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:cursor-pointer',
        )}
      />

      {(lowLabel || highLabel) && (
        <Stack direction="row" justify="between">
          {lowLabel && (
            <Text size="xs" color="muted">
              {lowLabel}
            </Text>
          )}
          {highLabel && (
            <Text size="xs" color="muted">
              {highLabel}
            </Text>
          )}
        </Stack>
      )}
    </Stack>
  );
}
