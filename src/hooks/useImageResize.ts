/**
 * useImageResize Hook
 *
 * Handles image resizing state and logic
 */

import { useState, useCallback, useEffect } from 'react';

export type ResizeMode = 'percentage' | 'pixels' | 'preset';
export type PresetSize = 'thumbnail' | 'small' | 'medium' | 'large' | 'hd' | 'fullhd' | '4k';

export interface PresetDimensions {
  width: number;
  height: number;
  label: string;
  description: string;
}

export const RESIZE_PRESETS: Record<PresetSize, PresetDimensions> = {
  thumbnail: { width: 150, height: 150, label: 'Thumbnail', description: '150×150' },
  small: { width: 640, height: 480, label: 'Small', description: '640×480' },
  medium: { width: 1280, height: 720, label: 'Medium (HD)', description: '1280×720' },
  large: { width: 1920, height: 1080, label: 'Large (Full HD)', description: '1920×1080' },
  hd: { width: 1280, height: 720, label: 'HD', description: '1280×720' },
  fullhd: { width: 1920, height: 1080, label: 'Full HD', description: '1920×1080' },
  '4k': { width: 3840, height: 2160, label: '4K', description: '3840×2160' },
};

interface UseImageResizeOptions {
  onSuccess?: (blob: Blob) => void;
  onError?: (error: string) => void;
}

export function useImageResize(options: UseImageResizeOptions = {}) {
  const { onSuccess, onError } = options;

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [resizeMode, setResizeMode] = useState<ResizeMode>('percentage');
  const [percentage, setPercentage] = useState(50);
  const [customWidth, setCustomWidth] = useState(800);
  const [customHeight, setCustomHeight] = useState(600);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState<PresetSize>('medium');
  const [isResizing, setIsResizing] = useState(false);

  const loadImage = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setSelectedFile(file);

    const img = new Image();
    img.onload = () => {
      setOriginalDimensions({ width: img.width, height: img.height });
      setCustomWidth(img.width);
      setCustomHeight(img.height);
    };
    img.src = url;
  }, []);

  const handleWidthChange = useCallback(
    (width: number) => {
      setCustomWidth(width);
      if (maintainAspectRatio && originalDimensions.width > 0) {
        const ratio = originalDimensions.height / originalDimensions.width;
        setCustomHeight(Math.round(width * ratio));
      }
    },
    [maintainAspectRatio, originalDimensions],
  );

  const handleHeightChange = useCallback(
    (height: number) => {
      setCustomHeight(height);
      if (maintainAspectRatio && originalDimensions.height > 0) {
        const ratio = originalDimensions.width / originalDimensions.height;
        setCustomWidth(Math.round(height * ratio));
      }
    },
    [maintainAspectRatio, originalDimensions],
  );

  const calculateDimensions = useCallback((): { width: number; height: number } => {
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
  }, [resizeMode, percentage, selectedPreset, customWidth, customHeight, originalDimensions]);

  const resize = useCallback(async () => {
    if (!imageUrl) return;

    setIsResizing(true);

    try {
      const { width: targetWidth, height: targetHeight } = calculateDimensions();

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      const img = new Image();
      img.crossOrigin = 'anonymous';

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      return new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          blob => {
            if (blob) {
              onSuccess?.(blob);
              resolve(blob);
            } else {
              reject(new Error('Failed to create blob'));
            }
            setIsResizing(false);
          },
          'image/png',
          1.0,
        );
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Resize failed';
      onError?.(errorMessage);
      setIsResizing(false);
      throw error;
    }
  }, [imageUrl, calculateDimensions, onSuccess, onError]);

  const reset = useCallback(() => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setSelectedFile(null);
    setImageUrl(null);
    setOriginalDimensions({ width: 0, height: 0 });
    setPercentage(50);
    setResizeMode('percentage');
    setMaintainAspectRatio(true);
  }, [imageUrl]);

  const currentDimensions = calculateDimensions();

  return {
    selectedFile,
    imageUrl,
    originalDimensions,
    currentDimensions,
    resizeMode,
    percentage,
    customWidth,
    customHeight,
    maintainAspectRatio,
    selectedPreset,
    isResizing,
    setSelectedFile: loadImage,
    setResizeMode,
    setPercentage,
    setCustomWidth: handleWidthChange,
    setCustomHeight: handleHeightChange,
    setMaintainAspectRatio,
    setSelectedPreset,
    resize,
    reset,
    canResize: Boolean(imageUrl),
  };
}
