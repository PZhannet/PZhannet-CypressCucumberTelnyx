const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import MainPage from "../pages/mainPage.page"

const mainPage = new MainPage()

Given("A web browser is at the telnyx home page", ()=> {
    mainPage.openMainPage();
    mainPage.acceptCookies();
});
When("A user clicks on Next Item Button", () => {
    mainPage.clicknextItem();
});
When("A user clicks on Next Item Button again", ()=>{
    mainPage.secondclicknextItem();
})
Then("A user should see a picture with Dayton Turner", () => {
    mainPage.picture().should('have.attr','aria-hidden','false');
    mainPage.textRelatedToThePicture().should('include.text',"Dayton Turner");
});
When("A user clicks the Talk to an expert Button", () => {
    mainPage.clickTalkToAnExpertBtn();
});
Then("A user should see the Contact-us page", () => {
    mainPage.urlPage().should('include','/contact-us');
});