import { test, expect } from  '@playwright/test';

test('Работа с таблицей', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/tables');
    const row = page.locator('#table1 tbody tr:has-text("Jason")');
    // const amountColumn = row.locator('td:nth-child(4)').textContent();

    // expect(amountColumn).toMatch(/\$\d+\.\d{2}/);
    await row.locator('a:has-text("delete")').click();
})