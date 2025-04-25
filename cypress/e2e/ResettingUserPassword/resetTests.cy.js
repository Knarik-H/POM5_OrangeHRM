import ResetUserPassword from '../ResettingUserPassword/resetPage'
import { baseURL, login } from '../Constants.js';
const resetUserPassword = new ResetUserPassword()

describe('Resetting User Password', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit(baseURL)
  })
  
  it('Test Reset Password', () => {
    login()
      cy.wait(2000)
      resetUserPassword.openAdminSection()
      cy.wait(2000)
      resetUserPassword.navigateToUserManagement()
      resetUserPassword.searchByUsername()
      cy.wait(2000)
      resetUserPassword.clickSearchButton()  
      resetUserPassword.clickEditButton()
      resetUserPassword.checkPasswordCheckbox()
      resetUserPassword.searchByUsername()
      resetUserPassword.fillNewPasswordField()
      resetUserPassword.fillConfirmPasswordField()
      resetUserPassword.clickSaveButtonForNewPassword()
      cy.wait(2000)
      resetUserPassword.verifyResetSuccessMessage()
  })
})
  





    