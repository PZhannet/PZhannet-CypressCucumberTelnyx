export default class OpenTelnyxPage {
    elements = {
      acceptAndCloseBtn: ()=> cy.get('[class*="cSsJix fqfWHQ eUnEoi itIjRb"]')
    }
  
    clickAcceptAndCloseBtn() {
      this.elements.acceptAndCloseBtn().click();
    }
  }
  