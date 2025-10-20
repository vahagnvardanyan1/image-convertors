'use client';

import { useEffect } from 'react';
import { Download, RotateCcw, RotateCw, FlipHorizontal, FlipVertical, ZoomIn, ZoomOut, Maximize, Move, Crop, CheckCircle, Upload } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '../ui/button';
import { Card } from '@/components/Card';
import { ToolShell, ToolGrid } from '@/components/tooling/ToolShell';
import { ToolSection, ToolSidebar } from '@/components/tooling/ToolSection';
import { FileUploadZone } from '@/components/FileUploadZone';
import { useToast } from '@/components/ui/toast';
import { useUploadZone } from '@/hooks/useUploadZone';
import { useImageCrop } from '@/hooks/useImageCrop';
import { useBottomSheet } from '@/hooks/useBottomSheet';
import { validateImageFile } from '@/utils/fileValidation';
import { ASPECT_RATIOS } from '@/config/cropperConfig';

export const ImageCropper = () => {
  const tCommon = useTranslations('common');
  const tCrop = useTranslations('cropTool');
  const toast = useToast();

  const { imageUrl, cropper, aspectRatio, isCropping, imageRef, setImageUrl, setAspectRatio, initializeCropper, cropImage, resetCrop, rotateCrop, flipCrop, zoomCrop, destroyCropper } = useImageCrop();

  const { isOpen: isBottomSheetOpen, open: openBottomSheet, close: closeBottomSheet } = useBottomSheet();

  const handleFilesSelect = (files: File[]) => {
    const file = files[0];
    if (!file) return;

    if (!validateImageFile(file)) {
      toast.error(tCommon('selectValidImage'));
      return;
    }

    destroyCropper();
    const url = URL.createObjectURL(file);
    setImageUrl(url);
  };

  const { isDragOver, selectedFiles, fileInputRef, handleDragOver, handleDragLeave, handleDrop, handleFileSelect, triggerFileInput, clearFiles } = useUploadZone({
    onFilesSelect: handleFilesSelect,
    accept: 'image/*',
    multiple: false,
  });

  // Initialize cropper when image is loaded
  useEffect(() => {
    if (imageRef.current && imageUrl && !cropper) {
      initializeCropper({
        imageElement: imageRef.current,
        aspectRatio,
      });
    }
  }, [imageUrl, imageRef, cropper, aspectRatio, initializeCropper]);

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
    clearFiles();
  };

  const handleCropClick = () => {
    const filename = selectedFiles[0] ? `cropped-${selectedFiles[0].name}` : 'cropped-image.png';
    cropImage({ filename });
  };

  return (
    <ToolShell
      header={{
        title: tCrop('title'),
        description: tCrop('description'),
        backText: tCommon('backToHome'),
      }}
    >
      {!imageUrl ? (
        <>
          {/* Upload Area */}
          <Card className="mb-8">
            <FileUploadZone
              isDragOver={isDragOver}
              selectedFiles={selectedFiles}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={triggerFileInput}
              fileInputRef={fileInputRef}
              onFileSelect={handleFileSelect}
              accept="image/*"
              dragOverText={tCommon('dropFileHere')}
              defaultText={tCrop('uploadPrompt')}
              browseText={tCommon('orClickBrowse')}
              releaseText={tCommon('releaseToUpload')}
              chooseFileText={tCommon('chooseFile')}
              className="p-12"
            />
          </Card>

          {/* Features */}
          <ToolGrid columns={2} className="lg:grid-cols-4 mb-12">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Crop className="text-blue-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tCrop('feature1Title')}</h3>
              <p className="text-gray-600 text-sm">{tCrop('feature1Desc')}</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Maximize className="text-purple-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tCrop('feature2Title')}</h3>
              <p className="text-gray-600 text-sm">{tCrop('feature2Desc')}</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Move className="text-green-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tCrop('feature3Title')}</h3>
              <p className="text-gray-600 text-sm">{tCrop('feature3Desc')}</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-orange-600" size={24} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{tCrop('feature4Title')}</h3>
              <p className="text-gray-600 text-sm">{tCrop('feature4Desc')}</p>
            </Card>
          </ToolGrid>
        </>
      ) : (
        <>
          {/* Cropper Interface */}
          <div className="mb-4 sm:mb-6 flex items-center justify-between">
            <Button onClick={handleNewImage} variant="outline" size="sm">
              <Upload className="mr-2" size={16} />
              {tCrop('uploadDifferent')}
            </Button>
            <p className="text-sm text-gray-600 hidden lg:block">{tCrop('controlsHint')}</p>
          </div>

          <ToolGrid columns={3}>
            {/* Cropper Canvas - Main Area */}
            <div className="lg:col-span-2">
              <Card className="p-4 sm:p-6">
                <div className="max-w-full overflow-hidden">
                  <img ref={imageRef} src={imageUrl} alt="Crop preview" className="max-w-full block" />
                </div>
              </Card>
            </div>

            {/* Desktop Controls Sidebar - Hidden on Mobile */}
            <ToolSidebar className="hidden lg:block">
              {/* Actions - Always Visible */}
              <Card className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
                <div className="flex flex-col gap-2">
                  <Button onClick={handleCropClick} className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" disabled={isCropping}>
                    <Download className="mr-2" size={18} />
                    {isCropping ? tCrop('cropping') : tCrop('cropDownload')}
                  </Button>
                  <Button onClick={resetCrop} variant="outline" className="border-2">
                    <RotateCcw className="mr-2" size={16} />
                    {tCommon('reset')}
                  </Button>
                </div>
              </Card>

              {/* Aspect Ratio */}
              <ToolSection title={tCrop('aspectRatio')}>
                <div className="grid grid-cols-3 gap-2">
                  {ASPECT_RATIOS.map(ratio => (
                    <button
                      key={ratio.label}
                      onClick={() => setAspectRatio(ratio.value)}
                      className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${aspectRatio === ratio.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      {ratio.label}
                    </button>
                  ))}
                </div>
              </ToolSection>

              {/* Zoom */}
              <ToolSection title={tCrop('zoom')}>
                <div className="grid grid-cols-2 gap-2">
                  <Button onClick={() => zoomCrop(0.1)} variant="outline" className="w-full" size="sm">
                    <ZoomIn className="mr-1" size={16} />
                    {tCrop('in')}
                  </Button>
                  <Button onClick={() => zoomCrop(-0.1)} variant="outline" className="w-full" size="sm">
                    <ZoomOut className="mr-1" size={16} />
                    {tCrop('out')}
                  </Button>
                </div>
              </ToolSection>

              {/* Transform */}
              <ToolSection title={tCrop('transform')}>
                <div className="grid grid-cols-2 gap-2">
                  <Button onClick={() => rotateCrop(-90)} variant="outline" className="w-full" size="sm">
                    <RotateCcw className="mr-1" size={16} />
                    {tCrop('left')}
                  </Button>
                  <Button onClick={() => rotateCrop(90)} variant="outline" className="w-full" size="sm">
                    <RotateCw className="mr-1" size={16} />
                    {tCrop('right')}
                  </Button>
                  <Button onClick={() => flipCrop('horizontal')} variant="outline" className="w-full" size="sm">
                    <FlipHorizontal className="mr-1" size={16} />
                    {tCrop('hFlip')}
                  </Button>
                  <Button onClick={() => flipCrop('vertical')} variant="outline" className="w-full" size="sm">
                    <FlipVertical className="mr-1" size={16} />
                    {tCrop('vFlip')}
                  </Button>
                </div>
              </ToolSection>
            </ToolSidebar>
          </ToolGrid>

          {/* Mobile Bottom Sheet */}
          <div className="lg:hidden">
            {/* Mobile Instructions */}
            <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800">
              <p className="font-medium mb-1">📱 {tCrop('mobileControls')}</p>
              <p className="text-xs">{tCrop('mobileHint')}</p>
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
              className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl z-50 transition-transform duration-300 ease-out ${isBottomSheetOpen ? 'translate-y-0' : 'translate-y-full'}`}
            >
              <div className="p-4 max-h-[80vh] overflow-y-auto">
                {/* Handle Bar */}
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
                </div>

                {/* Bottom Sheet Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{tCrop('cropControls')}</h3>
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
                        {isCropping ? tCrop('cropping') : tCrop('download')}
                      </Button>
                      <Button onClick={resetCrop} variant="outline" className="flex-1 border-2">
                        <RotateCcw className="mr-2" size={16} />
                        {tCommon('reset')}
                      </Button>
                    </div>
                  </Card>

                  {/* Aspect Ratio */}
                  <Card className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">{tCrop('aspectRatio')}</h4>
                    <div className="grid grid-cols-3 gap-2">
                      {ASPECT_RATIOS.map(ratio => (
                        <button
                          key={ratio.label}
                          onClick={() => {
                            setAspectRatio(ratio.value);
                            setTimeout(closeBottomSheet, 300);
                          }}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${aspectRatio === ratio.value ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                        >
                          {ratio.label}
                        </button>
                      ))}
                    </div>
                  </Card>

                  {/* Zoom */}
                  <Card className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">{tCrop('zoom')}</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button onClick={() => zoomCrop(0.1)} variant="outline" className="w-full" size="sm">
                        <ZoomIn className="mr-1" size={16} />
                        {tCrop('zoomIn')}
                      </Button>
                      <Button onClick={() => zoomCrop(-0.1)} variant="outline" className="w-full" size="sm">
                        <ZoomOut className="mr-1" size={16} />
                        {tCrop('zoomOut')}
                      </Button>
                    </div>
                  </Card>

                  {/* Transform */}
                  <Card className="p-4">
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm">{tCrop('transform')}</h4>
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
                        {tCrop('rotateLeft')}
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
                        {tCrop('rotateRight')}
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
                        {tCrop('flipH')}
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
                        {tCrop('flipV')}
                      </Button>
                    </div>
                  </Card>

                  {/* Close Button */}
                  <Button onClick={closeBottomSheet} variant="outline" className="w-full mt-4">
                    {tCrop('closeControls')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </ToolShell>
  );
};
