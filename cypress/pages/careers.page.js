import mainPage from "../pages/mainPage.page"

export default new class CareersPage extends mainPage {
    constructor() {
        super(),
        this.jobOfferLink = ()=> {return cy.get('[class*="jurmCn"]',{timeout:10*1000})}
    }
    
}
