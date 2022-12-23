const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import signUp from "../pages/signUp.page"

Given("A web browser is at the telnyx home page", ()=> {
    signUp.openMainPage();
    signUp.acceptCookies();
});
When("A user clicks Sign-up button", () => {
    signUp.clickSignUpBtn();
});
When("A user clicks Log in link", ()=>{
    signUp.clicklogInLink();
})
Then("A user should see a Log in page", () => {
    signUp.urlPage().should('include','/sign-in')
});
When("A user clicks Create Account button", ()=>{
    signUp.clickCreateAccountBtn();
})
Then("A user should see a FullName error messages", ()=>{
    signUp.errorMessageFullName().should('be.visible')
    .and('have.text','This field is required.');
});
Then("A user should see a WorkEmail error messages", ()=>{
    signUp.errorMessageWorkEmail().should('be.visible')
    .and('have.text','This field is required.');
});
