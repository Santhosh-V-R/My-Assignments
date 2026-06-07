import test from "@playwright/test"

test("Frame Alert Class Assignment", async({page})=>{
    
    page.on("dialog", async alertType=>{
        const alertMessage = await alertType.message()
        console.log("Alert Message: " +alertMessage)
        await alertType.accept()
    })

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    await page.frameLocator('(//iframe)[1]').locator("//button[text()='Try it']").click()

    await page.waitForTimeout(3000)

    const text = await page.frameLocator('(//iframe)[1]').locator("#demo").textContent()
    console.log(text)

})