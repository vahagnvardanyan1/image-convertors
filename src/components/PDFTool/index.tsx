'use client';
import { useState, useRef } from 'react';
import { Upload, FileText, Zap, AlertCircle, Settings, Image as ImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import { Card } from '../Card';
import {
  convertPDFToImages,
  convertImagesToPDF,
  mergePDFs,
  splitPDF,
  getPDFInfo,
  validatePDFFile,
  validateImageForPDF,
  cleanupUrls,
  formatFileSize,
  type PDFConversionOptions,
  type ImageToPDFOptions,
} from '../../lib/pdfConverter';
import { PDFResultModal } from '../PDFResultModal';

type PDFToolMode = 'pdf-to-images' | 'images-to-pdf' | 'merge-pdf' | 'split-pdf' | 'pdf-info';

interface PDFToolProps {
  mode: PDFToolMode;
  title: string;
  description: string;
}

export function PDFTool({ mode, title, description }: PDFToolProps) {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<unknown>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // PDF to Images options
  const [imageFormat, setImageFormat] = useState<'jpg' | 'png' | 'webp'>('jpg');
  const [imageQuality, setImageQuality] = useState(0.9);
  const [imageScale, setImageScale] = useState(2);
  const [pageRange, setPageRange] = useState('');

  // Images to PDF options
  const [pageSize, setPageSize] = useState<'A4' | 'A3' | 'letter' | 'legal'>('A4');
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait');
  const [margin, setMargin] = useState(20);
  const [fitToPage, setFitToPage] = useState(true);

  // Split PDF options
  const [splitRanges, setSplitRanges] = useState<Array<{ start: number; end: number; name?: string }>>([{ start: 1, end: 1 }]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Only set dragOver to false if we're leaving the drop zone entirely
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    handleFileSelection(files);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFileSelection(Array.from(files));
    }
  };

  const handleFileSelection = (files: File[]) => {
    setError(null);
    setResult(null);

    // Validate files based on mode
    if (mode === 'pdf-to-images' || mode === 'pdf-info' || mode === 'split-pdf') {
      if (files.length !== 1) {
        setError('Please select exactly one PDF file');
        return;
      }
      if (!validatePDFFile(files[0])) {
        setError('Please select a valid PDF file');
        return;
      }
    } else if (mode === 'images-to-pdf') {
      if (files.length === 0) {
        setError('Please select at least one image file');
        return;
      }
      const invalidFiles = files.filter(file => !validateImageForPDF(file));
      if (invalidFiles.length > 0) {
        setError('All files must be valid image files (PNG, JPG, WebP)');
        return;
      }
    } else if (mode === 'merge-pdf') {
      if (files.length < 2) {
        setError('Please select at least 2 PDF files to merge');
        return;
      }
      const invalidFiles = files.filter(file => !validatePDFFile(file));
      if (invalidFiles.length > 0) {
        setError('All files must be valid PDF files');
        return;
      }
    }

    setSelectedFiles(files);
  };

  const parsePageRange = (range: string): number[] | null => {
    if (!range.trim()) return null;

    try {
      const pages: number[] = [];
      const parts = range.split(',');

      for (const part of parts) {
        const trimmed = part.trim();
        if (trimmed.includes('-')) {
          const [start, end] = trimmed.split('-').map(n => parseInt(n.trim()));
          if (isNaN(start) || isNaN(end) || start > end) {
            throw new Error('Invalid range');
          }
          for (let i = start; i <= end; i++) {
            pages.push(i);
          }
        } else {
          const pageNum = parseInt(trimmed);
          if (isNaN(pageNum)) {
            throw new Error('Invalid page number');
          }
          pages.push(pageNum);
        }
      }

      return [...new Set(pages)].sort((a, b) => a - b);
    } catch {
      return null;
    }
  };

  const handleProcess = async () => {
    if (selectedFiles.length === 0) return;

    setIsProcessing(true);
    setError(null);
    setResult(null);

    try {
      let processResult: unknown;

      switch (mode) {
        case 'pdf-to-images': {
          const pageNumbers = parsePageRange(pageRange);
          const options: PDFConversionOptions = {
            format: imageFormat,
            quality: imageQuality,
            scale: imageScale,
            pageNumbers: pageNumbers || undefined,
          };
          processResult = await convertPDFToImages(selectedFiles[0], options);
          break;
        }

        case 'images-to-pdf': {
          const options: ImageToPDFOptions = {
            pageSize,
            orientation,
            margin,
            fitToPage,
          };
          processResult = await convertImagesToPDF(selectedFiles, options);
          break;
        }

        case 'merge-pdf': {
          processResult = await mergePDFs(selectedFiles);
          break;
        }

        case 'split-pdf': {
          processResult = await splitPDF(selectedFiles[0], splitRanges);
          break;
        }

        case 'pdf-info': {
          processResult = await getPDFInfo(selectedFiles[0]);
          break;
        }

        default:
          throw new Error('Invalid mode');
      }

      setResult(processResult);
      setIsModalOpen(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Processing failed');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    // Cleanup URLs if result contains them
    if (result) {
      const resultObj = result as Record<string, unknown>;
      if (Array.isArray(resultObj.images)) {
        cleanupUrls(resultObj.images.map((img: Record<string, unknown>) => img.url as string));
      } else if (typeof resultObj.url === 'string') {
        cleanupUrls([resultObj.url]);
      } else if (Array.isArray(resultObj.pdfs)) {
        cleanupUrls(resultObj.pdfs.map((pdf: Record<string, unknown>) => pdf.url as string));
      }
    }

    setSelectedFiles([]);
    setResult(null);
    setError(null);
    setIsModalOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const addSplitRange = () => {
    setSplitRanges([...splitRanges, { start: 1, end: 1 }]);
  };

  const updateSplitRange = (index: number, field: 'start' | 'end' | 'name', value: string | number) => {
    const newRanges = [...splitRanges];
    if (field === 'name') {
      newRanges[index].name = value as string;
    } else {
      newRanges[index][field] = value as number;
    }
    setSplitRanges(newRanges);
  };

  const removeSplitRange = (index: number) => {
    if (splitRanges.length > 1) {
      setSplitRanges(splitRanges.filter((_, i) => i !== index));
    }
  };

  const getAcceptedFileTypes = () => {
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
  };

  const getMultiple = () => {
    return mode === 'images-to-pdf' || mode === 'merge-pdf';
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600">{description}</p>
        </div>

        <Card className="p-8 bg-white shadow-lg rounded-2xl">
          {/* File Upload Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-8 mb-6 text-center transition-all duration-200 cursor-pointer ${
              isDragOver ? 'border-blue-500 bg-blue-50' : selectedFiles.length > 0 ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => selectedFiles.length === 0 && fileInputRef.current?.click()}
          >
            {selectedFiles.length > 0 ? (
              <div className="space-y-4">
                {selectedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-center space-x-4">
                    {mode === 'images-to-pdf' ? <ImageIcon className="text-green-600" size={48} /> : <FileText className="text-green-600" size={48} />}
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{file.name}</p>
                      <p className="text-sm text-gray-500">{formatFileSize(file.size)}</p>
                    </div>
                  </div>
                ))}
                {selectedFiles.length > 1 && <p className="text-sm text-gray-600 mt-2">{selectedFiles.length} files selected</p>}
              </div>
            ) : (
              <div>
                <Upload className={`mx-auto mb-4 transition-all duration-200 ${isDragOver ? 'text-blue-500 scale-110' : 'text-gray-400'}`} size={48} />
                <p className={`text-lg font-medium mb-2 transition-colors duration-200 ${isDragOver ? 'text-blue-600' : 'text-gray-900'}`}>
                  {isDragOver
                    ? `Drop your ${mode === 'images-to-pdf' ? 'images' : 'PDF file(s)'} here!`
                    : mode === 'images-to-pdf'
                      ? 'Drag and drop your images here'
                      : mode === 'merge-pdf'
                        ? 'Drag and drop your PDF files here'
                        : 'Drag and drop your PDF file here'}
                </p>
                <p className={`text-gray-500 mb-4 transition-colors duration-200 ${isDragOver ? 'text-blue-500' : 'text-gray-500'}`}>
                  {isDragOver ? 'Release to upload' : 'or click anywhere to browse your files'}
                </p>
                {!isDragOver && (
                  <Button
                    variant="outline"
                    onClick={e => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="rounded-lg"
                  >
                    Choose {getMultiple() ? 'Files' : 'File'}
                  </Button>
                )}
              </div>
            )}

            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept={getAcceptedFileTypes()} multiple={getMultiple()} className="hidden" />
          </div>

          {/* Options Panel */}
          {selectedFiles.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Settings className="mr-2" size={20} />
                <h3 className="text-lg font-medium text-gray-900">Options</h3>
              </div>

              {mode === 'pdf-to-images' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                    <Select value={imageFormat} onValueChange={(value: 'jpg' | 'png' | 'webp') => setImageFormat(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="jpg">JPG</SelectItem>
                        <SelectItem value="png">PNG</SelectItem>
                        <SelectItem value="webp">WebP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Quality: {Math.round(imageQuality * 100)}%</label>
                    <input type="range" min="0.1" max="1" step="0.1" value={imageQuality} onChange={e => setImageQuality(parseFloat(e.target.value))} className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Scale: {imageScale}x</label>
                    <input type="range" min="1" max="4" step="0.5" value={imageScale} onChange={e => setImageScale(parseFloat(e.target.value))} className="w-full" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pages (e.g., 1,3-5)</label>
                    <input
                      type="text"
                      value={pageRange}
                      onChange={e => setPageRange(e.target.value)}
                      placeholder="All pages"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              )}

              {mode === 'images-to-pdf' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Page Size</label>
                    <Select value={pageSize} onValueChange={(value: 'A4' | 'A3' | 'letter' | 'legal') => setPageSize(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A4">A4</SelectItem>
                        <SelectItem value="A3">A3</SelectItem>
                        <SelectItem value="letter">Letter</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Orientation</label>
                    <Select value={orientation} onValueChange={(value: 'portrait' | 'landscape') => setOrientation(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="portrait">Portrait</SelectItem>
                        <SelectItem value="landscape">Landscape</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Margin: {margin}mm</label>
                    <input type="range" min="0" max="50" step="5" value={margin} onChange={e => setMargin(parseInt(e.target.value))} className="w-full" />
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" id="fitToPage" checked={fitToPage} onChange={e => setFitToPage(e.target.checked)} className="mr-2" />
                    <label htmlFor="fitToPage" className="text-sm font-medium text-gray-700">
                      Fit to page
                    </label>
                  </div>
                </div>
              )}

              {mode === 'split-pdf' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">Page Ranges</h4>
                    <Button onClick={addSplitRange} variant="outline" size="sm">
                      Add Range
                    </Button>
                  </div>

                  {splitRanges.map((range, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 p-4 border rounded-lg">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Page</label>
                        <input
                          type="number"
                          min="1"
                          value={range.start}
                          onChange={e => updateSplitRange(index, 'start', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Page</label>
                        <input
                          type="number"
                          min="1"
                          value={range.end}
                          onChange={e => updateSplitRange(index, 'end', parseInt(e.target.value))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name (Optional)</label>
                        <input
                          type="text"
                          value={range.name || ''}
                          onChange={e => updateSplitRange(index, 'name', e.target.value)}
                          placeholder="Custom name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                      <div className="flex items-end">
                        <Button onClick={() => removeSplitRange(index)} variant="outline" size="sm" disabled={splitRanges.length === 1} className="text-red-600 hover:text-red-700">
                          Remove
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <AlertCircle className="text-red-500" size={20} />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Process Button */}
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleProcess}
              disabled={selectedFiles.length === 0 || isProcessing}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Zap className={`mr-2 ${isProcessing ? 'animate-spin' : ''}`} size={20} />
              {isProcessing ? 'Processing...' : getProcessButtonText(mode)}
            </Button>

            {selectedFiles.length > 0 && (
              <Button onClick={handleReset} variant="outline" className="px-8 py-3 rounded-xl">
                Reset
              </Button>
            )}
          </div>
        </Card>
      </div>

      {/* Result Modal */}
      <PDFResultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} result={result} mode={mode} onReset={handleReset} />
    </section>
  );
}

function getProcessButtonText(mode: PDFToolMode): string {
  switch (mode) {
    case 'pdf-to-images':
      return 'Convert to Images';
    case 'images-to-pdf':
      return 'Create PDF';
    case 'merge-pdf':
      return 'Merge PDFs';
    case 'split-pdf':
      return 'Split PDF';
    case 'pdf-info':
      return 'Analyze PDF';
    default:
      return 'Process';
  }
}
