import {test, expect } from '@playwright/test';

// test('Работа с чекбоксами и списками', async ({ page }) => {
//     // checkbox
//     // await page.goto('https://the-internet.herokuapp.com/checkboxes');
//     // const checkboxes = await page.locator("input[type='checkbox']").all();

//     // for(const checkbox of checkboxes) {
//     //     await checkbox.check();
//     //     // await checkbox.uncheck();
//     //     expect(await checkbox.isChecked()).toBeTruthy();
//     // }

//     // dropdown
//     await page.goto('https://the-internet.herokuapp.com/dropdown');
//     await page.locator('select#dropdown').selectOption( { label: 'Option 1'} );

//     const selectedValue = await page.locator('select#dropdown').inputValue();
//     expect(selectedValue).toBe('1');
// })

test('rabota s elementami', async ({page})=> {
    await page.goto('https://shop.kz/offer/kreslo-igrovoe-kompyuternoe-wintek-yx-8155-3d-black-orange/');
    await page.locator(".button").first().click();
    // await page.locator("button").nth(1).click();
    // await page.locator("button").last().click();
});