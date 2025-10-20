'use client';

import { useState, useEffect, useRef } from 'react';
import QRCodeSVG from 'react-qr-code';
import { Download, Link as LinkIcon, Type, Mail, Phone, MessageSquare, Wifi, MapPin, Calendar, Eye, ChevronUp } from 'lucide-react';

import { Button } from '../ui/button';
import { Card } from '../Card';
import { useQRCode } from '@/hooks/useQRCode';
import { downloadQRCode } from '@/utils/qrDownload';

import { QR_CODE_TYPES } from '@/config/qrCodeConfig';

export const QRCodeGenerator = () => {
  const { qrType, qrValue, qrData, qrSize, fgColor, bgColor, setQrSize, setFgColor, setBgColor, handleTypeChange, updateQRData } = useQRCode();

  const [showScrollButton, setShowScrollButton] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const scrollToPreview = () => {
    if (previewRef.current) {
      previewRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setShowScrollButton(false);
    }
  };

  const scrollToControls = () => {
    if (controlsRef.current) {
      controlsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleUpdateQRData = (field: string, value: string | { [key: string]: string }) => {
    updateQRData(field, value);

    // Auto-scroll to preview on mobile after content change
    if (window.innerWidth < 1024) {
      setTimeout(() => scrollToPreview(), 300);
    }
  };

  // Show/hide scroll button based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) {
        setShowScrollButton(false);
        return;
      }

      if (previewRef.current && controlsRef.current) {
        const previewTop = previewRef.current.getBoundingClientRect().top;
        const controlsBottom = controlsRef.current.getBoundingClientRect().bottom;

        // Show button if preview is below viewport
        setShowScrollButton(previewTop > window.innerHeight && controlsBottom < window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleDownloadQR = (format: 'svg' | 'png') => {
    downloadQRCode({ format, qrSize, bgColor });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Free QR Code Generator</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Create custom QR codes for URLs, text, WiFi, contact cards, and more. Customize colors, download as PNG or SVG. 100% free and secure.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Controls */}
        <div ref={controlsRef} className="space-y-6">
          {/* QR Type Selection */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Select QR Code Type</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {QR_CODE_TYPES.map(({ type, label, icon: Icon }) => (
                <button
                  key={type}
                  onClick={() => handleTypeChange(type)}
                  className={`p-4 rounded-lg border-2 transition-all ${qrType === type ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 hover:border-gray-300 text-gray-700'}`}
                >
                  <Icon className="mx-auto mb-2" size={24} />
                  <p className="text-sm font-medium">{label}</p>
                </button>
              ))}
            </div>
          </Card>

          {/* Content Input */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Enter Content</h2>

            {qrType === 'url' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website URL</label>
                <input
                  type="url"
                  value={qrData.url || ''}
                  onChange={e => handleUpdateQRData('url', e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {qrType === 'text' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Text Content</label>
                <textarea
                  value={qrData.text || ''}
                  onChange={e => handleUpdateQRData('text', e.target.value)}
                  placeholder="Enter your text here..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {qrType === 'email' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input
                  type="email"
                  value={qrData.email || ''}
                  onChange={e => handleUpdateQRData('email', e.target.value)}
                  placeholder="example@email.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {qrType === 'phone' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={qrData.phone || ''}
                  onChange={e => handleUpdateQRData('phone', e.target.value)}
                  placeholder="+1234567890"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}

            {qrType === 'sms' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={qrData.sms?.phone || ''}
                    onChange={e => handleUpdateQRData('sms', { ...qrData.sms, phone: e.target.value })}
                    placeholder="+1234567890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    value={qrData.sms?.message || ''}
                    onChange={e => handleUpdateQRData('sms', { ...qrData.sms, message: e.target.value })}
                    placeholder="Pre-filled message..."
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {qrType === 'wifi' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Network Name (SSID)</label>
                  <input
                    type="text"
                    value={qrData.wifi?.ssid || ''}
                    onChange={e => handleUpdateQRData('wifi', { ...qrData.wifi, ssid: e.target.value })}
                    placeholder="MyNetwork"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="text"
                    value={qrData.wifi?.password || ''}
                    onChange={e => handleUpdateQRData('wifi', { ...qrData.wifi, password: e.target.value })}
                    placeholder="password123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Encryption</label>
                  <select
                    value={qrData.wifi?.encryption || 'WPA'}
                    onChange={e => handleUpdateQRData('wifi', { ...qrData.wifi, encryption: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">None</option>
                  </select>
                </div>
              </div>
            )}

            {qrType === 'location' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
                  <input
                    type="text"
                    value={qrData.location?.lat || ''}
                    onChange={e => handleUpdateQRData('location', { ...qrData.location, lat: e.target.value })}
                    placeholder="40.7128"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                  <input
                    type="text"
                    value={qrData.location?.lng || ''}
                    onChange={e => handleUpdateQRData('location', { ...qrData.location, lng: e.target.value })}
                    placeholder="-74.0060"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {qrType === 'vcard' && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={qrData.vcard?.name || ''}
                    onChange={e => handleUpdateQRData('vcard', { ...qrData.vcard, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={qrData.vcard?.phone || ''}
                    onChange={e => handleUpdateQRData('vcard', { ...qrData.vcard, phone: e.target.value })}
                    placeholder="+1234567890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={qrData.vcard?.email || ''}
                    onChange={e => handleUpdateQRData('vcard', { ...qrData.vcard, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    value={qrData.vcard?.organization || ''}
                    onChange={e => handleUpdateQRData('vcard', { ...qrData.vcard, organization: e.target.value })}
                    placeholder="Company Inc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            )}
          </Card>

          {/* Customization */}
          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Customize QR Code</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Size: {qrSize}px</label>
                <input type="range" min="128" max="512" step="32" value={qrSize} onChange={e => setQrSize(Number(e.target.value))} className="w-full" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Foreground Color</label>
                  <div className="flex items-center space-x-2">
                    <input type="color" value={fgColor} onChange={e => setFgColor(e.target.value)} className="h-10 w-full rounded cursor-pointer" />
                    <input type="text" value={fgColor} onChange={e => setFgColor(e.target.value)} className="px-2 py-1 border border-gray-300 rounded text-sm w-24" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
                  <div className="flex items-center space-x-2">
                    <input type="color" value={bgColor} onChange={e => setBgColor(e.target.value)} className="h-10 w-full rounded cursor-pointer" />
                    <input type="text" value={bgColor} onChange={e => setBgColor(e.target.value)} className="px-2 py-1 border border-gray-300 rounded text-sm w-24" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Preview & Download */}
        <div ref={previewRef} className="space-y-6">
          {/* Mobile Back to Edit Button */}
          <div className="lg:hidden mb-4">
            <Button onClick={scrollToControls} variant="outline" className="w-full" size="lg">
              <ChevronUp className="mr-2" size={20} />
              Back to Edit
            </Button>
          </div>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Preview</h2>
            <div className="flex justify-center items-center bg-gray-50 rounded-lg p-8">
              {qrValue ? (
                <div id="qr-code-svg">
                  <QRCodeSVG value={qrValue} size={qrSize} fgColor={fgColor} bgColor={bgColor} level="H" />
                </div>
              ) : (
                <p className="text-gray-400">Enter content to generate QR code</p>
              )}
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Download QR Code</h2>
            <div className="space-y-3">
              <Button onClick={() => handleDownloadQR('png')} className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                <Download className="mr-2" size={20} />
                Download PNG
              </Button>
              <Button onClick={() => handleDownloadQR('svg')} variant="outline" className="w-full" size="lg">
                <Download className="mr-2" size={20} />
                Download SVG
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-center">QR codes are generated locally in your browser. Your data is private and secure.</p>
          </Card>
        </div>
      </div>

      {/* Floating "View QR Code" Button for Mobile */}
      {showScrollButton && (
        <button
          onClick={scrollToPreview}
          className="lg:hidden fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center space-x-2 animate-bounce"
          aria-label="View QR Code"
        >
          <Eye size={20} />
          <span className="font-semibold">View QR Code</span>
        </button>
      )}
    </div>
  );
};
