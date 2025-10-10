/**
 * Image Converter Domain Types
 *
 * Type-safe definitions for image conversion functionality
 */

// Supported image formats
export type SupportedFormat = 'png' | 'jpg' | 'jpeg' | 'webp' | 'gif' | 'heic' | 'heif';

// Format display information
export interface FormatInfo {
  value: SupportedFormat;
  label: string;
  description?: string;
  supportsQuality?: boolean;
  supportsTransparency?: boolean;
}

// Conversion options
export interface ConversionOptions {
  quality?: number; // 0-1 for JPEG/WebP quality
  maxSizeMB?: number; // Maximum file size in MB
  maxWidthOrHeight?: number; // Maximum width or height
  maintainAspectRatio?: boolean;
  backgroundColor?: string; // For formats that don't support transparency
}

// Conversion result
export interface ConversionResult {
  blob: Blob;
  url: string;
  fileName: string;
  originalSize: number;
  convertedSize: number;
  format: string;
  compressionRatio?: number;
}

// Conversion state for UI
export type ConversionStatus = 'idle' | 'selecting' | 'converting' | 'success' | 'error';

export interface ConversionState {
  status: ConversionStatus;
  selectedFile: File | null;
  inputFormat: string;
  outputFormat: string;
  quality: number;
  result: ConversionResult | null;
  error: string | null;
}

// File validation result
export interface ValidationResult {
  isValid: boolean;
  error?: string;
  detectedFormat?: string;
}

// Batch conversion
export interface BatchConversionItem {
  file: File;
  status: ConversionStatus;
  result?: ConversionResult;
  error?: string;
}

export interface BatchConversionState {
  items: BatchConversionItem[];
  totalFiles: number;
  completedFiles: number;
  failedFiles: number;
  overallStatus: ConversionStatus;
}

// Format options for selectors
export const FORMAT_OPTIONS: FormatInfo[] = [
  {
    value: 'png',
    label: 'PNG',
    description: 'Lossless compression, supports transparency',
    supportsQuality: false,
    supportsTransparency: true,
  },
  {
    value: 'jpg',
    label: 'JPG',
    description: 'Lossy compression, smaller file size',
    supportsQuality: true,
    supportsTransparency: false,
  },
  {
    value: 'jpeg',
    label: 'JPEG',
    description: 'Same as JPG',
    supportsQuality: true,
    supportsTransparency: false,
  },
  {
    value: 'webp',
    label: 'WebP',
    description: 'Modern format, best compression',
    supportsQuality: true,
    supportsTransparency: true,
  },
  {
    value: 'gif',
    label: 'GIF',
    description: 'Supports animation',
    supportsQuality: false,
    supportsTransparency: true,
  },
  {
    value: 'heic',
    label: 'HEIC',
    description: 'Apple format, efficient compression',
    supportsQuality: true,
    supportsTransparency: false,
  },
  {
    value: 'heif',
    label: 'HEIF',
    description: 'High efficiency format',
    supportsQuality: true,
    supportsTransparency: false,
  },
] as const;

// Common format conversions
export const POPULAR_CONVERSIONS = [
  { from: 'png', to: 'webp', label: 'PNG → WebP' },
  { from: 'jpg', to: 'png', label: 'JPG → PNG' },
  { from: 'webp', to: 'png', label: 'WebP → PNG' },
  { from: 'jpg', to: 'webp', label: 'JPG → WebP' },
  { from: 'png', to: 'jpg', label: 'PNG → JPG' },
  { from: 'webp', to: 'jpg', label: 'WebP → JPG' },
] as const;

// MIME type mapping
export const MIME_TYPE_MAP: Record<SupportedFormat, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  webp: 'image/webp',
  gif: 'image/gif',
  heic: 'image/heic',
  heif: 'image/heif',
} as const;

// File size limits (in bytes)
export const FILE_SIZE_LIMITS = {
  max: 50 * 1024 * 1024, // 50MB
  warning: 10 * 1024 * 1024, // 10MB
} as const;

// Default conversion options
export const DEFAULT_CONVERSION_OPTIONS: Required<ConversionOptions> = {
  quality: 0.9,
  maxSizeMB: 10,
  maxWidthOrHeight: 4096,
  maintainAspectRatio: true,
  backgroundColor: '#FFFFFF',
} as const;
