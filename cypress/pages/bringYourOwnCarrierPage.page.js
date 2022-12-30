import mainPage from "./mainPage.page"

export default new class BringYourOwnCarrierPage extends mainPage {
    constructor() {
        super(),
        this.bringYourOwnCarrierLinlk = ()=> {return cy.contains('Bring Your Own Carrier')},
        this.tryItFreeBtn = ()=> {return cy.get('ul>div a[class*="mchNoDecorate sign-up-link"]')},
        this.label = ()=> {return cy.contains('Create a free account')}
    }
    clickBringYourOwnCarrierLinlk(){
        this.bringYourOwnCarrierLinlk().click({force: true})
        this.urlPage().should('include','/bring-your-own-carrier')
    }
    clickTryItFreeBtn(){
        this.tryItFreeBtn().click({force: true});
    }
}