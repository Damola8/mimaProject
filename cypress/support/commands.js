
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add ('clickElement', (element)=>{
    cy.get(element).should('exist').click()
})

// Cypress.Commands.add ('insertText', (field,text)=>{
//     cy.get(field).should('exist').type(text)
// })

Cypress.Commands.add ('typeText', (inputfield,inputText)=>{
    cy.get(inputfield).should('exist').fill(inputText)
})