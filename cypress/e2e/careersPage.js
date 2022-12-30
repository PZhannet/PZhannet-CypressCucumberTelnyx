const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import careersPage from "../pages/careersPage.page"

Given("A web browser is at the telnyx home page", ()=> {
    careersPage.openMainPage();
    careersPage.acceptCookies();
});
When("A user clicks on Careers link", () => {
    careersPage.clickCareersLink();
});
Then("A user should see job offer links {string}", (link) => {
    careersPage.jobOfferLink().contains(link).should('be.visible')
});
