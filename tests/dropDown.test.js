import { test, expect } from '@playwright/test';

test('Проверка выбора опции в выпадающем списке', async ({ page }) => {
  // Переходим на страницу с выпадающим списком
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  
  // Находим выпадающий список
  const dropdown = page.locator('#dropdown');
  
  // Выбираем опцию "Option 1"
  await dropdown.selectOption({ label: 'Option 1' });

  // Проверяем, что выбранная опция отображается корректно
  const selectedOption1 = await dropdown.locator('option:checked').textContent();
  expect(selectedOption1).toBe('Option 1'); // Проверяем, что выбрана именно "Option 1"

  // Выбираем опцию "Option 2"
  await dropdown.selectOption({ label: 'Option 2' });

  // Проверяем, что выбрана "Option 2"
  const selectedOption2 = await dropdown.locator('option:checked').textContent();
  expect(selectedOption2).toBe('Option 2'); // Проверяем, что выбрана именно "Option 2"
});
