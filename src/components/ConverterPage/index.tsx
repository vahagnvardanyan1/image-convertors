'use client';

import { useState } from 'react';
import { ArrowLeft, FileImage, Settings, Zap, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Container, Heading, Text, Stack, Card, GradientButton, Button, QualitySlider } from '@/components/ui';
import { FileDropzone, FormatSelector, StepAccordion, FAQAccordion, type Step, type FAQ } from '@/components/patterns';
import { useConversion, useFormats } from '@/hooks';
import { ConversionResultModal } from '../ConversionResultModal';

interface ConverterPageProps {
  from: string;
  to: string;
  title: string;
  description: string;
}

export function ConverterPage({ from, to, title, description }: ConverterPageProps) {
  const t = useTranslations('converterPage');
  const tConverter = useTranslations('converter');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { supportsQuality } = useFormats();
  const { selectedFile, outputFormat, quality, result, error, isConverting, setSelectedFile, setOutputFormat, setQuality, convert, reset } = useConversion({
    defaultQuality: 0.9,
    onSuccess: () => setIsModalOpen(true),
  });

  const getStep2Description = () => {
    const baseDesc = t('step2Description', { format: to });
    const formatDesc = to === 'WebP' ? t('step2DescWebP', { format: to }) : to === 'PNG' ? t('step2DescPNG', { format: to }) : t('step2DescJPG', { format: to });
    return `${baseDesc} ${formatDesc}`;
  };

  const formatSteps: Step[] = [
    { number: 1, title: t('step1Title', { format: from }), description: t('step1Description', { format: from }) },
    { number: 2, title: t('step2Title', { format: to }), description: getStep2Description() },
    { number: 3, title: t('step3Title'), description: t('step3Description', { from, to }) },
    { number: 4, title: t('step4Title'), description: t('step4Description', { format: to }) },
  ];

  const getConversionAnswer = () => {
    if (to === 'WebP') return t('whyConvertWebP', { from, to });
    if (to === 'PNG') return t('whyConvertPNG', { from, to });
    return t('whyConvertJPG', { from, to });
  };

  const getQualityAnswer = () => {
    if (to === 'WebP') return t('qualityAnswerWebP', { from, to });
    if (to === 'PNG') return t('qualityAnswerPNG', { from, to });
    return t('qualityAnswerJPG', { from, to });
  };

  const faqs: FAQ[] = [
    { question: t('whyConvert', { from, to }), answer: getConversionAnswer(), icon: FileImage },
    { question: t('qualityAffected'), answer: getQualityAnswer(), icon: Settings },
    { question: t('fileSizeSupport'), answer: t('fileSizeAnswer', { format: from }), icon: Zap },
  ];

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
                {title}
              </Heading>
              <Text color="muted">{description}</Text>
            </Stack>
          </Stack>
        </Container>
      </div>

      <Container size="xl" padding="lg" className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conversion Tool */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <Card className="p-6">
              <Heading level="h4" className="mb-4">
                1. {tConverter('uploadYourImage')}
              </Heading>

              <Stack spacing={4}>
                <FileDropzone
                  selectedFile={selectedFile}
                  onFileSelect={setSelectedFile}
                  messages={{
                    dragDrop: tConverter('dragDropHere'),
                    dropHere: tConverter('dropFileHere'),
                    orClickBrowse: tConverter('orClickBrowse'),
                    releaseToUpload: tConverter('releaseToUpload'),
                    chooseFile: tConverter('chooseFile'),
                  }}
                />

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

                {selectedFile && (
                  <Button variant="outline" onClick={() => setSelectedFile(null)} className="text-red-600 hover:text-red-700">
                    {tConverter('remove')}
                  </Button>
                )}
              </Stack>
            </Card>

            {/* Format Selection */}
            <Card className="p-6">
              <Heading level="h4" className="mb-4">
                2. {tConverter('chooseOutputFormat')}
              </Heading>

              <Stack spacing={4}>
                <FormatSelector value={outputFormat.toUpperCase()} onValueChange={value => setOutputFormat(value.toLowerCase())} label={tConverter('convertTo')} className="w-full" />

                {supportsQuality(outputFormat) && (
                  <QualitySlider value={quality} onChange={setQuality} label={tConverter('quality')} lowLabel={tConverter('lowerQuality')} highLabel={tConverter('higherQuality')} />
                )}
              </Stack>
            </Card>

            {/* Convert Button */}
            <Card className="p-6">
              <Heading level="h4" className="mb-4">
                3. {t('step3Convert')}
              </Heading>

              <GradientButton size="lg" onClick={() => convert()} disabled={!selectedFile || isConverting} className="w-full disabled:opacity-50">
                {isConverting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                    {tConverter('converting')}
                  </>
                ) : (
                  <>
                    <Zap size={20} />
                    {tConverter('convertTo')} {outputFormat.toUpperCase()}
                  </>
                )}
              </GradientButton>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How-To */}
            <Card className="p-6">
              <Heading level="h4" className="mb-4">
                {t('howToConvert')} {from} {t('to')} {to}
              </Heading>
              <StepAccordion steps={formatSteps} />
            </Card>

            {/* FAQs */}
            <Card className="p-6">
              <Heading level="h4" className="mb-4">
                {from} {t('to')} {to} {t('faq')}
              </Heading>
              <FAQAccordion faqs={faqs} compact />
            </Card>
          </div>
        </div>
      </Container>

      <ConversionResultModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        result={result}
        originalFileName={selectedFile?.name}
        inputFormat={from}
        outputFormat={outputFormat}
        onConvertAnother={() => {
          reset();
          setIsModalOpen(false);
        }}
      />
    </>
  );
}
