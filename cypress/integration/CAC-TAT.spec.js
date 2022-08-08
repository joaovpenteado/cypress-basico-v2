/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')
    })

    it('Preenchimento dos Campos Obrigatórios', function() {

        const observacoes = 'Gostaria de mais informações sobre os meios de pagamento, vocês aceitam cartão ou fazem via pix'
        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]').type('joaovpenteado@gmail.com')

        //Preenchimento do Campo Obs
        cy.get('textarea[id="open-text-area"]').type(observacoes, {delay: 0})

        //Clica no botão Enviar
        cy.get('button[type="submit"]').click()

        //Valida Mensagem de Sucesso
        cy.get('.success').should('be.visible')
        
    })
    it('Validação Mensagem de Erro', function(){

        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Clica no botão Enviar
        cy.get('button[type="submit"]').click()

        //Valida Mensagem de Sucesso
        cy.get('.error ').should('be.visible')

    })

    it('Campo telefone continua vazio após digitar valor não numérico', function(){

         //Preenchimento do Campo Nome
         cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

         //Preenchimento do Campo Sobrenome
         cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]').type('joaovpenteado@gmail.com')
        //Preenchimento campo Telefone
        cy.get('input[id="phone"]').type('abcdefghij').should('have.value', '')

    })

    it('Campo telefone deve ser preenchido', function(){
        const observacoes = 'Gostaria de mais informações sobre os meios de pagamento, vocês aceitam cartão ou fazem via pix'

        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]').type('joaovpenteado@gmail.com')
    
        //Marca contato preferencial Telefone
        cy.get('#phone-checkbox').check().should('be.checked')

        //Preenchimento do Campo Obs
        cy.get('textarea[id="open-text-area"]').type(observacoes, {delay: 0})

        //Clica no botão Enviar
        cy.contains('button','Enviar').click()

        //Valida Mensagem de Sucesso
        cy.get('.error ').should('be.visible')

   })
   it('Preenche e Limpa Campos', function(){

        const observacoes = 'Gostaria de mais informações sobre os meios de pagamento, vocês aceitam cartão ou fazem via pix'

        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]')
        .type('João Victor')
        .should('have.value','João Victor')
        .clear()
        .should('have.value','')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]')
        .type('Alves Penteado')
        .should('have.value','Alves Penteado')
        .clear()
        .should('have.value','')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]')
        .type('joaovpenteado@gmail.com')
        .clear()
        .should('have.value','')


        //Preenchimento do Campo Obs
        cy.get('textarea[id="open-text-area"]').type(observacoes, {delay: 0})
        .clear()
        .should('have.value','')
})

    it('Não preencher nenhum campo e dar submit', function(){
           //Clica no botão Enviar
           cy.get('button[type="submit"]').click()

           //Valida Mensagem de Sucesso
           cy.get('.error ').should('be.visible')

    })

    it('Envia formulario com sucesso usando comandos customizados', function(){
        cy.fillMandatoryFieldsAndSubmit()
    })


    it('Preencha os campos e Selecione um Produto', function(){
        cy.fillMandatoryFieldsAndSubmit()
    })


    it('Preencha os campos e Selecione um Produto: Mentoria', function(){
        const observacoes = 'Gostaria de mais informações sobre os meios de pagamento, vocês aceitam cartão ou fazem via pix'

        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]').type('joaovpenteado@gmail.com')

        //Seleção Mentoria
        cy.get('select[id="product"]').select('mentoria').should('have.value','mentoria')
    
        //Marca contato preferencial Telefone
        cy.get('#phone-checkbox').click()

        //Preenchimento do Campo Obs
        cy.get('textarea[id="open-text-area"]').type(observacoes, {delay: 0})

        //Clica no botão Enviar
        cy.contains('button','Enviar').click()

        //Valida Mensagem de Sucesso
        cy.get('.error ').should('be.visible')
    })

    it('Preencha os campos e Selecione um Produto: Blog', function(){
        const observacoes = 'Gostaria de mais informações sobre os meios de pagamento, vocês aceitam cartão ou fazem via pix'

        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]').type('joaovpenteado@gmail.com')

        //Seleção Blog
        cy.get('select[id="product"]').select(1).should('have.value','blog')
    
        //Marca contato preferencial Telefone
        cy.get('#phone-checkbox').click()

        //Preenchimento do Campo Obs
        cy.get('textarea[id="open-text-area"]').type(observacoes, {delay: 0})

        //Clica no botão Enviar
        cy.contains('button','Enviar').click()

        //Valida Mensagem de Sucesso
        cy.get('.error ').should('be.visible')
    })
    it('Seleciona o Radio Feedback', function(){
        const observacoes = 'Gostaria de mais informações sobre os meios de pagamento, vocês aceitam cartão ou fazem via pix'

        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]').type('joaovpenteado@gmail.com')

        //Seleção Blog
        cy.get('select[id="product"]').select(1).should('have.value','blog')

        //Seleção Radio Feedback
        cy.get('[type="radio"]').check('feedback').should('be.checked').and('have.value', 'feedback')
    
        //Marca contato preferencial Telefone
        cy.get('#phone-checkbox').click()

        //Preenchimento do Campo Obs
        cy.get('textarea[id="open-text-area"]').type(observacoes, {delay: 0})

        //Clica no botão Enviar
        cy.contains('button','Enviar').click()

        //Valida Mensagem de Sucesso
        cy.get('.error ').should('be.visible')
    })

    it('Marca cada tipo de Atendimento', function(){
        cy.get('[type="radio"]')
        .should('have.length','3')
        .each(function($radio){
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    
    })

    it('Marca ambos depois desmarca o último checkbox', function(){
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
     
    
    })

    it('Selecione um Arquivo simulando drag-and-drop', function() {

        const observacoes = 'Gostaria de mais informações sobre os meios de pagamento, vocês aceitam cartão ou fazem via pix'
        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]').type('joaovpenteado@gmail.com')

        //Preenchimento do Campo Obs
        cy.get('textarea[id="open-text-area"]').type(observacoes, {delay: 0})

        //Upload de Arquivo
        cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')})

    })

    it('Realiza Upload de Arquivo', function() {

        const observacoes = 'Gostaria de mais informações sobre os meios de pagamento, vocês aceitam cartão ou fazem via pix'
        //Preenchimento do Campo Nome
        cy.get('input[id="firstName"]').type('João Victor').should('have.value','João Victor')

        //Preenchimento do Campo Sobrenome
        cy.get('input[id="lastName"]').type('Alves Penteado').should('have.value','Alves Penteado')

        //Preenchimento do Campo E-mail
        cy.get('input[id="email"]').type('joaovpenteado@gmail.com')

        //Preenchimento do Campo Obs
        cy.get('textarea[id="open-text-area"]').type(observacoes, {delay: 0})

        //Upload de Arquivo
        cy.get('input[type="file"]')
        .selectFile('cypress/fixtures/example.json')
        .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')})
        
    })

    it('Selecione um Arquivo com Alias', function() {

        cy.fixture('example.json').as('sampleFile')

        //Upload de Arquivo
        cy.get('input[type="file"]')
        .selectFile('@sampleFile', {action: 'drag-drop'})
        .should(function($input) {
          expect($input[0].files[0].name).to.equal('example.json')})
    })

    it('Abre politica de privacidade', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')

    })

    it('Abre politica de privacidade removendo Target', function() {
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()

        cy.contains('Talking About Testing').should('be.visible')
    

    })


  })