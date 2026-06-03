import {test, chromium, webkit} from "@playwright/test"

test("RedBus Web Instance", async({}, testInfo)=>{
    test.skip(testInfo.project.name !== 'chrome');

    //To Launch the Edge Browser
    const browser = await chromium.launch({channel: 'msedge', headless:false});

    //to open the window
    const context = await browser.newContext()

    //to open the page
    const page = await context.newPage()

    //navigating to the url
    await page.goto("https://www.redbus.in")

    //To get the title of the page
    console.log("The title of the page is: " + await page.title())

    //To get the current url
    console.log("URL of the Page is: " +await page.url())
    
})

test("Flipkart Web Instance", async({}, testInfo)=>{
    test.skip(testInfo.project.name !== 'webkit');

    //To Launch the Webkit Browser
    const browser = await webkit.launch({ headless: false });

    //to open the window
    const context = await browser.newContext()

    //to open the page
    const page = await context.newPage()

    //navigating to the url
    await page.goto("https://www.flipkart.com")

    //To get the title of the page
    console.log("The title of the page is: " + await page.title())

    //To get the current url
    console.log("URL of the Page is: " +await page.url())

})