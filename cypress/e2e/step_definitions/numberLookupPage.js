const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import numberLookupPage from "../../pages/numberLookupPage.page"

/*Given("A web browser is at the telnyx home page", ()=> {
    numberLookupPage.openMainPage();
    numberLookupPage.acceptCookies();
});*/
When("A user clicks the Number-lookup link", () => {
    numberLookupPage.clickNumberLookupLink();
});
When("A user clicks country Listbox", ()=>{
    numberLookupPage.openCountryListbox(); 
});
When("A user chooses country {string}", (country)=>{
    numberLookupPage.chooseCountryFromListbox(country);
});
Then("A user should see the valid country code {string}", (countryCode) => {
    numberLookupPage.codeCountry().should('have.attr','value',countryCode)
});
When("A user clicks Explore use-case guides button", ()=>{
    numberLookupPage.clickExploreUseCaseGuidesBtn();
});
Then("A user should see the Telnyx Developers Messaging page", () => {
    numberLookupPage.urlPage().should('include','/v2/messaging')
});
When("A user clicks Elastic SIP Trunking Link", () =>{
    numberLookupPage.clickLink();
});
Then("A user should see the Thesip-trunks page", ()=>{
    numberLookupPage.urlPage().should('include','/sip-trunks')
})
