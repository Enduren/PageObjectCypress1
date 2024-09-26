describe('Hidden Elements', function () {
    // test case
    it('Scenario 1', function (){
       // launch URL
       cy.visit("https://www.amazon.com/");
       // show hidden element with invoke
       cy.get('#nav-flyout-ya-signin').invoke('show');
       //click hidden element
       cy.contains('Sign').click();
    });
 });