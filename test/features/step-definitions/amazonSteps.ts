import { Given,Then, When } from "@wdio/cucumber-framework";
import amazonHomePage from "../../page-objects/amazonHomePage.js";
import amazonSearchResultsPage from "../../page-objects/amazonSearchResultsPage.js";
import amazonProductPage from "../../page-objects/amazonProductPage.js";


Given (/^The user go to the Amazon URL$/, async function(){
        //Launch browser 
        await amazonHomePage.navigateTo(process.env.ENV)
        await amazonHomePage.validateHomePageIsVisible()
})
//Steps - Scenario #1
Then (/^The user search for a product(.*?)$/, async function(product:any){
       await amazonHomePage.clickOnAmazonInputAndTypeText(product)
       await amazonHomePage.clickOnSearchInputButton()
})
Then (/^The user sort by price descending order$/, async function(){
        await amazonSearchResultsPage.clickOnSortByDropdown()
        await amazonSearchResultsPage.selectedHighToLowOption()
 })
 When (/^The user select the item$/, async function(){
        await amazonSearchResultsPage.chooseProduct()
 })
 Then (/^The user check that the stock is available$/, async function(){
        await amazonProductPage.checkStockOfProduct()
 })
//Steps - Scenario #2
 Then (/^The user added a product and validates values$/, async function(){
        await amazonProductPage.addProductAndCheckValues()
 })
