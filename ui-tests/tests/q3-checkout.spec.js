import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage.js';
import { LaptopPage } from '../pages/LaptopPage.js';
import { CartPage } from '../pages/CartPage.js';
import { LoginPage } from '../pages/LoginPage.js';

test('laptop search kore checkout process start kora jay', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const laptopPage = new LaptopPage(page);
  const cartPage = new CartPage(page);
  const loginPage = new LoginPage(page);

  await page.goto('https://demowebshop.tricentis.com/');
  await searchPage.search('14.1-inch Laptop');
  await page.getByRole('link', { name: '14.1-inch Laptop' }).first().click();
  await expect(laptopPage.productTitle).toHaveText('14.1-inch Laptop');

  await laptopPage.addToCart(2);
  await expect(page.locator('#bar-notification')).toBeVisible();

  await page.goto('https://demowebshop.tricentis.com/cart');
  await expect(cartPage.productName).toHaveText('14.1-inch Laptop');
  await expect(cartPage.quantity).toHaveValue('2');

  await cartPage.checkout();

  await expect(loginPage.email).toBeVisible();
  await loginPage.login(process.env.TEST_EMAIL, process.env.TEST_PASSWORD);
  await expect(loginPage.email).not.toBeVisible();
});