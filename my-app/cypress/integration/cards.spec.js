///<reference types="cypress"/>

const posts = [
    {
        "user_id": 1,
        "title": "Wild Garlic",
        "description": "The smell of spring!",
        "location": "Torquay",
        "free": false,
        "price": 100.30,
        "date": "23/2/2022"
      }
      
]

// cy.wrap(posts)
//   .its((list) => Cypress._.map(list))
//   .should('include', 7)

context('card is rendering posts', () => {
    beforeEach(() =>{
      cy.visit('http://localhost:3000/browse')
    })
       it('browse page', () => {
        cy.get('div').each((item, index) =>{
        cy.wrap(posts).contains("contain.text", posts[index])
        })
        cy.wrap(posts)
        .its('user_id')
        .should('not.be.empty')
        .then((list) =>
          // from every object in the list, pick the "name" property
          Cypress._.map(list, (o) => Cypress._.pick(o, 'title')),
        )
        .should('deep.include',  'Wild Garlic' )
      })
    })

  




// context('Browse Page', () => {
//     beforeEach(() =>{
//       cy.visit('http://localhost:3000')
//     })
  
//     // it('should load content on about page', () => {
//     //     cy.get('firstheader').contains("It is estimated that 3.6 million")
//     //   })
//       describe('Navigation', () => {
//         it('should navigate to the browse page', () => {
//           // Start from the index page
//           cy.visit('http://localhost:3000/')
      
//           // Find a link with an href attribute containing "about" and click it
//           cy.get('a[href*="browse"]').click()
      
//           // The new url should include "/about"
//           cy.url().should('include', '/browse')
      
//         })
//     })

  
//     })