# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: environment.spec.js >> Verify Playwright browser launch
- Location: tests\environment.spec.js:4:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('h1')
Expected: "Example Domain"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('h1') with timeout 5000ms
  - waiting for locator('h1')

```

```yaml
- paragraph: This domain is for use in documentation examples without needing permission. This is not a service; avoid relying on it for testing and monitoring purposes.
- paragraph: هذا النطاق مُخصص للاستخدام في أمثلة التوثيق دون الحاجة إلى إذن. هذه ليست خدمة، يُرجى تجنب الاعتماد عليها لأغراض الاختبار والمراقبة.
- paragraph: 该域名仅用于文档示例，无需获得许可。这并非一项服务，请勿将其用于测试和监控目的。
- paragraph: L’usage de ce domaine est réservé à des exemples de documentation, sans autorisation préalable. Il ne s’agit pas d’un service ; son utilisation à des fins de test ou de surveillance est à éviter.
- paragraph: Данный домен предназначен для использования в примерах документации без необходимости получения предварительного разрешения. Это не сервис; не рекомендуется его использование для тестирования и мониторинга.
- paragraph: Este dominio está destinado al uso en ejemplos de documentación sin necesidad de permiso. Esto no es un servicio; evitar utilizarlo para realizar pruebas o monitoreos.
- link "Learn more":
  - /url: https://iana.org/help/example-domains
```

# Test source

```ts
  1  | 
  2  | import { expect, test } from '@playwright/test';
  3  | 
  4  | test('Verify Playwright browser launch', async ({ page }) => {
  5  | 
  6  |   await page.goto('https://example.com');
  7  | 
  8  |   // Check page information
  9  |   console.log('Page URL:', page.url());
  10 |   console.log('Page Title:', await page.title());
  11 | 
  12 |   // Check whether the heading exists
  13 |   const heading = page.locator('h1');
  14 | 
  15 |   console.log('Heading count:', await heading.count());
  16 | 
  17 |   // Print visible page content
  18 |   console.log('Page content:', await page.locator('body').innerText());
  19 | 
  20 |   // Verify heading
> 21 |   await expect(heading).toHaveText('Example Domain');
     |                         ^ Error: expect(locator).toHaveText(expected) failed
  22 | 
  23 | });
  24 | 
```