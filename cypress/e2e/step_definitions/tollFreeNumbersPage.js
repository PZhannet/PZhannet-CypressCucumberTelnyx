const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import tollFreeNumbersPage from "../../pages/tollFreeNumbersPage.page"

/*Given("A web browser is at the telnyx home page", ()=> {
    tollFreeNumbersPage.openMainPage();
    tollFreeNumbersPage.acceptCookies();
});*/
When("A user clicks the Read customer story Link", () => {
    tollFreeNumbersPage.clickReadCustomerStoryLink();
});
When("A user clicks the Toll-Free Numbers link", ()=> {
    tollFreeNumbersPage.clickTollFreeNumbersLink();
});
When("A user clicks Add to cart button", ()=> {
    tollFreeNumbersPage.clickAddToCartBtn();
})
Then("A user should see a cart image on header", () => {
    tollFreeNumbersPage.shoppingCartImage().should('be.visible');
});
When("A user enters text {string} in Search Input", (text) => {
    tollFreeNumbersPage.typeSearchInput(text);
});
When("A user clicks Search Button", ()=>{
    tollFreeNumbersPage.clickSearchButton();
})
Then("A user should see different Toll-free-numbers in the search result", () => {
    tollFreeNumbersPage.searchResult().should('be.visible')
});