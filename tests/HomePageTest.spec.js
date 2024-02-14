//test - create the test. expect - validate the test.
const {test, expect} = require('@playwright/test'); //import


test('Home Page',async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    let pageTitle = await page.title();
    console.log("Page Title is: "+pageTitle);
    await expect(page).toHaveTitle('STORE');

    let pageUrl = await page.url();
    console.log("Page URL is: "+pageUrl);
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');

    await page.close();
})


