import PageActions from "../pageActions";


describe('Date Picker Walk through', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage = () => null
        cy.visit('https://www.automationtesting.co.uk/index.html');
    
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