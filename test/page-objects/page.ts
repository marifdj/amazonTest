//additional wrapper to store all the reusable methods like the common actions base page

import chai from 'chai'

export default class Page {
    constructor(){

    }
    /**All reusable web functions */
    async navigateTo(path:string) : Promise <void>{
        await browser.url(path)
        await browser.maximizeWindow()


    }
    async click(ele: WebdriverIO.Element){
        await ele.waitForClickable({timeout:5000})
        //custom error for this particular element
        if(!ele.elementId){
            throw Error (ele.error.message)
        }
        await ele.click()
    }
    async typeInto(ele: WebdriverIO.Element, text: string){
        await ele.waitForDisplayed()
        await ele.waitForEnabled()
        await ele.waitForClickable({timeout:5000})
        //custom error for this particular element
        if(!ele.elementId){
            throw Error (ele.error.message)
        }
        await ele.click()
        await ele.setValue(text)
    }

    async elementIsVisible(ele: WebdriverIO.Element){
        await ele.isDisplayed();
    }
}
