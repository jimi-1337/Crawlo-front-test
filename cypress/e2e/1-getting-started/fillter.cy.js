/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('displays two todo items by default', () => {
        const newItem = 'ce'
        cy.get('#dropdown-button').click()
        cy.get('#dropdown select option').should('be.visible')
        cy.get('#dropdown select').select(0)
        cy.get('main section .row-class').should('have.length.at.most', 2)
        cy.get('#dropdown select option').first().invoke('val').then((val1) => {
            cy.get('main section .row-class').contains(val1)
        })
    })
})