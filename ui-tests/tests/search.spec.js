import { expect, test } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage.js';

test('laptop search kore product page e jawa jacche', async ({ page }) => {
  const searchPage = new SearchPage(page);

  await page.goto('https://demowebshop.tricentis.com/');
  await searchPage.search('14.1-inch Laptop');

  await page.getByRole('link', { name: '14.1-inch Laptop' }).first().click();

  await expect(searchPage.productTitle).toHaveText('14.1-inch Laptop');
});