import {test,expect} from '@playwright/test'

test('Frames Home Assignment', async({page})=>{

    //Navigating to the url
    await page.goto("https://leafground.com/frame.xhtml")

    const frameValue = page.frames();

    //Click on the Inside frame's Click Me button
    await frameValue[1].locator("#Click").click()
    
    await page.waitForTimeout(2000)

    //Verify the simple frame message
    const simpleFramemsg = await frameValue[1].locator("#Click").textContent()
    expect(simpleFramemsg).toBe('Hurray! You Clicked Me.')

    //Printing the total number of frames present in the page
    console.log("Total number of frames in the page: " + frameValue.length)

    //Click on the Nested frame's Click Me button
    await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

    await page.waitForTimeout(2000)
    
    //Verify the nested frame message
    const nestedFramemsg = await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").innerText()
    expect(nestedFramemsg).toBe('Hurray! You Clicked Me.')



})