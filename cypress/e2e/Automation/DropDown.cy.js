import PageActions from "../pageActions";


describe('Confirm About Me', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage = () => null

        //visit website
        cy.visit('https://www.automationtesting.co.uk/index.html');

         //close cookie window
         cy.get('.close-cookie-warning > span').click()

         //open menu bar
        cy.get('.toggle').click()
    
      });

    it('Confirm About Me', () => {
        
       PageActions.radioButton();

       PageActions.checkBox();

       PageActions.navigationMenu();

       PageActions.dropDown();
       
    });

});