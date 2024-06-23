describe('Sign Up Flows', () => {
  it('verify that user is able to signup successfully', () => {
    cy.clickHomePageSignupBtn()
    cy.typeUserDetails()
    cy.typeUserSocials()
    cy.verifyOTPPage()
    cy.enterOTP()
  })
})