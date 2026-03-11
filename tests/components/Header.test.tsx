import { test, expect } from '@playwright/test';

// Test suite for the Header component

test.describe('Header component tests', () => {
 
  test('Header should have a red background color', async ({ page }) => {
    await page.goto('/'); // Assuming the header is on the home page
    const header = page.locator('header');
    const backgroundColor = await header.evaluate(element => getComputedStyle(element).backgroundColor);
    expect(backgroundColor).toBe('rgb(239, 68, 68)'); // Tailwind red-500 in RGB format
  });

  test('Header styles are unaffected except for background color change', async ({ page }) => {
    await page.goto('/');
    const header = page.locator('header');

    // CSS properties to ensure are unchanged
    const headerStyles = await header.evaluate(element => {
      const styles = getComputedStyle(element);
      return {
        borderBottomColor: styles.borderBottomColor,
        position: styles.position,
        zIndex: styles.zIndex,
        display: styles.display,
      };
    });

    expect(headerStyles.borderBottomColor).toBe('rgb(229, 231, 235)'); // Tailwind gray-200
    expect(headerStyles.position).toBe('sticky');
    expect(headerStyles.zIndex).toBe('50');
    expect(headerStyles.display).toBe('flex');
  });
});
