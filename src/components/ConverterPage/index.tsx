import { useState } from 'react';
import { ArrowLeft, Upload, Download, FileImage, Settings, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '@/components/Card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../Accordion';

interface ConverterPageProps {
  from: string;
  to: string;
  title: string;
  onNavigate: (route: string) => void;
}

export function ConverterPage({ from, to, title, onNavigate }: ConverterPageProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [outputFormat, setOutputFormat] = useState(to.toLowerCase());
  const [isConverting, setIsConverting] = useState(false);
  const [converted, setConverted] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setConverted(false);
    }
  };

  const handleConvert = () => {
    if (!selectedFile) return;

    setIsConverting(true);
    // Simulate conversion process
    setTimeout(() => {
      setIsConverting(false);
      setConverted(true);
    }, 2000);
  };

  const handleDownload = () => {
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `converted-image.${outputFormat}`;
    link.click();
  };

  const formatSteps = [
    {
      number: 1,
      title: `Upload your ${from} image`,
      description: `Select your ${from} file by clicking the upload button or dragging and dropping it into the upload area. We'll automatically detect the format and prepare it for conversion.`,
    },
    {
      number: 2,
      title: `Choose ${to} as output`,
      description: `The output format is automatically set to ${to}, but you can change it if needed. ${to} format offers ${to === 'WebP' ? 'excellent compression with high quality' : to === 'PNG' ? 'lossless compression with transparency support' : 'universal compatibility and smaller file sizes'}.`,
    },
    {
      number: 3,
      title: 'Convert your image',
      description: `Click the convert button to transform your ${from} image to ${to}. The conversion happens instantly in your browser with no quality loss.`,
    },
    {
      number: 4,
      title: 'Download the result',
      description: `Your converted ${to} image is ready! Download it directly to your device or use it immediately in your projects.`,
    },
  ];

  const faqs = [
    {
      question: `Why convert ${from} to ${to}?`,
      answer: `Converting ${from} to ${to} ${
        to === 'WebP'
          ? 'reduces file size by up to 30% while maintaining excellent quality, making it perfect for web use.'
          : to === 'PNG'
            ? 'adds transparency support and lossless compression, ideal for graphics and logos.'
            : 'provides universal compatibility and smaller file sizes for sharing and web use.'
      }`,
      icon: FileImage,
    },
    {
      question: 'Will the image quality be affected?',
      answer: `Our ${from} to ${to} converter maintains the highest possible quality during conversion. ${
        to === 'WebP'
          ? 'WebP format provides excellent compression with minimal quality loss.'
          : to === 'PNG'
            ? "PNG is a lossless format, so there's no quality degradation."
            : 'JPG conversion uses high-quality compression settings by default.'
      }`,
      icon: Settings,
    },
    {
      question: 'What file sizes are supported?',
      answer: `You can convert ${from} files up to 50MB in size. For optimal performance and faster conversion, we recommend files under 25MB.`,
      icon: Zap,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => onNavigate('/')} className="flex items-center">
              <ArrowLeft className="mr-2" size={16} />
              Back to Home
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
              <p className="text-gray-600">Fast, secure, and free online conversion</p>
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
              <h2 className="text-xl font-bold text-gray-900 mb-4">1. Upload Your Image</h2>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors duration-200">
                <input type="file" accept={`.${from.toLowerCase()}`} onChange={handleFileSelect} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="mx-auto text-gray-400 mb-4" size={48} />
                  <p className="text-gray-600 mb-2">Drop your {from} file here or click to browse</p>
                  <p className="text-sm text-gray-500">Supports {from} files up to 50MB</p>
                </label>
              </div>

              {selectedFile && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileImage className="text-green-600" size={20} />
                    <div>
                      <p className="font-medium text-green-800">{selectedFile.name}</p>
                      <p className="text-sm text-green-600">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                </div>
              )}
            </Card>

            {/* Format Selection */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">2. Choose Output Format</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Convert to:</label>
                  <Select value={outputFormat} onValueChange={setOutputFormat}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="webp">WebP - Modern web format</SelectItem>
                      <SelectItem value="png">PNG - Lossless with transparency</SelectItem>
                      <SelectItem value="jpg">JPG - Universal compatibility</SelectItem>
                      <SelectItem value="gif">GIF - Animation support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* Convert Button */}
            <Card className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">3. Convert Image</h2>

              <Button
                onClick={handleConvert}
                disabled={!selectedFile || isConverting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
              >
                {isConverting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Converting...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Zap className="mr-2" size={20} />
                    Convert to {outputFormat.toUpperCase()}
                  </div>
                )}
              </Button>
            </Card>

            {/* Results */}
            {converted && (
              <Card className="p-6 border-green-200 bg-green-50">
                <h2 className="text-xl font-bold text-gray-900 mb-4">4. Download Result</h2>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <FileImage className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">converted-image.{outputFormat}</p>
                        <p className="text-sm text-gray-600">Ready for download</p>
                      </div>
                    </div>
                    <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                      <Download className="mr-2" size={16} />
                      Download
                    </Button>
                  </div>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How-To for this conversion */}
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                How to Convert {from} to {to}
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
                {from} to {to} FAQ
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
    </div>
  );
}
