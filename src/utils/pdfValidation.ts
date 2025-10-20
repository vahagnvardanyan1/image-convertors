import { validatePDFFile, validateImageForPDF } from '@/lib/pdfConverter';

export type PDFToolMode = 'pdf-to-images' | 'images-to-pdf' | 'merge-pdf' | 'split-pdf' | 'pdf-info';

interface ValidateFilesForModeParams {
  files: File[];
  mode: PDFToolMode;
}

interface ValidationResult {
  isValid: boolean;
  error?: string;
}

export const validateFilesForMode = ({ files, mode }: ValidateFilesForModeParams): ValidationResult => {
  switch (mode) {
    case 'pdf-to-images':
    case 'pdf-info':
    case 'split-pdf':
      if (files.length !== 1) {
        return { isValid: false, error: 'Please select exactly one PDF file' };
      }
      if (!validatePDFFile(files[0])) {
        return { isValid: false, error: 'Please select a valid PDF file' };
      }
      break;

    case 'images-to-pdf':
      if (files.length === 0) {
        return { isValid: false, error: 'Please select at least one image file' };
      }
      const invalidImageFiles = files.filter(file => !validateImageForPDF(file));
      if (invalidImageFiles.length > 0) {
        return { isValid: false, error: 'All files must be valid image files (PNG, JPG, WebP, HEIC)' };
      }
      break;

    case 'merge-pdf':
      if (files.length < 2) {
        return { isValid: false, error: 'Please select at least 2 PDF files to merge' };
      }
      const invalidPdfFiles = files.filter(file => !validatePDFFile(file));
      if (invalidPdfFiles.length > 0) {
        return { isValid: false, error: 'All files must be PDF files' };
      }
      break;

    default:
      return { isValid: false, error: 'Invalid operation mode' };
  }

  return { isValid: true };
};

export const getAcceptedFileTypes = (mode: PDFToolMode): string => {
  switch (mode) {
    case 'images-to-pdf':
      return 'image/*';
    case 'pdf-to-images':
    case 'merge-pdf':
    case 'split-pdf':
    case 'pdf-info':
      return 'application/pdf,.pdf';
    default:
      return '*';
  }
};

export const getAllowsMultiple = (mode: PDFToolMode): boolean => {
  return mode === 'images-to-pdf' || mode === 'merge-pdf';
};
