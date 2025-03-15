import {test, expect } from '@playwright/test';
import exp from 'constants';

test('Rabota s checkboxami', async ({page})=> {

//checkbox
await page.goto('https://the-internet.herokuapp.com/checkboxes');
const checkboxes = await page.locator("input[type= 'checkbox']").all();

for (const checkbox of checkboxes){
    await checkbox.check();
    expect(await checkbox.isChecked()).toBeTruthy();

}

//dropdown
await page.goto('https://the-internet.herokuapp.com/dropdown');
await page.locator('select#dropdown').selectOption({label: 'Option 1'});

const selectedValue = await page.locator('select#dropdown').inputValue();
expect (selectedValue).toBe('1');
})

