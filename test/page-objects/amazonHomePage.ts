import Page from "./page.js"

class amazonHomePage extends Page {
    constructor(){
        super ()
    }

get pageContent(){return $(`#pageContent`)}
get searchAmazonInput(){return $(`#twotabsearchtextbox`)}
get searchSubmitbutton(){return $ (`#nav-search-submit-button`)}
get amazonSearchPage(){return $(`#nav-logo-sprites`)}


async validateHomePageIsVisible(){
    await this.elementIsVisible(await this.pageContent)
}
async clickOnAmazonInputAndTypeText(product:any){
    await this.elementIsVisible(await this.searchAmazonInput)
    await this.typeInto(await this.searchAmazonInput, product)
        
    }
async clickOnSearchInputButton(){
    await expect(this.searchSubmitbutton).toBeDisplayed()
    await expect(this.searchSubmitbutton).toBeClickable()
    await this.searchSubmitbutton.click()
}     
}
export default new amazonHomePage()