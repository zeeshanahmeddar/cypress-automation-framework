/// <reference types="cypress" />

import SignInPage from '../1-getting-started/PageObjects/SignInPage'


describe('AutomationPractiveTestSuite',()=>{

    it('6. Create an automated script to add / edit / delete a product to cart.',function(){
        Cypress.config('defaultCommandTimeout', 30000)
        const sp = new SignInPage()
        sp.visit()
        sp.enterEmail()
        sp.enterPassword()
        sp.clickSignIn()
        
        cy.get('a[title=Women]').should('be.visible').click()
        cy.get('.navigation_page').should('be.visible')
        cy.get('.button[data-id-product=1]').should('be.visible').click()
        cy.get('[title="Proceed to checkout"]').should('be.visible').click()
        cy.get('a[title=Delete]').should('be.visible').click()
        cy.get('.alert-warning').should('be.visible').click()
        cy.get('a[title=Women]').should('be.visible').click()
        
        cy.get('.button[data-id-product=1]').should('be.visible').click()
        cy.get('.continue[title="Continue shopping"]', { timeout: 30000 }).should('be.visible').click()
        cy.get('.button[data-id-product=2]').should('be.visible').click()
        cy.get('.continue[title="Continue shopping"]').should('be.visible').click()
        cy.get('.button[data-id-product=3]').should('be.visible').click()
        cy.get('[title="Proceed to checkout"]').should('be.visible').click()

        cy.get('td.cart_product > a > img[alt=Blouse]').should('be.visible').click()
        cy.get('.button-plus').should('be.visible').click()
        cy.get('#group_1').select('M')
        cy.get('button.exclusive').should('be.visible').click()
        cy.get('[title="Proceed to checkout"]').should('be.visible').click()
       
        cy.get('.standard-checkout').should('be.visible').click()
        cy.get('[name=processAddress]').should('be.visible').click()
        cy.get('#uniform-cgv').should('be.visible').click()
        cy.get('[name=processCarrier]').should('be.visible').click()
        cy.get('.cheque').should('be.visible').click()
        cy.get('.button-medium[type=submit]').should('be.visible').click()
        cy.get('.alert-success').should('be.visible')
        
        
        
        
        
        
        

        
    })

    
})