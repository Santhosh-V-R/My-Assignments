import {test,expect} from "@playwright/test"

test("PVR Book Ticket", async({page})=>{

    const movieName = "KARUPPU"
    const title = "PVR Cinemas"

    //navigating to the url
    await page.goto("https://www.pvrcinemas.com/")

    await page.waitForTimeout(2000)

    await page.locator("//h6[text()='Ahmedabad']").click()

    //Click on the location
    await page.locator("//span[@data-pc-section='input']//span[@class='cities-placed']").click()
    //Choose the location as Chennai
    await page.locator("//span[text()='Chennai']").click()
    await page.waitForTimeout(2000)

    //Click on the Cinema
    await page.locator("//span[text()='Cinema']").click()

    //Click on the Select Cinema dropdown
    await page.locator("//span[text()='Select Cinema']").click()

    //choose the first cinema from the dropdown
    await page.locator("[class='p-dropdown-item']").first().click()

    //choose the today from the dropdown
    await page.locator("[class='p-dropdown-item']").first().click()

    //choose the movie as KARUPPU from the dropdown
    await page.locator("//li[@class='p-dropdown-item']//span[text()='"+movieName+"']").click()

    //choose an time slot from the dropdown
    await page.locator("//li[@class='p-dropdown-item']").nth(0).click()

    //Click on the Book button
    await page.locator("//div[@class='quick-lefts ']//span[text()='Book']").click()

    await page.waitForTimeout(2000)

    //Click on the Accept button on the Terms and Conditions Popup
    await page.locator(".sc-kCuUfV.iBvycX.reject-terms").click()

    await page.waitForTimeout(2000)

    //Select any seat
    await page.locator("//span[@id='SL.SILVER|H:1']").click()

    const selectedMovie = await page.locator("//div[@class='summary-movies-content']//h5").textContent()
    
    //Comparing the selected movie with the expected movie name
    expect(selectedMovie).toEqual(movieName)
    
    const selectedSeat = await page.locator(".seat-number").textContent()
    expect(selectedSeat).toEqual("H1")

    const grandTotal = await page.locator(".grand-amount").textContent()
    console.log(grandTotal)

    const pageTitle =await page.title()

    expect(pageTitle).toEqual(title)


})