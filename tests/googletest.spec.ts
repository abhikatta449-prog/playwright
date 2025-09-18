import { test, expect } from '@playwright/test';

test('Google search test', async ({ page }) => {
  // Go to Google
  await page.goto('https://www.google.com/');

  // Click the search box
  await page.getByRole('combobox', { name: 'Search' }).click();

  // Type 'playwright'
  await page.getByRole('combobox', { name: 'Search' }).fill('playwright');

  // Press Enter to search
  await page.keyboard.press('Enter');

  // Wait for results and verify
  await expect(page).toHaveURL(/search/);
  await expect(page.locator('text=Playwright')).toBeVisible();
});

