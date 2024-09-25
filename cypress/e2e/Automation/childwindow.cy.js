describe('Child window', function () {
    // test case
    it('Scenario 1', function (){
       // url launch
       cy.visit("https://the-internet.herokuapp.com/windows")
       // delete target attribute with invoke for link
       cy.get('.example > a')
       .invoke('removeAttr', 'target').click()
       // verify child window url
       cy.url()
       .should('include', 'https://the-internet.herokuapp.com/windows/new')
       // shift to parent window
       cy.go('back');
    });
 });