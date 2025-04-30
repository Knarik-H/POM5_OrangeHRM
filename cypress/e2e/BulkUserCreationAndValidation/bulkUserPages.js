import { baseURL, login, testData } from '../Constants.js';
import { bulkUserLocators } from './bulkUserLocators.js';

class BulkUser {
    open() {
        cy.visit(baseURL)
    }
    login() {
        login()
    }
    openAdminSection() {
        cy.contains(bulkUserLocators.adminSection, 'Admin').click()
    }
    navigateToUserManagement() {
        cy.contains(bulkUserLocators.userManagementSection,'User Management').click()
    }
    clickUsersDropdown() {
        cy.get(bulkUserLocators.dropdownUsers).click()
    }
    clickAddButton() {
        cy.get(bulkUserLocators.addButton, {timeout:5000}).click()
    }


    openDropdownUserRole(role) {
        cy.get(bulkUserLocators.dropdownButton).eq(0).click()
        cy.get(bulkUserLocators.dropdownBox, { timeout: 5000 }).should('be.visible')
        cy.contains(bulkUserLocators.selectFromDropdown, 'ESS').click()
    }
    openDropdownStatus(status) {
        cy.get(bulkUserLocators.dropdownButton).eq(1).click()
        cy.get(bulkUserLocators.dropdownBox, { timeout: 5000 }).should('be.visible')
        cy.contains(bulkUserLocators.selectFromDropdown, 'Enabled').click()
    }
    veryfyExistenceESS() {
        cy.get(bulkUserLocators.existanceESS).eq(0).should('contain', 'ESS')  
    }
    fillEmployeeNameField(employeeName) {
        cy.get(bulkUserLocators.employeeNameField, {timeout:6000}).type(employeeName, { delay: 200 })
        cy.contains(employeeName).should('be.visible').wait(100).click({ force: true });
            cy.get(bulkUserLocators.employeeNameField).invoke('val').should('include', employeeName)
    }
    fillNewUsername(username) {     
        cy.contains('label', 'Username').parents(bulkUserLocators.usernameFieldGroup)
        .find('input').type(username);
        }
    fillNewPasswordField(password) {
        cy.get(bulkUserLocators.passwordField).eq(0).type(password)
        }
    fillConfirmPasswordField(confirmPassword) {
        cy.get(bulkUserLocators.passwordField).eq(1).type(confirmPassword)
        }
    clickSaveButton() {
        cy.get(bulkUserLocators.saveButton, {timeout:5000}).click()
        }
    verifySuccessMessage() {
        cy.get(bulkUserLocators.successMessage, { timeout: 5000 }).should('exist').and('be.visible')
          .and('contain', 'Successfully Saved')
        }

     createUser(user) {
        this.openDropdownUserRole(user.role);
        this.openDropdownStatus(user.status);
        this.fillEmployeeNameField(user.employeeName);
        this.fillNewUsername(user.username);
        this.fillNewPasswordField(user.password);
        this.fillConfirmPasswordField(user.confirmPassword)
        this.clickSaveButton();
        this.verifySuccessMessage();
        //this.clickAddButton()
        }

    navigateToUserManagementAgain() {
        cy.contains(bulkUserLocators.userManagementSection,'User Management').click()
        cy.get(bulkUserLocators.dropdownUsers).click()
    }
    clickSearchButton(){
        cy.get(bulkUserLocators.searchButton).click()
    }
    searchByUsername(username) {
        cy.contains('label', 'Username').parents(bulkUserLocators.userManagementUsernameField)
        .find('input').type(username); 
    }

}

export default BulkUser
