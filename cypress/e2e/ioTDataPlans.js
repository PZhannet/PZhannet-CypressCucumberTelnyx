const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import ioTDataPlans from "../pages/ioTDataPlans.page"

Given("A web browser is at the telnyx home page", ()=> {
    ioTDataPlans.openMainPage();
    ioTDataPlans.acceptCookies();
});
When("A user mouseovers the link to the Pricing page {string}", (link) => {
    ioTDataPlans.mouseoverPricingPageLink(link);
});
When("A user presses Wireless link", ()=>{
    ioTDataPlans.clickWirelessLinlk();
});
When("A user clicks on See IoT data plans and pricing in Link", ()=>{
    ioTDataPlans.clickSeeIoTDataPlansAndPricingInLink();
});
When("A user clicks on the country name {string}", (country)=>{
    ioTDataPlans.clickCountryName(country);
});
Then("A user should see a Pricing page for the chosen country {string}", (chosenCountry) => {
    ioTDataPlans.urlPage().should('include',chosenCountry)
});
When("A user clicks How does pricing work for IoT data plans? question",()=>{
    ioTDataPlans.clickQuestion();
});
Then("A user should see an How does pricing work for IoT data plans? answer", ()=>{
    ioTDataPlans.answer().should('have.attr','data-is-open','true')
});
