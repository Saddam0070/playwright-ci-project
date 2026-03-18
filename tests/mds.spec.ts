import { test, expect } from '@playwright/test';

test('Google6 title check', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
  console.log(await page.url());
});