import { baseURL, login, testData } from '../Constants.js';
import BulkUser from './bulkUserPages.js';

const bulkUser = new BulkUser()

describe('Bulk User Creation and Validation', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.visit(baseURL)
    })
    it('Test Bulk User Creation and Validation', () => {
      login()
        cy.wait(2000)
        bulkUser.openAdminSection()
        cy.wait(2000)
        bulkUser.navigateToUserManagement()
        bulkUser.clickUsersDropdown()
        
        cy.wrap(testData).each((user) => {
            bulkUser.clickAddButton()
            bulkUser.createUser(user)
        })

        cy.wrap(testData).each((user) => {
            bulkUser.navigateToUserManagementAgain
            bulkUser.clickSearchButton()
            bulkUser.searchByUsername()
        })
    })
})
