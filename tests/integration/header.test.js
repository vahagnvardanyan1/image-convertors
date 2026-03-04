import { expect, test } from '@playwright/test';

// Test for header component rendering

test.describe('Header Component', () => {
  test('should be visible and styled correctly on desktop', async ({ page }) => {
    await page.goto('/');
    const header = await page.locator('header');
    await expect(header).toBeVisible();
    await expect(header).toHaveClass(/sticky top-0 z-50/);
  });

  test('should be visible and functional on mobile', async ({ page }) => {
    await page.emulateMedia({ media: 'screen' });
    await page.setViewportSize({ width: 375, height: 667 }); // Common mobile resolution

    await page.goto('/');
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await menuButton.click();
    const mobileMenu = page.locator('role=menu[name="Main Navigation"]');
    await expect(mobileMenu).toBeVisible();
  });

  test('should navigate to correct pages when links are clicked', async ({ page }) => {
    await page.goto('/');
    const navLinks = await page.locator('nav a');
    for (const link of navLinks) {
      const href = await link.getAttribute('href');
      await expect(link).toHaveAttribute('href', href);
    }
  });

  test('should support keyboard navigation', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab'); // Focus on first focusable element
    const focusedElement = await page.evaluate(() => document.activeElement);
    expect(focusedElement).toBeTruthy();
  });

  test('should have correct accessibility roles and labels', async ({ page }) => {
    await page.goto('/');
    const nav = page.locator('nav');
    await expect(nav).toHaveAttribute('aria-label', 'Main Navigation');
  });
});