import { fileTypeFromBuffer } from 'file-type';
import imageCompression from 'browser-image-compression';

export type SupportedFormat = 'png' | 'jpg' | 'jpeg' | 'webp' | 'gif';

export interface ConversionOptions {
  quality?: number; // 0-1 for JPEG/WebP quality
  maxSizeMB?: number; // Maximum file size in MB
  maxWidthOrHeight?: number; // Maximum width or height
  maintainAspectRatio?: boolean;
}

export interface ConversionResult {
  blob: Blob;
  url: string;
  fileName: string;
  originalSize: number;
  convertedSize: number;
  format: string;
}

/**
 * Detects the format of an image file
 */
export async function detectImageFormat(file: File): Promise<string | null> {
  try {
    const buffer = await file.arrayBuffer();
    const type = await fileTypeFromBuffer(new Uint8Array(buffer));
    return type?.ext || null;
  } catch (error) {
    console.error('Error detecting image format:', error);
    return null;
  }
}

/**
 * Validates if the file is a supported image format
 */
export function validateImageFile(file: File): boolean {
  const supportedTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/webp', 'image/gif'];
  return supportedTypes.includes(file.type);
}

/**
 * Converts an image file to the specified format
 */
export async function convertImage(file: File, targetFormat: SupportedFormat, options: ConversionOptions = {}): Promise<ConversionResult> {
  if (!validateImageFile(file)) {
    throw new Error('Unsupported file format. Please upload a PNG, JPG, WebP, or GIF image.');
  }

  const { quality = 0.9, maxSizeMB = 10, maxWidthOrHeight = 4096, maintainAspectRatio = true } = options;

  try {
    // Create an image element to load the file
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Canvas context not available');
    }

    // Load the image
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });

    // Calculate dimensions
    let { width, height } = img;

    if (maxWidthOrHeight && (width > maxWidthOrHeight || height > maxWidthOrHeight)) {
      if (maintainAspectRatio) {
        const ratio = Math.min(maxWidthOrHeight / width, maxWidthOrHeight / height);
        width *= ratio;
        height *= ratio;
      } else {
        width = Math.min(width, maxWidthOrHeight);
        height = Math.min(height, maxWidthOrHeight);
      }
    }

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Handle different background colors for different formats
    if (targetFormat === 'jpg' || targetFormat === 'jpeg') {
      // JPG doesn't support transparency, so fill with white background
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, width, height);
    }

    // Draw the image
    ctx.drawImage(img, 0, 0, width, height);

    // Clean up the object URL
    URL.revokeObjectURL(img.src);

    // Convert to target format
    const mimeType = getMimeType(targetFormat);

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        async blob => {
          if (!blob) {
            reject(new Error('Failed to convert image'));
            return;
          }

          try {
            // Apply compression if needed
            let finalBlob = blob;
            if (maxSizeMB && blob.size > maxSizeMB * 1024 * 1024) {
              const compressionOptions = {
                maxSizeMB,
                maxWidthOrHeight,
                useWebWorker: true,
                fileType: mimeType,
                initialQuality: quality,
              };

              // Convert blob to file for compression
              const fileForCompression = new File([blob], `temp.${targetFormat}`, { type: mimeType });
              finalBlob = await imageCompression(fileForCompression, compressionOptions);
            }

            const url = URL.createObjectURL(finalBlob);
            const fileName = generateFileName(file.name, targetFormat);

            resolve({
              blob: finalBlob,
              url,
              fileName,
              originalSize: file.size,
              convertedSize: finalBlob.size,
              format: targetFormat,
            });
          } catch (compressionError) {
            reject(new Error(`Compression failed: ${compressionError}`));
          }
        },
        mimeType,
        targetFormat === 'jpg' || targetFormat === 'jpeg' || targetFormat === 'webp' ? quality : undefined,
      );
    });
  } catch (error) {
    throw new Error(`Conversion failed: ${error}`);
  }
}

/**
 * Batch convert multiple images
 */
export async function convertImages(files: File[], targetFormat: SupportedFormat, options: ConversionOptions = {}): Promise<ConversionResult[]> {
  const results: ConversionResult[] = [];

  for (const file of files) {
    try {
      const result = await convertImage(file, targetFormat, options);
      results.push(result);
    } catch (error) {
      console.error(`Failed to convert ${file.name}:`, error);
      throw error;
    }
  }

  return results;
}

/**
 * Get MIME type for a format
 */
function getMimeType(format: SupportedFormat): string {
  const mimeTypes: Record<SupportedFormat, string> = {
    png: 'image/png',
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    webp: 'image/webp',
    gif: 'image/gif',
  };

  return mimeTypes[format];
}

/**
 * Generate a new filename with the target format
 */
function generateFileName(originalName: string, targetFormat: SupportedFormat): string {
  const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
  return `${nameWithoutExt}.${targetFormat}`;
}

/**
 * Format file size for display
 */
export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * Calculate compression ratio
 */
export function getCompressionRatio(originalSize: number, convertedSize: number): number {
  if (originalSize === 0) return 0;
  return Math.round(((originalSize - convertedSize) / originalSize) * 100);
}

/**
 * Download a converted image
 */
export function downloadImage(result: ConversionResult): void {
  const link = document.createElement('a');
  link.href = result.url;
  link.download = result.fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

/**
 * Clean up object URLs to prevent memory leaks
 */
export function cleanupImageUrl(url: string): void {
  URL.revokeObjectURL(url);
}
