import Landingpage from "../support/pages/landingPage"
import Customerpage from "../support/pages/customerHomePage"
import Deposits from "../support/pages/depositsPage"

describe('As Customer', () => {
    beforeEach(() => {
       Landingpage.invokeApplication();
       Landingpage.customerLoginButton();
       Customerpage.loginAs('Ron Weasly');
    });

    it('I should be able to deposit amount and get success message', ()=>{
      Deposits.depositAmount(100);
    });
})