import {test, expect} from "@playwright/test"

test("Create Individual", async({page})=>{

    let lastname = "VR"
    
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

    //click on the dropdown icon 
    await page.locator("//a[@title='Individuals']/following-sibling::one-app-nav-bar-item-dropdown").click()

    //Click on the New Individual 
    await page.locator("//span[text()='New Individual']").click()

    //Enter the Last name
    await page.getByPlaceholder("Last Name").fill(lastname)

    await page.waitForTimeout(2000)

    //Click on the Save button
    await page.locator("//span[text()='Save']").click()

    //toast message validation
    let toastMessage =await page.locator(".toastMessage.slds-text-heading--small.forceActionsText").textContent()

    console.log(toastMessage)

    await expect(toastMessage).toEqual(`Individual "`+lastname+`" was created.`)

})