import Landingpage from "../support/pages/landingPage"
import Customerpage from "../support/pages/customerHomePage"
import Deposits from "../support/pages/depositsPage"

describe('As Customer', () => {
    beforeEach(() => {
       Landingpage.invokeApplication();
       Landingpage.customerLoginButton();
       Customerpage.loginAs('Ron Weasly');
    });

    it('Should be able to deposit amount and get success message', ()=>{
      let depositAmount = 100;
      let accountNumber = 1007;
      Deposits.depositAmount(accountNumber, depositAmount);
      Deposits.verifyDepositSuccessMessage('Deposit Successful');
    });

    it('Should update the balance after depositing the amount', ()=>{
      let depositAmount1 = 100;
      let accountNumber = 1007;
      Deposits.depositAmount(accountNumber, depositAmount1);
      Customerpage.verifyBalanceAfterDeposit(depositAmount1)
    });

    it('Should update the balance on multiple deposits', ()=>{
      Customerpage.getPreviousBalance();
      let depositAmount1 = 100;
      let accountNumber = 1007;
      Deposits.depositAmount(accountNumber, depositAmount1);
      cy.get('@previousBalance').then(previousBalance =>{
        let expectedBalance:Number = Number(previousBalance) + depositAmount1;
        Customerpage.verifyBalanceAfterDeposit(expectedBalance);
      });
      Customerpage.getPreviousBalance();
      let depositAmount2 = 20;
      Deposits.depositAmount(accountNumber, depositAmount2);
      cy.get('@previousBalance').then(previousBalance =>{
        let expectedBalance:Number = Number(previousBalance) + depositAmount2;
        Customerpage.verifyBalanceAfterDeposit(expectedBalance);
      });
    });

    it('Should validate error messages', () => {
      let depositAmount1 = 20.5;
      Deposits.navigateToDeposits();
      Deposits.clickDeposit();

      Deposits.enterDepositAmount(NaN); 
      Deposits.validationMessageOnEmptyDepositAmount('Please fill in this field.');
      
      Deposits.enterDepositAmount(depositAmount1);
      Deposits.validationMessageOnInvalidDepositAmount('Please enter a valid value.');
    });
})