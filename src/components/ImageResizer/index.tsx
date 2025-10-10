'use client';

import { useState } from 'react';
import { ArrowLeft, Download, RotateCcw, Maximize2 } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container, Heading, Text, Stack, Card, GradientButton, Button } from '@/components/ui';
import { FileDropzone } from '@/components/patterns';
import { useImageResize } from '@/hooks';
import { ResizeOptionsPanel } from './ResizeOptionsPanel';

export function ImageResizer() {
  const t = useTranslations('resizer');
  const tConverter = useTranslations('converter');
  const [downloadBlob, setDownloadBlob] = useState<Blob | null>(null);

  const {
    selectedFile,
    imageUrl,
    originalDimensions,
    currentDimensions,
    resizeMode,
    percentage,
    customWidth,
    customHeight,
    maintainAspectRatio,
    selectedPreset,
    isResizing,
    setSelectedFile,
    setResizeMode,
    setPercentage,
    setCustomWidth,
    setCustomHeight,
    setMaintainAspectRatio,
    setSelectedPreset,
    resize,
    reset,
    canResize,
  } = useImageResize({
    onSuccess: blob => setDownloadBlob(blob),
  });

  const handleDownload = () => {
    if (!downloadBlob || !selectedFile) return;

    const url = URL.createObjectURL(downloadBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `resized-${selectedFile.name.replace(/\.[^/.]+$/, '')}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = () => {
    reset();
    setDownloadBlob(null);
  };

  return (
    <>
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <Container size="xl" className="py-6">
          <Stack direction="row" spacing={4} align="center">
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft size={16} />
                {tConverter('backToHome')}
              </Button>
            </Link>
            <Stack spacing={1}>
              <Heading level="h2" as="h1">
                {t('title')}
              </Heading>
              <Text color="muted">{t('description')}</Text>
            </Stack>
          </Stack>
        </Container>
      </div>

      <Container size="xl" padding="lg" className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Upload & Options */}
          <Stack spacing={6}>
            {/* Upload */}
            <Card className="p-6">
              <Heading level="h4" className="mb-4">
                {t('uploadImageToResize')}
              </Heading>
              <FileDropzone
                selectedFile={selectedFile}
                onFileSelect={setSelectedFile}
                messages={{
                  dragDrop: t('dragDropResize'),
                  dropHere: tConverter('dropFileHere'),
                  orClickBrowse: tConverter('orClickBrowse'),
                  releaseToUpload: tConverter('releaseToUpload'),
                  chooseFile: tConverter('chooseFile'),
                }}
              />
            </Card>

            {/* Options */}
            {selectedFile && (
              <Card className="p-6">
                <ResizeOptionsPanel
                  resizeMode={resizeMode}
                  percentage={percentage}
                  customWidth={customWidth}
                  customHeight={customHeight}
                  maintainAspectRatio={maintainAspectRatio}
                  selectedPreset={selectedPreset}
                  originalDimensions={originalDimensions}
                  onModeChange={setResizeMode}
                  onPercentageChange={setPercentage}
                  onWidthChange={setCustomWidth}
                  onHeightChange={setCustomHeight}
                  onAspectRatioChange={setMaintainAspectRatio}
                  onPresetChange={setSelectedPreset}
                  t={t}
                />
              </Card>
            )}

            {/* Action Buttons */}
            {selectedFile && (
              <Stack direction="row" spacing={4}>
                <GradientButton size="lg" onClick={resize} disabled={!canResize || isResizing} className="flex-1 disabled:opacity-50" gradient="green">
                  <Maximize2 size={20} />
                  {isResizing ? t('resizing') : t('resizeAndDownload')}
                </GradientButton>

                {downloadBlob && (
                  <Button size="lg" onClick={handleDownload} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
                    <Download size={20} />
                    {t('downloadResized')}
                  </Button>
                )}

                <Button variant="outline" size="lg" onClick={handleReset}>
                  <RotateCcw size={20} />
                  {t('resizeAnother')}
                </Button>
              </Stack>
            )}
          </Stack>

          {/* Right Column - Preview */}
          {imageUrl && (
            <Card className="p-6">
              <Heading level="h4" className="mb-4">
                {tConverter('preview')}
              </Heading>
              <div className="relative bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imageUrl} alt="Preview" className="w-full h-auto rounded-lg" />
                <div className="mt-4 p-3 bg-white dark:bg-gray-800 rounded-lg">
                  <Stack spacing={2}>
                    <Stack direction="row" justify="between">
                      <Text size="sm" color="muted">
                        {t('originalSize')}:
                      </Text>
                      <Text size="sm" weight="medium">
                        {originalDimensions.width} × {originalDimensions.height}
                      </Text>
                    </Stack>
                    <Stack direction="row" justify="between">
                      <Text size="sm" color="muted">
                        {t('newSize')}:
                      </Text>
                      <Text size="sm" weight="medium" className="text-green-600 dark:text-green-400">
                        {currentDimensions.width} × {currentDimensions.height}
                      </Text>
                    </Stack>
                  </Stack>
                </div>
              </div>
            </Card>
          )}
        </div>
      </Container>
    </>
  );
}
