import PageActions from '../pageActions';

describe('Login Test', () => {
  beforeEach(() => {
    // Load the login credentials from the JSON file
    cy.fixture('loginCredentials.json').as('loginData');
  });

  it('should display an error for invalid login credentials', function() {
    // Visit the login page (replace with your actual URL)
    cy.visit('https://www.automationtesting.co.uk/index.html'); 

    //close cookie window
    cy.get('.close-cookie-warning > span').click()

    //open menu bar
    cy.get('.toggle').click()

    //click login tab
    cy.get(':nth-child(15) > a',{timeout:30000}).click()



    // Use the PageActions class to perform the login action
    PageActions.Login({
      username: this.loginData.username,
      password: this.loginData.password
    });

   
  });
});
