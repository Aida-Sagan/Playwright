import { test, expect } from '@playwright/test';
import {LoginPageHeroku} from "../LoginPageHeroku.js";

// test('авторизация пользователя', async ({page}) => {
//     const page1 = new LoginPageHeroku(page);
//     await page1.navigateLogin();
//     await page1.login('tomsmith', 'SuperSecretPassword!');
//     expect(await page1.isLoggedIn()).toBeTruthy();
// })

/**
 * 2️⃣. Проверка выпадающего списка (Dropdown)

Сценарий:

    Перейти на страницу: https://the-internet.herokuapp.com/dropdown.
    Выбрать из выпадающего списка:
        
Option 1
        Option 2
    Проверить, что выбранная опция отображается корректно.
 */

test('проверка выбора элемента из выпадушки', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = page.locator('#dropdown');
    await dropdown.selectOption('1');
    expect(await dropdown.inputValue()).toBe('1');
})

/**
 * 3️⃣ Проверка чекбоксов (Checkboxes)

Сценарий:

    Перейти на страницу: https://the-internet.herokuapp.com/checkboxes.
    Убедиться, что первый чекбокс не выбран.
    Отметить первый чекбокс.
    Проверить, что чекбокс отмечен.
 */
    test('проверка выбора checkbox', async ({page}) => {
        await page.goto('https://the-internet.herokuapp.com/checkboxes');
        const checkbox = page.locator('input[type="checkbox"]').first();
        await checkbox.check();
        expect(await checkbox.isChecked()).toBeTruthy();
    })
    
    /**
     * 
4️⃣Тест динамического контента (Dynamic Content)

Сценарий:

    Перейти на страницу: https://the-internet.herokuapp.com/dynamic_content.
    Обновить страницу 3 раза.
    Проверить, что контент изменяется при каждом обновлении страницы.

     */

    // test('проверка динамического контента ', async ({page}) => {
    //     await page.goto('https://the-internet.herokuapp.com/dynamic_content');
    //     const dynamic_content = page.locator('.large-10').first().textContent();
        
    //     console.log('dynamic_content ===', dynamic_content);
        
    //     for(let i = 0; i < 3; i++){
    //         console.log('i = ', i)
    //         console.log('собираемся перезагружать страницу')
    //         await page.reload();
    //         console.log('перезагрузили страницу')
    //         const newContent = await page.locator('.large-10').first().textContent();
    //         console.log('newContent ===', newContent)

    //         expect(newContent).not.toBe(dynamic_content);
    //     }
    // })

    /**
     * 5️⃣Проверка алертов (JavaScript Alerts)

Сценарий:

    Перейти на страницу: https://the-internet.herokuapp.com/javascript_alerts.
    Нажать кнопку Click for JS Alert и подтвердить алерт.
    Проверить, что отображается текст: "You successfully clicked an alert".
     */

    test('проверка алертов', async ({page}) => {
        await page.goto(' https://the-internet.herokuapp.com/javascript_alerts');
        page.on('dialog', dialog => dialog.accept());
        await page.locator('button:text("Click for JS Alert")').click();
        expect(await page.locator('#result').textContent()).toContain('You successfully clicked an alert')
    })