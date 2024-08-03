class PageActions {
    static Login({ username, password }) {
        
     cy.visit('https://www.automationtesting.co.uk/index.html'); 

     cy.wait(2000)

     //close cookie window
     // cy.get('.close-cookie-warning > span').click()

     //open menu bar
     cy.get('.toggle').click()

     //click login tab
     cy.get(':nth-child(15) > a',{timeout:30000}).click()
     cy.get('#login_text').type(username);
     cy.get('#login_password').type(password);
     cy.get('#login_btn').click();   
    }

    static testStore(){
        cy.visit('https://www.automationtesting.co.uk/index.html');

        //open menu bar
       cy.get('.toggle').click()

        //click Test store link
        cy.get(':nth-child(20) > a').click()

        cy.get(':nth-child(2) > .h2',{timeout:30000}).contains('Popular Products')


    }

    static addHummingBirdTshirt(){

        //click humming bird tshirt
        cy.get(':nth-child(2) > .products > :nth-child(1) > .product-miniature > .thumbnail-container > .thumbnail-top > .thumbnail > picture > img').click()

        //select M size
        cy.get('#group_1').select('M')

        //click black
        cy.get('#group_2 > :nth-child(2) > label').click()

        //add to cart
        cy.get('.add > .btn').click()

        //click Proceed to checkout
        cy.get('.cart-content-btn > .btn-primary').click()
    }
  
    
  
  }
  
  export default PageActions;
