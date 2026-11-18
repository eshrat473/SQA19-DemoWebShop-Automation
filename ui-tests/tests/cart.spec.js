import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/CartPage.js';
import { ProductPage } from '../pages/ProductPage.js';

test('cart-e product ar quantity thik ase', async ({ page }) => {
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  await page.goto('https://demowebshop.tricentis.com/computing-and-internet');
  await productPage.addToCart(2);

  await page.goto('https://demowebshop.tricentis.com/cart');

  await expect(cartPage.productName).toHaveText('Computing and Internet');
  await expect(cartPage.quantity).toHaveValue('2');
});