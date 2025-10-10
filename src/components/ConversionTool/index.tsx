'use client';

import { useState } from 'react';
import { Zap, AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container, Section, Heading, Text, Stack, GradientButton, Card, QualitySlider } from '@/components/ui';
import { FileDropzone, FormatSelector } from '@/components/patterns';
import { useConversion, useFormats } from '@/hooks';
import { ConversionResultModal } from '../ConversionResultModal';

export function ConversionTool() {
  const t = useTranslations('converter');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { supportsQuality } = useFormats();

  const { selectedFile, inputFormat, outputFormat, quality, result, error, isConverting, canConvert, setSelectedFile, setOutputFormat, setQuality, convert, reset, clearError } = useConversion({
    onSuccess: () => setIsModalOpen(true),
  });

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    clearError();
  };

  const handleConvertAnother = () => {
    reset();
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const showQualityControl = outputFormat && supportsQuality(outputFormat);

  return (
    <Section background="muted" padding="lg">
      <Container size="lg">
        <Stack spacing={12}>
          {/* Header */}
          <Stack spacing={4} align="center" className="text-center">
            <Heading level="h2" as="h2">
              {t('uploadYourImage')}
            </Heading>
            <Text size="lg" color="muted">
              {t('chooseOutputFormat')}
            </Text>
          </Stack>

          {/* Conversion Form */}
          <Card className="p-8 bg-white dark:bg-gray-900 shadow-lg">
            <Stack spacing={6}>
              {/* File Dropzone */}
              <FileDropzone
                selectedFile={selectedFile}
                onFileSelect={handleFileSelect}
                messages={{
                  dragDrop: t('dragDropHere'),
                  dropHere: t('dropFileHere'),
                  orClickBrowse: t('orClickBrowse'),
                  releaseToUpload: t('releaseToUpload'),
                  chooseFile: t('chooseFile'),
                }}
              />

              {/* Format Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormatSelector value={inputFormat} onValueChange={setOutputFormat} label={t('inputFormat')} placeholder={t('autoDetected')} disabled className="rounded-lg" />

                <FormatSelector value={outputFormat} onValueChange={setOutputFormat} label={t('outputFormat')} placeholder={t('chooseOutputFormat')} className="rounded-lg" />
              </div>

              {/* Quality Control */}
              {showQualityControl && <QualitySlider value={quality} onChange={setQuality} label={t('quality')} lowLabel={t('lowerQuality')} highLabel={t('higherQuality')} />}

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

              {/* Convert Button */}
              <Stack align="center">
                <GradientButton size="lg" onClick={() => convert()} disabled={!canConvert || isConverting} className="disabled:opacity-50 disabled:cursor-not-allowed">
                  <Zap className={isConverting ? 'animate-spin' : ''} size={20} />
                  {isConverting ? t('converting') : t('convertImage')}
                </GradientButton>
              </Stack>
            </Stack>
          </Card>
        </Stack>
      </Container>

      {/* Conversion Result Modal */}
      <ConversionResultModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        result={result}
        originalFileName={selectedFile?.name}
        inputFormat={inputFormat}
        outputFormat={outputFormat}
        onConvertAnother={handleConvertAnother}
      />
    </Section>
  );
}
