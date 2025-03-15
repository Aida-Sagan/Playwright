import { test, expect } from '@playwright/test';

test('Проверка работы с JavaScript Alert', async ({ page }) => {
  // Переходим на страницу с алертами
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  
  // Нажимаем кнопку, которая вызывает алерт
  const jsAlertButton = page.locator('button:has-text("Click for JS Alert")');
  await jsAlertButton.click(); 
  
  // Обрабатываем алерт, подтверждаем его
  page.on('dialog', async dialog => {
    expect(dialog.message()).toBe('I am a JS Alert'); // Проверяем текст в алерте
    await dialog.accept(); // Подтверждаем алерт
  });
  
  // Проверяем, что на странице появилось сообщение об успешном клике
  const resultMessage = page.locator('#result');
  await expect(resultMessage).toHaveText('You successfully clicked an alert');
});
