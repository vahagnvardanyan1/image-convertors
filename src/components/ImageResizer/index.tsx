'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';

import { Maximize2, CheckCircle, Settings, Sliders } from 'lucide-react';

import { Button } from '../ui/button';
import { ToolShell, ToolGrid } from '@/components/tooling/ToolShell';
import { ToolSection, ToolSidebar } from '@/components/tooling/ToolSection';
import { FileUploadZone } from '@/components/FileUploadZone';
import { useToast } from '@/components/ui/toast';
import { useUploadZone } from '@/hooks/useUploadZone';
import { useImageResize, presets } from '@/hooks/useImageResize';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { validateImageFile } from '@/utils/fileValidation';
import { getImageDimensions } from '@/utils/imageProcessing';

import type { PresetSize } from '@/hooks/useImageResize';

export const ImageResizer = () => {
  const t = useTranslations('resizer');
  const tCommon = useTranslations('common');
  const tErrors = useTranslations('errors');
  const toast = useToast();

  const {
    imageUrl,
    originalDimensions,
    resizeMode,
    percentage,
    customWidth,
    customHeight,
    maintainAspectRatio,
    selectedPreset,
    isResizing,
    setImageUrl,
    setOriginalDimensions,
    setResizeMode,
    setPercentage,
    setCustomWidth,
    setCustomHeight,
    setMaintainAspectRatio,
    setSelectedPreset,
    handleWidthChange,
    handleHeightChange,
    handleResize,
    handleReset: resetResize,
    getOutputDimensions,
  } = useImageResize();

  const { isOpen: isBottomSheetOpen, open: openBottomSheet, close: closeBottomSheet } = useBottomSheet();

  const handleFilesSelect = async (files: File[]) => {
    const file = files[0];
    if (!file) return;

    if (!validateImageFile(file)) {
      toast.error(tCommon('selectValidImage'));
      return;
    }

    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    const url = URL.createObjectURL(file);
    setImageUrl(url);

    try {
      const dimensions = await getImageDimensions(file);
      setOriginalDimensions(dimensions);
      setCustomWidth(dimensions.width);
      setCustomHeight(dimensions.height);
    } catch (error) {
      console.error('Error getting image dimensions:', error);
      toast.error(tErrors('loadImageFailed'));
    }
  };

  const { isDragOver, selectedFiles, fileInputRef, handleDragOver, handleDragLeave, handleDrop, handleFileSelect, triggerFileInput, clearFiles } = useUploadZone({
    onFilesSelect: handleFilesSelect,
    accept: 'image/*',
    multiple: false,
  });

  const handleReset = () => {
    resetResize();
    clearFiles();
  };

  const handlePresetClick = (preset: PresetSize) => {
    setSelectedPreset(preset);
    setResizeMode('preset');
  };

  // Prevent body scroll when bottom sheet is open
  useEffect(() => {
    if (isBottomSheetOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isBottomSheetOpen]);

  const outputDimensions = getOutputDimensions();

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

            {imageUrl && originalDimensions && (
              <div className="mt-4">
                <img src={imageUrl} alt="Preview" className="max-w-full h-auto rounded-lg shadow-lg" />
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {t('originalSize')}: {originalDimensions.width} × {originalDimensions.height}px
                </p>
              </div>
            )}
          </ToolSection>

          {/* Resize Options */}
          {selectedFiles.length > 0 && (
            <>
              <ToolSection title={`2. ${t('resizeSettings')}`}>
                <div className="space-y-4">
                  {/* Mode Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('resizeMode')}:</label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => setResizeMode('percentage')}
                        className={`p-3 rounded-lg border-2 transition-all ${resizeMode === 'percentage' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <Settings className="mx-auto mb-1" size={20} />
                        <p className="text-sm font-medium">{t('percentage')}</p>
                      </button>
                      <button
                        onClick={() => setResizeMode('pixels')}
                        className={`p-3 rounded-lg border-2 transition-all ${resizeMode === 'pixels' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <Sliders className="mx-auto mb-1" size={20} />
                        <p className="text-sm font-medium">{t('pixels')}</p>
                      </button>
                      <button
                        onClick={() => setResizeMode('preset')}
                        className={`p-3 rounded-lg border-2 transition-all ${resizeMode === 'preset' ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <Maximize2 className="mx-auto mb-1" size={20} />
                        <p className="text-sm font-medium">{t('preset')}</p>
                      </button>
                    </div>
                  </div>

                  {/* Percentage Mode */}
                  {resizeMode === 'percentage' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t('scale')}: {percentage}%
                      </label>
                      <input
                        type="range"
                        min="10"
                        max="200"
                        step="10"
                        value={percentage}
                        onChange={e => setPercentage(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>10%</span>
                        <span>200%</span>
                      </div>
                    </div>
                  )}

                  {/* Pixels Mode */}
                  {resizeMode === 'pixels' && (
                    <div className="space-y-3">
                      <div className="flex items-center mb-2">
                        <input type="checkbox" checked={maintainAspectRatio} onChange={e => setMaintainAspectRatio(e.target.checked)} className="w-4 h-4 text-blue-600 rounded mr-2" />
                        <label className="text-sm font-medium text-gray-700">{t('maintainAspect')}</label>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('width')} (px)</label>
                          <input type="number" value={customWidth} onChange={e => handleWidthChange(parseInt(e.target.value))} className="w-full p-2 border border-gray-300 rounded-lg" min="1" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">{t('height')} (px)</label>
                          <input type="number" value={customHeight} onChange={e => handleHeightChange(parseInt(e.target.value))} className="w-full p-2 border border-gray-300 rounded-lg" min="1" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Preset Mode */}
                  {resizeMode === 'preset' && (
                    <div className="grid grid-cols-2 gap-3">
                      {presets.map(preset => (
                        <button
                          key={preset.name}
                          onClick={() => handlePresetClick(preset)}
                          className={`p-3 rounded-lg border-2 text-left transition-all ${selectedPreset?.name === preset.name ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}
                        >
                          <p className="font-medium text-gray-900">{preset.name}</p>
                          <p className="text-xs text-gray-500">
                            {preset.width} × {preset.height}
                          </p>
                        </button>
                      ))}
                    </div>
                  )}

                  {outputDimensions && (
                    <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <p className="text-sm font-medium text-blue-900">
                        {t('outputSize')}: {outputDimensions.width} × {outputDimensions.height}px
                      </p>
                    </div>
                  )}
                </div>
              </ToolSection>

              {/* Resize Button */}
              <ToolSection title={`3. ${t('resizeImage')}`}>
                <Button
                  onClick={handleResize}
                  disabled={isResizing}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
                >
                  {isResizing ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      {t('resizing')}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Maximize2 className="mr-2" size={20} />
                      {t('resizeNow')}
                    </div>
                  )}
                </Button>
              </ToolSection>
            </>
          )}
        </div>

        {/* Sidebar */}
        <ToolSidebar>
          <ToolSection title={t('commonUses')}>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                <span>{t('use1')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                <span>{t('use2')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                <span>{t('use3')}</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 text-blue-500 flex-shrink-0 mt-0.5" size={16} />
                <span>{t('use4')}</span>
              </li>
            </ul>
          </ToolSection>

          <ToolSection title={t('tips')}>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-start">
                <Settings className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                <span>{t('tip1')}</span>
              </li>
              <li className="flex items-start">
                <Settings className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                <span>{t('tip2')}</span>
              </li>
              <li className="flex items-start">
                <Settings className="mr-2 text-purple-500 flex-shrink-0 mt-0.5" size={16} />
                <span>{t('tip3')}</span>
              </li>
            </ul>
          </ToolSection>
        </ToolSidebar>
      </ToolGrid>
    </ToolShell>
  );
};
