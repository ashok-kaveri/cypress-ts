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
      Deposits.clickDeposits();
      Deposits.enterAmount(100);
      Deposits.clickDepositButton();
      Deposits.verifyDepositSuccess();
    });
})