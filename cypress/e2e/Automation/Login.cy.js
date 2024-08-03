import PageActions from '../pageActions';

describe('Login Test', () => {
  beforeEach(() => {
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
