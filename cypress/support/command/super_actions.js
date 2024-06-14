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
    cy.typeText(user.fullNameField, faker.person.fullName)
    cy.typeText(user.businessNameField, faker.company.buzzVerb)
    cy.typeText(user.businessEmailField, faker.internet.email({provider:'yopmail.com'}))
    cy.typeText(user.businessRegNumberField, ('BN4301920'))
    cy.typeText(user.businessPhoneNo, faker.phone.number('+234###########'))
    cy.clickElement(user.nextButton)
})