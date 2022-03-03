//<reference types="cypress"/>

context('Home Page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000')
  })
    it('should load our app and show content', () => {
      cy.get('h1').contains("SalVeg")
    })
  })

