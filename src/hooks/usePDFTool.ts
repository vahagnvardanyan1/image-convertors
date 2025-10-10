/**
 * usePDFTool Hook
 *
 * Handles PDF conversion state and logic for all PDF tool modes
 */

import { useState, useCallback } from 'react';
import {
  convertPDFToImages,
  convertImagesToPDF,
  mergePDFs,
  splitPDF,
  getPDFInfo,
  validatePDFFile,
  validateImageForPDF,
  cleanupUrls,
  type PDFConversionOptions,
  type ImageToPDFOptions,
} from '@/lib/pdfConverter';

export type PDFToolMode = 'pdf-to-images' | 'images-to-pdf' | 'merge-pdf' | 'split-pdf' | 'pdf-info';

interface UsePDFToolOptions {
  mode: PDFToolMode;
  onSuccess?: (result: unknown) => void;
  onError?: (error: string) => void;
}

export function usePDFTool({ mode, onSuccess, onError }: UsePDFToolOptions) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<unknown>(null);

  // PDF to Images options
  const [imageFormat, setImageFormat] = useState<'jpg' | 'png' | 'webp'>('jpg');
  const [imageQuality, setImageQuality] = useState(0.9);
  const [imageScale, setImageScale] = useState(2);
  const [pageRange, setPageRange] = useState('');

  // Images to PDF options
  const [pageSize, setPageSize] = useState<'A4' | 'A3' | 'letter' | 'legal'>('A4');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [margin, setMargin] = useState(20);
  const [fitToPage, setFitToPage] = useState(true);

  // Split PDF options
  const [splitRanges, setSplitRanges] = useState<Array<{ start: number; end: number; name?: string }>>([{ start: 1, end: 1 }]);

  const parsePageRange = (range: string): number[] | null => {
    if (!range.trim()) return null;

    try {
      const pages: number[] = [];
      const parts = range.split(',');

      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
          const [start, end] = trimmed.split('-').map(n => parseInt(n.trim()));
          if (isNaN(start) || isNaN(end) || start > end || start < 1) {
            throw new Error('Invalid range');
          }
          for (let i = start; i <= end; i++) {
            pages.push(i);
          }
        } else {
          const pageNum = parseInt(trimmed);
          if (isNaN(pageNum) || pageNum < 1) {
            throw new Error('Invalid page number');
          }
          pages.push(pageNum);
        }
      }

      return pages.length > 0 ? [...new Set(pages)].sort((a, b) => a - b) : null;
    } catch {
      return null;
    }
  };

  const validateFiles = useCallback(
    (files: File[]): string | null => {
      if (mode === 'pdf-to-images' || mode === 'pdf-info' || mode === 'split-pdf') {
        if (files.length !== 1) return 'Please select one PDF file';
        if (!validatePDFFile(files[0])) return 'Please select a valid PDF file';
      } else if (mode === 'images-to-pdf') {
        if (files.length === 0) return 'Please select at least one image';
        for (const file of files) {
          if (!validateImageForPDF(file)) return `Invalid file: ${file.name}. Please select valid images.`;
        }
      } else if (mode === 'merge-pdf') {
        if (files.length < 2) return 'Please select at least 2 PDF files to merge';
        for (const file of files) {
          if (!validatePDFFile(file)) return `Invalid file: ${file.name}. Please select valid PDF files.`;
        }
      }
      return null;
    },
    [mode],
  );

  const handleFileSelection = useCallback(
    (files: File[]) => {
      setError(null);
      setResult(null);

      const validationError = validateFiles(files);
      if (validationError) {
        setError(validationError);
        return;
      }

      setSelectedFiles(files);
    },
    [validateFiles],
  );

  const process = useCallback(async () => {
    if (selectedFiles.length === 0) return;

    setIsProcessing(true);
    setError(null);
    setResult(null);

    try {
      let processResult: unknown;

      switch (mode) {
        case 'pdf-to-images': {
          const pageNumbers = parsePageRange(pageRange);
          const options: PDFConversionOptions = {
            format: imageFormat,
            quality: imageQuality,
            scale: imageScale,
            pageNumbers: pageNumbers || undefined,
          };
          processResult = await convertPDFToImages(selectedFiles[0], options);
          break;
        }

        case 'images-to-pdf': {
          const options: ImageToPDFOptions = {
            pageSize,
            orientation,
            margin,
            fitToPage,
          };
          processResult = await convertImagesToPDF(selectedFiles, options);
          break;
        }

        case 'merge-pdf': {
          processResult = await mergePDFs(selectedFiles);
          break;
        }

        case 'split-pdf': {
          processResult = await splitPDF(selectedFiles[0], splitRanges);
          break;
        }

        case 'pdf-info': {
          processResult = await getPDFInfo(selectedFiles[0]);
          break;
        }

        default:
          throw new Error('Invalid mode');
      }

      setResult(processResult);
      onSuccess?.(processResult);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Processing failed';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  }, [selectedFiles, mode, imageFormat, imageQuality, imageScale, pageRange, pageSize, orientation, margin, fitToPage, splitRanges, onSuccess, onError]);

  const reset = useCallback(() => {
    if (result && typeof result === 'object' && result !== null) {
      const urls = Object.values(result).filter(v => typeof v === 'string' && v.startsWith('blob:')) as string[];
      if (urls.length > 0) {
        cleanupUrls(urls);
      }
    }

    setSelectedFiles([]);
    setResult(null);
    setError(null);
    setImageFormat('jpg');
    setImageQuality(0.9);
    setImageScale(2);
    setPageRange('');
    setPageSize('A4');
    setOrientation('portrait');
    setMargin(20);
    setFitToPage(true);
    setSplitRanges([{ start: 1, end: 1 }]);
  }, [result]);

  return {
    // State
    selectedFiles,
    isProcessing,
    error,
    result,

    // PDF to Images
    imageFormat,
    imageQuality,
    imageScale,
    pageRange,
    setImageFormat,
    setImageQuality,
    setImageScale,
    setPageRange,

    // Images to PDF
    pageSize,
    orientation,
    margin,
    fitToPage,
    setPageSize,
    setOrientation,
    setMargin,
    setFitToPage,

    // Split PDF
    splitRanges,
    setSplitRanges,

    // Actions
    setSelectedFiles: handleFileSelection,
    process,
    reset,
    clearError: () => setError(null),
    canProcess: selectedFiles.length > 0,
  };
}
