import { test, expect } from '@playwright/test';

test.describe('Header Background Color', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the correct header background color', async ({ page }) => {
    const header = await page.$('header');
    const backgroundColor = await header.evaluate(node => window.getComputedStyle(node).backgroundColor);
    expect(backgroundColor).toBe('rgb(59, 130, 246)'); // Expected color in RGB format
  });

  test('should not affect other components', async ({ page }) => {
    // Assuming a primary button is part of the page and its color should remain the same
    const button = await page.$('button.primary');
    const buttonBackgroundColor = await button.evaluate(node => window.getComputedStyle(node).backgroundColor);
    expect(buttonBackgroundColor).not.toBe('rgb(59, 130, 246)'); // Ensure header color does not bleed to other components
  });

  test('should be consistent across different screen sizes', async ({ page }) => {
    await page.setViewportSize({ width: 1200, height: 800 });
    let header = await page.$('header');
    let backgroundColor = await header.evaluate(node => window.getComputedStyle(node).backgroundColor);
    expect(backgroundColor).toBe('rgb(59, 130, 246)');

    await page.setViewportSize({ width: 375, height: 667 });
    header = await page.$('header');
    backgroundColor = await header.evaluate(node => window.getComputedStyle(node).backgroundColor);
    expect(backgroundColor).toBe('rgb(59, 130, 246)');
  });
});