describe("Get Method", function(){
    it("Scenario 2", function(){
       cy.request("GET", "https://jsonplaceholder.cypress.io/comments", {
       }).then((r) => {
          expect(r.status).to.eq(200)
          expect(r).to.have.property('headers')
          expect(r).to.have.property('duration')
       });
    })
 })