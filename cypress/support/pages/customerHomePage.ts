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

    verifyBalanceAfterDeposit(depositAmount: any){
        cy.get('div[ng-hide="noAccount"] > .ng-binding:nth-child(2)').invoke('text').then(txt => {
            cy.wrap(txt).as('Balance');
        });
        // let previousBalance:Number = Number(cy.get('@previousBalance'))
        // cy.log("Previous Bal:", previousBalance)
        cy.get('@Balance').then(Balance => {
            cy.get('@previousBalance').then(previousBalance => {
                let expectedBalance = depositAmount + Number(previousBalance);
                cy.log("expected bal:", +expectedBalance);
                expect(Number(Balance)).to.eq(expectedBalance);
            });
           
        });
    }

    getBalance(){
        cy.get('div[ng-hide="noAccount"] > .ng-binding:nth-child(2)').invoke('text').then(txt => {
            cy.wrap(txt).as('previousBalance');
            cy.log("print:",txt)
        });
    }

}
export default new CustomerLoginpage();