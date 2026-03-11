import { test, expect } from '@playwright/test';

const url = 'http://localhost:3000'; // Adjust the URL according to the actual running server URL

// Testing across different browsers
const browsers = ['chromium', 'firefox', 'webkit'];

browsers.forEach(browser => {
  test.describe(`${browser} browser tests for Header`, () => {
    test(`Header background gradient is correct on ${browser}`, async ({ page, browserName }) => {
      if (browserName !== browser) return;

      await page.goto(url);
      const header = await page.$('header');
      const backgroundImage = await page.evaluate(el => window.getComputedStyle(el).backgroundImage, header);
      expect(backgroundImage).toContain('linear-gradient(to right, rgb(96, 165, 250), rgb(139, 92, 246))');
    });
  });
});

// Testing responsive design
const sizes = [
  { width: 375, height: 667 },  // iPhone SE
  { width: 768, height: 1024 }, // iPad
  { width: 1280, height: 800 }, // Desktop
];

sizes.forEach(size => {
  test.describe(`Responsive tests at ${size.width}x${size.height}`, () => {
    test(`Header layout is consistent at ${size.width}x${size.height}`, async ({ page }) => {
      await page.setViewportSize(size);
      await page.goto(url);

      const header = await page.$('header');
      const headerVisible = await header.isVisible();
      expect(headerVisible).toBeTruthy();
    });
  });
});