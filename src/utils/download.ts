import type { ConversionResult } from '@/lib/imageConverter';

interface DownloadFileOptions {
  url: string;
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

export const downloadImage = (result: ConversionResult): void => {
  downloadFile({
    url: result.url,
    filename: result.fileName,
  });
};

export const downloadBlob = ({ blob, filename }: { blob: Blob; filename: string }): void => {
  const url = URL.createObjectURL(blob);
  downloadFile({ url, filename });
  URL.revokeObjectURL(url);
};
