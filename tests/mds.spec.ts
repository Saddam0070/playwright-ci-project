import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demowebshop.tricentis.com/register');
  await page.getByLabel('Male', { exact: true }).check();
  await page.getByLabel('First name:').click();
  await page.getByLabel('First name:').fill('abcd');
  await page.getByLabel('Last name:').click();
  await page.getByLabel('Last name:').fill('xyz');
  await page.getByLabel('Email:').click();
  //await page.getByLabel('Email:').fill('abc80987@gmail.com');
    const randomEmail = `test${Math.floor(Math.random() * 10000)}@gmail.com`;

await page.getByLabel('Email:').fill(randomEmail);

  await page.getByLabel('Password:', { exact: true }).click();
  await page.getByLabel('Password:', { exact: true }).fill('abc@123');
  await page.getByLabel('Confirm password:').click();
  await page.getByLabel('Confirm password:').fill('abc@123');
  await page.getByRole('button', { name: 'Register' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();
});