import {faker} from '@faker-js/faker'

let landing
let user
let social
let otp

before('load all selectors', ()=>{
    cy.fixture('elements').then((sel) =>{
        landing = sel.homepageSignup
        user = sel.userDetails
        social =  sel.userSocials
        otp = sel.otpPage
    })
})

Cypress.Commands.add('clickHomePageSignupBtn', ()=> {
    cy.clickElement(landing.homePageSignUpButton)
})

Cypress.Commands.add('typeUserDetails', ()=> {
    cy.typeText(user.fullNameField, faker.person.fullName())
    cy.typeText(user.businessNameField, faker.company.buzzVerb())
    cy.typeText(user.businessEmailField, faker.internet.email({provider:'yopmail.com'}))
    cy.typeText(user.businessRegNumberField, ('BN4301920'))
    cy.typeText(user.businessPhoneNo, faker.phone.number('+234###########'))
    cy.clickElement(user.nextButton)
})

Cypress.Commands.add('typeUserSocials', ()=> {
    cy.typeText(social.websiteField, faker.internet.domainName() )
    cy.typeText(social.igHandleField, faker.internet.displayName ())
    cy.typeText(social.twitterNameField, faker.internet.displayName ())
    cy.clickElement(social.infoSourceField)
    cy.clickElement(social.infoDropdown)
    cy.typeText(social.passwordField,('P@ssword1'))
    cy.clickElement(social.signUpButton)
})

Cypress.Commands.add('verifyOTPPage', ()=> {
    cy.get(otp.thankyouPage).should('be.visible').and('have.text','Thank you for Signing up with Mima.')
})

