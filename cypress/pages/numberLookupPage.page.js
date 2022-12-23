import mainPage from "../pages/mainPage.page"

export default new class NumberLookupPage extends mainPage {
  constructor() {
    super(),
    this.countryListbox = ()=> {return cy.get('div>button[class*="hVpqmy"]')},
    this.codeCountry = ()=> {return cy.get('#number-lookup-input')},
    this.openedListbox = ()=> {return cy.get('[class*="cvfxOh"]')},
    this.countryFromListbox = ()=> {return cy.get('[class="sc-e64845a7-1 dQoFtc"]')},
    this.exploreUseCaseGuidesBtn = ()=> {return cy.get('[href*="/v2/messaging"]')},
    this.link = () => {return cy.get('[class*="gvobTR"]')}
    }
    openCountryListbox(){
        this.countryListbox().click();
        this.openedListbox().should('be.visible');
    }
    chooseCountryFromListbox(country){
        this.countryFromListbox().contains(country).click();
    }
    clickExploreUseCaseGuidesBtn(){
        this.exploreUseCaseGuidesBtn().click();
    }
    clickLink(){
        this.link().contains('Elastic SIP Trunking').click();
    }
}
