

describe('Cypress Screenshots', () => {
  it('Full page screenshot', () => {
    cy.visit('https://example.com')
    cy.screenshot({ overwrite: true})
  })

  it('Single element screenshot', () => {
    cy.visit('https://example.com')
    cy.get('h1').screenshot({ overwrite: true })

    cy.get('h1').should('have.length', 1)
  })
})