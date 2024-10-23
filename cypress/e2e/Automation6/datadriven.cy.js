describe('Tutorialspoint Test', function () {
    //part of before hook
    before(function(){
       //access fixture data
       cy.fixture('example').then(function(signInData){
          this.signInData = signInData
       })
    })
    // test case
    it('Test Case1', function (){
       // launch URL
       cy.visit("https://www.linkedin.com/")
       //data driven from fixture
       cy.get('#session_key ')
       .type(this.signInData.email)
       cy.get('# session_password').type(this.signInData.password)
    });
 });
 