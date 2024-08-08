import PageActions from "../pageActions";



describe('Go to file upload page', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage = () => null
        cy.visit('https://www.automationtesting.co.uk/index.html');

        //close cookie window
        cy.get('.close-cookie-warning > span').click()

        //open menu bar
        cy.get('.toggle').click()
    
      });


      it('upload file', () => {


        PageActions.fileUpload();
        
      });
});