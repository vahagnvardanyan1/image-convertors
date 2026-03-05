import { test, expect } from '@playwright/test';

const pages = ['/', '/about', '/contact'];

pages.forEach((page) => {
  test(`Header should be red on ${page}`, async ({ page: webPage }) => {
    await webPage.goto(`http://localhost:3000${page}`);
    const header = await webPage.$('header');
    const bgColor = await webPage.evaluate((header) => getComputedStyle(header).backgroundColor, header);
    expect(bgColor).toBe('rgb(255, 0, 0)'); // RGB for red
  });

  test(`No CSS conflicts on ${page}`, async ({ page: webPage }) => {
    await webPage.goto(`http://localhost:3000${page}`);
    const header = await webPage.$('header');
    const zIndex = await webPage.evaluate((header) => getComputedStyle(header).zIndex, header);
    expect(zIndex).toBe('50'); // Ensuring the z-index aligns with header's sticky behavior
  });
});