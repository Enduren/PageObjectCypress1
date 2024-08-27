describe('Trigger Demo', () => {
    it('should understand various options of trigger methods', () => {
      cy.visit('https://ecommercepractice.letskodeit.com/')

      cy.get('nav > [href="/shop"]').click()


    })
  })