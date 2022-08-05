class CustomerLoginpage {
    selectcustomername(customerName: string){
        cy.get('#userSelect').select(customerName);
    }

    clickLogin(){
        cy.contains('Login').click();
    }
}
export default new CustomerLoginpage();