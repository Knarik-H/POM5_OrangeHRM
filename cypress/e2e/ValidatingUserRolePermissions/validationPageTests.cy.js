import ValidationPages from '../ValidatingUserRolePermissions/ValidationPages.js'
import { baseURL, login } from '../Constants.js';
const validationPage = new ValidationPages()


describe('Validating User Role Permissions', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit(baseURL)
    })
  
    it('Test validate permissions', () => {
        login()
        cy.wait(2000)
        validationPage.openAdminSection()
        cy.wait(2000)
        validationPage.clickAddButton()
        validationPage.openDropdownUserRole()
        cy.wait(2000)
        validationPage.openDropdownStatus()
        validationPage.veryfyExistenceESS()
        validationPage.fillEmployeeNameField()
        cy.wait(2000)
        validationPage.fillNewUsername()
        validationPage.fillNewPasswordField()
        validationPage.fillConfirmPasswordField()
        validationPage.clickSaveButton()
        validationPage.verifySuccessMessage()
        validationPage.logout()
        validationPage.logoutAndLoginWithNewCredentials()
        validationPage.attemptAccessToAdminSection()
        cy.wait(2000)
        validationPage.attemptAccessToJobTitle()
        validationPage.errorMassageIsVisible()
    })

    })        