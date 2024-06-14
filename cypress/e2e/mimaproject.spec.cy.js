describe('Signup Flows', () => {
  it('verify that user is able to signup successfully', () => {
    cy.clickHomePageSignupBtn()
    cy.typeUserDetails()
  })
})