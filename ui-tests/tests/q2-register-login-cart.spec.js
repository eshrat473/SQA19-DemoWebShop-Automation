
import { expect, test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { ProductPage } from '../pages/ProductPage.js';
import { CartPage } from '../pages/CartPage.js';

test('Q2: Register, login and add product to cart', async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const loginPage = new LoginPage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);

  // Step 1: Generate unique account details
  const email = `test${Date.now()}@example.com`;
  const password = 'Test@1234';

  // Step 2: Register new customer
  await page.goto('https://demowebshop.tricentis.com/register');
  await registerPage.register('Test', 'User', email, password);

  await expect(
    page.getByText('Your registration completed')
  ).toBeVisible();

  // Step 3: Logout after registration
  await page.getByRole('link', { name: 'Log out' }).click();

  // Step 4: Login with registered account
  await page.goto('https://demowebshop.tricentis.com/login');
  await loginPage.login(email, password);

  await expect(
    page.getByRole('link', { name: 'Log out' })
  ).toBeVisible();

  // Step 5: Open product category
  await page.goto(
    'https://demowebshop.tricentis.com/computing-and-internet'
  );

  // Step 6: Add product to cart
  await productPage.addToCart(2);

  await expect(page.locator('#bar-notification')).toBeVisible();

  // Step 7: Verify cart product and quantity
  await page.goto('https://demowebshop.tricentis.com/cart');

  await expect(cartPage.productName).toHaveText('Computing and Internet');
  await expect(cartPage.quantity).toHaveValue('2');
});
