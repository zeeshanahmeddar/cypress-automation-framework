/// <reference types="cypress" />
describe('AutomationPractiveTestSuite',()=>{
    // beforeEach(()=>{
    //     cy.visit('http://automationpractice.com/index.php')
    // })
    it('1. Create an account into the site.',()=>{
        cy.clearCookies()
        Cypress.config('defaultCommandTimeout', 30000)
        function randomString() {
            var ranStr = "";
            var allValues = "abcdefghijklmnopqrstuvwxyz";
        
            for (var i = 0; i < 10; i++)
            ranStr += allValues.charAt(Math.floor(Math.random() * allValues.length));
        
            return ranStr;
        }
        var name = randomString()
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').should('be.visible').click()
        // cy.get('#email_create').should('be.visible').click().type(name+'@gmail.com') //tenpearlfailattempt@gmail.com
        cy.get('#email_create').should('be.visible').click().type('tenpearlfailattempt@gmail.com') //
        cy.get('#SubmitCreate').should('be.enabled').click()
        cy.get('#customer_firstname').should('be.enabled').click().type('f'+name)
        cy.get('#customer_lastname').should('be.enabled').click().type('l'+name)
        cy.get('#passwd').should('be.enabled').click().type('10PearlP@SSW0RD')
        cy.get('#address1').should('be.enabled').click().type('123 st 10Pearl')
        cy.get('#city').should('be.enabled').click().type('Lahore')
        cy.get('#id_state').should('be.enabled').select('Texas')
        cy.get('#postcode').should('be.enabled').click().type('77056')
        cy.get('#phone_mobile').should('be.enabled').click().type('1231231234')
        cy.get('#submitAccount').should('be.enabled').click()        
        cy.get('.page-heading').should('be.visible')

        

        
        

    })
})