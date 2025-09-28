export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  preferences: boolean;
  timestamp?: string;
}

export const COOKIE_CONSENT_KEY = 'cookie-consent';

/**
 * Get cookie preferences from localStorage
 */
export function getCookiePreferences(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const parsed = JSON.parse(stored);
    return {
      essential: parsed.essential ?? true,
      analytics: parsed.analytics ?? false,
      preferences: parsed.preferences ?? false,
      timestamp: parsed.timestamp,
    };
  } catch (error) {
    console.error('Error parsing cookie preferences:', error);
    return null;
  }
}

/**
 * Set cookie preferences in localStorage
 */
export function setCookiePreferences(preferences: CookiePreferences): void {
  if (typeof window === 'undefined') return;
  
  const preferencesWithTimestamp = {
    ...preferences,
    timestamp: new Date().toISOString(),
  };
  
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(preferencesWithTimestamp));
}

/**
 * Check if a specific cookie type is allowed
 */
export function isCookieAllowed(type: keyof CookiePreferences): boolean {
  const preferences = getCookiePreferences();
  if (!preferences) return false;
  
  return preferences[type] ?? false;
}

/**
 * Check if user has made cookie choices
 */
export function hasUserMadeCookieChoice(): boolean {
  return getCookiePreferences() !== null;
}

/**
 * Clear cookie preferences (for testing or reset)
 */
export function clearCookiePreferences(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(COOKIE_CONSENT_KEY);
}

/**
 * Initialize analytics based on cookie preferences
 */
export function initializeAnalytics(): void {
  if (!isCookieAllowed('analytics')) return;
  
  // Initialize Google Analytics or other analytics services here
  console.log('Analytics initialized based on cookie preferences');
  
  // Example: Initialize Google Analytics
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('consent', 'update', {
  //     analytics_storage: 'granted'
  //   });
  // }
}

/**
 * Update analytics consent
 */
export function updateAnalyticsConsent(allowed: boolean): void {
  // Update analytics consent in real-time
  console.log(`Analytics consent updated: ${allowed ? 'granted' : 'denied'}`);
  
  // Example: Update Google Analytics consent
  // if (typeof window !== 'undefined' && window.gtag) {
  //   window.gtag('consent', 'update', {
  //     analytics_storage: allowed ? 'granted' : 'denied'
  //   });
  // }
}

/**
 * Get user preferences for UI components
 */
export function getUserPreferences(): Record<string, any> {
  if (!isCookieAllowed('preferences')) return {};
  
  try {
    const stored = localStorage.getItem('user-preferences');
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error parsing user preferences:', error);
    return {};
  }
}

/**
 * Set user preferences
 */
export function setUserPreferences(preferences: Record<string, any>): void {
  if (!isCookieAllowed('preferences')) return;
  
  try {
    localStorage.setItem('user-preferences', JSON.stringify(preferences));
  } catch (error) {
    console.error('Error saving user preferences:', error);
  }
}

/**
 * Cookie consent status for different regions (GDPR compliance)
 */
export function getCookieConsentStatus(): {
  hasConsent: boolean;
  needsConsent: boolean;
  preferences: CookiePreferences | null;
} {
  const preferences = getCookiePreferences();
  
  return {
    hasConsent: preferences !== null,
    needsConsent: preferences === null,
    preferences,
  };
}
