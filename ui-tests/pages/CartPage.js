export class CartPage {
  constructor(page) {
    this.page = page;

    // Cart locators
    this.productName = page.locator('a.product-name');
    this.quantity = page.locator('input.qty-input');
  }
}