const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import bringYourOwnCarrierPage from "../pages/bringYourOwnCarrierPage.page"

Given("A web browser is at the telnyx home page", ()=> {
    bringYourOwnCarrierPage.openMainPage();
    bringYourOwnCarrierPage.acceptCookies();
});

When("A user mouseovers the link to the Resources page {string}", (link) => {
    bringYourOwnCarrierPage.mouseoverResourcesPageLink(link);
});
When("A user presses Bring Your Own Carrier link", ()=>{
    bringYourOwnCarrierPage.clickBringYourOwnCarrierLinlk();
});
When("A user presses the Try for free button", ()=>{
    bringYourOwnCarrierPage.clickTryItFreeBtn();
});
Then("A user should see a Sign Up page", () => {
    bringYourOwnCarrierPage.urlPage().should('include','/sign-up')
});
Then("A users hould see Create a free account label", () => {
    bringYourOwnCarrierPage.label().should('have.text','Create a free account')
});
