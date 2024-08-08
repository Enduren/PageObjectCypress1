import PageActions from "../pageActions";



describe('Go to file upload page', () => {
    
    beforeEach(() => {
        cy.clearLocalStorage = () => null
        cy.visit('https://www.automationtesting.co.uk/index.html');
    
      });


      it('upload file', () => {


        PageActions.fileUpload();
        
      });
});