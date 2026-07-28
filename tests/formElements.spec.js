// tests/formElements.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Farklı Web Elemanları Testleri', () => {

  // 1. Checkbox (Onay Kutusu) Testi
  test('Checkbox seçme ve kaldırma', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator('input[type="checkbox"]').nth(0); // İlk checkbox
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1); // İkinci checkbox

    await checkbox1.check();
    await checkbox2.uncheck();
    await expect(checkbox1).toBeChecked(); // İşaretli mi kontrol et
    await expect(checkbox2).not.toBeChecked(); // İşaretsiz mi kontrol et

  });

  // 2. Dropdown (Açılır Menü) Testi
  test('Dropdown menüden seçim yapma', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown = page.locator('#dropdown');

    // Value değerine göre seçim yap ("2" değerine sahip Option 2'yi seçer)
    await dropdown.selectOption('2');

    // Seçilen değerin '2' olduğunu doğrula
    await expect(dropdown).toHaveValue('2');
  });

    test('Dropdown menüden seçim yapma 2', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown = page.locator('#dropdown');

    // Value değerine göre seçim yap ("2" değerine sahip Option 2'yi seçer)
    await dropdown.selectOption('1');

    // Seçilen değerin '2' olduğunu doğrula
    await expect(dropdown).toHaveValue('1');
  });

});