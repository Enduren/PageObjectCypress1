import PageActions from "../pageActions";


describe('Contact Us', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage = () => null

        //visit website
        cy.visit('https://www.automationtesting.co.uk/index.html');

         //close cookie window
         cy.get('.close-cookie-warning > span').click()

         //open menu bar
        cy.get('.toggle').click()
    
      });

    it('Contact Us', () => {
        
       PageActions.ContactUs({
        firstName:'Dexx',
        lastName:'Tennison',
        email:'dtenn@example.com',
        comments:'Automation using cypress'
       })
       
    });
});