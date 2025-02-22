import { test, expect } from '@playwright/test';

test('Делаем скриншот на ошибку входа', async ({ page }) => {
    await page.goto('https://demoqa.com/login');

    // Вводим неверный логин и пароль
    await page.fill('#userName', 'Test');
    await page.fill('#password', 'test');
    await page.click('#login');
    await page.screenshot({ path: 'err-screenshot.png' });
    
});