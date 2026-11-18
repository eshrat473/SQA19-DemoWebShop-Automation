
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium'
      }
    }
  ],

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['allure-playwright', {
  resultsDir: 'allure-results'
}]
  ],

  use: {
    headless: true,
    screenshot: 'on',
    trace: 'on-first-retry'
  }
});


