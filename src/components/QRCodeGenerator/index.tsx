'use client';
import { useState, useEffect, useRef } from 'react';
import QRCodeSVG from 'react-qr-code';
import { Download, Link as LinkIcon, Type, Mail, Phone, MessageSquare, Wifi, MapPin, Calendar, Eye, ChevronUp } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../Card';

type QRType = 'url' | 'text' | 'email' | 'phone' | 'sms' | 'wifi' | 'location' | 'vcard';

interface QRData {
  url?: string;
  text?: string;
  email?: string;
  phone?: string;
  sms?: { phone: string; message: string };
  wifi?: { ssid: string; password: string; encryption: string };
  location?: { lat: string; lng: string };
  vcard?: { name: string; phone: string; email: string; organization: string };
}

export function QRCodeGenerator() {
  const [qrType, setQrType] = useState<QRType>('url');
  const [qrValue, setQrValue] = useState('https://imageconvertors.com');
  const [qrData, setQrData] = useState<QRData>({ url: 'https://imageconvertors.com' });
  const [qrSize, setQrSize] = useState(256);
  const [fgColor, setFgColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#ffffff');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);

  const generateQRValue = (type: QRType, data: QRData): string => {
    switch (type) {
      case 'url':
        return data.url || '';
      case 'text':
        return data.text || '';
      case 'email':
        return `mailto:${data.email || ''}`;
      case 'phone':
        return `tel:${data.phone || ''}`;
      case 'sms':
        return `sms:${data.sms?.phone || ''}${data.sms?.message ? `?body=${encodeURIComponent(data.sms.message)}` : ''}`;
      case 'wifi':
        return `WIFI:T:${data.wifi?.encryption || 'WPA'};S:${data.wifi?.ssid || ''};P:${data.wifi?.password || ''};;`;
      case 'location':
        return `geo:${data.location?.lat || '0'},${data.location?.lng || '0'}`;
      case 'vcard':
        return `BEGIN:VCARD\nVERSION:3.0\nFN:${data.vcard?.name || ''}\nTEL:${data.vcard?.phone || ''}\nEMAIL:${data.vcard?.email || ''}\nORG:${data.vcard?.organization || ''}\nEND:VCARD`;
      default:
        return '';
    }
  };

  const handleTypeChange = (type: QRType) => {
    setQrType(type);
    const newData: QRData = {};

    switch (type) {
      case 'url':
        newData.url = 'https://imageconvertors.com';
        break;
      case 'text':
        newData.text = 'Hello World!';
        break;
      case 'email':
        newData.email = 'example@email.com';
        break;
      case 'phone':
        newData.phone = '+1234567890';
        break;
      case 'sms':
        newData.sms = { phone: '+1234567890', message: 'Hello!' };
        break;
      case 'wifi':
        newData.wifi = { ssid: 'MyNetwork', password: 'password123', encryption: 'WPA' };
        break;
      case 'location':
        newData.location = { lat: '40.7128', lng: '-74.0060' };
        break;
      case 'vcard':
        newData.vcard = { name: 'John Doe', phone: '+1234567890', email: 'john@example.com', organization: 'Company Inc.' };
        break;
    }

    setQrData(newData);
    setQrValue(generateQRValue(type, newData));
  };

  const updateQRData = (field: string, value: string | { [key: string]: string }) => {
    const newData = { ...qrData, [field]: value };
    setQrData(newData);
    setQrValue(generateQRValue(qrType, newData));

    // Auto-scroll to preview on mobile after content change
    if (window.innerWidth < 1024) {
      setTimeout(() => scrollToPreview(), 300);
    }
  };

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

  const downloadQR = (format: 'svg' | 'png') => {
    const svgElement = document.querySelector('#qr-code-svg svg');
    if (!svgElement) return;

    if (format === 'svg') {
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qr-code.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } else {
      // Create canvas with higher resolution for better quality
      const scale = 2;
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = qrSize * scale;
      canvas.height = qrSize * scale;

      // Fill background
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Convert SVG to data URL
      const svgData = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);

      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Convert to PNG and download
        canvas.toBlob(
          blob => {
            if (blob) {
              const pngUrl = URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = pngUrl;
              link.download = 'qr-code.png';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              URL.revokeObjectURL(pngUrl);
            }
          },
          'image/png',
          1.0,
        );
        URL.revokeObjectURL(url);
      };

      img.onerror = () => {
        console.error('Failed to load QR code image');
        URL.revokeObjectURL(url);
      };

      img.src = url;
    }
  };

  const qrTypes = [
    { type: 'url' as QRType, label: 'Website URL', icon: LinkIcon },
    { type: 'text' as QRType, label: 'Plain Text', icon: Type },
    { type: 'email' as QRType, label: 'Email', icon: Mail },
    { type: 'phone' as QRType, label: 'Phone', icon: Phone },
    { type: 'sms' as QRType, label: 'SMS', icon: MessageSquare },
    { type: 'wifi' as QRType, label: 'WiFi', icon: Wifi },
    { type: 'location' as QRType, label: 'Location', icon: MapPin },
    { type: 'vcard' as QRType, label: 'Contact Card', icon: Calendar },
  ];

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
              {qrTypes.map(({ type, label, icon: Icon }) => (
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
                  onChange={e => updateQRData('url', e.target.value)}
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
                  onChange={e => updateQRData('text', e.target.value)}
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
                  onChange={e => updateQRData('email', e.target.value)}
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
                  onChange={e => updateQRData('phone', e.target.value)}
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
                    onChange={e => updateQRData('sms', { ...qrData.sms, phone: e.target.value })}
                    placeholder="+1234567890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                  <textarea
                    value={qrData.sms?.message || ''}
                    onChange={e => updateQRData('sms', { ...qrData.sms, message: e.target.value })}
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
                    onChange={e => updateQRData('wifi', { ...qrData.wifi, ssid: e.target.value })}
                    placeholder="MyNetwork"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="text"
                    value={qrData.wifi?.password || ''}
                    onChange={e => updateQRData('wifi', { ...qrData.wifi, password: e.target.value })}
                    placeholder="password123"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Encryption</label>
                  <select
                    value={qrData.wifi?.encryption || 'WPA'}
                    onChange={e => updateQRData('wifi', { ...qrData.wifi, encryption: e.target.value })}
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
                    onChange={e => updateQRData('location', { ...qrData.location, lat: e.target.value })}
                    placeholder="40.7128"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
                  <input
                    type="text"
                    value={qrData.location?.lng || ''}
                    onChange={e => updateQRData('location', { ...qrData.location, lng: e.target.value })}
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
                    onChange={e => updateQRData('vcard', { ...qrData.vcard, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    value={qrData.vcard?.phone || ''}
                    onChange={e => updateQRData('vcard', { ...qrData.vcard, phone: e.target.value })}
                    placeholder="+1234567890"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    value={qrData.vcard?.email || ''}
                    onChange={e => updateQRData('vcard', { ...qrData.vcard, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input
                    type="text"
                    value={qrData.vcard?.organization || ''}
                    onChange={e => updateQRData('vcard', { ...qrData.vcard, organization: e.target.value })}
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
              <Button onClick={() => downloadQR('png')} className="w-full bg-blue-600 hover:bg-blue-700 text-white" size="lg">
                <Download className="mr-2" size={20} />
                Download PNG
              </Button>
              <Button onClick={() => downloadQR('svg')} variant="outline" className="w-full" size="lg">
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
}
