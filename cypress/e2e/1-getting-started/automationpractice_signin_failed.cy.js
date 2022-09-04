/// <reference types="cypress" />

import signInData from '../../fixtures/apemails.json'


describe('AutomationPractiveTestSuite',()=>{

    it('5. Create an automated script to test a failed attempt to login.',function(){
        cy.clearCookies()
        Cypress.config('defaultCommandTimeout', 30000)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').should('be.visible').click()
        cy.get('#email').should('be.visible').click().type('tenpearlfailattempt@gmail.com')
        cy.get('#passwd').should('be.visible').click().type('incorrectpassord')
        cy.get('#SubmitLogin').should('be.visible').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 3)
        cy.get('.alert > ol:nth-child(2) > li').should('be.visible').should('have.length', 1)
        cy.get('#email').should('be.visible').click().clear().type('tenpearlfailattempt@gmail.com')
        cy.get('#passwd').should('be.visible').click().clear().type('10PearlP@SSW0RD')
        cy.get('#SubmitLogin').should('be.visible').click()
        cy.get('.page-heading').should('be.visible')
        
    })

    
})