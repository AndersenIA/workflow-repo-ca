import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('Navigate to first venue details', async ({ page }) => {
    // Open the home page
    await page.goto('http://127.0.0.1:3000/');

    // Wait for the venue container to load
    await page.waitForSelector('#venue-container a'); // waits until at least one venue link is rendered

    // Click the first venue link
    await page.click('#venue-container a:first-child');

    // Check that the venue details page has loaded
    await expect(page.locator('h1')).not.toHaveText('Welcome to this site');
    await expect(page.locator('h1')).toBeVisible();
  });
});
