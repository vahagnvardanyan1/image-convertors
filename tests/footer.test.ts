import { test, expect } from '@playwright/test';

// Base URL for the application, ensure it's pointing to the correct environment
const BASE_URL = 'http://localhost:3000';

// This script will test the footer's background color and its consistency across different pages.
test.describe('Footer Component', () => {

  test('should have the correct background color on the homepage', async ({ page }) => {
    await page.goto(`${BASE_URL}/`);
    const footer = await page.locator('footer');

    // Check that the footer background color matches the CSS variable '--footer-bg-color'
    const backgroundColor = await footer.evaluate((ele) => {
      return window.getComputedStyle(ele).backgroundColor;
    });

    // Ensure the color matches the expected RGBA value of '#1a1a1a'
    expect(backgroundColor).toBe('rgb(26, 26, 26)');
  });

  test('should have consistent footer color on other pages', async ({ page }) => {
    const pagesToTest = ['/about', '/contact', '/services'];

    for (const route of pagesToTest) {
      await page.goto(`${BASE_URL}${route}`);
      const footer = await page.locator('footer');

      const backgroundColor = await footer.evaluate((ele) => {
        return window.getComputedStyle(ele).backgroundColor;
      });

      expect(backgroundColor).toBe('rgb(26, 26, 26)');
    }
  });

  test('footer should be responsive', async ({ page }) => {
    await page.goto(`${BASE_URL}/`);
    const footer = await page.locator('footer');

    // Verify responsiveness by changing viewport sizes
    await page.setViewportSize({ width: 1200, height: 800 });
    let backgroundColor = await footer.evaluate((ele) => {
      return window.getComputedStyle(ele).backgroundColor;
    });
    expect(backgroundColor).toBe('rgb(26, 26, 26)');

    await page.setViewportSize({ width: 800, height: 600 });
    backgroundColor = await footer.evaluate((ele) => {
      return window.getComputedStyle(ele).backgroundColor;
    });
    expect(backgroundColor).toBe('rgb(26, 26, 26)');
  });

});