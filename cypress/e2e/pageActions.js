class PageActions {
    static Login({ username, password }) {
        
     

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

    static addHummingBirdSweater(){

        //click humming bird Sweater
        cy.get(':nth-child(2) > .products > :nth-child(2) > .product-miniature > .thumbnail-container > .thumbnail-top > .thumbnail > picture > img').click()

        //select 2 qty
        cy.get('#quantity_wanted').clear().type("2")

        //add to cart
        cy.get('.add > .btn').click()

        //click Proceed to checkout
        cy.get('.cart-content-btn > .btn-primary').click()
    }

    static addTheBestPhoto(){

        //click The best photo
        cy.get(':nth-child(2) > .products > :nth-child(3) > .product-miniature > .thumbnail-container > .thumbnail-top > .thumbnail > picture > img').click()

        //select 2 qty
        cy.get('#quantity_wanted').clear().type("2")

        //change size
        cy.get('#group_3').select('80x120cm')
        
        //add to cart
        cy.get('.add > .btn').click()

        //click Proceed to checkout
        cy.get('.cart-content-btn > .btn-primary').click()
    }

    static dataPicker(){

       
        //click data picker
        cy.get('#menu > ul > li:nth-child(8) > a').click()

       
    }

    static rangeDate(){

        const todaysDate = Cypress.dayjs().format('YYYY-MM-DD')

        //change range Date
        cy.get('#rangeDate').type(todaysDate,{force: true})


    }
  
    static basicDateTime(){

        const customFormat =  Cypress.dayjs().format('MMMM DD YYYY hh:mm A');

        //Change Basic Date Time
        cy.get('#basicDate').type(customFormat,{force: true})
    }

    static weekDate(){
        const todaysDate = Cypress.dayjs().format('YYYY-MM-DD')

        //change range Date
        cy.get('.resetDate > .flatpickr-input').type(todaysDate,{force: true})

       

    }

    static time(){

        const timeFormat =  Cypress.dayjs().format('hh:mm A');

        cy.get('#timePicker').type(timeFormat,{force: true})
    }

    static dropDown(){

        //click data picker
        cy.get('#menu > ul > li:nth-child(9) > a').click()

        //click radio button one
        cy.get(':nth-child(3) > label').click()

        //click radio button two
        cy.get(':nth-child(4) > label').click()


        //click radio button three
        cy.get(':nth-child(5) > label').click()



    }

    static aboutMe(){
         //click About Me
         cy.get(':nth-child(21) > a').click()

         //make sure you are on the page
         cy.get('.content > h2').contains('Who we are')
    }

    static fileUpload(){

         

        //click upload file tab
        cy.get(':nth-child(10) > a').click()

        //add a file to upload
        cy.get('#fileToUpload').attachFile('Random document file.docx')

        //click submit button
        cy.get('[type="submit"]').click()

    }

  
  }
  
  export default PageActions;
