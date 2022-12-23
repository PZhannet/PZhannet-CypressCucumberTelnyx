import mainPage from "./mainPage.page"
export default new class TollFreeNumbersPage extends mainPage{

    constructor () {
        super(),
        this.tollFreeNumbersLink = ()=> {return cy.get('a[href*="/toll-free-numbers"]')},
        this.addToCartBtn = ()=> {return cy.get('button[data-e2e="tfBuyButton"]:first',{timeout:10*1000})},
        this.shoppingCartImage = ()=> {return cy.get('header span>svg[xmlns="http://www.w3.org/2000/svg"]:first')},
        this.readCustomerStoryLink = ()=> {return cy.get('a[href*="/lightspeed"]')},
        this.searchInput = ()=> {return cy.get('#toll-free-numbers-search')},
        this.searchButton = ()=> {return cy.get('[type="submit"]')},
        this.searchResult = ()=> {return cy.get ('li[role="button"]')}
    }
    clickTollFreeNumbersLink(){
        this.tollFreeNumbersLink().click();
        this.urlPage().should('include','/toll-free-numbers');
    }
    clickAddToCartBtn(){
        this.addToCartBtn().click();
    }
    typeSearchInput(text){
        this.searchInput().type(text);
    }
    clickSearchButton(){
        this.searchButton().click();
    }
}
