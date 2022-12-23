const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import loginPage from "../pages/logIn.page"

Given("A web browser is at the telnyx home page", ()=> {
  loginPage.openMainPage();
  loginPage.acceptCookies();
});
When("A user clicks Log in link", ()=>{
  loginPage.clickLogInLink();
});
When("A user enters the email {string}", (email) => {
  loginPage.typeBussnesEmail(email);
});
When("A user enters the password {string}", (password)=>{
  loginPage.typePassword(password);
});
When("A user clicks on the login button", ()=>{
  loginPage.clickLoginBtn();
});
Then("A user should see an app page and title-bar", () => {
  loginPage.urlPage().should('include','app',)
  loginPage.titleBar().should('be.visible');
});
When("A user enters not valid email {string}", (email) => {
  loginPage.typeBussnesEmail(email);
});
Then("A user should see an error message", () => {
  loginPage.urlPage().should('include','sign-in');
  loginPage.errorMessage().should('be.visible');
  });

