import { expect, test } from '@playwright/test';
import { RegisterPage } from '../pages/RegisterPage.js';

test('notun user register kora jay', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await page.goto('https://demowebshop.tricentis.com/register');
  await registerPage.register('Test', 'User', `test${Date.now()}@example.com`, 'Test@1234');

  await expect(page.getByText('Your registration completed')).toBeVisible();
});