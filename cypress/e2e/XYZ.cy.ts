import Landingpage from '../support/pages/landingpage'
import Customerpage from '../support/pages/customerloginpage'

describe('Landing Page', () => {
    beforeEach(() => {
       Landingpage.invokeApplication();
    })
    
    it('should contain 3 buttons', () => {
    Landingpage.verifyButtonsOnLandingPage()
   })
})