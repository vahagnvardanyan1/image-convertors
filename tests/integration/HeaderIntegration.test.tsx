import { test, expect } from '@playwright/test';

test.describe('Header component tests', () => {
  test('Header should be displayed with a red background color', async ({ page }) => {
    await page.goto('/'); // Assuming the homepage contains the header
    const header = await page.locator('header');
    const backgroundColor = await header.evaluate(el => window.getComputedStyle(el).backgroundColor);
    expect(backgroundColor).toBe('rgb(239, 68, 68)'); // Tailwind's red-500 color
  });

  test('Header should be responsive', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 480, height: 800 }); // Mobile size
    const header = await page.locator('header');
    const isVisible = await header.isVisible();
    expect(isVisible).toBe(true);
  });

  test('Header links should not overlap with other elements', async ({ page }) => {
    await page.goto('/');
    const header = await page.locator('header');
    const headerBox = await header.boundingBox();
    const links = await page.locator('header a');

    await links.all().forEach(async link => {
      const linkBox = await link.boundingBox();
      expect(linkBox.y).toBeGreaterThan(headerBox.y);
      expect(linkBox.y + linkBox.height).toBeLessThan(headerBox.y + headerBox.height);
    });
  });
});