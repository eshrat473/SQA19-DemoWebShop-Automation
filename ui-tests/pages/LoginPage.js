export class LoginPage {
  constructor(page) {
    this.page = page;

    this.email = page.locator('#Email');
    this.password = page.locator('#Password');
    this.loginBtn = page.locator('input.login-button');
    this.errorMessage = page
      .locator('span', { hasText: 'Login was unsuccessful. Please correct the errors and try again.' })
      .first();
  }

  async login(email, pass) {
    await this.email.fill(email);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}