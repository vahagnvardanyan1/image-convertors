'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import { ArrowLeft, FileImage, Settings, Zap, AlertCircle } from 'lucide-react';

import { Button } from '../ui/button';
import { Card } from '@/components/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../Accordion';
import { ConversionResultModal } from '../ConversionResultModal';
import { FileUploadZone } from '../FileUploadZone';

import { useDragAndDrop } from '@/hooks/useDragAndDrop';
import { useFileUpload } from '@/hooks/useFileUpload';
import { useImageConversion } from '@/hooks/useImageConversion';

import { validateImageFile } from '@/utils/fileValidation';

import type { SupportedFormat } from '@/lib/imageConverter';

interface ConverterPageProps {
  from: string;
  to: string;
  title: string;
  description: string;
}

export const ConverterPage = ({ from, to, title, description }: ConverterPageProps) => {
  const t = useTranslations('converterPage');
  const tConverter = useTranslations('converter');
  const [outputFormat, setOutputFormat] = useState(to.toLowerCase());
  const [quality, setQuality] = useState(0.9);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const {
    isConverting,
    conversionResult,
    error: conversionError,
    convert,
    reset,
  } = useImageConversion({
    onSuccess: () => setIsModalOpen(true),
  });

  const handleFileSelect = (file: File) => {
    setValidationError(null);

    if (!validateImageFile(file)) {
      setValidationError(tConverter('selectValidImageFormats'));
      return;
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

  const handleConvert = async () => {
    if (!selectedFile) return;

    await convert({
      file: selectedFile,
      targetFormat: outputFormat as SupportedFormat,
      options: {
        quality,
        maxSizeMB: 10,
        maxWidthOrHeight: 4096,
        maintainAspectRatio: true,
      },
    });
  };

  const handleConvertAnother = () => {
    reset();
    clearFile();
    setIsModalOpen(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getStep2Description = () => {
    const baseDesc = t('step2Description', { format: to });
    const formatDesc = to === 'WebP' ? t('step2DescWebP', { format: to }) : to === 'PNG' ? t('step2DescPNG', { format: to }) : t('step2DescJPG', { format: to });
    return `${baseDesc} ${formatDesc}`;
  };

  const formatSteps = [
    {
      number: 1,
      title: t('step1Title', { format: from }),
      description: t('step1Description', { format: from }),
    },
    {
      number: 2,
      title: t('step2Title', { format: to }),
      description: getStep2Description(),
    },
    {
      number: 3,
      title: t('step3Title'),
      description: t('step3Description', { from, to }),
    },
    {
      number: 4,
      title: t('step4Title'),
      description: t('step4Description', { format: to }),
    },
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

  const faqs = [
    {
      question: t('whyConvert', { from, to }),
      answer: getConversionAnswer(),
      icon: FileImage,
    },
    {
      question: t('qualityAffected'),
      answer: getQualityAnswer(),
      icon: Settings,
    },
    {
      question: t('fileSizeSupport'),
      answer: t('fileSizeAnswer', { format: from }),
      icon: Zap,
    },
  ];

  const error = validationError || conversionError;

  return (
    <>
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="mr-2" size={16} />
                {tConverter('backToHome')}
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conversion Tool */}
          <div className="lg:col-span-2 space-y-6">
            {/* Upload Section */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. {tConverter('uploadYourImage')}</h2>

              <FileUploadZone
                isDragOver={isDragOver}
                selectedFile={selectedFile}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileInput}
                fileInputRef={fileInputRef}
                onFileSelect={onFileInputChange}
                dragOverText={tConverter('dropFileHere')}
                defaultText={tConverter('dragDropHere')}
                browseText={tConverter('orClickBrowse')}
                releaseText={tConverter('releaseToUpload')}
                chooseFileText={tConverter('chooseFile')}
              />

              {selectedFile && (
                <div className="mt-4 flex justify-end">
                  <Button
                    variant="outline"
                    onClick={e => {
                      e.stopPropagation();
                      clearFile();
                    }}
                    className="text-red-600 hover:text-red-700"
                  >
                    {tConverter('remove')}
                  </Button>
                </div>
              )}

              {/* Error Display */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-2">
                  <AlertCircle className="text-red-500" size={20} />
                  <p className="text-red-700">{error}</p>
                </div>
              )}
            </Card>

            {/* Format Selection */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. {tConverter('chooseOutputFormat')}</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{tConverter('convertTo')}:</label>
                  <Select value={outputFormat} onValueChange={setOutputFormat}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webp">{tConverter('formats.webpModern')}</SelectItem>
                      <SelectItem value="png">{tConverter('formats.pngLossless')}</SelectItem>
                      <SelectItem value="jpg">{tConverter('formats.jpgUniversal')}</SelectItem>
                      <SelectItem value="gif">{tConverter('formats.gifAnimation')}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Quality Control */}
                {(outputFormat === 'jpg' || outputFormat === 'webp') && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {tConverter('quality')}: {Math.round(quality * 100)}%
                    </label>
                    <input
                      type="range"
                      min="0.1"
                      max="1"
                      step="0.1"
                      value={quality}
                      onChange={e => setQuality(parseFloat(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>{tConverter('lowerQuality')}</span>
                      <span>{tConverter('higherQuality')}</span>
                    </div>
                  </div>
                )}
              </div>
            </Card>

            {/* Convert Button */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. {t('step3Convert')}</h2>

              <Button
                onClick={handleConvert}
                disabled={!selectedFile || isConverting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
              >
                {isConverting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {tConverter('converting')}
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Zap className="mr-2" size={20} />
                    {tConverter('convertTo')} {outputFormat.toUpperCase()}
                  </div>
                )}
              </Button>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How-To for this conversion */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                {t('howToConvert')} {from} {t('to')} {to}
              </h3>

              <Accordion type="single" collapsible className="w-full space-y-2">
                {formatSteps.map((step, index) => (
                  <AccordionItem
                    key={index}
                    value={`step-${index}`}
                    className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-1 data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-50 data-[state=open]:to-purple-50"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{step.number}</span>
                        </div>
                        <span className="font-medium text-gray-900 text-sm">{step.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-3 ml-9">
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Card>

            {/* Format-specific FAQs */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                {from} {t('to')} {to} {t('faq')}
              </h3>

              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => {
                  const IconComponent = faq.icon;
                  return (
                    <AccordionItem
                      key={index}
                      value={`faq-${index}`}
                      className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-1 data-[state=open]:bg-gradient-to-r data-[state=open]:from-blue-50 data-[state=open]:to-purple-50"
                    >
                      <AccordionTrigger className="text-left hover:no-underline py-3">
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <IconComponent className="text-white" size={12} />
                          </div>
                          <span className="font-medium text-gray-900 text-sm">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pb-3 ml-9">
                        <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </Card>
          </div>
        </div>
      </div>

      {/* Conversion Result Modal */}
      <ConversionResultModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        result={conversionResult}
        originalFileName={selectedFile?.name}
        inputFormat={from}
        outputFormat={outputFormat}
        onConvertAnother={handleConvertAnother}
      />
    </>
  );
};
