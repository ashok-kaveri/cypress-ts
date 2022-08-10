import Landingpage from "../support/pages/landingpage"
import Customerpage from "../support/pages/customerloginpage"
import Deposits from "../support/pages/depositspage"

describe('As Customer', () => {
    beforeEach(() => {
       Landingpage.invokeApplication();
       Landingpage.customerLoginButton();
       Customerpage.selectcustomername('Ron Weasly');
       Customerpage.clickLogin();
    });

    it('I Should be able to deposit amount', ()=>{
      Deposits.clickDeposit();
      Customerpage.getBalance();
      Deposits.enterDepositAmount(100);
      Deposits.clickDepositButton();
      Deposits.verifyDepositSuccess();
      Customerpage.verifyBalanceAfterDeposit(100);
      Customerpage.getBalance();
      Deposits.enterDepositAmount(100);
      Deposits.clickDepositButton();
      Customerpage.verifyBalanceAfterDeposit(200);

    });
})