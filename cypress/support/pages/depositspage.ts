class Deposits{
    
    clickDeposit(){
        cy.contains('Deposit').click();
    }

    enterDepositAmount(amount: Number) {
        cy.get('input[ng-model="amount"]').type(amount.toString());
    }

    clickDepositButton(){
        cy.get('button[type="submit"]').click();
    }

    verifyDepositSuccess(){
        cy.contains('Deposit Successful').should('be.visible');
    }
}
export default new Deposits();