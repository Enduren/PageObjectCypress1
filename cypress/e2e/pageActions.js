class PageActions {
    static Login({ username, password }) {
      cy.get('#si_popup_email').type(username);
      cy.get('#si_popup_passwd').type(password);
      cy.get('.login-vd-box > .sup_frm > .clik_btn_log').click();
      cy.get('#passwdErrorr', { timeout: 30000 }).contains("Sign In Failed. Invalid login credentials.");
      cy.get('.login-vd-box > .sup_frm > .clik_btn_log').should('have.css', 'background-color', 'rgb(247, 149, 30)')
      
    }
  
    
  
  }
  
  export default PageActions;
