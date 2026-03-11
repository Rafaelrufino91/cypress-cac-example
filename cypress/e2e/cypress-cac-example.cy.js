import { RequiredFields } from "./required-fields"

const requireFields = new RequiredFields()

describe('Testando cac com cypress', () => {
  beforeEach(() => {
    cy.visit('/src/index.html')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    requireFields.typeFirstName('Rafael')
    requireFields.typeLastName('silva')
    requireFields.typeEmail('rafaelteste@teste.com')
    requireFields.typeFeedbackField('feedbackfield','testando campo obrigatorio')

    requireFields.clickButton()
    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    requireFields.typeFirstName('Rafael')
    requireFields.typeLastName('silva')
    requireFields.typeEmail('rafaelteste')
    requireFields.typeFeedbackField('feedbackfield','testando campo obrigatorio')

    requireFields.clickButton()
    cy.get('.error').should('be.visible')
  })

  it('validar se ao digitar valor *não numérico* no campo de telefone campo continue *vazio*', () => {
    cy.get('#phone').type('teste campo numerico')
    cy.get('#phone').should('have.value', '')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', () => {
    requireFields.typeFirstName('Rafael')
    requireFields.typeLastName('silva')
    requireFields.typeEmail('rafaelteste@teste.com')
    requireFields.typeFeedbackField('testando campo obrigatorio')

    cy.get('#phone-checkbox').check()
    requireFields.clickButton()
    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    requireFields.typeFirstName('Rafael')
    requireFields.clearField('firstname')
    requireFields.typeLastName('silva')
    requireFields.clearField('lastname')
    requireFields.typeEmail('rafaelteste')
    requireFields.clearField('email')
    requireFields.typeFeedbackField('testando campo obrigatorio')
    requireFields.clearField('feedbackfield')     
  })
  
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    requireFields.clickButton()
    cy.get('.error').should('be.visible')
  })
})