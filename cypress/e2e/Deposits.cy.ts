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
})