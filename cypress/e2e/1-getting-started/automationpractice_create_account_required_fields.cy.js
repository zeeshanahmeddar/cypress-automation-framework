/// <reference types="cypress" />
describe('AutomationPractiveTestSuite',()=>{
    // beforeEach(()=>{
    //     cy.visit('http://automationpractice.com/index.php')
    // })
    it('2. Create an automate script to test the required fields.',()=>{
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
        cy.get('#email_create').should('be.visible').click().type(name+'@gmail.com')
        cy.get('#SubmitCreate').should('be.enabled').click()
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 1)
        cy.get('.alert > ol:nth-child(2) > li').should('have.length', 8)

        cy.get('#phone_mobile').should('be.enabled').click().type('1231231234')
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 1)
        cy.get('.alert > ol:nth-child(2) > li').should('have.length', 7)

        cy.get('#customer_lastname').should('be.enabled').click().type('l'+name)
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 1)
        cy.get('.alert > ol:nth-child(2) > li').should('have.length', 6)

        cy.get('#customer_firstname').should('be.enabled').click().type('f'+name)
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 1)
        cy.get('.alert > ol:nth-child(2) > li').should('have.length', 5)
        
        cy.get('#address1').should('be.enabled').click().type('123 st 10Pearl')
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 1)
        cy.get('.alert > ol:nth-child(2) > li').should('have.length', 4)

        cy.get('#city').should('be.enabled').click().type('Lahore')
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 1)
        cy.get('.alert > ol:nth-child(2) > li').should('have.length', 3)

        
        cy.get('#postcode').should('be.enabled').click().type('77056')
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 1)
        cy.get('.alert > ol:nth-child(2) > li').should('have.length', 2)

        cy.get('#id_state').should('be.enabled').select('Texas')
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.alert-danger').should('be.visible').nextAll().should('have.length', 1)
        cy.get('.alert > ol:nth-child(2) > li').should('have.length', 1)

        cy.get('#passwd').should('be.enabled').click().type('10PearlP@SSW0RD')
        cy.get('#submitAccount').should('be.enabled').click()
        cy.get('.page-heading').should('be.visible')


        

        
        

    })
})