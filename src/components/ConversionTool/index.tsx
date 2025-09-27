import { useState, useRef } from 'react';
import { Upload, FileImage, Zap } from 'lucide-react';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../Select';
import { Card } from '../Card';

export function ConversionTool() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [inputFormat, setInputFormat] = useState('');
  const [outputFormat, setOutputFormat] = useState('');
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]);
      const fileExtension = files[0].name.split('.').pop()?.toUpperCase();
      if (fileExtension) {
        setInputFormat(fileExtension);
      }
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      const fileExtension = files[0].name.split('.').pop()?.toUpperCase();
      if (fileExtension) {
        setInputFormat(fileExtension);
      }
    }
  };

  const handleConvert = () => {
    if (selectedFile && outputFormat) {
      // This would trigger the conversion process and show results
      console.log('Converting file:', selectedFile.name, 'to', outputFormat);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Convert Your Images</h2>
          <p className="text-gray-600">Upload your image and select the output format to get started</p>
        </div>

        <Card className="p-8 bg-white shadow-lg rounded-2xl">
          {/* Drag and Drop Area */}
          <div
            className={`border-2 border-dashed rounded-xl p-8 mb-6 text-center transition-all duration-200 ${
              isDragOver ? 'border-blue-500 bg-blue-50' : selectedFile ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-gray-400'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            {selectedFile ? (
              <div className="flex items-center justify-center space-x-4">
                <FileImage className="text-green-600" size={48} />
                <div className="text-left">
                  <p className="font-medium text-gray-900">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
              </div>
            ) : (
              <div>
                <Upload className="mx-auto mb-4 text-gray-400" size={48} />
                <p className="text-lg font-medium text-gray-900 mb-2">Drag and drop your image here</p>
                <p className="text-gray-500 mb-4">or click to browse your files</p>
                <Button variant="outline" onClick={() => fileInputRef.current?.click()} className="rounded-lg">
                  Choose File
                </Button>
              </div>
            )}

            <input type="file" ref={fileInputRef} onChange={handleFileSelect} accept="image/*" className="hidden" />
          </div>

          {/* Format Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Input Format</label>
              <Select value={inputFormat} onValueChange={setInputFormat}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Auto-detected" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PNG">PNG</SelectItem>
                  <SelectItem value="JPG">JPG</SelectItem>
                  <SelectItem value="JPEG">JPEG</SelectItem>
                  <SelectItem value="WEBP">WebP</SelectItem>
                  <SelectItem value="GIF">GIF</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Output Format</label>
              <Select value={outputFormat} onValueChange={setOutputFormat}>
                <SelectTrigger className="rounded-lg">
                  <SelectValue placeholder="Choose output format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="PNG">PNG</SelectItem>
                  <SelectItem value="JPG">JPG</SelectItem>
                  <SelectItem value="WEBP">WebP</SelectItem>
                  <SelectItem value="GIF">GIF</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Convert Button */}
          <div className="text-center">
            <Button
              onClick={handleConvert}
              disabled={!selectedFile || !outputFormat}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Zap className="mr-2" size={20} />
              Convert Image
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
