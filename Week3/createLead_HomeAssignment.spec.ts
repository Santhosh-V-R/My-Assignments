import test from "@playwright/test"

test("Create Lead", async({page})=>{

    //navigating to the url
    await page.goto("http://leaftaps.com/opentaps/control/main")

    //Identifing the username field using id attribute and entering the username
    await page.locator("#username").fill("democsr")

    //Identifing the password field using id attribute and entering the password
    await page.locator("#password").fill("crmsfa")

    //Identifing the login button using xpath and clicking on the login button
    await page.locator("//input[@type='submit']").click()

    await page.waitForTimeout(2000)

    //Identifing the CRM/SFA link using xpath and clicking on it.
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()

    await page.waitForTimeout(3000)

    //Clicking on the Leads Menu
    await page.locator("//a[contains(text(),'Leads')]").click()

    await page.waitForTimeout(5000)

    //Clicking on the Create Lead sub menu
    await page.locator("//a[contains(text(),'Create Lead')]").click()

    await page.waitForTimeout(5000)

    //Entering the company name field
    await page.locator("#createLeadForm_companyName").fill("Test Company")

    //Entering the first name field
    await page.locator("#createLeadForm_firstName").fill("Test FN") 

    //Entering the last name field
    await page.locator("#createLeadForm_lastName").fill("Test LN") 

    //Entering the Salutation field
    await page.locator("#createLeadForm_personalTitle").fill("Mr.")

    //Entering the Title field
    await page.locator("[name='generalProfTitle']").fill("Test Title")

    //Entering the Annual Revenue field
    await page.locator("[name='annualRevenue']").fill("500000")

    //Entering the Department field
    await page.locator("[name='departmentName']").fill("Test Department")

    //Entering the Phone Number field
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9879879877")

    //Clicking on the Create Lead button
    await page.locator(".smallSubmit").click()

})