/**
 * useConversion Hook
 *
 * Handles image conversion state and logic
 */

import { useState, useCallback } from 'react';
import { convertImage, cleanupImageUrl } from '@/lib/imageConverter';
import type { ConversionState, ConversionResult, ConversionOptions, SupportedFormat } from '@/types';

interface UseConversionOptions {
  onSuccess?: (result: ConversionResult) => void;
  onError?: (error: string) => void;
  defaultQuality?: number;
}

export function useConversion(options: UseConversionOptions = {}) {
  const { onSuccess, onError, defaultQuality = 0.9 } = options;

  const [state, setState] = useState<ConversionState>({
    status: 'idle',
    selectedFile: null,
    inputFormat: '',
    outputFormat: '',
    quality: defaultQuality,
    result: null,
    error: null,
  });

  const setSelectedFile = useCallback((file: File | null) => {
    setState(prev => {
      // Clean up previous result if exists
      if (prev.result?.url) {
        cleanupImageUrl(prev.result.url);
      }

      return {
        ...prev,
        selectedFile: file,
        inputFormat: file ? detectFormatFromFile(file) : '',
        status: file ? 'selecting' : 'idle',
        result: null,
        error: null,
      };
    });
  }, []);

  const setOutputFormat = useCallback((format: string) => {
    setState(prev => ({ ...prev, outputFormat: format }));
  }, []);

  const setQuality = useCallback((quality: number) => {
    setState(prev => ({ ...prev, quality }));
  }, []);

  const convert = useCallback(
    async (customOptions?: Partial<ConversionOptions>) => {
      if (!state.selectedFile || !state.outputFormat) {
        setState(prev => ({ ...prev, error: 'Missing file or output format', status: 'error' }));
        return;
      }

      setState(prev => ({ ...prev, status: 'converting', error: null }));

      try {
        const conversionOptions: ConversionOptions = {
          quality: state.quality,
          maxSizeMB: 10,
          maxWidthOrHeight: 4096,
          maintainAspectRatio: true,
          ...customOptions,
        };

        const result = await convertImage(state.selectedFile, state.outputFormat.toLowerCase() as SupportedFormat, conversionOptions);

        setState(prev => ({
          ...prev,
          status: 'success',
          result,
        }));

        onSuccess?.(result);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Conversion failed';
        setState(prev => ({
          ...prev,
          status: 'error',
          error: errorMessage,
        }));
        onError?.(errorMessage);
      }
    },
    [state.selectedFile, state.outputFormat, state.quality, onSuccess, onError],
  );

  const reset = useCallback(() => {
    if (state.result?.url) {
      cleanupImageUrl(state.result.url);
    }

    setState({
      status: 'idle',
      selectedFile: null,
      inputFormat: '',
      outputFormat: '',
      quality: defaultQuality,
      result: null,
      error: null,
    });
  }, [state.result, defaultQuality]);

  const clearError = useCallback(() => {
    setState(prev => ({ ...prev, error: null }));
  }, []);

  return {
    ...state,
    setSelectedFile,
    setOutputFormat,
    setQuality,
    convert,
    reset,
    clearError,
    isConverting: state.status === 'converting',
    canConvert: Boolean(state.selectedFile && state.outputFormat),
  };
}

// Helper function to detect format from file
function detectFormatFromFile(file: File): string {
  const extension = file.name.split('.').pop()?.toUpperCase() || '';
  return extension === 'JPEG' ? 'JPG' : extension;
}
