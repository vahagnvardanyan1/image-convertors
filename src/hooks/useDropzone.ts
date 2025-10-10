/**
 * useDropzone Hook
 *
 * Handles drag-and-drop file selection logic
 */

import { useState, useCallback, useRef } from 'react';
import { validateImageFile } from '@/lib/imageConverter';

interface UseDropzoneOptions {
  onFileSelect?: (file: File) => void;
  onError?: (error: string) => void;
  accept?: string;
  maxSize?: number;
  multiple?: boolean;
}

export function useDropzone(options: UseDropzoneOptions = {}) {
  const { onFileSelect, onError, accept = 'image/*', maxSize, multiple = false } = options;

  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // Only set dragOver to false if we're leaving the drop zone entirely
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setIsDragOver(false);
    }
  }, []);

  const validateAndSelectFile = useCallback(
    (file: File) => {
      // Validate file type
      if (!validateImageFile(file)) {
        const error = 'Please select a valid image file (PNG, JPG, WebP, GIF, or HEIC)';
        onError?.(error);
        return false;
      }

      // Validate file size if maxSize is provided
      if (maxSize && file.size > maxSize) {
        const error = `File size exceeds maximum allowed size of ${(maxSize / 1024 / 1024).toFixed(0)}MB`;
        onError?.(error);
        return false;
      }

      onFileSelect?.(file);
      return true;
    },
    [onFileSelect, onError, maxSize],
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragOver(false);

      const files = Array.from(e.dataTransfer.files);

      if (files.length === 0) return;

      if (!multiple && files.length > 1) {
        onError?.('Please drop only one file at a time');
        return;
      }

      const file = files[0];
      validateAndSelectFile(file);
    },
    [multiple, validateAndSelectFile, onError],
  );

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      if (!files || files.length === 0) return;

      const file = files[0];
      validateAndSelectFile(file);
    },
    [validateAndSelectFile],
  );

  const openFileDialog = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const resetInput = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  const getInputProps = useCallback(() => {
    return {
      ref: fileInputRef,
      type: 'file' as const,
      accept,
      multiple,
      onChange: handleFileSelect,
      className: 'hidden',
    };
  }, [accept, multiple, handleFileSelect]);

  const getRootProps = useCallback(
    (customProps?: React.HTMLAttributes<HTMLDivElement>) => {
      return {
        ...customProps,
        onDragOver: handleDragOver,
        onDragLeave: handleDragLeave,
        onDrop: handleDrop,
        onClick: openFileDialog,
      };
    },
    [handleDragOver, handleDragLeave, handleDrop, openFileDialog],
  );

  return {
    isDragOver,
    fileInputRef,
    openFileDialog,
    resetInput,
    getInputProps,
    getRootProps,
    handleFileSelect,
    handleDragOver,
    handleDragLeave,
    handleDrop,
  };
}
