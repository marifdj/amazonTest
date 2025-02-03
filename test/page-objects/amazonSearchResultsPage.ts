import Page from "./page.js"

class amazonSearchResultsPage extends Page {
    constructor(){
        super ()
    }

get sortByDropdown (){return $(`#a-autoid-0-announce`)}
get arrayOfProducts(){return $$(`[class="a-size-medium a-spacing-none a-color-base a-text-normal"]`)} 
get highToLowOption(){return $(`#s-result-sort-select_2`)}
get dismiss (){return $ (`[data-action-type="DISMISS"]`)}

async clickOnSortByDropdown(){
    //dismiss the pop up 
    await this.dismiss.click()
    await (await this.sortByDropdown).isDisplayed()
    await this.sortByDropdown.click()
} 
async selectedHighToLowOption(){
    let descriptionString = 'Price: High to Low'
    await expect(this.highToLowOption).toBeDisplayed()
    await expect(this.highToLowOption).toHaveText(descriptionString)
    await this.click(await this.highToLowOption)
}
async chooseProduct(){
    //await expect(this.arrayOfProducts).toBeDisplayed()
    await (await this.arrayOfProducts[4]).isDisplayed()
    await expect(this.arrayOfProducts[4]).toBeClickable()
    await this.arrayOfProducts[4].click()
}

}
export default new amazonSearchResultsPage()