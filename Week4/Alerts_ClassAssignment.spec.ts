import test from "@playwright/test"

test("Alert Class Assignment- Auto ",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator(".ui-button-text.ui-c").nth(5).click()
    await page.waitForTimeout(4000)

})

test("Alert Class Assignment - Page Once Alert ",async({page})=>{

    page.once("dialog", async alertType=>{
        const alertTypeValue = alertType.type()
        console.log("Alert Type:", alertTypeValue)

        const alertMessage = alertType.message()
        console.log("Alert Message:", alertMessage)

        await alertType.accept()

    })

    await page.goto("https://www.leafground.com/alert.xhtml")

    await page.locator(".ui-button-text.ui-c").first().click()

    await page.locator(".ui-button-text.ui-c").nth(5).click()

})

test("Alert Class Assignment - Page on Alert", async({page})=>{
    
    page.on("dialog", async alertType=>{
        const alertTypeValue = alertType.type()
        console.log("Alert Type: ", alertTypeValue)

        const alertMessage = alertType.message()
        console.log("Alert Message: ", alertMessage)

        if(alertTypeValue === "alert") {
            alertType.accept()
        }else if(alertTypeValue === "confirm"){
            alertType.dismiss()
        }else if(alertTypeValue === "prompt"){
            alertType.accept("Santhosh")
        }
    })

        await page.goto("https://www.leafground.com/alert.xhtml")

        await page.locator(".ui-button-text.ui-c").first().click()

        await page.waitForTimeout(2000)

        await page.locator(".ui-button-text.ui-c").nth(1).click()

        await page.waitForTimeout(2000)

        await page.locator(".ui-button-text.ui-c").nth(5).click()

        await page.waitForTimeout(2000)


})
