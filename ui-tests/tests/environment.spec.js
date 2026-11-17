import { expect, test } from '@playwright/test';

test('Verify Demo Web Shop opens successfully', async ({ page }) => {

  await page.goto('https://demowebshop.tricentis.com/');

  await expect(page).toHaveTitle(/Demo Web Shop/);

  console.log('Demo Web Shop opened successfully!');

  // Keep browser open for manual inspection
  await page.pause();

});