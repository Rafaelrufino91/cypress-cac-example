
export class RequiredFields {
    elements = {
        firstname: () => cy.get('#firstName'),
        lastname: () => cy.get('#lastName'),
        email: () => cy.get('#email'),
        feedbackfield: () => cy.get('#open-text-area'),
        submitbutton: () => cy.get('.button')
    }

    typeFirstName(text) {
        this.elements.firstname().type(text)
    }
    
    typeLastName(text) {
        this.elements.lastname().type(text)
    }

    typeEmail(text) {
        this.elements.email().type(text)
    }

    typeFeedbackField(text) {
        this.elements.feedbackfield().type(text)
    }


    clearField(field) {
        this.elements[field]().clear().should('have.value', '')
    }

    clickButton() {
        this.elements.submitbutton().click()
    }
    
}