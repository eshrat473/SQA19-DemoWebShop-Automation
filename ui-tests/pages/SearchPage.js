export class SearchPage {
  constructor(page) {
    this.page = page;

    // Search locators
    this.searchBox = page.locator('#small-searchterms');
    this.searchButton = page.locator('input.search-box-button');

    // Product page er title
    this.productTitle = page.locator('h1[itemprop="name"]');
  }

  // Search method
  async search(text) {
    await this.searchBox.fill(text);
    await this.searchButton.click();
  }
}