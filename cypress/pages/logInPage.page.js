import mainPage from "./mainPage.page"

export default new class LoginPage extends mainPage {
  constructor() {
    super(),
    this.inputBussnesEmail = ()=> {return cy.get('[name="email"]:first',{timeout:30*1000})},
    this.inputPassword = ()=>  {return cy.get('[type="password"]',{timeout:30*1000})},
    this.loginBtn = () => {return cy.get('[class*="fhXOmx eazkBi"]',{timeout:30*1000})},
    this.titleBar = ()=> {return cy.get('react-title-bar div>div>div[data-testid="flex"]')},
    this.errorMessage = ()=> {return cy.contains('That email and password combination is not valid')}
  };
  typeBussnesEmail(email) {
    this.inputBussnesEmail().type(email);
  }
  typePassword(password) {
    this.inputPassword().type(password);
  }
  clickLoginBtn() {
    this.loginBtn().click({force: true});
  }
}