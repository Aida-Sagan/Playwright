import { test, expect } from '@playwright/test';

test('Проверка работы чекбоксов', async ({ page }) => {
  // Переходим на страницу с чекбоксами
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  
  // Находим первый чекбокс 
  const firstCheckbox = page.locator('input[type="checkbox"]:nth-of-type(1)');
  
  // Проверяем, что первый чекбокс не выбран
  //zdzdzcd
  await expect(firstCheckbox).not.toBeChecked();

  // Отмечаем первый чекбокс
  await firstCheckbox.check();
  
  // Проверяем, что первый чекбокс теперь отмечен
  await expect(firstCheckbox).toBeChecked();
});
