
context('About Page', () => {
    beforeEach(() =>{
      cy.visit('http://localhost:3000')
    })
  
    // it('should load content on about page', () => {
    //     cy.get('firstheader').contains("It is estimated that 3.6 million")
    //   })
      describe('Navigation', () => {
        it('should navigate to the about page', () => {
          // Start from the index page
          cy.visit('http://localhost:3000')
      
          // Find a link with an href attribute containing "about" and click it
          cy.get('a[href*="about"]').click()
      
          // The new url should include "/about"
          cy.url().should('include', '/about')
      
        })
    })

  
    })