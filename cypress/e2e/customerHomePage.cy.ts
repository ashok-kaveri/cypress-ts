import Landingpage from '../support/pages/landingpage'
import Customerpage from '../support/pages/customerloginpage'

describe('Customer', () => {
    beforeEach(() => {
        Landingpage.invokeApplication();
    })

    it('should be able to login into XYZ bank', ()=>{
        Landingpage.customerLoginButton();
        Customerpage.selectcustomername('Ron Weasly');
        Customerpage.clickLogin();
    })
})