'use client';
import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, FileImage, Download, Zap, Trash2, AlertCircle, Sparkles, Brain, Cpu, Lock, Upload, CheckCircle, Image as ImageIcon, ShoppingBag, User, Palette, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Card } from '@/components/Card';
import { removeBackground } from '@imgly/background-removal';

export function BackgroundRemover() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [originalPreview, setOriginalPreview] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const processingRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const downloadRef = useRef<HTMLDivElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  // Auto-scroll to processing indicator when processing starts
  useEffect(() => {
    if (isProcessing && processingRef.current) {
      setTimeout(() => {
        processingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [isProcessing]);

  // Auto-scroll to results when processing completes
  useEffect(() => {
    if (processedImage && previewRef.current) {
      setTimeout(() => {
        previewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    }
  }, [processedImage]);

  const handleFileSelect = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError('Please select a valid image file');
      return;
    }

    setSelectedFile(file);
    setError(null);
    setProcessedImage(null);

    // Create preview
    const reader = new FileReader();
    reader.onload = e => {
      setOriginalPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveBackground = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    setError(null);

    try {
      // Remove background using @imgly/background-removal
      const blob = await removeBackground(selectedFile);

      // Convert blob to data URL for preview
      const dataUrl = URL.createObjectURL(blob);
      setProcessedImage(dataUrl);
    } catch (err) {
      setError('Failed to remove background. Please try again with a different image.');
      console.error(err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;

    const link = document.createElement('a');
    link.href = processedImage;
    link.download = `${selectedFile?.name.replace(/\.[^/.]+$/, '')}_no_bg.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setOriginalPreview(null);
    setProcessedImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const features = [
    {
      title: 'AI-Powered',
      description: 'Advanced neural networks trained on millions of images for perfect edge detection',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Lightning Fast',
      description: 'Process images in seconds with optimized ML models running locally',
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      title: '100% Private',
      description: 'All processing happens in your browser - your images never leave your device',
      icon: Lock,
      gradient: 'from-green-500 to-teal-500',
    },
    {
      title: 'Professional Quality',
      description: 'Maintains image quality with transparent PNG output and perfect edges',
      icon: Sparkles,
      gradient: 'from-blue-500 to-cyan-500',
    },
  ];

  const howItWorksSteps = [
    {
      step: 1,
      title: 'Upload Your Image',
      description: 'Simply drag and drop or select any image from your device. Supports all major formats.',
      icon: Upload,
    },
    {
      step: 2,
      title: 'AI Processing',
      description: 'Our advanced AI analyzes your image and intelligently removes the background in seconds.',
      icon: Brain,
    },
    {
      step: 3,
      title: 'Download Result',
      description: 'Get a high-quality PNG with transparent background, ready to use anywhere.',
      icon: Download,
    },
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Create professional product photos with clean, transparent backgrounds for your online store.',
      icon: ShoppingBag,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Profile Pictures',
      description: 'Remove distracting backgrounds from portraits and headshots for a professional look.',
      icon: User,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Graphic Design',
      description: 'Isolate subjects for logos, posters, banners, and other creative projects.',
      icon: Palette,
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Photo Editing',
      description: 'Extract subjects to combine with different backgrounds or create stunning compositions.',
      icon: ImageIcon,
      gradient: 'from-green-500 to-teal-500',
    },
  ];

  const faqs = [
    {
      question: 'Is this background remover really free?',
      answer: 'Yes! Our AI background remover is completely free to use with no hidden fees, watermarks, or sign-up required. Process as many images as you need.',
    },
    {
      question: 'Are my images stored on your servers?',
      answer: 'No, all processing happens locally in your browser using AI technology. Your images never leave your device, ensuring complete privacy and security.',
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support all major image formats including JPG, JPEG, PNG, WebP, HEIC, and more. The output is always a PNG file with transparent background.',
    },
    {
      question: 'How accurate is the AI background removal?',
      answer: 'Our AI is trained on millions of images and uses advanced neural networks for accurate edge detection. It works best with clear subjects and good contrast.',
    },
    {
      question: 'What is the maximum file size?',
      answer: 'Since processing happens in your browser, the limit depends on your device. Most modern devices can handle images up to 10-20MB without issues.',
    },
    {
      question: 'Can I use the results commercially?',
      answer: 'Yes! You have full rights to use the processed images for any purpose, including commercial projects. The tool just processes your images without claiming any rights.',
    },
  ];

  return (
    <>
      {/* Header with gradient - hidden after image upload */}
      {!selectedFile && (
        <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 border-b border-purple-100 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-4 mb-6">
              <Link href="/">
                <Button variant="outline" className="flex items-center bg-white/80 backdrop-blur-sm hover:bg-white border-purple-200">
                  <ArrowLeft className="mr-2" size={16} />
                  Back to Home
                </Button>
              </Link>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg">
                <Sparkles className="text-white" size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-3">AI Background Remover</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">Remove backgrounds instantly with advanced AI technology. Perfect results in seconds.</p>
              <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>100% Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>Lightning Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Compact header when image is selected */}
      {selectedFile && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex items-center justify-between">
              <Link href="/">
                <Button variant="outline" size="sm" className="flex items-center hover:bg-gray-50 border-gray-200">
                  <ArrowLeft className="mr-2" size={14} />
                  Back
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <Sparkles className="text-white" size={16} />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">AI Background Remover</span>
              </div>
              <div className="w-16"></div> {/* Spacer for centering */}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Tool */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-8 bg-gradient-to-br from-white to-purple-50/30 border-2 border-purple-100 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg">
                  <FileImage className="text-white" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Upload Your Image</h2>
              </div>

              {!selectedFile ? (
                <div
                  className="relative border-2 border-dashed border-purple-300 rounded-2xl p-12 text-center hover:border-purple-500 hover:bg-purple-50/50 transition-all duration-300 cursor-pointer group"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                      <FileImage className="text-white" size={40} />
                    </div>
                    <p className="text-xl font-bold text-gray-900 mb-2">Drop your image here or click to browse</p>
                    <p className="text-gray-600 mb-4">Supports JPG, PNG, WebP and more formats</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-purple-600 font-medium">
                      <Sparkles size={16} />
                      <span>AI will remove the background automatically</span>
                    </div>
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={e => e.target.files?.[0] && handleFileSelect(e.target.files[0])} className="hidden" />
                </div>
              ) : (
                <>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-5 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-white rounded-lg shadow-sm">
                          <FileImage className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{selectedFile.name}</p>
                          <p className="text-sm text-gray-600">{formatFileSize(selectedFile.size)}</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={handleReset} className="flex items-center border-purple-200 hover:bg-white">
                        <Trash2 className="mr-2" size={16} />
                        Remove
                      </Button>
                    </div>

                    {!processedImage && !isProcessing && (
                      <Button
                        onClick={handleRemoveBackground}
                        className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        <Sparkles className="mr-2 animate-pulse" size={20} />
                        Remove Background with AI
                        <Zap className="ml-2" size={20} />
                      </Button>
                    )}
                  </div>
                </>
              )}

              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-red-700">{error}</span>
                </div>
              )}

              {isProcessing && (
                <div ref={processingRef} className="mt-6 text-center">
                  <div className="relative inline-flex flex-col items-center px-8 py-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200 shadow-lg">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Cpu className="text-white animate-pulse" size={32} />
                      </div>
                      <div className="absolute -top-1 -right-1">
                        <Sparkles className="text-yellow-400 animate-bounce" size={20} />
                      </div>
                    </div>
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">AI is working its magic...</span>
                    <span className="text-sm text-gray-600">Analyzing and removing background</span>
                    <div className="flex gap-1 mt-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}

              {(originalPreview || processedImage) && (
                <div ref={previewRef} className="mt-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-1 flex-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                    <h3 className="text-xl font-bold text-gray-900">Preview</h3>
                    <div className="h-1 flex-1 bg-gradient-to-l from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {originalPreview && (
                      <div className="group">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                          <p className="text-sm font-semibold text-gray-700">Original Image</p>
                        </div>
                        <div className="border-2 border-gray-200 rounded-xl p-4 bg-white shadow-md group-hover:shadow-lg transition-shadow overflow-hidden">
                          <img src={originalPreview} alt="Original" className="w-full h-auto rounded-lg" />
                        </div>
                      </div>
                    )}
                    {processedImage && (
                      <div className="group">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
                          <p className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">AI Processed</p>
                          <Sparkles className="text-purple-500 animate-pulse" size={16} />
                        </div>
                        <div
                          className="border-2 border-purple-200 rounded-xl p-4 relative shadow-md group-hover:shadow-xl transition-shadow overflow-hidden"
                          style={{
                            backgroundImage:
                              'linear-gradient(45deg, #f0f0f0 25%, transparent 25%), linear-gradient(-45deg, #f0f0f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #f0f0f0 75%), linear-gradient(-45deg, transparent 75%, #f0f0f0 75%)',
                            backgroundSize: '20px 20px',
                            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
                          }}
                        >
                          <div className="absolute top-2 right-2 px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1">
                            <Sparkles size={12} />
                            <span>Transparent</span>
                          </div>
                          <img src={processedImage} alt="Processed" className="w-full h-auto rounded-lg" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {processedImage && (
                <div ref={downloadRef} className="mt-8 flex gap-3">
                  <Button
                    onClick={handleDownload}
                    className="flex-1 bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    <Download className="mr-2" size={20} />
                    Download PNG
                    <Sparkles className="ml-2" size={16} />
                  </Button>
                  <Button variant="outline" onClick={handleReset} className="flex items-center border-2 border-gray-300 hover:bg-gray-50 px-6">
                    <Trash2 className="mr-2" size={16} />
                    Start Over
                  </Button>
                </div>
              )}
            </Card>
          </div>

          {/* Features Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-white to-purple-50/30 border-2 border-purple-100 shadow-lg">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-purple-600" size={24} />
                <h3 className="text-xl font-bold text-gray-900">AI Features</h3>
              </div>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="group p-4 bg-white rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all">
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 bg-gradient-to-br ${feature.gradient} rounded-lg shadow-md group-hover:scale-110 transition-transform`}>
                        <feature.icon className="h-5 w-5 text-white flex-shrink-0" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Demo Example Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It In <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Action</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Watch how our AI instantly removes backgrounds with perfect edge detection</p>
          </div>

          <Card className="overflow-hidden border-2 border-purple-200 shadow-2xl">
            <Image src="/bg-remove.webp" alt="AI Background Remover Example - Before and After" width={1200} height={630} className="w-full h-auto" priority />
          </Card>
        </div>

        {/* How It Works Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Works</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Remove backgrounds from your images in just three simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < howItWorksSteps.length - 1 && <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 z-0"></div>}
                <Card className="relative z-10 p-8 text-center bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
                    <step.icon className="text-white" size={32} />
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perfect For <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Every Need</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">From e-commerce to creative projects, our AI background remover has you covered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="group p-6 bg-white hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 cursor-pointer">
                <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${useCase.gradient} rounded-xl mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <useCase.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{useCase.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{useCase.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Everything you need to know about our AI background remover</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="overflow-hidden border-2 border-gray-100 hover:border-purple-200 transition-colors">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-50/50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`flex-shrink-0 text-purple-600 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`} size={20} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaqIndex === index ? 'max-h-48' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed border-t border-gray-100">{faq.answer}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 mb-12">
          <Card className="relative overflow-hidden bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 border-0">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative px-8 py-16 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
                <Sparkles className="text-white" size={48} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Remove Backgrounds?</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">Start using our free AI background remover now. No sign-up required, completely private, and lightning fast.</p>
              <Button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-50 font-semibold px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
              >
                <Upload className="mr-2" size={24} />
                Upload Your Image
                <Sparkles className="ml-2" size={20} />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
