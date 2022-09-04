/// <reference types="cypress" />

import signInData from '../../fixtures/apemails.json'


describe('AutomationPractiveTestSuite',()=>{

    it('6. Create an automated script to add / edit / delete a product to cart.',function(){
        cy.clearCookies()
        Cypress.config('defaultCommandTimeout', 30000)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').should('be.visible').click()
        cy.get('#email').should('be.visible').click().clear().type(signInData[0].email)
        cy.get('#passwd').should('be.visible').click().clear().type(signInData[0].password)
        cy.get('#SubmitLogin').should('be.visible').click()
        cy.get('.page-heading').should('be.visible')
        cy.get('a[title=Women]').should('be.visible').click()
        cy.get('.navigation_page').should('be.visible')
        cy.get('.button[data-id-product=1]').should('be.visible').click()
        cy.get('.continue').should('be.visible').click()
        cy.get('.button[data-id-product=2]').should('be.visible').click()
        cy.get('.continue').should('be.visible').click()
        cy.get('.button[data-id-product=3]').should('be.visible').click()
        cy.get('[title=Proceed to checkout]').should('be.visible').click()
        cy.get('.standard-checkout').should('be.visible').click()
        cy.get('name=processAddress').should('be.visible').click()
        
        

        
    })

    
})