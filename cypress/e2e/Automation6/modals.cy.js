
describe('Cypress Modals', () => {
  it('Open and Assert Modal', () => {
    cy.visit('https://practice-automation.com/modals/')
    cy.get('#simpleModal').click()
    cy.get('.pum-title').should('be.visible')
    cy.get('p').contains('Hi, I’m a simple modal.').should('be.visible')
  })
})