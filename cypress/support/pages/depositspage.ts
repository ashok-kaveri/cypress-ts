class Deposits{

    navigateToDeposits(){
        cy.contains('Deposit').click();
    }

    verifyDepositSuccessMessage(message: any){
        cy.contains(message).should('be.visible');
    }

    selectAccount(accountNumber: any){
        cy.get('#accountSelect').select(accountNumber.toString());
    }

    clickDeposit(){
        cy.get('button[type="submit"]').click();
    }

    enterDepositAmount(amount: Number){
        cy.get('input[ng-model="amount"]').type(amount.toString()).then(ele =>{
            cy.wrap(ele).as('enterDepositAmount');
        })
    }

    depositAmount(accountNumber: any, amount: Number){
        this.navigateToDeposits();
        this.selectAccount(accountNumber);
        this.enterDepositAmount(amount);
        this.clickDeposit();
    }

    validationMessageOnEmptyDepositAmount(message: any){
        cy.get('@enterDepositAmount').invoke('prop', 'validationMessage')
          .should('equal', message);  
    }

    validationMessageOnInvalidDepositAmount(message: any){
        cy.get('@enterDepositAmount').invoke('prop', 'validationMessage')
          .should('contains', message);   
    }
}
export default new Deposits();