                           // correct username and password
 describe('template spec', () => {
  it ('passes', () => {
    cy.visit ('https://practicetestautomation.com/practice-test-login/')
    cy.get("#username").type("student")
    cy.get("#password").type("Password123");
    cy.get('.btn').click()
    cy.wait(5000)
    cy.url().should("include","https://practicetestautomation.com/logged-in-successfully/")
    cy.get('strong').should('have.text',"Congratulations student. You successfully logged in!")
    cy.get('a[href*="https://practicetestautomation.com/practice-"]').should('be.visible')
    
  })
})

                           // incorrect username
// it('validate negative login with invalvied username',()=>{
// cy.visit('https://practicetestautomation.com/practice-test-login/')
// cy.get('input#username').type('incrt');
// cy.get(' [name="password"]').type('Password123')
// cy.get('button#submit').click()
// cy.get('div#error').should('be.visible').and('have.text','Your username is invalid!')


// })
// it('negative',()=>{
//   cy.visit('https://practicetestautomation.com/')
// })
 
//  it('validate negative login with invalvied password',()=>{
//   cy.visit('https://practicetestautomation.com/practice-test-login/')
//   cy.get('input#username').type('student');
//   cy.get(' [name="password"]').type('Password124')
//   cy.get('button#submit').click()
//   cy.get('div#error').should('be.visible').and('have.text','Your password is invalid!');

//  })
// describe('template spec', () => {
//     it('open gmail',()=>{
//         cy.visit('https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&osid=1&passive=1209600&service=mail&ifkv=ARpgrqf11fAuXO82gqPaz-K-CEwGEJ55dtd28-hnk5lpkaZufyfJBORPl0KgjMxjODLRQvUCRDwOMQ&ddm=0&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
//         cy.get('[id="identifierId"]').type('mr.balaji31@gmail.com')
//         cy.wait(4000)
//         cy.get('#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d').click()
 
//     })

// })


// describe('Read data from Excel file', () => {
//   it('should read data from Excel', () => {
//     cy.visit('https://practicetestautomation.com/practice-test-login/')

//     cy.task('readExcel', {
//       filePath: 'C:/Users/Balaji Mohan/cypress/cypress/fixtures/balaji.xlsx',  // Update with actual file path
//       sheetName: 'xlfile'  // Specify the sheet name
//     }).then((data) => {
//       cy.log(JSON.stringify(data));
//       // expect(data[0].Name).to.equal('John Doe'); // Example validation
//       cy.get('input#username').type(data[0].username)
//       cy.get('input#password').type(data[0].password)
//       cy.get('.btn').click()
//     });
//   });
// });