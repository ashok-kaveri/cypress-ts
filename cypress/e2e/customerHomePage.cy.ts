import Landingpage from '../support/pages/landingPage'
import Customerpage from '../support/pages/customerHomePage'

describe('Customer', () => {
    beforeEach(() => {
        Landingpage.invokeApplication();
    })

    it('should be able to login into XYZ bank', ()=>{
        Landingpage.customerLoginButton();
        Customerpage.loginAs('Ron Weasly');
        Customerpage.verifyCustomerNameOnCustomerLandingPage('Ron Weasly');
        Customerpage.verifyButtonsOnCustomerLoginLandingPage();
    })
})