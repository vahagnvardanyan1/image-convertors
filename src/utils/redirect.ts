import { redirect } from 'next/navigation';

import { FREE_CONVERT_URL } from '@/config/constants';

/**
 * Redirects to the corresponding page on freeconvert.tools
 * Strips the locale prefix and redirects to the external domain
 * Uses 301 (Moved Permanently) status code for server-side redirects
 *
 * @param pathname - The path to redirect to (without locale prefix)
 *
 * @example
 * redirectToFreeConvert('/privacy-policy') // Redirects to https://freeconvert.tools/privacy-policy
 * redirectToFreeConvert('/about') // Redirects to https://freeconvert.tools/about
 */
export const redirectToFreeConvert = (pathname: string): void => {
  const targetUrl = `${FREE_CONVERT_URL}${pathname}`;

  if (typeof window === 'undefined') {
    // Server-side: throw redirect error which Next.js will catch and handle as 301
    // Note: Next.js redirect() uses 307 by default, but we can configure in next.config.ts
    redirect(targetUrl);
  } else {
    // Client-side: check if the current URL is different from the target URL
    if (window.location.href !== targetUrl) {
      // Use window.location to redirect
      window.location.href = targetUrl;
    }
  }
};
