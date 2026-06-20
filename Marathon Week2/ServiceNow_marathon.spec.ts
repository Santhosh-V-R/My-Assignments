import test,{expect} from "@playwright/test"

//used storage state for login
test.use({storageState:'Data/SN_Login.json'})

test("Service Now Marathon", async({page})=>{

    const subMenu = "Service Catalog"
    const category = "Mobiles"
    const mobileName = "Apple iPhone 13 pro"
    const confirmMsg = "Thank you, your request has been submitted"

    //Navigating to the url
    await page.goto("https://dev296651.service-now.com/")
    await page.waitForTimeout(2000)

    //clicking on the All menu
    await page.locator("div[aria-label='All']").click()

    //Searching for Service Catalog 
    await page.locator("#filter").fill(subMenu)
    await page.waitForTimeout(3000)

    //Click on the Service Catalog menu
    await page.locator("a[aria-label*='"+subMenu+"']").first().click()

    //Switch to the Service Catalog iframe and Click on the mobile
    const frame = page.frameLocator("#gsft_main")
    await frame.locator("//h2[contains(text(),'Mobiles')]").click()
      

    //Select Apple iPhone 13 Pro
    await frame.getByAltText('Request for '+mobileName).nth(1).waitFor({state:'visible'})
    await frame.getByAltText('Request for '+mobileName).nth(1).click()

    //Selecting the Yes radio button
    await frame.locator("//label[text()='Yes']").click()

    //Entering the phone number
    await expect(frame.locator("//span[text()='What was the original phone number?']")).toBeVisible()
    await frame.locator('.cat_item_option.sc-content-pad.form-control').fill('99')

    //Selecting the dropdown value as Unlimited
    await frame.locator("//select[@class='form-control cat_item_option ']").selectOption({value:'unlimited'})

    //Selecting the Sierra Blue radio button
    await frame.locator("//label[text()='Sierra Blue']").click()

    //Selecting the 512 GB [add $300.00] radio button
    await frame.locator("//label[text()='512 GB [add $300.00]']").click()

    //Clicking on the Order Now button
    await frame.locator("#oi_order_now_button").click()
    await page.waitForTimeout(2000)

    //Verify the confirm message is displayed
    const conMsgLocator = frame.locator(".notification.notification-success")
    await expect(conMsgLocator).toBeEnabled()

    const conMsg = await conMsgLocator.textContent()
    expect(conMsg).toContain(confirmMsg)

    //taking full page screenshot
    await page.screenshot({
        path: 'Screenshots/FullPage.png',
        fullPage:true
    })


})