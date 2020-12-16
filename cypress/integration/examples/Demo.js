/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import SignInPage from '../../support/pageObjects/SignInPage'
import MainPage from '../../support/pageObjects/MainPage'
import FeedbackPage from '../../support/pageObjects/FeedbackPage'




describe('ExpressEfile', function()  {
    const homePage=new HomePage()
    const signinPage=new SignInPage()
    const mainPage =new MainPage()
    const Feedbackpage =new FeedbackPage()

    beforeEach(function() {
       
        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        cy.visit(Cypress.env('url'))
                
    })

it('Sign In', function()  {

//cy.visit(Cypress.env('url'))
homePage.getSignInButton().click()
cy.wait(1000)

signinPage.getEmailIdTextbox().type(this.data.emailid)
signinPage.getPasswordTextbox().type(this.data.password)
signinPage.getSignInButton().click()
mainPage.getLogoutButton().should('be.visible')
//mainPage.getLogoutButton().click()
//Feedbackpage.getFeedbackLogoutButton().click()
})

it('Sign In Negative Scenario', function()  {

    
    //cy.visit(Cypress.env('url'))
    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid)
    signinPage.getPasswordTextbox().type(this.data.password)
   // signinPage.getSignInButton().click()
    mainPage.getLogoutButton().should('be.visible')
    })
})