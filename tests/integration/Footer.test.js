import { test, expect } from '@playwright/test';
test.describe('Footer Component', () => {
  test('renders with the correct background gradient across browsers and devices', async ({ page }) => {
    // Load the page containing the footer component
    await page.goto('/');

    // Click on the footer
    const footer = await page.$('footer');

    // Check the background style
    const background = await footer.evaluate((node) => window.getComputedStyle(node).backgroundImage);
    expect(background).toContain('linear-gradient');

    // Ensure this gradient matches the new specification
    const expectedGradient = 'linear-gradient(to right, rgb(31, 41, 55), rgb(17, 24, 39), rgb(0, 0, 0))';
    expect(background).toBe(expectedGradient);

    // Validate footer visibility 
    expect(await footer.isVisible()).toBeTruthy();
  });

  test('ensures no layout shifts occur due to the background change', async ({ page }) => {
    await page.goto('/');

    // Check the layout stability by capturing the initial bounding box
    const footer = await page.$('footer');
    const initialBox = await footer.boundingBox();

    // Simulate typical interactions
    await page.setViewportSize({ width: 1280, height: 720 });  // Desktop
    await page.setViewportSize({ width: 768, height: 1024 });  // Tablet
    await page.setViewportSize({ width: 375, height: 667 });   // Mobile

    // Capture final bounding box
    const finalBox = await footer.boundingBox();

    // Validate dimensions
    expect(finalBox).toEqual(initialBox);
  });
});