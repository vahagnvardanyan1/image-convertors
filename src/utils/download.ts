import type { ConversionResult } from '@/lib/imageConverter';

interface DownloadFileOptions {
  url: string;
  filename: string;
}

interface DownloadBlobOptions {
  blob: Blob;
  filename: string;
}

export const downloadFile = ({ url, filename }: DownloadFileOptions): void => {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const downloadImage = (result: ConversionResult, filenameOverride?: string): void => {
  downloadFile({
    url: result.url,
    filename: filenameOverride || result.fileName,
  });
};

export const downloadBlob = ({ blob, filename }: DownloadBlobOptions): void => {
  const url = URL.createObjectURL(blob);
  downloadFile({ url, filename });
  URL.revokeObjectURL(url);
};
