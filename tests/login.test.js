import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

test('Proverka zagruzky stranicy (200 OK )', async ({page}) =>{

    const urls =[
        'https://demoqa.com/',
        'https://demoqa.com/forms',
        'https://demoqa.com/sortable'
    ]

    for (const url of urls ){
        const response = await page.goto(url);
        expect(response.status()).toBe(200);
    }
    
})

test('user sign up OK', async ({page}) =>{
    const loginPage = new LoginPage(page); //sozdanije novogo objekta stranicy LoginPage -- sozdanije novogo exzempljara

    await page.goto('https://demoqa.com/login'); //perehod na stranicu logina
    await loginPage.login('Idoc', '12345678Aa@'); //vyzyvajem metod login iz klassa

    await expect(page).toHaveURL('https://demoqa.com/profile'); //proverjaem uspeshny vxod
});

