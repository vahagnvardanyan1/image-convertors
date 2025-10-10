/**
 * FileDropzone Pattern
 *
 * Reusable file dropzone component with drag-and-drop support
 */

import * as React from 'react';
import { Upload, FileImage } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, Stack, Text } from '@/components/ui';
import { useDropzone } from '@/hooks';

interface FileDropzoneProps {
  selectedFile: File | null;
  onFileSelect: (file: File) => void;
  onError?: (error: string) => void;
  accept?: string;
  maxSize?: number;
  className?: string;
  messages?: {
    dragDrop?: string;
    dropHere?: string;
    orClickBrowse?: string;
    releaseToUpload?: string;
    chooseFile?: string;
  };
}

export function FileDropzone({ selectedFile, onFileSelect, onError, accept = 'image/*', maxSize, className, messages }: FileDropzoneProps) {
  const { isDragOver, getInputProps, getRootProps } = useDropzone({
    onFileSelect,
    onError,
    accept,
    maxSize,
  });

  const defaultMessages = {
    dragDrop: 'Drag and drop your file here',
    dropHere: 'Drop file here',
    orClickBrowse: 'or click to browse',
    releaseToUpload: 'Release to upload',
    chooseFile: 'Choose File',
    ...messages,
  };

  return (
    <div
      {...getRootProps({
        className: cn(
          'border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer',
          isDragOver && 'border-blue-500 bg-blue-50 dark:bg-blue-950 scale-105',
          selectedFile && !isDragOver && 'border-green-500 bg-green-50 dark:bg-green-950',
          !selectedFile && !isDragOver && 'border-gray-300 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900',
          className,
        ),
      })}
    >
      {selectedFile ? (
        <Stack direction="row" spacing={4} align="center" justify="center">
          <FileImage className="text-green-600 dark:text-green-400" size={48} />
          <Stack spacing={1} align="start">
            <Text weight="medium" className="text-gray-900 dark:text-gray-100">
              {selectedFile.name}
            </Text>
            <Text size="sm" color="muted">
              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
            </Text>
          </Stack>
        </Stack>
      ) : (
        <Stack spacing={4} align="center">
          <Upload className={cn('transition-all duration-200', isDragOver ? 'text-blue-500 scale-110' : 'text-gray-400 dark:text-gray-600')} size={48} />

          <Stack spacing={2} align="center">
            <Text size="lg" weight="medium" className={cn('transition-colors duration-200', isDragOver ? 'text-blue-600 dark:text-blue-400' : 'text-gray-900 dark:text-gray-100')}>
              {isDragOver ? defaultMessages.dropHere : defaultMessages.dragDrop}
            </Text>

            <Text color="muted" className={cn('transition-colors duration-200', isDragOver && 'text-blue-500 dark:text-blue-400')}>
              {isDragOver ? defaultMessages.releaseToUpload : defaultMessages.orClickBrowse}
            </Text>
          </Stack>

          {!isDragOver && (
            <Button
              variant="outline"
              onClick={e => {
                e.stopPropagation();
              }}
              className="rounded-lg"
            >
              {defaultMessages.chooseFile}
            </Button>
          )}
        </Stack>
      )}

      <input {...getInputProps()} />
    </div>
  );
}
