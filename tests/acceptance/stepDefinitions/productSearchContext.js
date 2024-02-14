const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const { expect } = require("@playwright/test");

//launch url
const url = 'https://www.demoblaze.com/index.html'


Given('a user has navigated to the homepage', async function () {
    await page.goto(url);
});
       
When('the user search {string} in the home page', async function (string) {
    let pageTitle = await page.title();
    console.log("Page Title is: "+pageTitle);
    await expect(page).toHaveTitle('STORE');
    expect(string).toEqual("test")
});

Then('Product {string} must be displayed', async function (string) {
    expect(string).toEqual("test")
});

Then('Product must be displayed with price and quantity', async function () {
    let pageUrl = await page.url();
    console.log("Page URL is: "+pageUrl);
    await expect(page).toHaveURL(url);
});