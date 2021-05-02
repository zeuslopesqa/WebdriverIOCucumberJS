const ErrorPage = require('../pageobjects/error.page');
const { Given, When, Then } = require('@cucumber/cucumber');  

//___THEN___
Then('the user needs to see the text {string} on the error page', async function (string) {
    await expect(ErrorPage.checkErrorMessage()).toHaveTextContaining(string); 
});      

Then('the title of the error page has to be {string}', async function (string) {  
    await expect(browser).not.toHaveTitle(string); 
});    
      
Then('this error page should not display the company logo', async function () {   
    await expect(!browser.$('#dh_logo')).not.toBeDisplayed();
});    
