import {test, expect} from "@playwright/test"

test("Create Individual", async({page})=>{

    let lastname = "VR"
    let firstname = "Santhosh"    
    
    //navigating to the url
    await page.goto("https://login.salesforce.com")

    //Entering the username and password and clicking on the login button
    await page.locator("//input[contains(@class,'username')]").fill("dilipkumar.rajendran@testleaf.com")

    await page.locator("//input[@id='password']").fill("TestLeaf@2025")

    await page.locator("//input[contains(@class,'primary')]").click()

    await page.waitForTimeout(3000)

     //clicking on the toggle menu button
    await page.locator(".slds-icon-waffle").click()

    await page.waitForTimeout(2000)

    //Click on the view All hyperlink
    await page.locator("//button[contains(text(),'View All')]").click()

    //click on the Individuals link from the App Launcher
    await page.locator("//p[text()='Individuals']").click()

    await page.waitForTimeout(2000)

    //Search for the last name
    await page.getByPlaceholder("Search this list...").fill(lastname)

    //Click on somewhere on the page to get the search result
    await page.locator(".countSortedByFilteredBy").click()

    await page.waitForTimeout(2000)

    //click on the dropdown icon
    await page.locator("//td[@data-col-key-value='6-lstListViewRowLevelAction-6']").click()

    //click on the Edit option
    await page.locator("//a[@title='Edit']").click()

    await page.waitForTimeout(2000)

    //Click on the Salutation dropdown
    await page.locator("//span[text()='Salutation']/parent::span/following-sibling::div").click()

    //Selecting the dropdown value as Mr.
    await page.locator("//a[@title='Mr.']")

    //Enter the First name
    await page.getByPlaceholder("First Name").fill(firstname)

    //Click on the Save button
    await page.locator("//span[text()='Save']").click()

    //toast message validation
    let toastMessage =await page.locator(".toastMessage.slds-text-heading--small.forceActionsText").textContent()

    console.log(toastMessage)

    await expect(toastMessage).toEqual(`Individual "`+firstname+` `+lastname+`" was saved.`)

})