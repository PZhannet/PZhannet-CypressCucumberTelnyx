const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import ioTDataPlansPage from "../pages/ioTDataPlansPage.page"

Given("A web browser is at the telnyx home page", ()=> {
    ioTDataPlansPage.openMainPage();
    ioTDataPlansPage.acceptCookies();
});
When("A user mouseovers the link to the Pricing page {string}", (link) => {
    ioTDataPlansPage.mouseoverPricingPageLink(link);
});
When("A user presses Wireless link", ()=>{
    ioTDataPlansPage.clickWirelessLinlk();
});
When("A user clicks on See IoT data plans and pricing in Link", ()=>{
    ioTDataPlansPage.clickSeeIoTDataPlansAndPricingInLink();
});
When("A user clicks on the country name {string}", (country)=>{
    ioTDataPlansPage.clickCountryName(country);
});
Then("A user should see a Pricing page for the chosen country {string}", (chosenCountry) => {
    ioTDataPlansPage.urlPage().should('include',chosenCountry)
});
When("A user clicks How does pricing work for IoT data plans? question",()=>{
    ioTDataPlansPage.clickQuestion();
});
Then("A user should see an How does pricing work for IoT data plans? answer", ()=>{
    ioTDataPlansPage.answer().should('have.attr','data-is-open','true')
});
