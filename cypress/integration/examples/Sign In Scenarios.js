/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import SignInPage from '../../support/pageObjects/SignInPage'
import MainPage from '../../support/pageObjects/MainPage'
import FeedbackPage from '../../support/pageObjects/FeedbackPage'


describe('Sign In Scenarios', function()  {
    const homePage=new HomePage()
    const signinPage=new SignInPage()
    const mainPage =new MainPage()
    const Feedbackpage =new FeedbackPage()
    

    beforeEach(function() {
       
        cy.fixture('example').then(function(data)
        {
          this.data=data
        })
        cy.visit(Cypress.env('url'));

                
    })

//EEF-TC-0049-Verify sign in with already exisiting Google ID
it('EEF-TC-0049', function()  {

homePage.getSignInButton().click()
cy.wait(1000)
signinPage.getEmailIdTextbox().type(this.data.emailid0049)
signinPage.getPasswordTextbox().type(this.data.password0049)
signinPage.getSignInButton().click()
cy.get('.alert').then(function(element)
  {
     const actualText=element.text()
    expect(actualText.includes("You have already registered with Google account, please sign-in using Google")).to.be.true
  })
})


//EEF-TC-0050-Verify sign in with already exisiting Facebook ID
it('EEF-TC-0050', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0050)
    signinPage.getPasswordTextbox().type(this.data.password0050)
    signinPage.getSignInButton().click()
    cy.get('.alert').then(function(element)
      {
         const actualText=element.text()
        expect(actualText.includes("You have already registered with Facebook account, please sign-in using Facebook")).to.be.true
      })    
    })

//EEF-TC-0051-Verify sign in with more than max length for Email Id(130 characters)
it('EEF-TC-0051', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0051)
    signinPage.getPasswordTextbox().type(this.data.password0051)
    signinPage.getSignInButton().click()
    cy.get('#mat-error-0').should('have.text',' Invalid email address ')
    
    })

//EEF-TC-0052-Verify sign in with  invalid email id (Missing @)
it('EEF-TC-0052', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0052)
    signinPage.getPasswordTextbox().type(this.data.password0052)
    signinPage.getSignInButton().click()
    cy.get('#mat-error-0').should('have.text',' Invalid email address ')
    
    })

//EEF-TC-0053-Verify sign in with  email id (Missing .(dot))
it('EEF-TC-0053', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0053)
    signinPage.getPasswordTextbox().type(this.data.password0053)
    signinPage.getSignInButton().click()
    cy.get('#mat-error-0').should('have.text',' Invalid email address ')
    
    })
    /*

//EEF-TC-0054-Verify sign in with  more than one "@" symbol
it('EEF-TC-0054', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0054)
    signinPage.getPasswordTextbox().type(this.data.password0054)
    signinPage.getSignInButton().click()
    cy.get('#mat-error-0').should('have.text',' Invalid email address ')
    
    })
//EEF-TC-0055-Verify sign in with more than one "." symbol near domain name
it('EEF-TC-0055', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0055)
    signinPage.getPasswordTextbox().type(this.data.password0055)
    signinPage.getSignInButton().click()
    cy.get('#mat-error-0').should('have.text',' Invalid email address ')
    
    })
//EEF-TC-0056-Verify sign in with email id with leading space
it('EEF-TC-0056', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0056)
    signinPage.getPasswordTextbox().type(this.data.password0056)
    signinPage.getSignInButton().click()
    mainPage.getLogoutButton().should('be.visible')
   
    })
//EEF-TC-0057-Verify sign in with email id with trailing space
it('EEF-TC-0057', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0057)
    signinPage.getPasswordTextbox().type(this.data.password0057)
    signinPage.getSignInButton().click()
    mainPage.getLogoutButton().should('be.visible')

    
    })
//EEF-TC-0058-Verify sign in by giving email id as blank
it('EEF-TC-0058', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0058)
    signinPage.getPasswordTextbox().type(this.data.password0058)
    signinPage.getSignInButton().click()
    cy.get('#mat-error-0').should('have.text',' Email address required ')
    
    })
//EEF-TC-0059-Verify sign in with a new valid email id-Unregistered
it('EEF-TC-0059', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0059)
    signinPage.getPasswordTextbox().type(this.data.password0059)
    signinPage.getSignInButton().click()
    cy.get('.alert').then(function(element)
      {
         const actualText=element.text()
        expect(actualText.includes("Email address is not registered with us")).to.be.true
      })      
    })

//EEF-TC-0060-Verify sign in with already exisiting  Email ID
it('EEF-TC-0060', function()  {

    homePage.getSignInButton().click()
    cy.wait(1000)    
    signinPage.getEmailIdTextbox().type(this.data.emailid0060)
    signinPage.getPasswordTextbox().type(this.data.password0060)
    signinPage.getSignInButton().click()
    mainPage.getLogoutButton().should('be.visible')

    })

*/


})