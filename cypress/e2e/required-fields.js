
export class RequiredFields {
    elements = {
        firstname: () => cy.get('#firstName'),
        lastname: () => cy.get('#lastName'),
        email: () => cy.get('#email'),
        feedbackfield: () => cy.get('#open-text-area'),
        phone: () => cy.get('#phone'),
        submitbutton: () => cy.get('.button'),
        successalert: () => cy.get('.success'),
        erroralert: () => cy.get('.error')

    }

    typeFirstName(text) {
        this.elements.firstname().type(text, {delay:0})
    }
    typeLastName(text) {
        this.elements.lastname().type(text, {delay:0})
    }
    typeEmail(text) {
        this.elements.email().type(text, {delay:0})
    }
    typeFeedbackField(text) {
        this.elements.feedbackfield().type(text, {delay:0})
    }
    typePhone(text) {
        this.elements.phone().type(text, {delay:0})
    }
    clearField(field) {
        this.elements[field]().clear().should('have.value', '')
    }
    clickButton() {
        this.elements.submitbutton().click()
    }
    validationAlert(field) {
        this.elements[field]().should('be.visible')
    }
    
}