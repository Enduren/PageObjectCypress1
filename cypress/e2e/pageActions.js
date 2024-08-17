class PageActions {
    static ContactUs({firstName,lastName,email,comments}){
        //click Contact us link
        cy.get('#menu > ul > li:nth-child(7) > a').click()

        //type first name
        cy.get('#contact_form > input:nth-child(1)').type(firstName)

        //type last name
        cy.get('#contact_form > input:nth-child(3)').type(lastName)


        //type email
        cy.get('#contact_form > input:nth-child(5)').type(email)

        //type comments
        cy.get('#contact_form > textarea').type(comments)

        //type submit
        cy.get('#form_buttons > input:nth-child(2)').click()

        //verify you submitted the wo
        cy.get('h3').contains('Thank you for your mail!')
    }
    
    
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

    static radioButton(){

        //click data picker
        cy.get('#menu > ul > li:nth-child(9) > a').click()

        //click radio button one
        cy.get(':nth-child(3) > label').click()

        //click radio button two
        cy.get(':nth-child(4) > label').click()


        //click radio button three
        cy.get(':nth-child(5) > label').click()



    }

    static checkBox(){
        cy.get('[for="cb_green"]').click()
        cy.get('[for="cb_blue"]').click()
        cy.get('[for="cb_red"]').click()
        
    }

    static navigationMenu(){

        //Animal drop  down
        cy.get('#primary_nav_wrap > :nth-child(1) > :nth-child(2) > :nth-child(1)').trigger('mouseover')
        
        //click fish
        cy.get('#primary_nav_wrap > ul > li:nth-child(2) > ul > li:nth-child(3)').click({force: true})

         //verify you clicked Fish
         cy.get('#outputMessage').contains("You clicked on menu option 'Fish'")
        
        //Sport
        cy.get('#primary_nav_wrap > :nth-child(1) > :nth-child(3) > :nth-child(1)').click()

        //click Tennis
        cy.get('#primary_nav_wrap > ul > li:nth-child(3) > ul > li:nth-child(2)').click({force: true})

        //verify you clicked Tennis
        cy.get('#outputMessage').contains("You clicked on menu option 'Tennis'")
        


    }

    static dropDown(){
        cy.get('#cars').select('Jeep')
    }



    static fileUpload(){

         

        //click upload file tab
        cy.get(':nth-child(10) > a').click()

        //add a file to upload
        cy.get('#fileToUpload').attachFile('Random document file.docx')

        //click submit button
        cy.get('[type="submit"]').click()

    }


    static aboutMe(){
        //click About Me
        cy.get(':nth-child(21) > a').click()

        //make sure you are on the page
        cy.get('.content > h2').contains('Who we are')
   }

  
  }
  
  export default PageActions;
