// // context('Logging in', () => {
// //     it('should successfully log in', () => {
// //       cy.login().then(() => {
// //         cy.visit('http://localhost:3000');
  
// //         cy.request('/api/posts').then(({ body: user }) => {
// //           expect(user).to.exist;
// //         });
// //       });
// //     });
// //   });

// describe("Login page", () => {
//     before(() => {
//       cy.log(`Visiting hhttp://localhost:3000`)
//       cy.visit("/")
//     })
//     it("Login with Google", () => {
//       const username = Cypress.env("GOOGLE_USER")
//       const password = Cypress.env("GOOGLE_PW")
//       const loginUrl = Cypress.env("SITE_NAME")
//       const cookieName = Cypress.env("COOKIE_NAME")
//       const socialLoginOptions = {
//         username,
//         password,
//         loginUrl,
//         headless: true,
//         logs: false,
//         isPopup: true,
//         loginSelector: `a[href="${Cypress.env(
//           "SITE_NAME"
//         )}/api/auth/signin/google"]`,
//         postLoginSelector: ".unread-count",
    