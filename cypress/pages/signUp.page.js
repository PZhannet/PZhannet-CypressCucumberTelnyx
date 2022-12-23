import mainPage from "../pages/mainPage.page"

export default new class SignUp extends mainPage {
    constructor() {
        super(),
        this.logInLink = ()=> cy.get('[href*=".telnyx.com/#"]'),
        this.createAccountBtn = ()=> cy.get('[type="submit"]'),
        this.errorMessageWorkEmail = () => cy.get('#email_error'),
        this.errorMessageFullName = ()=> cy.get('#full_name_error')
    }
    clicklogInLink(){
        this.logInLink().click({force: true});
    }
    clickCreateAccountBtn(){
        this.createAccountBtn().click();
    }
}
