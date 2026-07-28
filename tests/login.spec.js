// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('POM Mimarisi ile Login Testleri', () => {

  test('Başarılı Giriş Senaryosu', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
  });

  test('Hatalı Şifre Giriş Senaryosu', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();
    await loginPage.login('tomsmith', 'YanlisSifre');

    await expect(loginPage.flashMessage).toContainText('Your password is invalid!');
  });

});