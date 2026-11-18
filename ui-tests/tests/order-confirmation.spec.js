
import 'dotenv/config';
import { test, expect } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage.js';
import { LaptopPage } from '../pages/LaptopPage.js';
import { CartPage } from '../pages/CartPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import { CheckoutPage } from '../pages/CheckoutPage.js';

test('Q3: Complete checkout and confirm order', async ({ page }) => {
  const searchPage = new SearchPage(page);
  const laptopPage = new LaptopPage(page);
  const cartPage = new CartPage(page);
  const loginPage = new LoginPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Step 1: Search laptop
  await page.goto('https://demowebshop.tricentis.com/');
  await searchPage.search('14.1-inch Laptop');

  // Step 2: Open product page
  await page.getByRole('link', { name: '14.1-inch Laptop' }).first().click();
  await expect(laptopPage.productTitle).toHaveText('14.1-inch Laptop');

  // Step 3: Add product to cart
  await laptopPage.addToCart(2);
  await expect(page.locator('#bar-notification')).toBeVisible();

  // Step 4: Verify cart
  await page.goto('https://demowebshop.tricentis.com/cart');
  await expect(cartPage.productName).toContainText('14.1-inch Laptop');
  await expect(cartPage.quantity).toHaveValue('2');

  // Step 5: Checkout
  await cartPage.checkout();

  // Step 6: Login
  await expect(loginPage.email).toBeVisible();
  await loginPage.login(
    process.env.TEST_EMAIL,
    process.env.TEST_PASSWORD
  );

  // Step 7: Checkout again after login
  await expect(page).toHaveURL(/cart/);
  await cartPage.checkout();

  // Step 8: Billing address
  await expect(checkoutPage.billingContinueButton).toBeVisible();
  await checkoutPage.continueBilling();

  // Step 9: Shipping address
  await expect(checkoutPage.shippingContinueButton).toBeVisible();
  await checkoutPage.continueShippingAddress();

  // Step 10: Shipping method
  await expect(checkoutPage.shippingOptions.first()).toBeVisible();
  await checkoutPage.selectShippingMethod();

  // Step 11: Payment method
  await expect(checkoutPage.paymentOptions.first()).toBeVisible();
  await checkoutPage.selectPaymentMethod();

  // Step 12: Payment information
  await expect(checkoutPage.paymentInfoContinueButton).toBeVisible();
  await checkoutPage.continuePaymentInfo();

  // Step 13: Confirm order
  await expect(checkoutPage.confirmOrderButton).toBeVisible();
  await checkoutPage.confirmOrder();

  // Step 14: Verify order confirmation
  await expect(checkoutPage.orderSuccessMessage).toBeVisible();
});
