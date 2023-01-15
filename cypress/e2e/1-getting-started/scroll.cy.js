/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('scroll left', () => {
        cy.get('main section .row-class').first().get('#leftIcon').trigger('mouseover', {force: true}).click({force: true})
    })
    it('scroll right', () => {
        cy.get('main section .row-class').first().get('#rightIcon').trigger('mouseover', {force: true}).click({force: true})
    })
})