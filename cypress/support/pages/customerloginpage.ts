class CustomerLoginpage {
    selectcustomername(customerName: string){
        cy.get('#userSelect').select(customerName);
    }

    clickLogin(){
        cy.contains('Login').click();
    }
    
    verifyButtonsOnCustomerLoginLandingPage():void{
        cy.contains('Home').should('be.visible');
        cy.contains('Logout').should('be.visible');
        cy.contains('Transactions').should('be.visible');
        cy.contains('Deposit').should('be.visible');
        cy.contains('Withdrawl').should('be.visible');
    }

    verifyCustomerNameOnCustomerLandingPage(customerName: string){
        cy.contains('Welcome').should('be.visible');
        cy.contains(customerName).should('be.visible');
    }
}
export default new CustomerLoginpage();