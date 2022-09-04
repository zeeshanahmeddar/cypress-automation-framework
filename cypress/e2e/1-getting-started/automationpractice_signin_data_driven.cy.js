/// <reference types="cypress" />

import signInData from '../../fixtures/apemails.json'


describe('AutomationPractiveTestSuite',()=>{

    for(let i=0;i<3;i++){
        it('4. login into the site with different users using a Data Driven Framework (At least 3).',function(){
            cy.clearCookies()
            Cypress.config('defaultCommandTimeout', 30000)
            cy.visit('http://automationpractice.com/index.php')
            cy.get('.login').should('be.visible').click()
            cy.get('#email').should('be.visible').click().type(signInData[i].email)
            cy.get('#passwd').should('be.visible').click().type(signInData[i].password)
            cy.get('#SubmitLogin').should('be.visible').click()
            cy.get('.page-heading').should('be.visible')
            cy.get('[title=Information]').should('be.visible').click()
            cy.get('#email').should('be.visible').should('have.value',signInData[i].email)
        })
    }

    
})