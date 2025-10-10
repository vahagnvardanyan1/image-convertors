/**
 * MultiFileDropzone Pattern
 *
 * File dropzone that supports multiple file selection
 */

import * as React from 'react';
import { useRef } from 'react';
import { Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, Stack, Text } from '@/components/ui';
import { useDropzone } from '@/hooks';

interface MultiFileDropzoneProps {
  selectedFiles: File[];
  onFilesSelect: (files: File[]) => void;
  onError?: (error: string) => void;
  accept?: string;
  maxSize?: number;
  maxFiles?: number;
  className?: string;
  messages?: {
    dragDrop?: string;
    dropHere?: string;
    orClickBrowse?: string;
    releaseToUpload?: string;
    chooseFiles?: string;
    filesSelected?: string;
  };
  renderFileList?: (files: File[]) => React.ReactNode;
}

export function MultiFileDropzone({ selectedFiles, onFilesSelect, onError, accept = '*/*', maxSize, maxFiles, className, messages, renderFileList }: MultiFileDropzoneProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFilesValidation = (files: File[]) => {
    if (maxFiles && files.length > maxFiles) {
      onError?.(`Maximum ${maxFiles} files allowed`);
      return;
    }

    if (maxSize) {
      const oversized = files.find(f => f.size > maxSize);
      if (oversized) {
        onError?.(`File ${oversized.name} exceeds maximum size`);
        return;
      }
    }

    onFilesSelect(files);
  };

  const {
    isDragOver,
    handleDragOver,
    handleDragLeave,
    handleDrop: baseHandleDrop,
  } = useDropzone({
    onFileSelect: file => handleFilesValidation([file]),
    onError,
    accept,
    maxSize,
    multiple: true,
  });

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const files = Array.from(e.dataTransfer.files);
    handleFilesValidation(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFilesValidation(Array.from(files));
    }
  };

  const defaultMessages = {
    dragDrop: 'Drag and drop your files here',
    dropHere: 'Drop files here',
    orClickBrowse: 'or click to browse',
    releaseToUpload: 'Release to upload',
    chooseFiles: 'Choose Files',
    filesSelected: 'files selected',
    ...messages,
  };

  return (
    <div
      className={cn(
        'border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer',
        isDragOver && 'border-blue-500 bg-blue-50 dark:bg-blue-950',
        selectedFiles.length > 0 && !isDragOver && 'border-green-500 bg-green-50 dark:bg-green-950',
        selectedFiles.length === 0 && !isDragOver && 'border-gray-300 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-900',
        className,
      )}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => selectedFiles.length === 0 && fileInputRef.current?.click()}
    >
      {selectedFiles.length > 0 ? (
        renderFileList ? (
          renderFileList(selectedFiles)
        ) : (
          <Text color="muted">
            {selectedFiles.length} {defaultMessages.filesSelected}
          </Text>
        )
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
                fileInputRef.current?.click();
              }}
              className="rounded-lg"
            >
              {defaultMessages.chooseFiles}
            </Button>
          )}
        </Stack>
      )}

      <input ref={fileInputRef} type="file" accept={accept} multiple onChange={handleFileSelect} className="hidden" />
    </div>
  );
}
