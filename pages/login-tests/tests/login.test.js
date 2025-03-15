import{test, expert, expect } from '@playwright/test';
import { LoginPage } from '../LoginPage';

test.describe('login page test', () =>{
    test('user credentials validation', async ({page}) =>{
        const loginPage = new LoginPage(page);
        await loginPage.navigate();
        await loginPage.login('student','Password123');
        
        await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    })
})
