import {test, expect } from '@playwright/test';

test ('doe' , async ({page})=> {
    await page.goto('https://the-internet.herokuapp.com/tables');
    await page.locator(".button").first().click();
    await page.locator(".button").nth(1).click();
    await page.locator(".button").last().click();
});

