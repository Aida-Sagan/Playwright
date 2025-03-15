// POM struktura

class LoginPage {
    constructor(page){
        this.page=page;
        this.usernameInput = '#username';
        this.passwordInput = '#password';
        this.submitButton = 'button[type="submit"]';
        this.errorMessage = '#error';
    }

    async navigate() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    
    }

    async login(usename, password){
        await this.page.fill(this.usernameInput, usename);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.submitButton);
    }

    async getErrorMessage(){
        return await this.page.textContent(this.errorMessage);
    }
}

export {LoginPage};