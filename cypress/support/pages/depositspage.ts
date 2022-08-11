class Deposits{

    navigateToDeposits(){
        cy.contains('Deposit').click();
    }

    verifyDepositSuccess(){
        cy.contains('Deposit Successful').should('be.visible');
    }

    selectAccount(accountNumber: any){
        cy.get('#accountSelect').select(accountNumber.toString());
    }

    depositAmount(accountNumber: any, amount: Number){
        this.navigateToDeposits();
        this.selectAccount(accountNumber);
        cy.get('input[ng-model="amount"]').type(amount.toString());
        cy.get('button[type="submit"]').click();
        this.verifyDepositSuccess();
    }
}
export default new Deposits();