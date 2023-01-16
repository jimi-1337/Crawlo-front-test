/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('displays two todo items by default', () => {
        const newItem = 'ASU'
        cy.get('#search-dropdown').type(`${newItem}{enter}`)
        cy.get('#dropdownsearch ul li').should('be.visible')
    })
})