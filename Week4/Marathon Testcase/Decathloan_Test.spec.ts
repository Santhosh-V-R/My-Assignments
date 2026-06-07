import {test, expect} from "@playwright/test"

test("Decathlon Search and Add to Cart", async({page})=>{

    const homeTitle = 'Buy Sporting Goods, Sportswear and Equipments | Download App'
    const shoesTitle = 'Search | Shoes'
    const category = 'Running'
    const gender = 'Men'
    const shoeSize = '10.5'
    const successMessage = 'Product(s) added to cart'

    //Navigating to the url
    await page.goto("https://www.decathlon.in/")

    //Verifying user navigated to the home page
    const homepageTitle = await page.title()
    expect(homepageTitle).toBe(homeTitle)
    
    const searchLocator = page.locator("[type='search']")

    //Click on the search box
    await searchLocator.click()

    //Verifying the search box is enabled
    await expect(searchLocator).toBeEnabled()

    //Entering as Shoes in the search box
    await searchLocator.fill("Shoes")

    //Pressing the enter key
    await page.keyboard.press("Enter")

    await page.waitForTimeout(1000)

    const shoespageTitle = await page.title()
    console.log(shoespageTitle)
    //Verifying the user navigated to the shoes page
    expect(shoespageTitle).toBe(shoesTitle)

    //Choosing the Running category filter
    await page.locator("//span[text()='Sport']").click()
    await page.locator("//span[text()='"+category+"']").click()

    await page.waitForTimeout(2000)

    //Choosing the gender filter as men
    await page.locator("//span[text()='Gender']").click()
    await page.locator("//span[text()='"+gender+"']").last().click()

    await page.waitForTimeout(2000)

    //Selecting the size filter as 10.5
    await page.locator("//span[text()='Size']").click()
    await page.locator("//span[text()='"+shoeSize+"']").click()

     await page.waitForTimeout(2000)

    //Click on the sort option 
    await page.locator("//span[text()='Most relevant']").click()
    await page.locator("//span[text()='Price (high → low) ']").click()

    //Click on the first product
    await page.locator("//span[text()='Kalenji']").first().click()

    await page.waitForTimeout(2000)

    //Selcting the shoe size as 10.5
    await page.locator("//span[text()='"+shoeSize+"']").click()

    //await page.waitForTimeout(2000)

    //Click on the add to cart button
    await page.locator("//button[@data-test-id='pdp:add-to-cart-button']").click()

    await page.waitForTimeout(2000)

    //Displaying the toast message in the console
    const toastMessage = await page.locator("//h3[@class='text-[16px]']").textContent()
    expect(toastMessage).toBe(successMessage)
    console.log(toastMessage)

    //Click on the cart option
    await page.locator("//span[text()='Cart']").click()
    await page.waitForTimeout(2000)

    //Fetching the cart amount and displaying in the console
    const totalCartAmount = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']").textContent()
    console.log(totalCartAmount)








})