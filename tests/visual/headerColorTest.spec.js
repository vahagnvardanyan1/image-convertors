const { test, expect } = require('@playwright/test');

test.describe('Header Color Change', () => {
    test('Header should change to green color', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const header = await page.locator('h1');
        const headerColor = await header.evaluate((h) => window.getComputedStyle(h).color);
        expect(headerColor).toBe('rgb(0, 128, 0)'); // The RGB representation of green
    });

    test('Navigation items should reflect style changes', async ({ page }) => {
        await page.goto('http://localhost:3000');
        const navItems = await page.locator('nav a');
        for (let i = 0; i < await navItems.count(); i++) {
            const navItemColor = await navItems.nth(i).evaluate((el) => window.getComputedStyle(el).color);
            expect(navItemColor).not.toBe('rgb(0, 0, 255)'); // Not blue, indicate bg should handle this
        }
    });
});