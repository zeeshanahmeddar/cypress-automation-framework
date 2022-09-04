/// <reference types="cypress" />
import signInData from '../../../fixtures/apemails.json'
class SignInPage{
    visit(){
        cy.clearCookies()
        Cypress.config('defaultCommandTimeout', 30000)
        cy.visit('http://automationpractice.com/index.php')
    }

    enterEmail(){
        cy.get('.login').should('be.visible').click()
        cy.get('#email').should('be.visible').click().clear().type(signInData[0].email)
    }
    enterPassword(){
        cy.get('#passwd').should('be.visible').click().clear().type(signInData[0].password)
    }
    clickSignIn(){
            cy.get('#SubmitLogin').should('be.visible').click()
            cy.get('.page-heading').should('be.visible')
    }
}

export default SignInPage