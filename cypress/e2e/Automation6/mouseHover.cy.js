describe('Mouse Hover Test', function () {
    // test case
    it('Scenario 1', function (){
       // launch URL
       cy.visit("https://learn.letskodeit.com/p/practice");
       // show hidden element with invoke
       cy.get('div.mouse-hover-content').invoke('show');
       //click hidden element
       cy.contains('Top').click();
    });
 });