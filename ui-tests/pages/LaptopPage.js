export class LaptopPage {
  constructor(page) {
    this.page = page;

    // Laptop product locators
    this.productTitle = page.locator('h1[itemprop="name"]');
    this.quantity = page.locator('#addtocart_31_EnteredQuantity');
    this.addToCartButton = page.locator('#add-to-cart-button-31');
  }

  // Add laptop to cart
  async addToCart(qty) {
    await this.quantity.fill(String(qty));
    await this.addToCartButton.click();
  }
}