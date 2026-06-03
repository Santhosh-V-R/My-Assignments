import test from "@playwright/test"

test("Create Lead", async({page})=>{
    
    //navigating to the url
    await page.goto("https://login.salesforce.com")

    //Entering the username and password and clicking on the login button
    await page.locator("//input[contains(@class,'username')]").fill("dilipkumar.rajendran@testleaf.com")

    await page.locator("//input[@id='password']").fill("TestLeaf@2025")

    await page.locator("//input[contains(@class,'primary')]").click()

    await page.waitForTimeout(5000)

    //clicking on the toggle menu button
    await page.locator(".slds-icon-waffle").click()

    await page.waitForTimeout(2000)

    //Click on the view All hyperlink
    await page.locator("//button[contains(text(),'View All')]").click()

    await page.waitForTimeout(2000)

    //Click on the Sales
    await page.locator("//div[@data-name='Sales']").click()

    //Click on the Leads tab
    await page.locator("//a[@title= 'Leads']").click()

    //click on the New button
    await page.locator("//a[@title='New']").click()

    await page.waitForTimeout(5000)

    await page.locator("[name='salutation']").click()

    //Select the Salutation option as Mr. sometimes its working sometime its not working so added the above click function.
    await page.locator("//lightning-base-combobox-item[@class='slds-media slds-listbox__option slds-media_center slds-media_small slds-listbox__option_plain']").nth(0).click()

    await page.waitForTimeout(2000)

    //Enter the Last name
    await page.locator("[name='lastName']").fill("Test")

    //Enter the Company name
    await page.locator("[name='Company']").fill("Test Company")

    //Click on the save button
    await page.locator("[name='SaveEdit']").click()





})