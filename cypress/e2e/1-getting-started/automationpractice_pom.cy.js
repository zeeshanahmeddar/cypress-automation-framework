/// <reference types="cypress" />

import SignInPage from '../1-getting-started/PageObjects/SignInPage'


describe('AutomationPractiveTestSuite',()=>{

    it('6. Create an automated script to add / edit / delete a product to cart.',function(){
        const sp = new SignInPage()
        sp.visit()
        sp.enterEmail()
        sp.enterPassword()
        sp.clickSignIn()
        
        cy.get('a[title=Women]').should('be.visible').click()
        cy.get('.navigation_page').should('be.visible')
        cy.get('.button[data-id-product=1]').should('be.visible').click()
        cy.get('.continue[title=Continue shopping]').should('be.visible').click()
        cy.get('.button[data-id-product=2]').should('be.visible').click()
        cy.get('.continue[title=Continue shopping]').should('be.visible').click()
        cy.get('.button[data-id-product=3]').should('be.visible').click()
        cy.get('[title=Proceed to checkout]').should('be.visible').click()
        cy.get('.standard-checkout').should('be.visible').click()
        cy.get('name=processAddress').should('be.visible').click()
        
        

        
    })

    
})