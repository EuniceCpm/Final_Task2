const {Given, When, Then} = require('@wdio/cucumber-framework')
const LoginPage = require('../pageobjects/login-page.js')
const InventoryPage = require('../pageobjects/inventory-page.js')

Given('I open the login page', async () => {
await LoginPage.open()
})

When('I enter {string} in username', async (username) => {
await LoginPage.usernameInput.setValue(username)
})

When('I enter {string} in password', async (password) => {
await LoginPage.passwordInput.setValue(password)
})

When('I clear the login fields', async () => {
await LoginPage.clearFields()
})

When('I clear the password field', async () => {
await LoginPage.clearPassword()
})

When('I click the login button', async () => {
await LoginPage.loginButton.click()
})

When('I login with username {string} and password {string}', async (username,password) => {
await LoginPage.login(username,password)
})

Then('I should see error message {string}', async (message) => {
await expect(LoginPage.errorMessage).toHaveText(message)
})

Then('I should see the dashboard title {string}', async (title) => {
await expect(InventoryPage.title).toHaveText(title)
})