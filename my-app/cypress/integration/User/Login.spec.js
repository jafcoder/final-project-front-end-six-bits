

  // first visit login URL 
  // find the input field for username
  // enter the username
  // find the passowrd field
  // enter the password
  // press the submit button
  // automatically directed to the homepage


context('Login page', () => {
  beforeEach(() =>{
    cy.visit('http://localhost:3000')
  })
