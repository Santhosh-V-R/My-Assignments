import test from "@playwright/test"

test("Edit Lead", async({page})=>{
    
    //navigating to the url
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Entering the username and password and clicking on the login button
    await page.locator("//input[@id='username']").fill("democsr")

    await page.locator("//input[@id='password']").fill("crmsfa")

    //Identifing the login button using xpath and clicking on the login button
    await page.locator("//input[@type='submit']").click()

    await page.waitForTimeout(2000)

    //Identifing the CRM/SFA link using xpath and clicking on it.
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    await page.waitForTimeout(3000)

    //Clicking on the Leads Menu
    await page.locator("//a[contains(text(),'Leads')]").click()

    await page.waitForTimeout(2000)

    //Clicking on the Create Lead sub menu
    await page.locator("//a[contains(text(),'Create Lead')]").click()

    await page.waitForTimeout(2000)

    //Entering the company name field
    await page.locator("#createLeadForm_companyName").fill("Test Company")

    //Entering the first name field
    await page.locator("#createLeadForm_firstName").fill("Test FN") 

    //Entering the last name field
    await page.locator("#createLeadForm_lastName").fill("Test LN") 

    //Clicking on the Create Lead button
    await page.locator(".smallSubmit").click()

    await page.waitForTimeout(3000)

    //Clicking on the edit button
    await page.locator("//a[contains(text(),'Edit')]").click()

    //Clearing the text in the company name field and entering the new company name
    await page.locator("#updateLeadForm_companyName").clear()
    
    await page.locator("#updateLeadForm_companyName").fill("TestLeaf PLaywright")

    //Clicking on the update button
    await page.locator("//input[@value='Update']").click()



})