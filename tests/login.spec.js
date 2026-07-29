// tests/login.spec.js
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Senaryoları', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Başarılı kullanıcı girişi', async ({ page }) => {
    await loginPage.login('test_user', 'password123');

    // Doğrulama adımında sayfa URL'i kontrol edilebilir
    await expect(page).toHaveURL(/.*secure/);
  });

  test('Hatalı şifre ile giriş denemesi', async () => {
    await loginPage.login('test_user', 'password123');

    const errorText = await loginPage.getErrorMessageText();
    expect(errorText).toContain('Kullanıcı adı veya şifre hatalı');
  });
});