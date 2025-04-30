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

const testData = [
    {userRole:'Admin', status:'Enabled', employeeName:'Charles  Carter', username:'Charles',
     password:'Teresa123', confirmPassword:'Teresa123'},
    {userRole:'ESS', status:'Enabled', employeeName:'Amelia Brown', username:'Amelia',
     password:'Amelia123', confirmPassword:'Amelia123'},
    {userRole:'Admin', status:'Disabled', employeeName:'Thomas Kutty Benny', username:'Thomas',
     password:'Thomas123', confirmPassword:'Thomas123'},
    {userRole:'ESS', status:'Disabled', employeeName:'Peter Mac Anderson', username:'Peter', 
    password:'Peter123', confirmPassword:'Peter123'},

]


  
export { baseURL, credentials, loginLocators, login, testData }