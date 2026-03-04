import { expect, test } from '@playwright/test';
import { getComputedStyle } from 'playwright';

test.describe('Header Component', () => {
  test('should have the correct background color', async ({ page }) => {
    await page.goto('/');
    const header = await page.$('header');
    const backgroundColor = await getComputedStyle(header, 'background-color');
    expect(backgroundColor).toBe('rgb(255, 255, 255)');  // Assuming white is the correct color.
  });

  test('should not affect other components visually', async ({ page }) => {
    await page.goto('/');
    const otherComponent = await page.$('.other-component');
    const computedStyle = await getComputedStyle(otherComponent, 'margin');
    expect(computedStyle).toBe('0px');  // No margin applied suggests no visual change.
  });

  test('should be consistent across different screen sizes', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080 },
      { width: 1280, height: 720 },
      { width: 375, height: 812 } // iPhone X size
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      const header = await page.$('header');
      const backgroundColor = await getComputedStyle(header, 'background-color');
      expect(backgroundColor).toBe('rgb(255, 255, 255)');
    }
  });
});