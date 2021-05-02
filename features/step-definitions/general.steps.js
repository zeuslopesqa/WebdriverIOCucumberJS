const HomePage = require('../pageobjects/home.page');
const { Given, When, Then } = require('@cucumber/cucumber');  

//___GIVEN___
Given('the user is on the home', async function () {
    await HomePage.open();
});

//___THEN___
Then('the title has to be {string}', async function (string) {  
    await expect(browser).toHaveTitle(string); 
});                                                    

Then('this current page should display the company logo', async function () {   
    await expect(browser.$('#dh_logo')).toBeDisplayed();
});    

                                                                   
