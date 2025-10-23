import { FREE_CONVERT_URL } from '@/config/constants';

/**
 * Redirects to the corresponding page on freeconvert.tools
 * Strips the locale prefix and redirects to the external domain
 *
 * @param pathname - The path to redirect to (without locale prefix)
 *
 * @example
 * redirectToFreeConvert('/privacy-policy') // Redirects to https://freeconvert.tools/privacy-policy
 * redirectToFreeConvert('/about') // Redirects to https://freeconvert.tools/about
 */
export const redirectToFreeConvert = (pathname: string): void => {
  const url = `${FREE_CONVERT_URL}${pathname}`;

  // Redirect using Next.js redirect function
  // During SSR, this will use Next.js redirect
  // During CSR, this will use window.location
  if (window) {
    // Client-side: use window.location
    window.location.href = url;
  }
};
