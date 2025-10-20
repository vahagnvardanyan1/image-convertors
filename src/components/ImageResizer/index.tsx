'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { ArrowLeft, Upload, Download, RotateCcw, Maximize2, Image as ImageIcon, CheckCircle, Settings, Sliders } from 'lucide-react';

import { Button } from '../ui/button';
import { Card } from '@/components/Card';

import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useImageResize, presets } from '@/hooks/useImageResize';
import { useBottomSheet } from '@/hooks/useBottomSheet';

import { validateImageFile } from '@/utils/fileValidation';
import { getImageDimensions } from '@/utils/imageProcessing';

import type { PresetSize } from '@/hooks/useImageResize';

export const ImageResizer = () => {
  const t = useTranslations('resizer');
  const tConverter = useTranslations('converter');

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
    handleReset,
    getOutputDimensions,
  } = useImageResize();

  const { isOpen: isBottomSheetOpen, open: openBottomSheet, close: closeBottomSheet } = useBottomSheet();

  const handleFileSelect = async (file: File) => {
    if (!validateImageFile(file)) {
      alert(tConverter('selectValidImage'));
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
      alert('Failed to load image dimensions');
    }
  };

  const {
    selectedFile,
    fileInputRef,
    handleFileSelect: onFileInputChange,
    clearFile,
    triggerFileInput,
  } = useFileUpload({
    onFileSelect: handleFileSelect,
  });

  const { isDragOver, handleDragOver, handleDragLeave, handleDrop } = useDragAndDrop({
    onFilesDrop: files => {
      if (files.length > 0) {
        handleFileSelect(files[0]);
      }
    },
  });

  const handleNewImage = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageUrl(null);
    clearFile();
    setOriginalDimensions({ width: 0, height: 0 });
  };

  const handleResizeClick = async () => {
    if (!imageUrl || !selectedFile) return;
    await handleResize({ imageUrl, fileName: selectedFile.name });
  };

  const outputDims = getOutputDimensions();

  // Prevent body scroll when bottom sheet is open
  useEffect(() => {
    if (isBottomSheetOpen) {
      document.body.classList.add('bottom-sheet-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('bottom-sheet-open');
      document.body.style.overflow = '';
    }
    return () => {
      document.body.classList.remove('bottom-sheet-open');
      document.body.style.overflow = '';
    };
  }, [isBottomSheetOpen]);

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2" size={16} />
                Back to Home
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Free Online Image Resizer</h1>
              <p className="text-gray-600">Resize images easily with percentage, pixels, or presets</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {!imageUrl ? (
          <>
            {/* Upload Area */}
            <Card className="mb-8">
              <div
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${isDragOver ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileInput}
              >
                <input ref={fileInputRef} type="file" accept="image/*" onChange={onFileInputChange} className="hidden" />

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
                    <Upload className="text-white" size={40} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload an Image to Resize</h3>
                  <p className="text-gray-600 mb-6 max-w-md">Drag and drop your image here, or click anywhere in this area to browse</p>

                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium">
                    <Upload className="inline mr-2" size={20} />
                    Click or Drop Image Here
                  </div>

                  <p className="text-sm text-gray-500 mt-4">Supports: JPG, PNG, WebP, GIF, HEIC</p>
                </div>
              </div>
            </Card>

            {/* Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Maximize2 className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Multiple Resize Modes</h3>
                <p className="text-gray-600 text-sm">Resize by percentage, exact pixels, or choose presets</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-emerald-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Aspect Ratio Lock</h3>
                <p className="text-gray-600 text-sm">Maintain proportions or resize freely</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <ImageIcon className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">High Quality</h3>
                <p className="text-gray-600 text-sm">Professional quality output with smart algorithms</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Private</h3>
                <p className="text-gray-600 text-sm">All processing happens in your browser</p>
              </Card>
            </div>

            {/* How It Works */}
            <Card className="p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Resize Images Online</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold mb-3">1</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Upload Image</h3>
                  <p className="text-gray-600 text-sm">Choose an image from your device or drag and drop it into the upload area</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold mb-3">2</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Choose Size</h3>
                  <p className="text-gray-600 text-sm">Select percentage, enter custom dimensions, or pick a preset size</p>
                </div>
                <div>
                  <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mb-3">3</div>
                  <h3 className="font-semibold text-gray-900 mb-2">Download</h3>
                  <p className="text-gray-600 text-sm">Click resize & download to save your perfectly sized image</p>
                </div>
              </div>
            </Card>
          </>
        ) : (
          <>
            {/* Resize Interface */}
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
              <Button onClick={handleNewImage} variant="outline" size="sm">
                <Upload className="mr-2" size={16} />
                Upload Different Image
              </Button>
              <div className="text-sm text-gray-600 hidden sm:block">
                Original: {originalDimensions.width}×{originalDimensions.height}px
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Preview */}
              <div className="lg:col-span-2">
                <Card className="p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
                  <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center min-h-[400px]">
                    <img src={imageUrl} alt="Preview" className="max-w-full max-h-[500px] object-contain" />
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-gray-600 mb-1">Original Size</p>
                      <p className="font-semibold text-gray-900">
                        {originalDimensions.width}×{originalDimensions.height}px
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-gray-600 mb-1">Output Size</p>
                      <p className="font-semibold text-gray-900">
                        {outputDims.width}×{outputDims.height}px
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Desktop Controls - Hidden on Mobile */}
              <div className="hidden lg:block lg:col-span-1">
                <div className="space-y-4 sticky top-4">
                  {/* Actions */}
                  <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                    <Button
                      onClick={handleResizeClick}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white mb-2"
                      disabled={isResizing}
                    >
                      <Download className="mr-2" size={18} />
                      {isResizing ? 'Resizing...' : 'Resize & Download'}
                    </Button>
                    <Button onClick={handleReset} variant="outline" className="w-full border-2">
                      <RotateCcw className="mr-2" size={16} />
                      Reset
                    </Button>
                  </Card>

                  {/* Resize Mode */}
                  <Card className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">Resize Mode</h3>
                    <div className="space-y-2">
                      <button
                        onClick={() => setResizeMode('percentage')}
                        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          resizeMode === 'percentage' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Percentage
                      </button>
                      <button
                        onClick={() => setResizeMode('pixels')}
                        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          resizeMode === 'pixels' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Custom Pixels
                      </button>
                      <button
                        onClick={() => setResizeMode('preset')}
                        className={`w-full px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                          resizeMode === 'preset' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        Presets
                      </button>
                    </div>
                  </Card>

                  {/* Percentage Mode */}
                  {resizeMode === 'percentage' && (
                    <Card className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">Scale: {percentage}%</h3>
                      <input type="range" min="10" max="200" value={percentage} onChange={e => setPercentage(Number(e.target.value))} className="w-full mb-2" />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>10%</span>
                        <span>200%</span>
                      </div>
                    </Card>
                  )}

                  {/* Pixels Mode */}
                  {resizeMode === 'pixels' && (
                    <Card className="p-4">
                      <div className="mb-4">
                        <label className="flex items-center gap-2 mb-3">
                          <input type="checkbox" checked={maintainAspectRatio} onChange={e => setMaintainAspectRatio(e.target.checked)} className="w-4 h-4 text-green-600 rounded" />
                          <span className="text-sm font-medium text-gray-700">Lock aspect ratio</span>
                        </label>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Width (px)</label>
                          <input
                            type="number"
                            min="1"
                            max="10000"
                            value={customWidth}
                            onChange={e => handleWidthChange(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Height (px)</label>
                          <input
                            type="number"
                            min="1"
                            max="10000"
                            value={customHeight}
                            onChange={e => handleHeightChange(Number(e.target.value))}
                            className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                          />
                        </div>
                      </div>
                    </Card>
                  )}

                  {/* Presets Mode */}
                  {resizeMode === 'preset' && (
                    <Card className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm">Quick Presets</h3>
                      <div className="space-y-2">
                        {(Object.keys(presets) as PresetSize[]).map(key => (
                          <button
                            key={key}
                            onClick={() => setSelectedPreset(key)}
                            className={`w-full px-4 py-2 rounded-lg text-left transition-colors ${selectedPreset === key ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                          >
                            <div className="font-medium text-sm">{presets[key].label}</div>
                            <div className={`text-xs ${selectedPreset === key ? 'text-green-100' : 'text-gray-500'}`}>{presets[key].description}</div>
                          </button>
                        ))}
                      </div>
                    </Card>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Bottom Sheet Controls - Show on Mobile Only */}
            <div className="lg:hidden">
              {/* Mobile Instructions */}
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                <p className="font-medium mb-1">📱 Mobile Controls</p>
                <p className="text-xs">Tap the buttons below to resize or adjust settings</p>
              </div>

              {/* Floating Action Buttons */}
              <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3">
                <Button
                  onClick={handleResizeClick}
                  className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white p-0"
                  disabled={isResizing}
                >
                  <Download size={24} />
                </Button>
                <Button onClick={openBottomSheet} className="h-14 w-14 rounded-full shadow-2xl bg-white hover:bg-gray-50 text-gray-900 p-0 border-2 border-gray-200">
                  <Sliders size={24} />
                </Button>
              </div>

              {/* Bottom Sheet Overlay */}
              {isBottomSheetOpen && <div className="fixed inset-0 bg-transparent z-50 transition-opacity" onClick={closeBottomSheet} />}

              {/* Bottom Sheet */}
              <div
                className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 transition-transform duration-300 ease-out ${isBottomSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}
              >
                <div className="p-4 max-h-[80vh] overflow-y-auto">
                  {/* Handle Bar */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                  </div>

                  {/* Bottom Sheet Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Resize Settings</h3>
                    <button onClick={closeBottomSheet} className="text-gray-500 hover:text-gray-700 p-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom Sheet Content */}
                  <div className="space-y-4">
                    {/* Actions */}
                    <Card className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            handleResizeClick();
                            closeBottomSheet();
                          }}
                          className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                          disabled={isResizing}
                        >
                          <Download className="mr-2" size={18} />
                          {isResizing ? 'Resizing...' : 'Download'}
                        </Button>
                        <Button onClick={handleReset} variant="outline" className="flex-1 border-2">
                          <RotateCcw className="mr-2" size={16} />
                          Reset
                        </Button>
                      </div>
                    </Card>

                    {/* Resize Mode */}
                    <Card className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Resize Mode</h4>
                      <div className="grid grid-cols-3 gap-2">
                        <button
                          onClick={() => setResizeMode('percentage')}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            resizeMode === 'percentage' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          %
                        </button>
                        <button
                          onClick={() => setResizeMode('pixels')}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            resizeMode === 'pixels' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Pixels
                        </button>
                        <button
                          onClick={() => setResizeMode('preset')}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            resizeMode === 'preset' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Preset
                        </button>
                      </div>
                    </Card>

                    {/* Percentage Mode */}
                    {resizeMode === 'percentage' && (
                      <Card className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Scale: {percentage}%</h4>
                        <input type="range" min="10" max="200" value={percentage} onChange={e => setPercentage(Number(e.target.value))} className="w-full mb-2" />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>10%</span>
                          <span>200%</span>
                        </div>
                      </Card>
                    )}

                    {/* Pixels Mode */}
                    {resizeMode === 'pixels' && (
                      <Card className="p-4">
                        <div className="mb-4">
                          <label className="flex items-center gap-2 mb-3">
                            <input type="checkbox" checked={maintainAspectRatio} onChange={e => setMaintainAspectRatio(e.target.checked)} className="w-4 h-4 text-green-600 rounded" />
                            <span className="text-sm font-medium text-gray-700">Lock aspect ratio</span>
                          </label>
                        </div>
                        <div className="space-y-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Width (px)</label>
                            <input
                              type="number"
                              min="1"
                              max="10000"
                              value={customWidth}
                              onChange={e => handleWidthChange(Number(e.target.value))}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Height (px)</label>
                            <input
                              type="number"
                              min="1"
                              max="10000"
                              value={customHeight}
                              onChange={e => handleHeightChange(Number(e.target.value))}
                              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>
                      </Card>
                    )}

                    {/* Presets Mode */}
                    {resizeMode === 'preset' && (
                      <Card className="p-4">
                        <h4 className="font-semibold text-gray-900 mb-3 text-sm">Quick Presets</h4>
                        <div className="space-y-2">
                          {(Object.keys(presets) as PresetSize[]).map(key => (
                            <button
                              key={key}
                              onClick={() => {
                                setSelectedPreset(key);
                                setTimeout(() => closeBottomSheet(), 300);
                              }}
                              className={`w-full px-4 py-2 rounded-lg text-left transition-colors ${selectedPreset === key ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                            >
                              <div className="font-medium text-sm">{presets[key].label}</div>
                              <div className={`text-xs ${selectedPreset === key ? 'text-green-100' : 'text-gray-500'}`}>{presets[key].description}</div>
                            </button>
                          ))}
                        </div>
                      </Card>
                    )}

                    {/* Close Button */}
                    <Button onClick={closeBottomSheet} variant="outline" className="w-full mt-4">
                      Close Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
