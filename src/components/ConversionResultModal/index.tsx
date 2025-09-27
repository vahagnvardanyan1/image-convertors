'use client';
import { CheckCircle, Download, RotateCcw } from 'lucide-react';
import { Button } from '../ui/button';
import { Modal } from '../Modal';
import { formatFileSize, getCompressionRatio, downloadImage, type ConversionResult } from '../../lib/imageConverter';

interface ConversionResultModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: ConversionResult | null;
  originalFileName?: string;
  inputFormat?: string;
  outputFormat?: string;
  onConvertAnother: () => void;
}

export function ConversionResultModal({ isOpen, onClose, result, originalFileName, inputFormat, outputFormat, onConvertAnother }: ConversionResultModalProps) {
  if (!result) return null;

  const handleDownload = () => {
    downloadImage(result);
  };

  const handleConvertAnother = () => {
    onConvertAnother();
    onClose();
  };

  const compressionRatio = getCompressionRatio(result.originalSize, result.convertedSize);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="p-6">
        {/* Success Header */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900">Conversion Complete!</h3>
              <p className="text-gray-600">Your image has been successfully converted</p>
            </div>
          </div>
        </div>

        {/* Image Preview */}
        <div className="mb-6">
          <div className="bg-gray-50 rounded-xl p-4 flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={result.url} alt="Converted image preview" className="max-w-full max-h-80 object-contain rounded-lg shadow-sm" />
          </div>
        </div>

        {/* Conversion Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {/* Original Image Info */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              Original Image
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Format:</span>
                <span className="font-medium">{inputFormat?.toUpperCase() || 'Unknown'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium">{formatFileSize(result.originalSize)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">File:</span>
                <span className="font-medium truncate" title={originalFileName}>
                  {originalFileName || 'Unknown'}
                </span>
              </div>
            </div>
          </div>

          {/* Converted Image Info */}
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              Converted Image
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Format:</span>
                <span className="font-medium">{outputFormat?.toUpperCase() || result.format.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Size:</span>
                <span className="font-medium">{formatFileSize(result.convertedSize)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">File:</span>
                <span className="font-medium truncate" title={result.fileName}>
                  {result.fileName}
                </span>
              </div>
              {result.originalSize !== result.convertedSize && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Size Change:</span>
                  <span className={`font-medium ${compressionRatio > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {compressionRatio > 0 ? '↓' : '↑'} {Math.abs(compressionRatio)}%
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Compression Summary */}
        {result.originalSize !== result.convertedSize && (
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-semibold text-gray-900">Compression Summary</h4>
                <p className="text-sm text-gray-600">
                  {compressionRatio > 0
                    ? `Reduced file size by ${compressionRatio}% (saved ${formatFileSize(result.originalSize - result.convertedSize)})`
                    : `File size increased by ${Math.abs(compressionRatio)}% (${formatFileSize(result.convertedSize - result.originalSize)} larger)`}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {compressionRatio > 0 ? '-' : '+'}
                  {Math.abs(compressionRatio)}%
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Download className="mr-2" size={20} />
            Download {outputFormat?.toUpperCase() || result.format.toUpperCase()}
          </Button>

          <Button onClick={handleConvertAnother} variant="outline" className="px-8 py-3 rounded-xl border-2 hover:bg-gray-50 transition-all duration-200">
            <RotateCcw className="mr-2" size={20} />
            Convert Another Image
          </Button>
        </div>
      </div>
    </Modal>
  );
}
