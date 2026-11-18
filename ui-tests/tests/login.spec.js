import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';

test('wrong password dile error dekhay', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://demowebshop.tricentis.com/login');
  await loginPage.login('wrong@example.com', 'wrong-password');

  await expect(loginPage.errorMessage).toBeVisible();
  await expect(page.getByRole('link', { name: 'Log out' })).toHaveCount(0);
});