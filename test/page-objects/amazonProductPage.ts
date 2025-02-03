import Page from "./page.js"

class amazonProductPage extends Page {
    constructor(){
        super ()
    }
get addToCart(){return $(`#add-to-cart-button`)}
get firstOptionWithStock(){return $$(`[class="a-icon a-icon-cart"]`)}
get noOffers(){return $(`//*[contains(text(),'No featured offers available')]`)}
get orderSoon(){return $(`//*[contains(text(),'order soon.')]`)}
get stock(){return $(`//*[contains(text(),'In Stock')]`)}
get productName(){return $(`#productTitle`)}
get productPrice(){return $(`[class="a-section a-spacing-none aok-align-center aok-relative"]`)}
get proceedCheckout(){return $(`[data-feature-id="proceed-to-checkout-label"]`)}
get goToCart(){return $(`#sw-gtc`)}

get productNameCart(){return $(`#sc-active-4d1055a8-ef56-4c0d-9652-5ef5148a8499 > div.sc-list-item-content > div > div:nth-child(2) > ul > li > span > a > span.a-size-base-plus.a-color-base.sc-product-title.sc-grid-item-product-title > h4 > span > span.a-truncate-cut`)}
get productPriceCart(){return $(`#sc-active-4d1055a8-ef56-4c0d-9652-5ef5148a8499 > div.sc-list-item-content > div > div:nth-child(2) > ul > div.sc-item-price-block > div > div > div > span > span > span.a-offscreen`)}
//#sw-gtc

async checkStockOfProduct(){
    if((await this.stock).isDisplayed || (await this.orderSoon).isDisplayed ){
        await this.addToCart.isDisplayed()
    }else if ((await this.noOffers).isDisplayed){
        await browser.back()
        this.chooseProductWithStock()
    }
}
async chooseProductWithStock(){
//Selected the first one with Add to cart option
await this.firstOptionWithStock[1].click()
}
async addProductAndCheckValues(){

    let name1 = this.productName.getText()
    let price1= this.productPrice.getText()
    let name2 = this.productNameCart.getText()
    let price2= this.productPriceCart.getText()

    await this.addToCart.click()
    await expect(this.proceedCheckout).toBeDisplayed()
    await expect(this.proceedCheckout).toHaveText('Proceed to checkout (1 item)')
    await this.goToCart.click()
    expect(name1).toStrictEqual(name2);
    expect(price1).toStrictEqual(price2);

 }
}
export default new amazonProductPage()