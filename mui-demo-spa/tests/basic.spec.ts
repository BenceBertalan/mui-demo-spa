import { test, expect } from '@playwright/test';

test('basic app load', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/React App/);
  await expect(page.locator('text=Learn React')).toBeVisible();
});