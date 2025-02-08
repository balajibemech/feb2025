describe('page practice', ()=>{

    let logdata;
    let logneg;
    let lognegp;

    before(()=>{
        cy.fixture('practice').then((data)=>{   
             logdata = data.positive;
             logneg = data.negativeuser;
             lognegp = data.negativepass; 
        })
    })
    beforeEach('Login', () => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
          });
    it('postivelogin',()=>{
        cy.get('[id="username"]').type(logdata.usernam)
        cy.get('[id="password"]').type(logdata.password)
        cy.get('[id="submit"]').click()
        cy.wait(5000)
        cy.url().should('include','practicetestautomation.com/logged-in-successfully/')
        cy.get('[class="post-title"]').should("have.text","Logged In Successfully")
        cy.get('strong').should("have.text","Congratulations student. You successfully logged in!")
        cy.get('[href*="https://practicetestautomation.com/practice-test-login/"gi]').should("be.visible")
    
        })  
it(' Negative username test',()=>{
    cy.get('[type="text"]').type(logneg.username)
    cy.get('[name="password"]').type(logneg.password)
    cy.get('[id="submit"]').click()
    cy.get('[id="error"]').should('have.visible','Your username is invalid!')
}) 
it('Negative password test',()=>{
    cy.get('[type="text"]').type(lognegp.username)
    cy.get('[name="password"]').type(lognegp.password)
    cy.get('[id="submit"]').click()
    cy.get('[id="error"]').should('have.visible','Your password is invalid!')


})                                              
})
import sauce from "../fixtures/sauce.json"
describe('sauce lab demo',()=>{
    let cred;
    before(()=>{
    cy.fixture('sauce').then((tdata)=>{
          cred=tdata;
    })
})
    it('login functionality',()=>{
        cy.visit("/v1/index.html")
        cy.get('[id="user-name"]').type(cred.username)
        cy.get('[id="password"]').type(cred.password)
        cy.get('[id="login-button"]').click()
        cred.product.forEach((inv)=>{
            cy.adddingproducttothecard(inv)
        })
        cy.get('[data-icon="shopping-cart"]').should('be.visible').click()
        cy.get('[class="cart_item_label"]').should('have.length',3)
        cy.get('[class="btn_action checkout_button"]').should('be.visible').click()
        cy.get('[id="first-name"]').type(cred.firstname)
        cy.get('[id="last-name"]').type(cred.lastname)
        cy.get('[id="postal-code"]').type(cred.zip)
        cy.get('[class="btn_primary cart_button"]').should('be.visible').click()
        cy.get('[class="btn_action cart_button"]').click()
        cy.get('[class="complete-header"]').should('have.text','THANK YOU FOR YOUR ORDER')
       // cy.visit('/v1/inventory.html')
        //cy.get('[class="inventory_list"] button').eq(0).click()
       // cy.get('[class="inventory_list"] button').eq(1).click()
       // cy.get('[class="btn_primary btn_inventory"]').eq(0).click()
        //cy.get('[class="btn_primary btn_inventory"]').eq(0).click()
         // cy.get('[class="inventory_item_name"]').eq(3).click()
    //    cy.get('[class="inventory_item_name"]').each(($el)=>{
    //     if($el.text().contain('Light','Sauce Labs Bolt T-Shirt')){
    //         cy.wrap($el).click()
    //     }
    //    })

    })
})