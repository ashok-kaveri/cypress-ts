import Landingpage from "../support/pages/landingPage"
import Customerpage from "../support/pages/customerHomePage"
import Deposits from "../support/pages/depositsPage"


describe('As Customer', () => {

    beforeEach(() => {
       Landingpage.invokeApplication();
       Landingpage.customerLoginButton();
       Customerpage.loginAs('Ron Weasly');   
       cy.fixture('depositData').then(function(depositData) {
        this.depositData = depositData
      });
    });

    it('Should be able to deposit amount and get success message', function() {
      Deposits.depositAmount(this.depositData.accountNumber1, this.depositData.depositAmount1);
      Deposits.verifyDepositSuccessMessage('Deposit Successful');
    });

    it('Should update the balance after depositing the amount', function(){
      Deposits.depositAmount(this.depositData.accountNumber1, this.depositData.depositAmount1);
      Customerpage.verifyBalanceAfterDeposit(this.depositData.depositAmount1)
    });

    it('Should update the balance on multiple deposits', function(){
      Customerpage.getPreviousBalance();
      Deposits.depositAmount(this.depositData.accountNumber1, this.depositData.depositAmount1);
      cy.get('@previousBalance').then(previousBalance =>{
        let expectedBalance:Number = Number(previousBalance) + this.depositData.depositAmount1;
        Customerpage.verifyBalanceAfterDeposit(expectedBalance);
      });
      Customerpage.getPreviousBalance();
      Deposits.depositAmount(this.depositData.accountNumber1, this.depositData.depositAmount2);
      cy.get('@previousBalance').then(previousBalance =>{
        let expectedBalance:Number = Number(previousBalance) + this.depositData.depositAmount2;
        Customerpage.verifyBalanceAfterDeposit(expectedBalance);
      });
    });

    it('Should validate error messages', function() {
      Deposits.navigateToDeposits();
      Deposits.clickDeposit();

      Deposits.enterDepositAmount(NaN); 
      Deposits.validationMessageOnEmptyDepositAmount('Please fill in this field.');
      
      Deposits.enterDepositAmount(this.depositData.depositAmount3);
      Deposits.validationMessageOnInvalidDepositAmount('Please enter a valid value.');
    });
})