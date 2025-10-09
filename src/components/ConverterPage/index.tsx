'use client';
import { useState, useRef } from 'react';
import { ArrowLeft, Upload, FileImage, Settings, Zap, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card } from '@/components/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../Accordion';
import { convertImage, validateImageFile, cleanupImageUrl, type ConversionResult, type SupportedFormat } from '../../lib/imageConverter';
import { ConversionResultModal } from '../ConversionResultModal';
import { useTranslations } from 'next-intl';

interface ConverterPageProps {
  from: string;
  to: string;
  title: string;
}

export function ConverterPage({ from, to, title }: ConverterPageProps) {
  const t = useTranslations('converterPage');
  const tConverter = useTranslations('converter');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState(to.toLowerCase());
  const [isConverting, setIsConverting] = useState(false);
  const [conversionResult, setConversionResult] = useState<ConversionResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [quality, setQuality] = useState(0.9);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Only set dragOver to false if we're leaving the drop zone entirely
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
    setError(null);
    setConversionResult(null);

    if (!validateImageFile(file)) {
      setError(tConverter('selectValidImageFormats'));
      return;
    }

    setSelectedFile(file);
  };

  const handleConvert = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setError(null);
    setConversionResult(null);

    try {
      const result = await convertImage(selectedFile, outputFormat as SupportedFormat, {
        quality,
        maxSizeMB: 10,
        maxWidthOrHeight: 4096,
        maintainAspectRatio: true,
      });

      setConversionResult(result);
      setIsModalOpen(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : tConverter('conversionFailed'));
    } finally {
      setIsConverting(false);
    }
  };

  const handleConvertAnother = () => {
    if (conversionResult) {
      cleanupImageUrl(conversionResult.url);
    }
    setSelectedFile(null);
    setConversionResult(null);
    setError(null);
    setIsModalOpen(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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
              <p className="text-gray-600">{tConverter('fastSecureFree')}</p>
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

              <div
                className={`border-2 border-dashed rounded-xl p-8 text-center transition-all duration-200 cursor-pointer ${
                  isDragOver ? 'border-blue-500 bg-blue-50 scale-105' : selectedFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => !selectedFile && fileInputRef.current?.click()}
              >
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />

                {!selectedFile ? (
                  <div>
                    <Upload className={`mx-auto mb-4 transition-all duration-200 ${isDragOver ? 'text-blue-500 scale-110' : 'text-gray-400'}`} size={48} />
                    <p className={`text-lg font-medium mb-2 transition-colors duration-200 ${isDragOver ? 'text-blue-600' : 'text-gray-900'}`}>
                      {isDragOver ? tConverter('dropFileHere') : tConverter('dragDropHere')}
                    </p>
                    <p className={`text-sm transition-colors duration-200 ${isDragOver ? 'text-blue-500' : 'text-gray-500'}`}>
                      {isDragOver ? tConverter('releaseToUpload') : tConverter('orClickBrowse')}
                    </p>
                    {!isDragOver && (
                      <Button
                        variant="outline"
                        onClick={e => {
                          e.stopPropagation();
                          fileInputRef.current?.click();
                        }}
                        className="mt-4 rounded-lg"
                      >
                        {tConverter('chooseFile')}
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-4">
                    <FileImage className="text-green-600" size={48} />
                    <div className="text-left">
                      <p className="font-medium text-gray-900">{selectedFile.name}</p>
                      <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={e => {
                        e.stopPropagation();
                        setSelectedFile(null);
                        if (fileInputRef.current) {
                          fileInputRef.current.value = '';
                        }
                      }}
                      className="text-red-600 hover:text-red-700"
                    >
                      {tConverter('remove')}
                    </Button>
                  </div>
                )}
              </div>

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
}
