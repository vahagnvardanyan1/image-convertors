import { test, expect } from '@playwright/test';

// Define a set of viewports to test different devices
const viewports = [
  { width: 1280, height: 720, name: 'Desktop 1280x720' },
  { width: 1440, height: 900, name: 'Desktop 1440x900' },
  { width: 360, height: 640, name: 'Mobile 360x640' },
  { width: 375, height: 812, name: 'Mobile 375x812' },
];

// Define a set of browsers to test across
const browsers = ['chromium', 'firefox', 'webkit'];

// Test suite for the header background color visual regression
for (const browserType of browsers) {
  for (const viewport of viewports) {
    test.describe(`Header visual tests on ${browserType} at ${viewport.name}`, () => {
      test.use({ browserName: browserType, viewport: { width: viewport.width, height: viewport.height } });

      test('should render header with the correct background color', async ({ page }) => {
        await page.goto('/');
        const header = await page.locator('header');
        const backgroundColor = await header.evaluate(el => getComputedStyle(el).backgroundColor);
        // Assuming the new background color should be 'rgb(34, 34, 34)' as an example
        expect(backgroundColor).toBe('rgb(34, 34, 34)');
      });

      test('should not have visual artifacts in the header', async ({ page }) => {
        await page.goto('/');
        const headerScreenshot = await page.locator('header').screenshot();
        expect(headerScreenshot).toMatchSnapshot(`header-${browserType}-${viewport.name}.png`);
      });

      test('should maintain correct background color in dark and light modes', async ({ page }) => {
        await page.goto('/');
        // Ensure dark mode check
        await page.evaluate(() => window.matchMedia('(prefers-color-scheme: dark)').matches = true);
        let header = await page.locator('header');
        let backgroundColor = await header.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(backgroundColor).toBe('rgb(34, 34, 34)'); // Example dark mode color

        // Switch to light mode check, assuming it uses the same color for simplicity
        await page.evaluate(() => window.matchMedia('(prefers-color-scheme: dark)').matches = false);
        header = await page.locator('header');
        backgroundColor = await header.evaluate(el => getComputedStyle(el).backgroundColor);
        expect(backgroundColor).toBe('rgb(34, 34, 34)'); // Example light mode color
      });
    });
  }
}