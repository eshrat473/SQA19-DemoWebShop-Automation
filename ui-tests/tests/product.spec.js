import { expect, test } from '@playwright/test';
import { ProductPage } from '../pages/ProductPage.js';

test('product cart-e add kora jay', async ({ page }) => {
  const productPage = new ProductPage(page);

  await page.goto('https://demowebshop.tricentis.com/computing-and-internet');
  await productPage.addToCart(2);

  await expect(page.locator('#bar-notification')).toBeVisible();
});