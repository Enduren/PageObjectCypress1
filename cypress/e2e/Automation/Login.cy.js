import PageActions from './pageActions'; // Import the PageActions class

describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://www.edureka.co/");

    cy.get('.nav > :nth-child(4) > .login_click').click();
    cy.get('.modal-header', { timeout: 30000 }).contains("Let's Get Started");

    PageActions.Login({ username: 'dtennison@example.com', password: 'chanheMe123' });
    
  });
});
