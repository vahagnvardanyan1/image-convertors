'use client';

import { useState } from 'react';
import { Zap, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section, Heading, Text, Stack, Card, GradientButton, Button } from '@/components/ui';
import { MultiFileDropzone } from '@/components/patterns';
import { usePDFTool, type PDFToolMode } from '@/hooks';
import { PDFResultModal } from '../PDFResultModal';
import { PDFOptionsPanel } from './PDFOptionsPanel';
import { PDFFileList } from './PDFFileList';
import { getAcceptedFileTypes, getAllowsMultiple, getProcessButtonText, getDropzoneMessage, updateSplitRange } from './utils';

interface PDFToolProps {
  mode: PDFToolMode;
  title: string;
  description: string;
}

export function PDFTool({ mode, title, description }: PDFToolProps) {
  const t = useTranslations('pdfTool');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    selectedFiles,
    isProcessing,
    error,
    result,
    imageFormat,
    imageQuality,
    imageScale,
    pageRange,
    pageSize,
    orientation,
    margin,
    fitToPage,
    splitRanges,
    setSelectedFiles,
    setImageFormat,
    setImageQuality,
    setImageScale,
    setPageRange,
    setPageSize,
    setOrientation,
    setMargin,
    setFitToPage,
    setSplitRanges,
    process,
    reset,
    canProcess,
  } = usePDFTool({
    mode,
    onSuccess: () => setIsModalOpen(true),
  });

  const handleReset = () => {
    reset();
    setIsModalOpen(false);
  };

  return (
    <>
      <Section background="muted" padding="lg">
        <Container size="lg">
          <Stack spacing={12}>
            {/* Header */}
            <Stack spacing={4} align="center" className="text-center">
              <Heading level="h2" as="h1">
                {title}
              </Heading>
              <Text size="lg" color="muted">
                {description}
              </Text>
            </Stack>

            {/* Main Card */}
            <Card className="p-8 bg-white dark:bg-gray-900 shadow-lg">
              <Stack spacing={6}>
                {/* File Upload */}
                <MultiFileDropzone
                  selectedFiles={selectedFiles}
                  onFilesSelect={setSelectedFiles}
                  accept={getAcceptedFileTypes(mode)}
                  messages={{
                    dragDrop: getDropzoneMessage(mode, t),
                    dropHere: t('dropFilesHere'),
                    orClickBrowse: t('orClickToBrowse'),
                    releaseToUpload: t('releaseToUpload'),
                    chooseFiles: getAllowsMultiple(mode) ? t('chooseFiles') : t('chooseFile'),
                    filesSelected: t('filesSelected'),
                  }}
                  renderFileList={files => <PDFFileList files={files} mode={mode} t={t} />}
                />

                {/* Error Display */}
                {error && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                    <Stack direction="row" spacing={2} align="center">
                      <AlertCircle className="text-red-500 dark:text-red-400 shrink-0" size={20} />
                      <Text size="sm" className="text-red-700 dark:text-red-400">
                        {error}
                      </Text>
                    </Stack>
                  </div>
                )}

                {/* Options Panel */}
                {selectedFiles.length > 0 && (
                  <PDFOptionsPanel
                    mode={mode}
                    imageFormat={imageFormat}
                    imageQuality={imageQuality}
                    imageScale={imageScale}
                    pageRange={pageRange}
                    pageSize={pageSize}
                    orientation={orientation}
                    margin={margin}
                    fitToPage={fitToPage}
                    splitRanges={splitRanges}
                    onImageFormatChange={setImageFormat}
                    onImageQualityChange={setImageQuality}
                    onImageScaleChange={setImageScale}
                    onPageRangeChange={setPageRange}
                    onPageSizeChange={setPageSize}
                    onOrientationChange={setOrientation}
                    onMarginChange={setMargin}
                    onFitToPageChange={setFitToPage}
                    onSplitRangeUpdate={(index, field, value) => setSplitRanges(updateSplitRange(splitRanges, index, field, value))}
                    onSplitRangeAdd={() => setSplitRanges([...splitRanges, { start: 1, end: 1 }])}
                    onSplitRangeRemove={index => setSplitRanges(splitRanges.filter((_, i) => i !== index))}
                    t={t}
                  />
                )}

                {/* Action Buttons */}
                <Stack direction="row" spacing={4} justify="center">
                  <GradientButton size="lg" onClick={process} disabled={!canProcess || isProcessing} className="disabled:opacity-50">
                    <Zap className={isProcessing ? 'animate-spin' : ''} size={20} />
                    {isProcessing ? t('processing') : getProcessButtonText(mode, t)}
                  </GradientButton>

                  {selectedFiles.length > 0 && (
                    <Button variant="outline" size="lg" onClick={reset}>
                      {t('reset')}
                    </Button>
                  )}
                </Stack>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </Section>

      {/* Result Modal */}
      <PDFResultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} result={result} mode={mode} onReset={handleReset} />
    </>
  );
}
