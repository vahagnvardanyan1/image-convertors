import type { PDFToolMode } from '@/hooks';

export function getAcceptedFileTypes(mode: PDFToolMode): string {
  switch (mode) {
    case 'pdf-to-images':
    case 'pdf-info':
    case 'split-pdf':
      return 'application/pdf';
    case 'images-to-pdf':
      return 'image/*';
    case 'merge-pdf':
      return 'application/pdf';
    default:
      return '*/*';
  }
}

export function getAllowsMultiple(mode: PDFToolMode): boolean {
  return mode === 'images-to-pdf' || mode === 'merge-pdf';
}

export function getProcessButtonText(mode: PDFToolMode, t: (key: string) => string): string {
  switch (mode) {
    case 'pdf-to-images':
      return t('convertToImages');
    case 'images-to-pdf':
      return t('createPDF');
    case 'merge-pdf':
      return t('mergePDFs');
    case 'split-pdf':
      return t('splitPDF');
    case 'pdf-info':
      return t('analyzePDF');
    default:
      return t('process');
  }
}

export function getDropzoneMessage(mode: PDFToolMode, t: (key: string) => string): string {
  switch (mode) {
    case 'images-to-pdf':
      return t('dragDropImages');
    case 'merge-pdf':
      return t('dragDropPdfFiles');
    default:
      return t('dragDropPdfFile');
  }
}

export function updateSplitRange(splitRanges: Array<{ start: number; end: number; name?: string }>, index: number, field: 'start' | 'end' | 'name', value: string | number) {
  const newRanges = [...splitRanges];
  if (field === 'name') {
    newRanges[index].name = value as string;
  } else {
    newRanges[index][field] = value as number;
  }
  return newRanges;
}
