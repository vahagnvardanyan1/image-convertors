import { test, expect } from '@playwright/test';

// This test suite is designed to validate the new background gradient of the Footer component.
test.describe('Footer Component', () => {

  test('should display the correct background gradient', async ({ page }) => {
    await page.goto('/'); // Navigate to the homepage where Footer is rendered.

    const footer = await page.locator('footer');
    const cssBackground = await footer.evaluate(node => getComputedStyle(node).backgroundImage);

    // Check that the gradient starts with green-500 and ends with blue-500
    expect(cssBackground).toContain('linear-gradient');
    expect(cssBackground).toContain('rgb(34, 197, 94)'); // Tailwind's green-500
    expect(cssBackground).toContain('rgb(59, 130, 246)'); // Tailwind's blue-500
  });

  // Additional tests could include responsiveness and interaction tests
  test('should maintain design consistency across different viewport sizes', async ({ page }) => {
    await page.goto('/');

    // Check at common viewport sizes
    for (const size of [[320, 480], [768, 1024], [1280, 800]]) {
      await page.setViewportSize({ width: size[0], height: size[1] });
      const footer = await page.locator('footer');
      const cssBackground = await footer.evaluate(node => getComputedStyle(node).backgroundImage);
      expect(cssBackground).toContain('linear-gradient');
      expect(cssBackground).toContain('rgb(34, 197, 94)');
      expect(cssBackground).toContain('rgb(59, 130, 246)');
    }
  });

  test('should render correctly across multiple browsers', async ({ page }, testInfo) => {
    await page.goto('/');

    // Check rendering on Chromium, Firefox, and Webkit
    const footer = await page.locator('footer');
    const cssBackground = await footer.evaluate(node => getComputedStyle(node).backgroundImage);
    expect(cssBackground).toContain('linear-gradient');
    expect(cssBackground).toContain('rgb(34, 197, 94)');
    expect(cssBackground).toContain('rgb(59, 130, 246)');
  });

});
