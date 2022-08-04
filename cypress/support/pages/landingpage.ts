class Landingpage{
    invokeApplication():void{
        cy.visit('/');
    }

    verifyButtonsOnLandingPage():void{
        cy.contains('Home').should('be.visible');
        cy.contains('Customer Login').should('be.visible');
        cy.contains('Bank Manager Login').should('be.visible');
    }
}
export default new Landingpage();