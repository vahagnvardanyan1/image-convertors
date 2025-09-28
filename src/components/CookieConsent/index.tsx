'use client';
import { useState, useEffect } from 'react';
import { Cookie, X, Settings, Shield, Eye } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    preferences: false,
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      preferences: true,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const selectedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem('cookie-consent', JSON.stringify(selectedPreferences));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const essentialOnly = {
      essential: true,
      analytics: false,
      preferences: false,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem('cookie-consent', JSON.stringify(essentialOnly));
    setIsVisible(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled

    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-opacity-20 z-40" />

      {/* Cookie Consent Popup */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-b border-orange-100 p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Cookie className="text-orange-600" size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">We Value Your Privacy</h3>
                    <p className="text-orange-700 text-sm">Choose your cookie preferences</p>
                  </div>
                </div>
                <button onClick={() => setIsVisible(false)} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close cookie consent">
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-6">
              <div className="mb-4">
                <p className="text-gray-700 text-sm leading-relaxed">
                  We use cookies to enhance your experience on ImageConverter. Your images are processed
                  <strong> 100% client-side</strong> - we never store or access your files. Choose which cookies you&apos;re comfortable with:
                </p>
              </div>

              {/* Cookie Details */}
              {showDetails && (
                <div className="mb-6 space-y-4">
                  {/* Essential Cookies */}
                  <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Shield className="text-green-600" size={16} />
                        <span className="font-semibold text-green-900">Essential Cookies</span>
                        <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded-full">Required</span>
                      </div>
                      <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-end pr-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-green-800 text-sm">Necessary for basic website functionality, security, and performance. Cannot be disabled.</p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Eye className="text-blue-600" size={16} />
                        <span className="font-semibold text-gray-900">Analytics Cookies</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Optional</span>
                      </div>
                      <button
                        onClick={() => togglePreference('analytics')}
                        className={`w-10 h-6 rounded-full flex items-center transition-colors ${preferences.analytics ? 'bg-blue-500 justify-end pr-1' : 'bg-gray-300 justify-start pl-1'}`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                    <p className="text-gray-700 text-sm">Help us understand how visitors use our website to improve performance and user experience.</p>
                  </div>

                  {/* Preference Cookies */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <Settings className="text-purple-600" size={16} />
                        <span className="font-semibold text-gray-900">Preference Cookies</span>
                        <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Optional</span>
                      </div>
                      <button
                        onClick={() => togglePreference('preferences')}
                        className={`w-10 h-6 rounded-full flex items-center transition-colors ${preferences.preferences ? 'bg-purple-500 justify-end pr-1' : 'bg-gray-300 justify-start pl-1'}`}
                      >
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </button>
                    </div>
                    <p className="text-gray-700 text-sm">Remember your settings like quality preferences and theme choices for a personalized experience.</p>
                  </div>
                </div>
              )}

              {/* Toggle Details Button */}
              <div className="mb-4">
                <button onClick={() => setShowDetails(!showDetails)} className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors">
                  {showDetails ? 'Hide Details' : 'Customize Settings'}
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2.5 rounded-lg font-medium transition-all duration-200"
                >
                  Accept All Cookies
                </Button>

                {showDetails && (
                  <Button
                    onClick={handleAcceptSelected}
                    variant="outline"
                    className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 py-2.5 rounded-lg font-medium transition-all duration-200"
                  >
                    Save My Preferences
                  </Button>
                )}

                <Button onClick={handleRejectAll} variant="outline" className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-2.5 rounded-lg font-medium transition-all duration-200">
                  Essential Only
                </Button>
              </div>

              {/* Footer Links */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-600">
                  <Link href="/privacy-policy" className="hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/cookie-policy" className="hover:text-blue-600 transition-colors">
                    Cookie Policy
                  </Link>
                  <span className="text-gray-400">•</span>
                  <Link href="/terms-of-use" className="hover:text-blue-600 transition-colors">
                    Terms of Use
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
