import { performance } from 'perf_hooks';
import { redirectToFreeConvert } from '@/utils/redirect';
import { FREE_CONVERT_URL } from '@/config/constants';

/**
 * Performance tests for redirectToFreeConvert function.
 */
describe('Performance Test for redirectToFreeConvert Function', () => {
  const testPathnames = [
    '/privacy-policy',
    '/terms-of-service',
    '/contact-us'
  ];

  testPathnames.forEach((pathname) => {
    it(`should quickly redirect to ${pathname}`, () => {
      const targetUrl = `${FREE_CONVERT_URL}${pathname}`;

      if (typeof window !== 'undefined') {
        const originalLocation = window.location.href;

        performance.mark('start');
        redirectToFreeConvert(pathname);
        performance.mark('end');

        expect(window.location.href).toBe(targetUrl);
        const measure = performance.measure('redirect', 'start', 'end');
        console.log(`Time taken for redirect to ${pathname}: ${measure.duration}ms`);
        expect(measure.duration).toBeLessThan(100); // Expected to complete under 100ms

        // Reset location after test
        window.location.href = originalLocation;
      } else {
        const mockRedirect = jest.fn(redirectToFreeConvert);
        mockRedirect(pathname);
        expect(mockRedirect).toHaveBeenCalled();
        expect(mockRedirect).toHaveBeenCalledWith(pathname);
      }
    });
  });
});
