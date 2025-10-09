import { useState, useRef } from 'react';
import { Upload, FileImage, Zap, AlertCircle } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import { Card } from '../Card';
import { convertImage, validateImageFile, cleanupImageUrl, type ConversionResult, type SupportedFormat } from '../../lib/imageConverter';
import { ConversionResultModal } from '../ConversionResultModal';

export function ConversionTool() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputFormat, setInputFormat] = useState('');
  const [outputFormat, setOutputFormat] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const [isConverting, setIsConverting] = useState(false);
  const [conversionResult, setConversionResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.9);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelection(files[0]);
    }
  };

  const handleFileSelection = (file: File) => {
    setError(null);
    setConversionResult(null);

    if (!validateImageFile(file)) {
      setError('Please select a valid image file (PNG, JPG, WebP, or GIF)');
      return;
    }

    setSelectedFile(file);
    const fileExtension = file.name.split('.').pop()?.toUpperCase();
    if (fileExtension) {
      setInputFormat(fileExtension === 'JPEG' ? 'JPG' : fileExtension);
    }
  };

  const handleConvert = async () => {
    if (!selectedFile || !outputFormat) return;

    setIsConverting(true);
    setError(null);
    setConversionResult(null);

    try {
      const result = await convertImage(selectedFile, outputFormat.toLowerCase() as SupportedFormat, {
        quality,
        maxSizeMB: 10,
        maxWidthOrHeight: 4096,
        maintainAspectRatio: true,
      });

      setConversionResult(result);
      setIsModalOpen(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Conversion failed');
    } finally {
      setIsConverting(false);
    }
  };

  const handleConvertAnother = () => {
    if (conversionResult) {
      cleanupImageUrl(conversionResult.url);
    }
    setSelectedFile(null);
    setInputFormat('');
    setOutputFormat('');
    setConversionResult(null);
    setError(null);
    setIsModalOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Convert Your Images</h2>
          <p className="text-sm sm:text-base text-gray-600">Upload your image and select the output format to get started</p>
        </div>

        <Card className="p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-xl sm:rounded-2xl">
          {/* Drag and Drop Area */}
          <div
            className={`border-2 border-dashed rounded-lg sm:rounded-xl p-6 sm:p-8 mb-4 sm:mb-6 text-center transition-all duration-200 cursor-pointer touch-manipulation min-h-[200px] flex items-center justify-center ${
              isDragOver ? 'border-blue-500 bg-blue-50 scale-[1.02]' : selectedFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50 active:bg-gray-100'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => !selectedFile && fileInputRef.current?.click()}
          >
            {selectedFile ? (
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 w-full">
                <FileImage className="text-green-600 flex-shrink-0" size={40} />
                <div className="text-center sm:text-left">
                  <p className="font-medium text-gray-900 text-sm sm:text-base break-all px-2">{selectedFile.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
            ) : (
              <div>
                <Upload className={`mx-auto mb-3 sm:mb-4 transition-all duration-200 ${isDragOver ? 'text-blue-500 scale-110' : 'text-gray-400'}`} size={40} />
                <p className={`text-base sm:text-lg font-medium mb-2 transition-colors duration-200 px-2 ${isDragOver ? 'text-blue-600' : 'text-gray-900'}`}>
                  {isDragOver ? 'Drop your image here!' : 'Drag and drop your image here'}
                </p>
                <p className={`text-xs sm:text-sm text-gray-500 mb-4 transition-colors duration-200 ${isDragOver ? 'text-blue-500' : 'text-gray-500'}`}>
                  {isDragOver ? 'Release to upload' : 'or click anywhere to browse your files'}
                </p>
                {!isDragOver && (
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={e => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="rounded-lg"
                  >
                    Choose File
                  </Button>
                )}
              </div>
            )}

            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
          </div>

          {/* Format Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Input Format</label>
              <Select value={inputFormat} onValueChange={setInputFormat}>
                <SelectTrigger className="rounded-lg h-11 sm:h-10">
                  <SelectValue placeholder="Auto-detected" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PNG">PNG</SelectItem>
                  <SelectItem value="JPG">JPG</SelectItem>
                  <SelectItem value="JPEG">JPEG</SelectItem>
                  <SelectItem value="WEBP">WebP</SelectItem>
                  <SelectItem value="GIF">GIF</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">Output Format</label>
              <Select value={outputFormat} onValueChange={setOutputFormat}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Choose output format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PNG">PNG</SelectItem>
                  <SelectItem value="JPG">JPG</SelectItem>
                  <SelectItem value="WEBP">WebP</SelectItem>
                  <SelectItem value="GIF">GIF</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quality Control */}
          {(outputFormat === 'JPG' || outputFormat === 'WEBP') && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Quality: {Math.round(quality * 100)}%</label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={quality}
                onChange={e => setQuality(parseFloat(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Lower quality (smaller file)</span>
                <span>Higher quality (larger file)</span>
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
              <AlertCircle className="text-red-500" size={20} />
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Convert Button */}
          <div className="text-center mb-6">
            <Button
              onClick={handleConvert}
              disabled={!selectedFile || !outputFormat || isConverting}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Zap className={`mr-2 ${isConverting ? 'animate-spin' : ''}`} size={20} />
              {isConverting ? 'Converting...' : 'Convert Image'}
            </Button>
          </div>
        </Card>
      </div>

      {/* Conversion Result Modal */}
      <ConversionResultModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        result={conversionResult}
        originalFileName={selectedFile?.name}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        onConvertAnother={handleConvertAnother}
      />
    </section>
  );
}
