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
      Deposits.depositAmount(100);
    });

    it('Should update the balance after depositing the amount', ()=>{
      let depositAmount1 = 100;
      Deposits.depositAmount(depositAmount1);
      Customerpage.verifyBalanceAfterDeposit(depositAmount1)
    });

    it('Should update the balance on multiple deposits', ()=>{
      Customerpage.getPreviousBalance();
      let depositAmount1 = 100;
      Deposits.depositAmount(depositAmount1);
      cy.get('@previousBalance').then(previousBalance =>{
        let expectedBalance:Number = Number(previousBalance) + depositAmount1;
        Customerpage.verifyBalanceAfterDeposit(expectedBalance);
      });
      Customerpage.getPreviousBalance();
      let depositAmount2 = 20;
      Deposits.depositAmount(depositAmount2);
      cy.get('@previousBalance').then(previousBalance =>{
        let expectedBalance:Number = Number(previousBalance) + depositAmount2;
        Customerpage.verifyBalanceAfterDeposit(expectedBalance);
      });
    });
})