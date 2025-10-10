import * as React from 'react';
import { Settings } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import { Text, Stack } from '@/components/ui';
import { RESIZE_PRESETS, type ResizeMode, type PresetSize } from '@/hooks';

interface ResizeOptionsPanelProps {
  resizeMode: ResizeMode;
  percentage: number;
  customWidth: number;
  customHeight: number;
  maintainAspectRatio: boolean;
  selectedPreset: PresetSize;
  originalDimensions: { width: number; height: number };
  onModeChange: (mode: ResizeMode) => void;
  onPercentageChange: (value: number) => void;
  onWidthChange: (value: number) => void;
  onHeightChange: (value: number) => void;
  onAspectRatioChange: (value: boolean) => void;
  onPresetChange: (preset: PresetSize) => void;
  t: (key: string) => string;
}

export function ResizeOptionsPanel({
  resizeMode,
  percentage,
  customWidth,
  customHeight,
  maintainAspectRatio,
  selectedPreset,
  originalDimensions,
  onModeChange,
  onPercentageChange,
  onWidthChange,
  onHeightChange,
  onAspectRatioChange,
  onPresetChange,
  t,
}: ResizeOptionsPanelProps) {
  return (
    <Stack spacing={6}>
      <Stack direction="row" spacing={2} align="center">
        <Settings size={20} />
        <Text size="lg" weight="medium">
          {t('resizeOptions')}
        </Text>
      </Stack>

      {/* Mode Selection */}
      <div>
        <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
          {t('resizeMode')}
        </Text>
        <Select value={resizeMode} onValueChange={(value: ResizeMode) => onModeChange(value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="percentage">{t('percentage')}</SelectItem>
            <SelectItem value="pixels">{t('customSize')}</SelectItem>
            <SelectItem value="preset">{t('presetSizes')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Percentage Mode */}
      {resizeMode === 'percentage' && (
        <Stack spacing={2}>
          <Text as="label" size="sm" weight="medium" className="text-gray-700 dark:text-gray-300">
            {t('scale')}: {percentage}%
          </Text>
          <input
            type="range"
            min="10"
            max="200"
            step="10"
            value={percentage}
            onChange={e => onPercentageChange(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
          />
        </Stack>
      )}

      {/* Custom Pixels Mode */}
      {resizeMode === 'pixels' && (
        <Stack spacing={4}>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="aspectRatio"
              checked={maintainAspectRatio}
              onChange={e => onAspectRatioChange(e.target.checked)}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <Text as="label" htmlFor="aspectRatio" size="sm" className="ml-2 text-gray-700 dark:text-gray-300">
              {t('maintainAspectRatio')}
            </Text>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
                {t('width')} (px)
              </Text>
              <input
                type="number"
                min="1"
                value={customWidth}
                onChange={e => onWidthChange(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div>
              <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
                {t('height')} (px)
              </Text>
              <input
                type="number"
                min="1"
                value={customHeight}
                onChange={e => onHeightChange(parseInt(e.target.value) || 1)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-800 dark:text-white"
              />
            </div>
          </div>
        </Stack>
      )}

      {/* Preset Mode */}
      {resizeMode === 'preset' && (
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(RESIZE_PRESETS).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => onPresetChange(key as PresetSize)}
              className={`p-4 rounded-lg border-2 transition-all ${selectedPreset === key ? 'border-blue-500 bg-blue-50 dark:bg-blue-950' : 'border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-800'}`}
            >
              <Text size="sm" weight="semibold">
                {preset.label}
              </Text>
              <Text size="xs" color="muted">
                {preset.description}
              </Text>
            </button>
          ))}
        </div>
      )}

      {/* Dimensions Info */}
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
        <Stack direction="row" justify="between" className="text-sm">
          <Stack spacing={1}>
            <Text size="xs" color="muted">
              {t('original')}
            </Text>
            <Text size="sm" weight="medium">
              {originalDimensions.width} × {originalDimensions.height}
            </Text>
          </Stack>
          <Stack spacing={1}>
            <Text size="xs" color="muted">
              {t('newSize')}
            </Text>
            <Text size="sm" weight="medium" className="text-blue-600 dark:text-blue-400">
              {calculateDimensions().width} × {calculateDimensions().height}
            </Text>
          </Stack>
        </Stack>
      </div>
    </Stack>
  );

  function calculateDimensions() {
    if (resizeMode === 'percentage') {
      return {
        width: Math.round((originalDimensions.width * percentage) / 100),
        height: Math.round((originalDimensions.height * percentage) / 100),
      };
    } else if (resizeMode === 'preset') {
      const preset = RESIZE_PRESETS[selectedPreset];
      return { width: preset.width, height: preset.height };
    } else {
      return { width: customWidth, height: customHeight };
    }
  }
}
