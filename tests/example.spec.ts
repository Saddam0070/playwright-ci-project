import { test, expect } from '@playwright/test';

test('Google title check', async ({ page }) => {
  await page.goto('https://ww.go65ogle.com');
  await expect(page).toHaveTitle(/Google/);
  console.log(await page.url());
});