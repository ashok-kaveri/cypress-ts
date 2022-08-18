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
      Deposits.depositAmount(this.depositData.accountNumber1, this.depositData.depositAmount);
      Deposits.verifyDepositSuccessMessage('Deposit Successful');
    });

    it('Should update the balance after depositing the amount', function(){
      Deposits.depositAmount(this.depositData.accountNumber1, this.depositData.depositAmount);
      Customerpage.verifyBalanceAfterDeposit(this.depositData.depositAmount)
    });

    it('Should update the balance on multiple deposits', function(){
      Customerpage.getPreviousBalance();
      Deposits.depositAmount(this.depositData.accountNumber1, this.depositData.depositAmount);
      cy.get('@previousBalance').then(previousBalance =>{
        let expectedBalance:Number = Number(previousBalance) + this.depositData.depositAmount;
        Customerpage.verifyBalanceAfterDeposit(expectedBalance);
      });
      Customerpage.getPreviousBalance();
      Deposits.depositAmount(this.depositData.accountNumber1, this.depositData.depositAmount);
      cy.get('@previousBalance').then(previousBalance =>{
        let expectedBalance:Number = Number(previousBalance) + this.depositData.depositAmount;
        Customerpage.verifyBalanceAfterDeposit(expectedBalance);
      });
    });

    it('Should validate error messages', function() {
      Deposits.navigateToDeposits();
      Deposits.clickDeposit();

      Deposits.enterDepositAmount(NaN); 
      Deposits.validationMessageOnEmptyDepositAmount('Please fill in this field.');
      
      Deposits.enterDepositAmount(this.depositData.InvalidDepositAmount);
      Deposits.validationMessageOnInvalidDepositAmount('Please enter a valid value.');
    });
})