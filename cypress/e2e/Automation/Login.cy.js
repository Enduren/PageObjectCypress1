import PageActions from '../pageActions';

describe('Login Test', () => {
  beforeEach(() => {
    cy.clearLocalStorage = () => null

    cy.visit('https://www.automationtesting.co.uk/index.html'); 

     cy.wait(2000)

     //close cookie window
     // cy.get('.close-cookie-warning > span').click()

     //open menu bar
     cy.get('.toggle').click()
    // Load the login credentials from the JSON file
    cy.fixture('loginCredentials.json').as('loginData');

  });

  it('should display an error for invalid login credentials', function() {
    
    // Use the PageActions class to perform the login action
    PageActions.Login({
      username: this.loginData.username,
      password: this.loginData.password
    });
  });
});
