class SignInPage
{
    getEmailIdTextbox()

    {
        return cy.get('#emailaddress')
        //return cy.get('input[formcontrolname="emailaddress"]')
    }
    getPasswordTextbox()
    {
        return cy.get('#password')
    }
    getSignInButton()
    {
        return cy.get('#popupsignIn')
    }


}
export default SignInPage;
