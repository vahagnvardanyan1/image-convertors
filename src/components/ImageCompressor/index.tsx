'use client';

import { ArrowLeft, Upload, Download, Image as ImageIcon, CheckCircle, Info, Zap, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Card } from '@/components/Card';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useImageCompression } from '@/hooks/useImageCompression';
import { validateImageFile } from '@/utils/fileValidation';
import { formatFileSize, getCompressionRatio } from '@/utils/imageProcessing';

export const ImageCompressor = () => {
  const t = useTranslations('compressor');
  const tConverter = useTranslations('converter');

  const {
    imageUrl,
    originalSize,
    compressedUrl,
    compressedSize,
    isCompressing,
    compressionTarget,
    quality,
    targetFileSize,
    setCompressionTarget,
    setQuality,
    setTargetFileSize,
    loadImageFile,
    compress,
    downloadCompressed,
    reset,
  } = useImageCompression();

  const handleFileSelection = (file: File) => {
    if (!validateImageFile(file)) {
      alert(tConverter('selectValidImage'));
      return;
    }
    loadImageFile(file);
  };

  const {
    selectedFile,
    fileInputRef,
    handleFileSelect: onFileInputChange,
    clearFile,
    triggerFileInput,
  } = useFileUpload({
    onFileSelect: handleFileSelection,
  });

  const { isDragOver, handleDragOver, handleDragLeave, handleDrop } = useDragAndDrop({
    onFilesDrop: files => {
      if (files.length > 0) {
        handleFileSelection(files[0]);
      }
    },
  });

  const handleCompress = async () => {
    if (!selectedFile) return;

    await compress({
      file: selectedFile,
      options: {
        quality,
        targetFileSize,
        compressionTarget,
      },
    });
  };

  const handleReset = () => {
    reset();
    clearFile();
  };

  const handleDownloadClick = () => {
    if (!selectedFile) return;

    const originalName = selectedFile.name;
    const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
    const filename = `${nameWithoutExt}_compressed.jpg`;

    downloadCompressed();

    // Update filename if possible
    if (compressedUrl) {
      const a = document.createElement('a');
      a.href = compressedUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const compressionRatio = compressedSize ? getCompressionRatio({ originalSize, convertedSize: compressedSize }) : 0;

  return (
    <>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2" size={16} />
                {tConverter('backToHome')}
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
              <p className="text-gray-600">{t('description')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. {t('uploadImage')}</h2>

              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer ${
                  isDragOver ? 'border-blue-500 bg-blue-50 scale-105' : selectedFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => !selectedFile && triggerFileInput()}
              >
                <input ref={fileInputRef} type="file" accept="image/*" onChange={onFileInputChange} className="hidden" />

                {!selectedFile ? (
                  <div>
                    <Upload className={`mx-auto mb-4 transition-all duration-200 ${isDragOver ? 'text-blue-500 scale-110' : 'text-gray-400'}`} size={48} />
                    <p className={`text-lg font-medium mb-2 transition-colors duration-200 ${isDragOver ? 'text-blue-600' : 'text-gray-900'}`}>
                      {isDragOver ? tConverter('dropFileHere') : tConverter('dragDropHere')}
                    </p>
                    <p className={`text-sm transition-colors duration-200 ${isDragOver ? 'text-blue-500' : 'text-gray-500'}`}>
                      {isDragOver ? tConverter('releaseToUpload') : tConverter('orClickBrowse')}
                    </p>
                    {!isDragOver && (
                      <Button
                        variant="outline"
                        onClick={e => {
                          e.stopPropagation();
                          triggerFileInput();
                        }}
                        className="mt-4 rounded-lg"
                      >
                        {tConverter('chooseFile')}
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center space-x-4">
                      <ImageIcon className="text-green-600" size={48} />
                      <div className="text-left">
                        <p className="font-medium text-gray-900">{selectedFile.name}</p>
                        <p className="text-sm text-gray-500">{formatFileSize(originalSize)}</p>
                      </div>
                      <Button
                        variant="outline"
                        onClick={e => {
                          e.stopPropagation();
                          handleReset();
                        }}
                        className="text-red-600 hover:text-red-700"
                      >
                        {tConverter('remove')}
                      </Button>
                    </div>
                    {imageUrl && <img src={imageUrl} alt="Preview" className="max-w-full max-h-64 mx-auto rounded-lg" />}
                  </div>
                )}
              </div>
            </Card>

            {/* Compression Settings */}
            {selectedFile && (
              <Card className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">2. {t('compressionSettings')}</h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('compressionMode')}:</label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => setCompressionTarget('quality')}
                        className={`p-3 rounded-lg border-2 transition-all ${compressionTarget === 'quality' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <Settings className="mx-auto mb-1" size={20} />
                        <p className="text-sm font-medium">{t('byQuality')}</p>
                      </button>
                      <button
                        onClick={() => setCompressionTarget('filesize')}
                        className={`p-3 rounded-lg border-2 transition-all ${compressionTarget === 'filesize' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <Zap className="mx-auto mb-1" size={20} />
                        <p className="text-sm font-medium">{t('byFileSize')}</p>
                      </button>
                      <button
                        onClick={() => setCompressionTarget('custom')}
                        className={`p-3 rounded-lg border-2 transition-all ${compressionTarget === 'custom' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <Info className="mx-auto mb-1" size={20} />
                        <p className="text-sm font-medium">{t('custom')}</p>
                      </button>
                    </div>
                  </div>

                  {compressionTarget === 'quality' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('quality')}: {quality}%
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="100"
                        value={quality}
                        onChange={e => setQuality(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>{t('lowerQuality')}</span>
                        <span>{t('higherQuality')}</span>
                      </div>
                    </div>
                  )}

                  {compressionTarget === 'filesize' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('targetFileSize')}:</label>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => setTargetFileSize(20)}
                          className={`flex-1 p-3 rounded-lg border-2 transition-all ${targetFileSize === 20 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                        >
                          20 KB
                        </button>
                        <button
                          onClick={() => setTargetFileSize(50)}
                          className={`flex-1 p-3 rounded-lg border-2 transition-all ${targetFileSize === 50 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                        >
                          50 KB
                        </button>
                        <button
                          onClick={() => setTargetFileSize(100)}
                          className={`flex-1 p-3 rounded-lg border-2 transition-all ${targetFileSize === 100 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                        >
                          100 KB
                        </button>
                        <button
                          onClick={() => setTargetFileSize(200)}
                          className={`flex-1 p-3 rounded-lg border-2 transition-all ${targetFileSize === 200 ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                        >
                          200 KB
                        </button>
                      </div>
                      <div className="mt-3">
                        <input
                          type="number"
                          value={targetFileSize}
                          onChange={e => setTargetFileSize(parseInt(e.target.value))}
                          className="w-full p-2 border border-gray-300 rounded-lg"
                          min="10"
                          max="5000"
                        />
                        <p className="text-xs text-gray-500 mt-1">{t('customSizeKb')}</p>
                      </div>
                    </div>
                  )}

                  {compressionTarget === 'custom' && (
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t('quality')}: {quality}%
                        </label>
                        <input
                          type="range"
                          min="10"
                          max="100"
                          value={quality}
                          onChange={e => setQuality(parseInt(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            )}

            {/* Compress Button */}
            {selectedFile && (
              <Card className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">3. {t('compressImage')}</h2>

                <Button
                  onClick={handleCompress}
                  disabled={isCompressing}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                >
                  {isCompressing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t('compressing')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Zap className="mr-2" size={20} />
                      {t('compressNow')}
                    </div>
                  )}
                </Button>
              </Card>
            )}

            {/* Results */}
            {compressedUrl && compressedSize && (
              <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
                <div className="flex items-center mb-4">
                  <CheckCircle className="text-green-600 mr-2" size={24} />
                  <h2 className="text-xl font-bold text-gray-900">{t('compressionComplete')}</h2>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">{t('originalSize')}</p>
                    <p className="text-lg font-bold text-gray-900">{formatFileSize(originalSize)}</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">{t('compressedSize')}</p>
                    <p className="text-lg font-bold text-green-600">{formatFileSize(compressedSize)}</p>
                  </div>
                  <div className="text-center p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">{t('savedSpace')}</p>
                    <p className="text-lg font-bold text-blue-600">{compressionRatio}%</p>
                  </div>
                </div>

                <img src={compressedUrl} alt="Compressed" className="max-w-full max-h-96 mx-auto rounded-lg mb-4" />

                <div className="grid grid-cols-2 gap-3">
                  <Button onClick={handleDownloadClick} className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Download className="mr-2" size={20} />
                    {t('downloadCompressed')}
                  </Button>
                  <Button onClick={handleReset} variant="outline" className="w-full">
                    {t('compressAnother')}
                  </Button>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">{t('whyCompress')}</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <Zap className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{t('benefit1')}</span>
                </li>
                <li className="flex items-start">
                  <Zap className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{t('benefit2')}</span>
                </li>
                <li className="flex items-start">
                  <Zap className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{t('benefit3')}</span>
                </li>
                <li className="flex items-start">
                  <Zap className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{t('benefit4')}</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">{t('compressionTips')}</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start">
                  <Info className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{t('tip1')}</span>
                </li>
                <li className="flex items-start">
                  <Info className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{t('tip2')}</span>
                </li>
                <li className="flex items-start">
                  <Info className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                  <span>{t('tip3')}</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
