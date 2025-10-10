import * as React from 'react';
import { Settings } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import { Text, Stack, QualitySlider } from '@/components/ui';
import type { PDFToolMode } from '@/hooks';

interface PDFToImagesOptionsProps {
  imageFormat: 'jpg' | 'png' | 'webp';
  imageQuality: number;
  imageScale: number;
  pageRange: string;
  onFormatChange: (value: 'jpg' | 'png' | 'webp') => void;
  onQualityChange: (value: number) => void;
  onScaleChange: (value: number) => void;
  onPageRangeChange: (value: string) => void;
  t: (key: string) => string;
}

function PDFToImagesOptions({ imageFormat, imageQuality, imageScale, pageRange, onFormatChange, onQualityChange, onScaleChange, onPageRangeChange, t }: PDFToImagesOptionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div>
        <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
          {t('format')}
        </Text>
        <Select value={imageFormat} onValueChange={onFormatChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jpg">JPG</SelectItem>
            <SelectItem value="png">PNG</SelectItem>
            <SelectItem value="webp">WebP</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <QualitySlider value={imageQuality} onChange={onQualityChange} label={t('quality')} showPercentage />
      </div>

      <div>
        <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
          {t('scale')}: {imageScale}x
        </Text>
        <input
          type="range"
          min="1"
          max="4"
          step="0.5"
          value={imageScale}
          onChange={e => onScaleChange(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div>
        <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
          {t('pageRange')}
        </Text>
        <input
          type="text"
          value={pageRange}
          onChange={e => onPageRangeChange(e.target.value)}
          placeholder={t('pageRangePlaceholder')}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-white"
        />
      </div>
    </div>
  );
}

interface ImagesToPDFOptionsProps {
  pageSize: 'A4' | 'A3' | 'letter' | 'legal';
  orientation: 'portrait' | 'landscape';
  margin: number;
  fitToPage: boolean;
  onPageSizeChange: (value: 'A4' | 'A3' | 'letter' | 'legal') => void;
  onOrientationChange: (value: 'portrait' | 'landscape') => void;
  onMarginChange: (value: number) => void;
  onFitToPageChange: (value: boolean) => void;
  t: (key: string) => string;
}

function ImagesToPDFOptions({ pageSize, orientation, margin, fitToPage, onPageSizeChange, onOrientationChange, onMarginChange, onFitToPageChange, t }: ImagesToPDFOptionsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
          {t('pageSize')}
        </Text>
        <Select value={pageSize} onValueChange={onPageSizeChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="A4">A4</SelectItem>
            <SelectItem value="A3">A3</SelectItem>
            <SelectItem value="letter">Letter</SelectItem>
            <SelectItem value="legal">Legal</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
          {t('orientation')}
        </Text>
        <Select value={orientation} onValueChange={onOrientationChange}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="portrait">{t('portrait')}</SelectItem>
            <SelectItem value="landscape">{t('landscape')}</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
          {t('margin')}: {margin}px
        </Text>
        <input
          type="range"
          min="0"
          max="50"
          step="5"
          value={margin}
          onChange={e => onMarginChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="flex items-center">
        <input type="checkbox" id="fitToPage" checked={fitToPage} onChange={e => onFitToPageChange(e.target.checked)} className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
        <Text as="label" htmlFor="fitToPage" size="sm" className="ml-2 text-gray-700 dark:text-gray-300">
          {t('fitToPage')}
        </Text>
      </div>
    </div>
  );
}

interface SplitPDFOptionsProps {
  splitRanges: Array<{ start: number; end: number; name?: string }>;
  onUpdate: (index: number, field: 'start' | 'end' | 'name', value: string | number) => void;
  onAdd: () => void;
  onRemove: (index: number) => void;
  t: (key: string) => string;
}

function SplitPDFOptions({ splitRanges, onUpdate, onAdd, onRemove, t }: SplitPDFOptionsProps) {
  return (
    <Stack spacing={4}>
      {splitRanges.map((range, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <div>
            <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
              {t('startPage')}
            </Text>
            <input
              type="number"
              min="1"
              value={range.start}
              onChange={e => onUpdate(index, 'start', parseInt(e.target.value) || 1)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
              {t('endPage')}
            </Text>
            <input
              type="number"
              min="1"
              value={range.end}
              onChange={e => onUpdate(index, 'end', parseInt(e.target.value) || 1)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div>
            <Text as="label" size="sm" weight="medium" className="block mb-2 text-gray-700 dark:text-gray-300">
              {t('fileName')} ({t('optional')})
            </Text>
            <input
              type="text"
              value={range.name || ''}
              onChange={e => onUpdate(index, 'name', e.target.value)}
              placeholder={t('fileNamePlaceholder')}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm dark:bg-gray-800 dark:text-white"
            />
          </div>
          <div className="flex items-end">
            {splitRanges.length > 1 && (
              <button onClick={() => onRemove(index)} className="px-4 py-2 text-red-600 hover:text-red-700 text-sm font-medium">
                {t('remove')}
              </button>
            )}
          </div>
        </div>
      ))}
      <button onClick={onAdd} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
        + {t('addRange')}
      </button>
    </Stack>
  );
}

interface PDFOptionsPanelProps {
  mode: PDFToolMode;
  imageFormat: 'jpg' | 'png' | 'webp';
  imageQuality: number;
  imageScale: number;
  pageRange: string;
  pageSize: 'A4' | 'A3' | 'letter' | 'legal';
  orientation: 'portrait' | 'landscape';
  margin: number;
  fitToPage: boolean;
  splitRanges: Array<{ start: number; end: number; name?: string }>;
  onImageFormatChange: (value: 'jpg' | 'png' | 'webp') => void;
  onImageQualityChange: (value: number) => void;
  onImageScaleChange: (value: number) => void;
  onPageRangeChange: (value: string) => void;
  onPageSizeChange: (value: 'A4' | 'A3' | 'letter' | 'legal') => void;
  onOrientationChange: (value: 'portrait' | 'landscape') => void;
  onMarginChange: (value: number) => void;
  onFitToPageChange: (value: boolean) => void;
  onSplitRangeUpdate: (index: number, field: 'start' | 'end' | 'name', value: string | number) => void;
  onSplitRangeAdd: () => void;
  onSplitRangeRemove: (index: number) => void;
  t: (key: string) => string;
}

export function PDFOptionsPanel({ mode, t, ...props }: PDFOptionsPanelProps) {
  if (mode === 'pdf-info' || mode === 'merge-pdf') return null;

  return (
    <div className="mb-6">
      <Stack direction="row" spacing={2} align="center" className="mb-4">
        <Settings size={20} />
        <Text size="lg" weight="medium">
          {t('options')}
        </Text>
      </Stack>

      {mode === 'pdf-to-images' && (
        <PDFToImagesOptions
          imageFormat={props.imageFormat}
          imageQuality={props.imageQuality}
          imageScale={props.imageScale}
          pageRange={props.pageRange}
          onFormatChange={props.onImageFormatChange}
          onQualityChange={props.onImageQualityChange}
          onScaleChange={props.onImageScaleChange}
          onPageRangeChange={props.onPageRangeChange}
          t={t}
        />
      )}

      {mode === 'images-to-pdf' && (
        <ImagesToPDFOptions
          pageSize={props.pageSize}
          orientation={props.orientation}
          margin={props.margin}
          fitToPage={props.fitToPage}
          onPageSizeChange={props.onPageSizeChange}
          onOrientationChange={props.onOrientationChange}
          onMarginChange={props.onMarginChange}
          onFitToPageChange={props.onFitToPageChange}
          t={t}
        />
      )}

      {mode === 'split-pdf' && <SplitPDFOptions splitRanges={props.splitRanges} onUpdate={props.onSplitRangeUpdate} onAdd={props.onSplitRangeAdd} onRemove={props.onSplitRangeRemove} t={t} />}
    </div>
  );
}
