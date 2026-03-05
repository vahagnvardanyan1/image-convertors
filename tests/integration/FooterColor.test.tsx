import { test, expect } from '@playwright/test';

// Define the base URL for the application
const baseUrl = 'http://localhost:3000';

// Use Playwright to test the footer color
// Ensure the footer color is set to 'bg-black' and no other elements are affected

test.describe('Footer Component', () => {
  test('should have the correct background color and not affect other components', async ({ page }) => {
    // Navigate to the application's base URL
    await page.goto(baseUrl);

    // Select the footer element
    const footer = await page.locator('footer');

    // Assert the footer background color
    const backgroundColor = await footer.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(backgroundColor).toBe('rgb(0, 0, 0)'); // Expecting the color to be 'black'

    // Check another element to ensure it is not affected
    const header = await page.locator('header');
    const headerColor = await header.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(headerColor).not.toBe('rgb(0, 0, 0)');
  });
});