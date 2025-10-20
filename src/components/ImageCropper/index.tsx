'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Upload, Download, RotateCcw, RotateCw, FlipHorizontal, FlipVertical, ZoomIn, ZoomOut, Maximize, Move, Crop, CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { Button } from '../ui/button';
import { Card } from '@/components/Card';
import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useImageCrop } from '@/hooks/useImageCrop';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { validateImageFile } from '@/utils/fileValidation';

const ASPECT_RATIOS = [
  { label: 'Free', value: undefined },
  { label: '1:1', value: 1 },
  { label: '16:9', value: 16 / 9 },
  { label: '4:3', value: 4 / 3 },
  { label: '3:2', value: 3 / 2 },
  { label: '2:3', value: 2 / 3 },
];

export const ImageCropper = () => {
  const tConverter = useTranslations('converter');

  const {
    imageUrl,
    cropper,
    aspectRatio,
    isCropping,
    imageRef,
    setImageUrl,
    setAspectRatio,
    initializeCropper,
    cropImage,
    resetCrop,
    rotateCrop,
    flipCrop,
    zoomCrop,
    destroyCropper,
  } = useImageCrop();

  const { isOpen: isBottomSheetOpen, open: openBottomSheet, close: closeBottomSheet } = useBottomSheet();

  const handleFileSelection = (file: File) => {
    if (!validateImageFile(file)) {
      alert(tConverter('selectValidImage'));
      return;
    }

    destroyCropper();
    const url = URL.createObjectURL(file);
    setImageUrl(url);
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

  // Initialize cropper when image is loaded
  useEffect(() => {
    if (imageRef.current && imageUrl && !cropper) {
      initializeCropper({
        imageElement: imageRef.current,
        aspectRatio,
      });
    }
  }, [imageUrl]);

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

  const handleNewImage = () => {
    destroyCropper();
    clearFile();
  };

  const handleCropClick = () => {
    const filename = selectedFile ? `cropped-${selectedFile.name}` : 'cropped-image.png';
    cropImage({ filename });
  };

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
              <h1 className="text-2xl font-bold text-gray-900">Free Online Image Cropper</h1>
              <p className="text-gray-600">Crop, rotate, and resize images with precision</p>
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
                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${isDragOver ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileInput}
              >
                <input ref={fileInputRef} type="file" accept="image/*" onChange={onFileInputChange} className="hidden" />

                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
                    <Upload className="text-white" size={40} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload an Image to Crop</h3>
                  <p className="text-gray-600 mb-6 max-w-md">Drag and drop your image here, or click anywhere in this area to browse</p>

                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium">
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
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Crop className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Precise Cropping</h3>
                <p className="text-gray-600 text-sm">Crop images to exact dimensions with pixel-perfect accuracy</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Maximize className="text-purple-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Aspect Ratios</h3>
                <p className="text-gray-600 text-sm">Choose from preset ratios or crop freely</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Move className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Rotate & Flip</h3>
                <p className="text-gray-600 text-sm">Rotate, flip, and adjust your images easily</p>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-orange-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">100% Private</h3>
                <p className="text-gray-600 text-sm">All processing happens in your browser</p>
              </Card>
            </div>
          </>
        ) : (
          <>
            {/* Cropper Interface */}
            <div className="mb-4 sm:mb-6 flex items-center justify-between">
              <Button onClick={handleNewImage} variant="outline" size="sm">
                <Upload className="mr-2" size={16} />
                Upload Different Image
              </Button>
              <p className="text-sm text-gray-600 hidden lg:block">Use the controls on the right to adjust your crop</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Cropper Canvas - Main Area */}
              <div className="flex-1">
                <Card className="p-4 sm:p-6">
                  <div className="max-w-full overflow-hidden">
                    <img ref={imageRef} src={imageUrl} alt="Crop preview" className="max-w-full block" />
                  </div>
                </Card>
              </div>

              {/* Desktop Controls Sidebar - Hidden on Mobile */}
              <div className="hidden lg:block w-80 flex-shrink-0">
                <div className="sticky top-4 space-y-4">
                  {/* Actions - Always Visible */}
                  <Card className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-2">
                      <Button onClick={handleCropClick} className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" disabled={isCropping}>
                        <Download className="mr-2" size={18} />
                        {isCropping ? 'Cropping...' : 'Crop & Download'}
                      </Button>
                      <Button onClick={resetCrop} variant="outline" className="flex-1 border-2">
                        <RotateCcw className="mr-2" size={16} />
                        Reset
                      </Button>
                    </div>
                  </Card>

                  {/* Aspect Ratio */}
                  <Card className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">Aspect Ratio</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-3 gap-2">
                      {ASPECT_RATIOS.map(ratio => (
                        <button
                          key={ratio.label}
                          onClick={() => setAspectRatio(ratio.value)}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            aspectRatio === ratio.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {ratio.label}
                        </button>
                      ))}
                    </div>
                  </Card>

                  {/* Zoom */}
                  <Card className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">Zoom</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Button onClick={() => zoomCrop(0.1)} variant="outline" className="w-full" size="sm">
                        <ZoomIn className="mr-1" size={16} />
                        In
                      </Button>
                      <Button onClick={() => zoomCrop(-0.1)} variant="outline" className="w-full" size="sm">
                        <ZoomOut className="mr-1" size={16} />
                        Out
                      </Button>
                    </div>
                  </Card>

                  {/* Transform */}
                  <Card className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-3 text-sm">Transform</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Button onClick={() => rotateCrop(-90)} variant="outline" className="w-full" size="sm">
                        <RotateCcw className="mr-1" size={16} />
                        Left
                      </Button>
                      <Button onClick={() => rotateCrop(90)} variant="outline" className="w-full" size="sm">
                        <RotateCw className="mr-1" size={16} />
                        Right
                      </Button>
                      <Button onClick={() => flipCrop('horizontal')} variant="outline" className="w-full" size="sm">
                        <FlipHorizontal className="mr-1" size={16} />
                        H-Flip
                      </Button>
                      <Button onClick={() => flipCrop('vertical')} variant="outline" className="w-full" size="sm">
                        <FlipVertical className="mr-1" size={16} />
                        V-Flip
                      </Button>
                    </div>
                  </Card>
                </div>
              </div>
            </div>

            {/* Mobile Bottom Sheet */}
            <div className="lg:hidden">
              {/* Mobile Instructions */}
              <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
                <p className="font-medium mb-1">📱 Mobile Controls</p>
                <p className="text-xs">Tap the buttons below to crop or adjust settings</p>
              </div>

              {/* Floating Action Buttons */}
              <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3">
                <Button
                  onClick={handleCropClick}
                  className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white p-0"
                  disabled={isCropping}
                >
                  <Download size={24} />
                </Button>
                <Button onClick={openBottomSheet} className="h-14 w-14 rounded-full shadow-2xl bg-white hover:bg-gray-50 text-gray-900 p-0 border-2 border-gray-200">
                  <Move size={24} />
                </Button>
              </div>

              {/* Bottom Sheet Overlay */}
              {isBottomSheetOpen && <div className="fixed inset-0 bg-transparent z-50 transition-opacity" onClick={closeBottomSheet} />}

              {/* Bottom Sheet */}
              <div
                className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 transition-transform duration-300 ease-out ${
                  isBottomSheetOpen ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <div className="p-4 max-h-[80vh] overflow-y-auto">
                  {/* Handle Bar */}
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                  </div>

                  {/* Bottom Sheet Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Crop Controls</h3>
                    <button onClick={closeBottomSheet} className="text-gray-500 hover:text-gray-700 p-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom Sheet Content */}
                  <div className="space-y-4">
                    {/* Actions */}
                    <Card className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
                      <div className="flex gap-2">
                        <Button
                          onClick={() => {
                            handleCropClick();
                            closeBottomSheet();
                          }}
                          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                          disabled={isCropping}
                        >
                          <Download className="mr-2" size={18} />
                          {isCropping ? 'Cropping...' : 'Download'}
                        </Button>
                        <Button onClick={resetCrop} variant="outline" className="flex-1 border-2">
                          <RotateCcw className="mr-2" size={16} />
                          Reset
                        </Button>
                      </div>
                    </Card>

                    {/* Aspect Ratio */}
                    <Card className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Aspect Ratio</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {ASPECT_RATIOS.map(ratio => (
                          <button
                            key={ratio.label}
                            onClick={() => {
                              setAspectRatio(ratio.value);
                              setTimeout(closeBottomSheet, 300);
                            }}
                            className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                              aspectRatio === ratio.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {ratio.label}
                          </button>
                        ))}
                      </div>
                    </Card>

                    {/* Zoom */}
                    <Card className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Zoom</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Button onClick={() => zoomCrop(0.1)} variant="outline" className="w-full" size="sm">
                          <ZoomIn className="mr-1" size={16} />
                          Zoom In
                        </Button>
                        <Button onClick={() => zoomCrop(-0.1)} variant="outline" className="w-full" size="sm">
                          <ZoomOut className="mr-1" size={16} />
                          Zoom Out
                        </Button>
                      </div>
                    </Card>

                    {/* Transform */}
                    <Card className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">Transform</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          onClick={() => {
                            rotateCrop(-90);
                            setTimeout(closeBottomSheet, 300);
                          }}
                          variant="outline"
                          className="w-full"
                          size="sm"
                        >
                          <RotateCcw className="mr-1" size={16} />
                          Rotate Left
                        </Button>
                        <Button
                          onClick={() => {
                            rotateCrop(90);
                            setTimeout(closeBottomSheet, 300);
                          }}
                          variant="outline"
                          className="w-full"
                          size="sm"
                        >
                          <RotateCw className="mr-1" size={16} />
                          Rotate Right
                        </Button>
                        <Button
                          onClick={() => {
                            flipCrop('horizontal');
                            setTimeout(closeBottomSheet, 300);
                          }}
                          variant="outline"
                          className="w-full"
                          size="sm"
                        >
                          <FlipHorizontal className="mr-1" size={16} />
                          Flip H
                        </Button>
                        <Button
                          onClick={() => {
                            flipCrop('vertical');
                            setTimeout(closeBottomSheet, 300);
                          }}
                          variant="outline"
                          className="w-full"
                          size="sm"
                        >
                          <FlipVertical className="mr-1" size={16} />
                          Flip V
                        </Button>
                      </div>
                    </Card>

                    {/* Close Button */}
                    <Button onClick={closeBottomSheet} variant="outline" className="w-full mt-4">
                      Close Controls
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* How It Works */}
        {!imageUrl && (
          <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Crop Images Online</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-3">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Upload Image</h3>
                <p className="text-gray-600 text-sm">Choose an image from your device or drag and drop it into the upload area</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mb-3">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Adjust & Crop</h3>
                <p className="text-gray-600 text-sm">Select aspect ratio, drag to position, zoom, rotate, or flip as needed</p>
              </div>
              <div>
                <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mb-3">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Download</h3>
                <p className="text-gray-600 text-sm">Click crop & download to save your perfectly cropped image</p>
              </div>
            </div>
          </Card>
        )}

        {/* Benefits */}
        {!imageUrl && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Use Our Image Cropper?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-blue-500">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="text-blue-600 mr-2" size={20} />
                  Free & Unlimited
                </h3>
                <p className="text-gray-600 text-sm">Crop as many images as you want, completely free. No signup, no hidden costs, no watermarks.</p>
              </Card>

              <Card className="p-6 border-l-4 border-purple-500">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="text-purple-600 mr-2" size={20} />
                  Privacy First
                </h3>
                <p className="text-gray-600 text-sm">All image processing happens locally in your browser. Your images never leave your device.</p>
              </Card>

              <Card className="p-6 border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Professional Quality
                </h3>
                <p className="text-gray-600 text-sm">High-quality output with precise cropping controls. Perfect for social media, websites, and printing.</p>
              </Card>

              <Card className="p-6 border-l-4 border-orange-500">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="text-orange-600 mr-2" size={20} />
                  Easy to Use
                </h3>
                <p className="text-gray-600 text-sm">Intuitive interface with preset aspect ratios and helpful tools. No design experience needed.</p>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
