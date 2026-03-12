import { RequiredFields } from "./required-fields"

const form = new RequiredFields()

describe('Testando formulario cac com cypress', () => {
  beforeEach(() => {
    cy.visit('/src/index.html')
  })

  const validInput = {
    name: 'Rafael',
    lastname: 'silva',
    email: 'rafaelteste@teste.com',
    feedbackfield: 'testando campo obrigatorio'
  }


  const invalidInput = {
    name: '',
    lastname: '',
    email: 'rafaelteste',
    feedbackfield: ''
  }

    it('preenche os campos obrigatórios e envia o formulário', () => {
      form.typeFirstName(validInput.name)
      form.typeLastName(validInput.lastname)
      form.typeEmail(validInput.email)
      form.typeFeedbackField(validInput.feedbackfield)

      form.clickButton()
      form.validationAlert('successalert')
    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
      form.typeFirstName(validInput.name)
      form.typeLastName(validInput.lastname)
      form.typeEmail(invalidInput.email)
      form.typeFeedbackField(validInput.feedbackfield)

      form.clickButton()
      form.validationAlert('erroralert')
    })

    it('validar se ao digitar valor *não numérico* no campo de telefone campo continue *vazio*', () => {
      form.typePhone('teste campo numerico')
      cy.get('#phone').should('have.value', '')
    })

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido', () => {
      form.typeFirstName(validInput.name)
      form.typeLastName(validInput.lastname)
      form.typeEmail(validInput.email)
      form.typeFeedbackField(validInput.feedbackfield)

      cy.get('#phone-checkbox').check()
      form.clickButton()
      form.validationAlert('erroralert')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
      form.typeFirstName(validInput.name)
      form.clearField('firstname')
      form.typeLastName(validInput.lastname)
      form.clearField('lastname')
      form.typeEmail(validInput.email)
      form.clearField('email')
      form.typeFeedbackField(validInput.feedbackfield)
      form.clearField('feedbackfield')     
    })
    
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
      form.clickButton()
      form.validationAlert('erroralert')
    })

    })
