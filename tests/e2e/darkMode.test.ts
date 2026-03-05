import { test, expect } from '@playwright/test';

// Before running the tests, ensure the application is running on localhost:3000 or update the baseURL accordingly.
test.describe('Dark Mode Functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000'); // Change URL based on actual app path
  });

  test('should display dark mode toggle button and switch theme', async ({ page }) => {
    const themeToggleButton = await page.waitForSelector('button:has-text("dark")');
    await themeToggleButton.click();
    const darkModeEnabled = await page.evaluate(() => document.documentElement.getAttribute('data-theme') === 'dark');
    expect(darkModeEnabled).toBe(true);

    // Toggle back to light mode
    await themeToggleButton.click();
    const lightModeEnabled = await page.evaluate(() => document.documentElement.getAttribute('data-theme') === 'light');
    expect(lightModeEnabled).toBe(true);
  });

  test('should save and recall theme preference across sessions', async ({ page }) => {
    // Toggle to dark mode
    const themeToggleButton = await page.waitForSelector('button:has-text("dark")');
    await themeToggleButton.click();

    // Reload page
    await page.reload();

    // Check if dark mode is still active
    const darkModePersisted = await page.evaluate(() => document.documentElement.getAttribute('data-theme') === 'dark');
    expect(darkModePersisted).toBe(true);
  });

});
