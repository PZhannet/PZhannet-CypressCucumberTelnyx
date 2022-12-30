import mainPage from "./mainPage.page"

export default new class IoTDataPlans extends mainPage {
    constructor() {
        super(),
        this.seeIoTDataPlansAndPricingInLink = ()=> {return cy.get('[class*="hVpqmy"]')},
        this.countryName = ()=> {return cy.get('[class*="csMQtW"] li~li>ul')},
        this.listbox = ()=> {return cy.get('[class*="csMQtW"]')},
        this.question = ()=> {return cy.get('[aria-controls="faq2_description"]')},
        this.answer = ()=> {return cy.get('dd[data-faq-answer="1"]')}
    }
    clickWirelessLinlk(){
        this.wirelessLink().click({force: true});
        this.urlPage().should('include','/iot-data-plans');
    }
    clickSeeIoTDataPlansAndPricingInLink(){
        this.seeIoTDataPlansAndPricingInLink().click({force: true});
        this.listbox().should('be.visible');
    }
    clickCountryName(country){
        this.countryName().contains(country).click();
    }
    clickQuestion(){
        this.question().click();
    }
}