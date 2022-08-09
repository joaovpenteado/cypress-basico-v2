Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')
    cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')
    cy.get('input[id="email"]').type('joaovpenteado@gmail.com')
    cy.get('select[id="product"]').select('YouTube').should('have.value','youtube')
    cy.get('textarea[id="open-text-area"]').type('Gostaria de mais informações sobre pagamento', {delay: 0})
    cy.contains('button','Enviar').click()
    cy.get('.success').should('be.visible')

})

Cypress.Commands.add('validaMensagem', function(nomeAtributo) {
    cy.clock()
    cy.get('button[type="submit"]').click()
    cy.get(nomeAtributo).should('be.visible')
    cy.tick(3000)
    cy.get(nomeAtributo).should('not.be.visible')
})