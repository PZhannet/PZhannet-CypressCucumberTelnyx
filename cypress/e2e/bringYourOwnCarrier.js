const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import bringYourOwnCarrier from "../pages/bringYourOwnCarrier"

Given("A web browser is at the telnyx home page", ()=> {
    bringYourOwnCarrier.openMainPage();
    bringYourOwnCarrier.acceptCookies();
});

When("A user mouseovers the link to the Resources page {string}", (link) => {
    bringYourOwnCarrier.mouseoverResourcesPageLink(link);
});
When("A user presses Bring Your Own Carrier link", ()=>{
    bringYourOwnCarrier.clickBringYourOwnCarrierLinlk();
});
When("A user presses the Try for free button", ()=>{
    bringYourOwnCarrier.clickTryItFreeBtn();
});
Then("A user should see a Sign Up page", () => {
    bringYourOwnCarrier.urlPage().should('include','/sign-up')
});
Then("A users hould see Create a free account label", () => {
    bringYourOwnCarrier.label().should('have.text','Create a free account')
});
