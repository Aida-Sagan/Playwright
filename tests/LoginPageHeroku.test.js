import { test, expect } from '@playwright/test';
import LoginPageHeroku from '../pages/LoginPageHeroku';

test('user sign up OK', async ({ page }) => {
  const loginPageHeroku = new LoginPageHeroku(page); // Создаем новый объект страницы логина
  
  // Переходим на страницу авторизации
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // Вводим корректные данные и нажимаем кнопку входа
  await loginPageHeroku.login('tomsmith', 'SuperSecretPassword!');

  // Проверяем, что после входа нас перенаправило на  страницу
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure'); 
  
  // Проверяем, что на странице появилась строка с успешным входом
  const successMessage = await page.locator('div.flash.success');
  await expect(successMessage).toContainText('You logged into a secure area!');
});

