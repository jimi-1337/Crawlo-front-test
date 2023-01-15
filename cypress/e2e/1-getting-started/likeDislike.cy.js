/// <reference types="cypress" />


describe('example to-do app', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })
  
    it('displays two todo items by default', () => {
        cy.get('main section .row-class').first().get('#Thumbnails').first().get('.thumbnailToclick').first().click()
        cy.get('main section .row-class').first().get('#Thumbnails').first().get('.thumbnailToclick').first().get("#numlike").invoke('text').then((text) => {
            cy.get("#Like").click();
            cy.get("#numlike").invoke('text').then((text1) => {
                const num = parseInt(text, 10)
                const num1 = parseInt(text1, 10)
                expect(num).to.eq(num1 - 1)
            })
        })
        cy.get('main section .row-class').first().get('#Thumbnails').first().get('.thumbnailToclick').first().get("#numdislike").invoke('text').then((text2) => {
            cy.get("#Dislike").click();
            cy.get("#numdislike").invoke('text').then((text3) => {
                const num = parseInt(text2, 10)
                const num1 = parseInt(text3, 10)
                expect(num).to.eq(num1 - 1)
            })
        })
    })
})