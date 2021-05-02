const HelloPage = require('../pageobjects/hello.page');

const { Given, When, Then } = require('@cucumber/cucumber');  

//___THEN___
Then(/^the user should see the (.*) message$/, async function (result) {        
    await expect(HelloPage.checkHelloMessage()).toHaveText(result);    
});