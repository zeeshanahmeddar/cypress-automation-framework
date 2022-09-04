/// <reference types="cypress" />
describe('EtsyTestSuite',()=>{
    // beforeEach(()=>{
    //     cy.visit('https://www.etsy.com/')
    // })
    it('1. Create an account into the site.',()=>{
        Cypress.config('defaultCommandTimeout', 30000);
        cy.visit('https://www.etsy.com/')
        cy.get('button.wt-mr-xs-1').should('be.visible').click()
        cy.get('button.wt-btn--secondary:nth-child(2)').should('be.visible').click()
        function randomString() {
            var ranStr = "";
            var allValues = "abcdefghijklmnopqrstuvwxyz";
        
            for (var i = 0; i < 10; i++)
            ranStr += allValues.charAt(Math.floor(Math.random() * allValues.length));
        
            return ranStr;
          }
        cy.get('button[data-google-button=true]', { timeout: 30000 }).should('be.enabled')
        cy.get('#join_neu_email_field').should('be.visible').should('be.enabled').click().type('e'+randomString()+'@gmail.com')
        cy.get('#join_neu_first_name_field').should('be.enabled').click().type('f'+randomString())
        cy.get('#join_neu_password_field').should('be.enabled').click().type('10PearlP@SSW0RD')
        cy.get('button.wt-width-full:nth-child(1)').should('not.be.disabled').click()
        cy.get('h1.welcome-message-text:nth-child(2)', { timeout: 30000 }).should('be.visible')

    })
})