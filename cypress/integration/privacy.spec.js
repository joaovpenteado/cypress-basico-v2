/// <reference types="Cypress" />

describe('Validando Página Politica de Privacidade', function() {

    beforeEach(function() {
        cy.visit('./src/privacy.html')
    })

    it.only('verifica o título da aplicação', function() {
        cy.contains('Talking About Testing').should('be.visible')
    })
})