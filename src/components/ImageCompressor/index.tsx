'use client';

import { Download, Info, Zap, Settings, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '../ui/button';
import { ToolShell, ToolGrid } from '@/components/tooling/ToolShell';
import { ToolSection, ToolSidebar } from '@/components/tooling/ToolSection';
import { FileUploadZone } from '@/components/FileUploadZone';
import { useToast } from '@/components/ui/toast';
import { useUploadZone } from '@/hooks/useUploadZone';
import { useImageCompression } from '@/hooks/useImageCompression';
import { validateImageFile } from '@/utils/fileValidation';
import { formatFileSize, getCompressionRatio } from '@/utils/imageProcessing';

export const ImageCompressor = () => {
  const t = useTranslations('compressor');
  const tCommon = useTranslations('common');
  const toast = useToast();

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

  const handleFilesSelect = (files: File[]) => {
    const file = files[0];
    if (!file) return;

    if (!validateImageFile(file)) {
      toast.error(tCommon('selectValidImage'));
      return;
    }
    loadImageFile(file);
  };

  const { isDragOver, selectedFiles, fileInputRef, handleDragOver, handleDragLeave, handleDrop, handleFileSelect, triggerFileInput, clearFiles } = useUploadZone({
    onFilesSelect: handleFilesSelect,
    accept: 'image/*',
    multiple: false,
  });

  const handleCompress = async () => {
    if (selectedFiles.length === 0) return;

    await compress({
      file: selectedFiles[0],
      options: {
        quality,
        targetFileSize,
        compressionTarget,
      },
    });
  };

  const handleReset = () => {
    reset();
    clearFiles();
  };

  const handleDownload = () => {
    if (!selectedFiles[0]) return;
    const originalName = selectedFiles[0].name;
    const nameWithoutExt = originalName.replace(/\.[^/.]+$/, '');
    const filename = `${nameWithoutExt}_compressed.jpg`;
    downloadCompressed(filename);
  };

  const compressionRatio = compressedSize ? getCompressionRatio({ originalSize, convertedSize: compressedSize }) : 0;

  return (
    <ToolShell
      header={{
        title: t('title'),
        description: t('description'),
        backText: tCommon('backToHome'),
      }}
    >
      <ToolGrid columns={2}>
        <div className="lg:col-span-1 space-y-6">
          {/* Upload Section */}
          <ToolSection title={`1. ${t('uploadImage')}`}>
            <FileUploadZone
              isDragOver={isDragOver}
              selectedFiles={selectedFiles}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileInput}
              fileInputRef={fileInputRef}
              onFileSelect={handleFileSelect}
              onClear={handleReset}
              accept="image/*"
              showPreview
              dragOverText={tCommon('dropFileHere')}
              defaultText={tCommon('dragDropHere')}
              browseText={tCommon('orClickBrowse')}
              releaseText={tCommon('releaseToUpload')}
              chooseFileText={tCommon('chooseFile')}
              removeText={tCommon('remove')}
            />
          </ToolSection>

          {/* Compression Settings */}
          {selectedFiles.length > 0 && (
            <ToolSection title={`2. ${t('compressionSettings')}`}>
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
                      {[20, 50, 100, 200].map(size => (
                        <button
                          key={size}
                          onClick={() => setTargetFileSize(size)}
                          className={`flex-1 p-3 rounded-lg border-2 transition-all ${targetFileSize === size ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                        >
                          {size} KB
                        </button>
                      ))}
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
                )}
              </div>
            </ToolSection>
          )}

          {/* Compress Button */}
          {selectedFiles.length > 0 && (
            <ToolSection title={`3. ${t('compressImage')}`}>
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
            </ToolSection>
          )}

          {/* Results */}
          {compressedUrl && compressedSize && (
            <ToolSection className="bg-gradient-to-r from-green-50 to-blue-50">
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
                <Button onClick={handleDownload} className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <Download className="mr-2" size={20} />
                  {t('downloadCompressed')}
                </Button>
                <Button onClick={handleReset} variant="outline" className="w-full">
                  {t('compressAnother')}
                </Button>
              </div>
            </ToolSection>
          )}
        </div>

        {/* Sidebar */}
        <ToolSidebar>
          <ToolSection title={t('whyCompress')}>
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
          </ToolSection>

          <ToolSection title={t('compressionTips')}>
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
          </ToolSection>
        </ToolSidebar>
      </ToolGrid>
    </ToolShell>
  );
};
