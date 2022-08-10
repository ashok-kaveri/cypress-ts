class Deposits{

    navigateToDeposits(){
        cy.contains('Deposit').click();
    }

    verifyDepositSuccess(){
        cy.contains('Deposit Successful').should('be.visible');
    }

    depositAmount(amount: Number){
        this.navigateToDeposits();
        cy.get('input[ng-model="amount"]').type(amount.toString());
        cy.get('button[type="submit"]').click();
        this.verifyDepositSuccess();
    }
}
export default new Deposits();