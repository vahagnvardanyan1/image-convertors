import { test, expect } from '@playwright/test';

// This test suite validates that the Header component,
// specifically its background color, renders correctly.
test.describe('Header Component', () => {
  test('background color should match the expected design token', async ({ page }) => {
    // Navigate to the homepage where the Header is located
    await page.goto('/');

    // Select the header element
    const header = await page.locator('header');

    // Extract the background color of the header
    const bgColor = await header.evaluate(el => window.getComputedStyle(el).backgroundColor);

    // Verify the Header's background color matches the design expectation
    await expect(bgColor).toBe('var(--color-primary)');
  });

  test('Header does not impact layout or text visibility', async ({ page }) => {
    // Assuming a URL that will render the Header
    await page.goto('/');

    // Check that text within the header is still visible
    const headerText = await page.locator('header span').textContent();
    await expect(headerText).not.toEqual('');

    // Verify that other components are in place
    const otherComponent = await page.locator('.other-component-selector');
    await expect(otherComponent).toBeVisible();
  });

  test('Visual consistency across browsers', async ({ browser }) => {
    // Implement cross-browser testing if necessary
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('/');

    const header = await page.locator('header');
    const headerScreenshot = await header.screenshot();

    // Expecting this screenshot to match the approved baseline
    await expect(headerScreenshot).toMatchSnapshot('header-visual.png');
  });
});