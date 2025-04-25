import {locators as validationLocators} from './validationPageLocators.js';
import { baseURL, login, loginLocators} from '../Constants.js';
 

class ValidationPages {
  openpage(){
    cy.visit(baseURL)
    }
  login() {
    login()
    }
  openAdminSection() {
    cy.contains(validationLocators.adminSection, 'Admin').click()
    }
  clickAddButton() {
    cy.get(validationLocators.addButton).click()
    }
  openDropdownUserRole() {
    cy.get(validationLocators.dropdownButton).eq(0).click()
    cy.get(validationLocators.dropdownBox, { timeout: 5000 }).should('be.visible')
    cy.contains(validationLocators.selectFromDropdown, 'ESS').click()
    }
  openDropdownStatus() {
    cy.get(validationLocators.dropdownButton).eq(1).click()
    cy.get(validationLocators.dropdownBox, { timeout: 5000 }).should('be.visible')
    cy.contains(validationLocators.selectFromDropdown, 'Enabled').click()
    }
  veryfyExistenceESS() {
    cy.get(validationLocators.existanceESS).eq(0).should('contain', 'ESS')  
    }
  fillEmployeeNameField() {
    cy.get(validationLocators.employeeNameField, {timeout:6000}).type('Rahul', { delay: 200 })
    cy.contains('Rahul Das').should('be.visible').wait(100).click({ force: true });
    cy.get(validationLocators.employeeNameField).invoke('val').should('include', 'Rahul')
    }
  fillNewUsername() {
    const randomUsername = 'User_' + Date.now();
    cy.wrap(randomUsername).as('generatedUsername');
    cy.contains('label', 'Username').parents(validationLocators.usernameFieldGroup)
    .find('input').type(randomUsername);
    }
  fillNewPasswordField() {
    cy.get(validationLocators.passwordField).eq(0).type('NewPassword123')
    }
  fillConfirmPasswordField() {
    cy.get(validationLocators.passwordField).eq(1).type('NewPassword123')
    }
  clickSaveButton() {
    cy.get(validationLocators.saveButton).click()
    }
  verifySuccessMessage() {
    cy.get(validationLocators.successMessage, { timeout: 5000 }).should('be.visible')
      .and('contain', 'Successfully Saved')
    }
  logout() {
    cy.get(validationLocators.userDropDownTab, {timeout:5000}).click()
    cy.contains('Logout').should('be.visible').click();
    }
  logoutAndLoginWithNewCredentials() {
    cy.get('@generatedUsername').then((username) => {
      cy.get(loginLocators.username).type(username)
      cy.get(loginLocators.password).type('NewPassword123')
      cy.get(loginLocators.loginSubmitButton).click()
      cy.get(loginLocators.topBar,{timeout:5000}).should('exist').and('contain', 'Dashboard')
    })
      }
  attemptAccessToAdminSection() {
    cy.get(validationLocators.sidePanel).contains('Admin').should('not.exist');
    }
    attemptAccessToJobTitle() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList', {
      failOnStatusCode: false,}) 
    }
  errorMassageIsVisible() {
    cy.get(validationLocators.errorMessage).should('be.visible').and('contain', 'Credential Required')
    }
}

export default ValidationPages;











