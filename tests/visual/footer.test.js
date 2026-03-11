import { test, expect } from '@playwright/test';

test.describe('Footer Color Verification', () => {
  test('should render footer with red background color', async ({ page }) => {
    await page.goto('/');
    const footer = await page.$('footer');
    const backgroundColor = await footer.evaluate(el => window.getComputedStyle(el).backgroundColor);
    expect(backgroundColor).toBe('rgb(255, 0, 0)'); // red color
  });

  test('should not affect other elements with red color', async ({ page }) => {
    await page.goto('/');
    const nonFooterElementColors = await page.$$eval('body *:not(footer)', elements => elements.map(el => window.getComputedStyle(el).backgroundColor));
    nonFooterElementColors.forEach(color => {
      expect(color).not.toBe('rgb(255, 0, 0)'); // ensure no other element is red
    });
  });
});