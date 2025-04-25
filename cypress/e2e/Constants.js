const baseURL = 'https://opensource-demo.orangehrmlive.com/'

const credentials = {
    username: 'Admin',
    password: 'admin123',
}

const loginLocators = {
    username: '[name="username"]',
    password: '[name="password"]',
    loginSubmitButton: '[type="submit"]',
    topBar: '.oxd-topbar-header',
}

function login() {
    cy.get(loginLocators.username).type(credentials.username)
    cy.get(loginLocators.password).type(credentials.password)
    cy.get(loginLocators.loginSubmitButton, { timeout: 5000 }).click()  
    cy.get(loginLocators.topBar).should('exist').and('contain', 'Dashboard')
}

export { baseURL, credentials, loginLocators, login }