class CustomerLoginpage {
    loginAs(customerName: string){
        cy.get('#userSelect').select(customerName);
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

    verifyBalanceAfterDeposit(expectedBalance: any){
        cy.get('div[ng-hide="noAccount"] > .ng-binding:nth-child(2)').invoke('text').then(txt => {
            cy.wrap(txt).as('Balance');
            expect(Number(txt)).to.eq(expectedBalance);
        });
    }

    getPreviousBalance(){
        cy.get('div[ng-hide="noAccount"] > .ng-binding:nth-child(2)').invoke('text').then(txt => {
            cy.wrap(txt).as('previousBalance');
        });
    }

}
export default new CustomerLoginpage();