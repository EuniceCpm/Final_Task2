class LoginPage {

get usernameInput(){ return $('#user-name') }

get passwordInput(){ return $('#password') }

get loginButton(){ return $('#login-button') }

get errorMessage(){ return $('.error-message-container.error') }

open(){
return browser.url('https://www.saucedemo.com/')
}

async login(username,password){
await this.usernameInput.setValue(username)
await this.passwordInput.setValue(password)
await this.loginButton.click()
}

async clearFields(){
await this.usernameInput.click()
await browser.keys(['Control', 'a', 'NULL']);
await browser.keys('Backspace');
await this.passwordInput.click()
await browser.keys(['Control', 'a', 'NULL']);
await browser.keys('Backspace');
}

async clearPassword(){
await this.passwordInput.click()
await browser.keys(['Control', 'a', 'NULL']);
await browser.keys('Backspace');
}

}

module.exports = new LoginPage()