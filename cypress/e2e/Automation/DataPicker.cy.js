import PageActions from "../pageActions";


describe('Date Picker Walk through', () => {
    
        beforeEach(() => {
            cy.clearLocalStorage = () => null
    
            //visit website
            cy.visit('https://www.automationtesting.co.uk/index.html');
    
             //close cookie window
             cy.get('.close-cookie-warning > span').click()
    
             //open menu bar
            cy.get('.toggle').click()
        
          });
    
      

    it('Goto Date picker', () => {
        
        PageActions.dataPicker();

        PageActions.basicDateTime();

        PageActions.rangeDate();

        PageActions.weekDate();

         //click reset button
         cy.get('.input-button').click()

        PageActions.time();

        PageActions.weekDate();
    });
});