import { test, expect } from  '@playwright/test';

test('добавление товара в корзине', async ({page}) => {
    await page.goto('https://demo.opencart.com/');
    await page.locator('a:has-text("iPhone")').click();

    // await page.locator('a:has-text("Add to Cart")').click();

    // await expect(page.locator('#header-cart')).toContainText('1 item(s)');
})