import {resetLocators} from '../ResettingUserPassword/resetLocators.js';
import { baseURL, login, loginLocators} from '../Constants.js';

 class ResetUserPassword {
    open() {
        cy.visit(baseURL)
    }
    login() {
        login()
    }
    openAdminSection() {
        cy.contains(resetLocators.adminSection, 'Admin').click()
    }
    navigateToUserManagement() {
        cy.contains(resetLocators.userManagementSection,'User Management').click()
    }
    searchByUsername() {
        cy.contains('label', 'Username').parents(resetLocators.userManagementUsernameField)
        .find('input').type('test1');
    }
    // searchWithInvalidUsername() {
    //     cy.get(locators.userManagementUsernameField).find('input').type('InvalidUser');
    //     cy.get(locators.searchButton).click();
    //     cy.get(locators.noResults).should('be.visible').and('contain', 'No Records Found');
    //     cy.get(locators.infoMassageMassage).should('be.visible').and('contain', 'No Records Found');
    // }
    clickSearchButton() {
        cy.get(resetLocators.searchButton, { timeout: 5000 }).click();
    }
    clickEditButton() {
        cy.get(resetLocators.editButton).click()
    }
    checkPasswordCheckbox() {
        cy.get(resetLocators.changePasswordCheckbox).click()
    }
    fillNewPasswordField() {
        cy.get(resetLocators.passwordField).eq(0).type('password123K')
      }
    fillConfirmPasswordField() {
        cy.get(resetLocators.passwordField).eq(1).type('password123K')
      }
    clickSaveButtonForNewPassword() {
        cy.get(resetLocators.saveButtonForNewPassword, {timeout:5000}).click()
      }
    verifyResetSuccessMessage() {
      cy.get(resetLocators.infoMassage, { timeout: 3000 } ).should('be.visible')
      .and('contain', 'Successfully Updated')
    }
    }


export default ResetUserPassword
