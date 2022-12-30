const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import signUpPage from "../pages/signUpPage.page"

Given("A web browser is at the telnyx home page", ()=> {
    signUpPage.openMainPage();
    signUpPage.acceptCookies();
});
When("A user clicks Sign-up button", () => {
    signUpPage.clickSignUpBtn();
});
When("A user clicks Log in link", ()=>{
    signUpPage.clicklogInLink();
})
Then("A user should see a Log in page", () => {
    signUpPage.urlPage().should('include','/sign-in')
});
When("A user clicks Create Account button", ()=>{
    signUpPage.clickCreateAccountBtn();
})
Then("A user should see a FullName error messages", ()=>{
    signUpPage.errorMessageFullName().should('be.visible')
    .and('have.text','This field is required.');
});
Then("A user should see a WorkEmail error messages", ()=>{
    signUpPage.errorMessageWorkEmail().should('be.visible')
    .and('have.text','This field is required.');
});
