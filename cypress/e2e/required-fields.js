
export class RequiredFields {
    elements = {
        firstname: () => cy.get('#firstName'),
        lastname: () => cy.get('#lastName'),
        email: () => cy.get('#email'),
        feedbackfield: () => cy.get('#open-text-area')
    }

    typeField(field,text) {
        this.elements[field]().type(text)
    }

    clearField(field) {
        this.elements[field]().clear().should('have.value', '')
    }
    
}