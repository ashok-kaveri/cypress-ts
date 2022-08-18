import Landingpage from '../support/pages/landingPage'

describe('Landing Page', () => {
    beforeEach(() => {
       Landingpage.invokeApplication();
    })
    
    it('should contain 3 buttons', function() {
    Landingpage.verifyButtonsOnLandingPage()
   })
})