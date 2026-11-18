export class CartPage {
  constructor(page) {
    this.page = page;

    // Cart locators
    this.productName = page.locator('a.product-name');
    this.quantity = page.locator('input.qty-input');

    // Checkout locators
    this.termsCheckbox = page.locator('#termsofservice');
    this.checkoutButton = page.locator('#checkout');
  }

  // Checkout method
  async checkout() {
    await this.termsCheckbox.check();
    await this.checkoutButton.click();
  }
}