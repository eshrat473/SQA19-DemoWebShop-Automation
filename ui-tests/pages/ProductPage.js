export class ProductPage {
  constructor(page) {
    this.page = page;

    // Product 13 locators
    this.quantity = page.locator('#addtocart_13_EnteredQuantity');
    this.addToCartButton = page.locator('#add-to-cart-button-13');
  }

  // Add to cart method
  async addToCart(qty) {
    await this.quantity.fill(String(qty));
    await this.addToCartButton.click();
  }
}