import 'dotenv/config';
import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test('User can successfully log in with valid credentials', async ({
    page,
  }) => {
    await page.goto('http://127.0.0.1:3000/login/');

    // Fill in credentials from .env
    await page.fill('input[name="email"]', process.env.E2E_USERNAME);
    await page.fill('input[name="password"]', process.env.E2E_PASSWORD);
    await page.click('button[type="submit"]');

    // Expect redirect to home page
    await page.waitForURL('**/'); // waits for redirect to /
    await expect(page).toHaveURL('http://127.0.0.1:3000/');

    // You can also check if something unique on the homepage is visible
    await expect(page.locator('body')).toContainText('Hi venueuser');
  });

  test('User sees error with invalid credentials', async ({ page }) => {
    await page.goto('http://127.0.0.1:3000/login/');

    // Fill in invalid credentials
    await page.fill('input[name="email"]', 'wrong@stud.noroff.no');

    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Expect an error message to appear in #message-container
    await expect(page.locator('#message-container')).toContainText(
      /error|invalid|failed/i
    );
  });
});
