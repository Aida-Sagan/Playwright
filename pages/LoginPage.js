export default class LoginPage {
    constructor(page){
        this.page = page

        this.userInputField = page.locator('#userName'); //locator ishet element polja po selectoru id 
        this.passwordInputField = page.locator('#password'); 
        this.loginButton = page.locator('#login');
    }

async login(username, password){
    await this.userInputField.fill(username);
    await this.passwordInputField.fill(password);
    await this.loginButton.click();
    }
    
}