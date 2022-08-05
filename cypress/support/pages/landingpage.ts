class Landingpage{
    invokeApplication():void{
        cy.visit('/');
    }

    verifyButtonsOnLandingPage():void{
        cy.contains('Home').should('be.visible');
        cy.contains('Customer Login').should('be.visible');
        cy.contains('Bank Manager Login').should('be.visible');
    }
    customerLoginButton(){
        cy.contains('Customer Login').click();
    }

}
export default new Landingpage();