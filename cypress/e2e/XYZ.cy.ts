import Landingpage from '../support/pages/landingpage'

describe('Landing Page', () => {
  it('should contain 3 buttons', () => {
    Landingpage.invokeApplication();
    Landingpage.verifyButtonsOnLandingPage()
  })
})