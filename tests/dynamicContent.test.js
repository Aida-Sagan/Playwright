import { test, expect } from '@playwright/test';

test('Проверка изменения контента при обновлении страницы', async ({ page }) => {
  // Переходим на страницу с динамическим контентом
  await page.goto('https://the-internet.herokuapp.com/dynamic_content');
  
  // Получаем исходный контент (например, текст первого элемента)
  const initialContent = await page.locator('div#content > div:nth-of-type(1)').textContent();

  // Обновляем страницу 3 раза и проверяем, что контент изменяется
  for (let i = 0; i < 3; i++) {
    await page.reload(); // Обновляем страницу
    const newContent = await page.locator('div#content > div:nth-of-type(1)').textContent();
    
    // Проверяем, что контент изменился
    expect(newContent).not.toBe(initialContent);
    
    // Обновляем текущий контент для следующей итерации
    initialContent = newContent;
  }
});
