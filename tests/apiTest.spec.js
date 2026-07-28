// tests/apiTest.spec.js
const { test, expect } = require('@playwright/test');

test.describe('Playwright ile API Testleri', () => {

    // 1. GET İSTEĞİ TESTİ (Veri Çekme)
    test('GET - Veri getirme ve durum kodu kontrolü', async ({ request }) => {
        // API'ye GET isteği gönderiyoruz (page yerine 'request' kullanıyoruz)
        const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

        // HTTP Durum Kodunu Kontrol Et (200 OK bekleniyor)
        expect(response.status()).toBe(200);

        // Yanıtı JSON formatına çevir
        const responseBody = await response.json();

        // Dönen verileri (JSON) doğrula
        console.log('Dönen Yanıt:', responseBody);
        expect(responseBody.id).toBe(1);
        expect(responseBody.userId).toBe(1);
        expect(responseBody).toHaveProperty('title');
    });


    // 2. POST İSTEĞİ TESTİ (Yeni Veri Ekleme)
    test('POST - Yeni veri oluşturma testi', async ({ request }) => {
        // Gönderilecek JSON verisini hazırlıyoruz
        const postData = {
            title: 'Playwright API Testi',
            body: 'JavaScript ve Playwright ile API test otomasyonu yapıyoruz.',
            userId: 10
        };

        // API'ye POST isteği gönderiyoruz
        const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
            data: postData
        });

        // HTTP Durum Kodunu Kontrol Et (201 Created bekleniyor)
        expect(response.status()).toBe(201);

        // Dönen yanıtın bizim gönderdiğimiz verileri içerdiğini doğrula
        const responseBody = await response.json();
        console.log('Oluşturulan Kayıt:', responseBody);

        expect(responseBody.title).toBe('Playwright API Testi');
        expect(responseBody.userId).toBe(10);
        expect(responseBody).toHaveProperty('id'); // Otomatik atanan ID var mı?
    });

    test('DELETE - Bir veriyi ya da veri grubunu silme testi API', async ({ request }) => {
        const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');

        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        console.log('silme işlemi response cevabı:', response.status());
    });

});