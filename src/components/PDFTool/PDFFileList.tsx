import * as React from 'react';
import { FileText, Image as ImageIcon } from 'lucide-react';
import { Text, Stack } from '@/components/ui';
import { formatFileSize } from '@/lib/pdfConverter';
import type { PDFToolMode } from '@/hooks';

interface PDFFileListProps {
  files: File[];
  mode: PDFToolMode;
  t: (key: string) => string;
}

export function PDFFileList({ files, mode, t }: PDFFileListProps) {
  const isImageMode = mode === 'images-to-pdf';

  return (
    <Stack spacing={4}>
      {files.map((file, index) => (
        <Stack key={index} direction="row" spacing={4} align="center" justify="center">
          {isImageMode ? <ImageIcon className="text-green-600 dark:text-green-400" size={48} /> : <FileText className="text-green-600 dark:text-green-400" size={48} />}
          <Stack spacing={1} align="start">
            <Text weight="medium">{file.name}</Text>
            <Text size="sm" color="muted">
              {formatFileSize(file.size)}
            </Text>
          </Stack>
        </Stack>
      ))}
      {files.length > 1 && (
        <Text size="sm" color="muted" className="mt-2">
          {files.length} {t('filesSelected')}
        </Text>
      )}
    </Stack>
  );
}
