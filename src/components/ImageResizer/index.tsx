'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Upload, Download, RotateCcw, Maximize2, Image as ImageIcon, CheckCircle, Settings, Sliders } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '@/components/Card';

type ResizeMode = 'percentage' | 'pixels' | 'preset';
type PresetSize = 'thumbnail' | 'small' | 'medium' | 'large' | 'hd' | 'fullhd' | '4k';

interface PresetDimensions {
  width: number;
  height: number;
  label: string;
  description: string;
}

const presets: Record<PresetSize, PresetDimensions> = {
  thumbnail: { width: 150, height: 150, label: 'Thumbnail', description: '150×150' },
  small: { width: 640, height: 480, label: 'Small', description: '640×480' },
  medium: { width: 1280, height: 720, label: 'Medium (HD)', description: '1280×720' },
  large: { width: 1920, height: 1080, label: 'Large (Full HD)', description: '1920×1080' },
  hd: { width: 1280, height: 720, label: 'HD', description: '1280×720' },
  fullhd: { width: 1920, height: 1080, label: 'Full HD', description: '1920×1080' },
  '4k': { width: 3840, height: 2160, label: '4K', description: '3840×2160' },
};

export function ImageResizer() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [resizeMode, setResizeMode] = useState<ResizeMode>('percentage');
  const [percentage, setPercentage] = useState(50);
  const [customWidth, setCustomWidth] = useState(800);
  const [customHeight, setCustomHeight] = useState(600);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState(true);
  const [selectedPreset, setSelectedPreset] = useState<PresetSize>('medium');
  const [isResizing, setIsResizing] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileSelection(file);
    }
  };

  const handleFileSelection = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }

    setSelectedFile(file);
    const url = URL.createObjectURL(file);
    setImageUrl(url);

    // Get original dimensions
    const img = new Image();
    img.onload = () => {
      setOriginalDimensions({ width: img.width, height: img.height });
      setCustomWidth(img.width);
      setCustomHeight(img.height);
    };
    img.src = url;
  };

  const handleWidthChange = (width: number) => {
    setCustomWidth(width);
    if (maintainAspectRatio && originalDimensions.width > 0) {
      const aspectRatio = originalDimensions.height / originalDimensions.width;
      setCustomHeight(Math.round(width * aspectRatio));
    }
  };

  const handleHeightChange = (height: number) => {
    setCustomHeight(height);
    if (maintainAspectRatio && originalDimensions.height > 0) {
      const aspectRatio = originalDimensions.width / originalDimensions.height;
      setCustomWidth(Math.round(height * aspectRatio));
    }
  };

  const handleResize = async () => {
    if (!imageUrl) return;

    setIsResizing(true);

    try {
      let targetWidth: number;
      let targetHeight: number;

      if (resizeMode === 'percentage') {
        targetWidth = Math.round((originalDimensions.width * percentage) / 100);
        targetHeight = Math.round((originalDimensions.height * percentage) / 100);
      } else if (resizeMode === 'preset') {
        const preset = presets[selectedPreset];
        targetWidth = preset.width;
        targetHeight = preset.height;
      } else {
        targetWidth = customWidth;
        targetHeight = customHeight;
      }

      // Create a canvas to resize the image
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Could not get canvas context');

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // Load and draw the image
      const img = new Image();
      img.crossOrigin = 'anonymous';

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });

      // Use high-quality image smoothing
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(img, 0, 0, targetWidth, targetHeight);

      // Convert to blob and download
      canvas.toBlob(
        blob => {
          if (blob) {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `resized-${selectedFile?.name.replace(/\.[^/.]+$/, '') || 'image'}.png`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
          }
          setIsResizing(false);
        },
        'image/png',
        1.0,
      );
    } catch (error) {
      console.error('Error resizing image:', error);
      alert('Failed to resize image. Please try again.');
      setIsResizing(false);
    }
  };

  const handleReset = () => {
    setPercentage(50);
    setCustomWidth(originalDimensions.width);
    setCustomHeight(originalDimensions.height);
    setMaintainAspectRatio(true);
  };

  const handleNewImage = () => {
    if (imageUrl) {
      URL.revokeObjectURL(imageUrl);
    }
    setImageUrl(null);
    setSelectedFile(null);
    setOriginalDimensions({ width: 0, height: 0 });
  };

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

  const getOutputDimensions = () => {
    if (resizeMode === 'percentage') {
      return {
        width: Math.round((originalDimensions.width * percentage) / 100),
        height: Math.round((originalDimensions.height * percentage) / 100),
      };
    } else if (resizeMode === 'preset') {
      return { width: presets[selectedPreset].width, height: presets[selectedPreset].height };
    }
    return { width: customWidth, height: customHeight };
  };

  const outputDims = getOutputDimensions();

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
                onClick={() => fileInputRef.current?.click()}
              >
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />

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
                    <Button onClick={handleResize} className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white mb-2" disabled={isResizing}>
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

            {/* Mobile Bottom Sheet */}
            <div className="lg:hidden">
              {/* Mobile Instructions */}
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800">
                <p className="font-medium mb-1">📱 Mobile Controls</p>
                <p className="text-xs">Tap the buttons below to resize or adjust settings</p>
              </div>

              {/* Floating Action Buttons */}
              <div className="fixed bottom-6 right-4 z-40 flex flex-col gap-3">
                <Button
                  onClick={handleResize}
                  className="h-14 w-14 rounded-full shadow-2xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white p-0"
                  disabled={isResizing}
                >
                  <Download size={24} />
                </Button>
                <Button onClick={() => setIsBottomSheetOpen(true)} className="h-14 w-14 rounded-full shadow-2xl bg-white hover:bg-gray-50 text-gray-900 p-0 border-2 border-gray-200">
                  <Sliders size={24} />
                </Button>
              </div>

              {/* Bottom Sheet Overlay */}
              {isBottomSheetOpen && <div className="fixed inset-0 bg-transparent z-50 transition-opacity" onClick={() => setIsBottomSheetOpen(false)} />}

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
                    <h3 className="text-lg font-semibold text-gray-900">Resize Settings</h3>
                    <button onClick={() => setIsBottomSheetOpen(false)} className="text-gray-500 hover:text-gray-700 p-2">
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
                            handleResize();
                            setIsBottomSheetOpen(false);
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
                          onClick={() => {
                            setResizeMode('percentage');
                          }}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            resizeMode === 'percentage' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          %
                        </button>
                        <button
                          onClick={() => {
                            setResizeMode('pixels');
                          }}
                          className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                            resizeMode === 'pixels' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          Pixels
                        </button>
                        <button
                          onClick={() => {
                            setResizeMode('preset');
                          }}
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
                                setTimeout(() => setIsBottomSheetOpen(false), 300);
                              }}
                              className={`w-full px-4 py-2 rounded-lg text-left transition-colors ${
                                selectedPreset === key ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                              }`}
                            >
                              <div className="font-medium text-sm">{presets[key].label}</div>
                              <div className={`text-xs ${selectedPreset === key ? 'text-green-100' : 'text-gray-500'}`}>{presets[key].description}</div>
                            </button>
                          ))}
                        </div>
                      </Card>
                    )}

                    {/* Close Button */}
                    <Button onClick={() => setIsBottomSheetOpen(false)} variant="outline" className="w-full mt-4">
                      Close Settings
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* How It Works */}
        {!imageUrl && (
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
        )}

        {/* Benefits */}
        {!imageUrl && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Use Our Image Resizer?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-l-4 border-green-500">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="text-green-600 mr-2" size={20} />
                  Multiple Resize Options
                </h3>
                <p className="text-gray-600 text-sm">Choose from percentage scaling, exact pixel dimensions, or convenient presets for common sizes.</p>
              </Card>

              <Card className="p-6 border-l-4 border-emerald-500">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="text-emerald-600 mr-2" size={20} />
                  Maintain Quality
                </h3>
                <p className="text-gray-600 text-sm">Smart resizing algorithms preserve image quality while reducing or increasing dimensions.</p>
              </Card>

              <Card className="p-6 border-l-4 border-teal-500">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="text-teal-600 mr-2" size={20} />
                  Free & Unlimited
                </h3>
                <p className="text-gray-600 text-sm">Resize as many images as you want, completely free. No signup, no hidden costs, no watermarks.</p>
              </Card>

              <Card className="p-6 border-l-4 border-cyan-500">
                <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <CheckCircle className="text-cyan-600 mr-2" size={20} />
                  Privacy First
                </h3>
                <p className="text-gray-600 text-sm">All image processing happens locally in your browser. Your images never leave your device.</p>
              </Card>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
