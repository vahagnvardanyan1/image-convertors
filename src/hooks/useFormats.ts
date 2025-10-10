/**
 * useFormats Hook
 *
 * Provides format-related utilities and information
 */

import { useMemo } from 'react';
import { FORMAT_OPTIONS, POPULAR_CONVERSIONS, MIME_TYPE_MAP } from '@/types';
import type { SupportedFormat, FormatInfo } from '@/types';

export function useFormats() {
  const formats = useMemo(() => FORMAT_OPTIONS, []);
  const popularConversions = useMemo(() => POPULAR_CONVERSIONS, []);

  const getFormatInfo = (format: string): FormatInfo | undefined => {
    return formats.find(f => f.value === format.toLowerCase());
  };

  const supportsQuality = (format: string): boolean => {
    const info = getFormatInfo(format);
    return info?.supportsQuality ?? false;
  };

  const supportsTransparency = (format: string): boolean => {
    const info = getFormatInfo(format);
    return info?.supportsTransparency ?? false;
  };

  const getMimeType = (format: string): string | undefined => {
    return MIME_TYPE_MAP[format.toLowerCase() as SupportedFormat];
  };

  const getDisplayLabel = (format: string): string => {
    const info = getFormatInfo(format);
    return info?.label || format.toUpperCase();
  };

  const isValidFormat = (format: string): format is SupportedFormat => {
    return formats.some(f => f.value === format.toLowerCase());
  };

  const getCompatibleOutputFormats = (inputFormat: string): FormatInfo[] => {
    // All formats can be converted to any other format
    // But we can filter out some illogical ones if needed
    return formats.filter(f => f.value !== inputFormat.toLowerCase());
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const calculateCompressionRatio = (originalSize: number, convertedSize: number): number => {
    if (originalSize === 0) return 0;
    return Math.round(((originalSize - convertedSize) / originalSize) * 100);
  };

  return {
    formats,
    popularConversions,
    getFormatInfo,
    supportsQuality,
    supportsTransparency,
    getMimeType,
    getDisplayLabel,
    isValidFormat,
    getCompatibleOutputFormats,
    formatFileSize,
    calculateCompressionRatio,
  };
}
