import { RequiredFields } from "./required-fields"

const requireFields = new RequiredFields()

describe('Testando cac com cypress', () => {
  beforeEach(() => {
    cy.visit('/src/index.html')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    requireFields.typeField('firstname','Rafael')
    requireFields.typeField('lastname','silva')
    requireFields.typeField('email','rafaelteste@teste.com')
    requireFields.typeField('feedbackfield','testando campo obrigatorio')

    cy.get('.button').click()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    requireFields.typeField('firstname','Rafael')
    requireFields.typeField('lastname','silva')
    requireFields.typeField('email','rafaelteste')
    requireFields.typeField('feedbackfield','testando campo obrigatorio')

    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  it('validar se ao digitar valor *não numérico* no campo de telefone campo continue *vazio*', () => {
    cy.get('#phone').type('teste campo numerico')
    cy.get('#phone').should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', () => {
    requireFields.typeField('firstname','Rafael')
    requireFields.typeField('lastname','silva')
    requireFields.typeField('email','rafaelteste@teste.com')
    requireFields.typeField('feedbackfield','testando campo obrigatorio')

    cy.get('#phone-checkbox').check()
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    requireFields.typeField('firstname','Rafael')
    requireFields.clearField('firstname')
    requireFields.typeField('lastname','silva')
    requireFields.clearField('lastname')
    requireFields.typeField('email','rafaelteste')
    requireFields.clearField('email')
    requireFields.typeField('feedbackfield','testando campo obrigatorio')
    requireFields.clearField('feedbackfield')     
  })
  
  it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('.button').click()
    cy.get('.error').should('be.visible')
  })
})