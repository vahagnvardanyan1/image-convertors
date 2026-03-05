const { test, expect } = require('@playwright/test');

// Define the URLs to test
const pages = [
  '/', '/about', '/contact', '/products'
];

pages.forEach(page => {
  test(`Header color verification on ${page}`, async ({ page: browserPage }) => {
    // Go to the specified page
    await browserPage.goto(`http://localhost:3000${page}`);

    // Ensure the header is rendered with the correct gradient
    const header = await browserPage.$('header');
    const backgroundColor = await header.evaluate(node => window.getComputedStyle(node).backgroundImage);
    expect(backgroundColor).toContain('linear-gradient'); // Example assertion; modify this based on exact gradient value

    // Text color and other visual checks
    const textColor = await header.evaluate(node => window.getComputedStyle(node).color);
    expect(textColor).toBe('rgb(255, 255, 255)');
  });
});

// Responsive check
['iPhone 11', 'iPad Mini', 'Desktop Large'].forEach(device => {
  test.describe(`Responsive checks on ${device}`, () => {
    test.use({ viewport: { 
      width: device === 'iPhone 11' ? 414 : device === 'iPad Mini' ? 768 : 1920, 
      height: device === 'iPhone 11' ? 896 : device === 'iPad Mini' ? 1024 : 1080 
    }});

    test('Header color and layout on ' + device, async ({ page: browserPage }) => {
      await browserPage.goto('http://localhost:3000');

      const header = await browserPage.$('header');
      const backgroundColor = await header.evaluate(node => window.getComputedStyle(node).backgroundImage);
      expect(backgroundColor).toContain('linear-gradient');
    });
  });
});