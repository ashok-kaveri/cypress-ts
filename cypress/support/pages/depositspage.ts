class Deposits{
    
    clickDeposits(){
        cy.contains('Deposit').click();
    }

    enterAmount(amount: Number) {
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