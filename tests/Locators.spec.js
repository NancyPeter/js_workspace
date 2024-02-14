import {test, expect} from '@playwright/test'

test('Locators', async ({page})=> {

    await page.goto('https://www.demoblaze.com/index.html')
    await expect(page.locator('id=login2')).toBeVisible()
    await page.locator('id=login2').click() //XPath, CSS, ID, Name
    await page.locator('#loginusername').fill('pavanol')

    //Locate multiple web elements
    await page.waitForSelector('a') //Wait to load all the links in the page.
    const products = await page.$$('a') //Give dynamic xpath
    for(const product of products) {
        const productText = await product.textContent();
        console.log(productText)
    }

    await page.close()

})