
export class CheckoutPage {
  constructor(page) {
    this.page = page;

    // Billing address
    this.billingContinueButton = page.locator(
      '#billing-buttons-container input.button-1'
    );

    // Shipping address
    this.shippingContinueButton = page.locator(
      '#shipping-buttons-container input.button-1'
    );

    // Shipping method
    this.shippingOptions = page.locator('input[name="shippingoption"]');
    this.shippingMethodContinueButton = page.locator(
      '#shipping-method-buttons-container input.button-1'
    );

    // Payment method
    this.paymentOptions = page.locator('input[name="paymentmethod"]');
    this.paymentMethodContinueButton = page.locator(
      '#payment-method-buttons-container input.button-1'
    );

    // Payment information
    this.paymentInfoContinueButton = page.locator(
      '#payment-info-buttons-container input.button-1'
    );

    // Confirm order
    this.confirmOrderButton = page.locator(
      '#confirm-order-buttons-container input.button-1'
    );

    // Order confirmation
    this.orderSuccessMessage = page.locator('.order-completed .title');
  }

  async continueBilling() {
    await this.billingContinueButton.click();
  }

  async continueShippingAddress() {
    await this.shippingContinueButton.click();
  }

  async selectShippingMethod() {
    await this.shippingOptions.first().check();
    await this.shippingMethodContinueButton.click();
  }

  async selectPaymentMethod() {
    await this.paymentOptions.first().check();
    await this.paymentMethodContinueButton.click();
  }

  async continuePaymentInfo() {
    await this.paymentInfoContinueButton.click();
  }

  async confirmOrder() {
    await this.confirmOrderButton.click();
  }
}
