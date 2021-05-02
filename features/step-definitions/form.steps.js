const HomePage = require('../pageobjects/home.page');
const TopMenuPage = require('../pageobjects/topmenu.page');
const FormPage = require('../pageobjects/form.page');
const { Given, When, Then } = require('@cucumber/cucumber');   

//___GIVEN___
Given('the user is on the form page', async function () {
    await HomePage.open();
    await TopMenuPage.clickMenuOption('form');
});

Given('there are a inputbox and a submit button', async function () {        
    await expect(FormPage.verifyInputField()).toBeDisplayed();
    await expect(FormPage.verifySubmitBtn()).toBeDisplayed();
});    

//___WHEN___
When(/^the user fill the inputbox with the (\w+) value and click on the submit button$/, async function (value) {
    await FormPage.fillFieldInput(value);     
    await FormPage.clickSubmitBtn();                                                  
});    

//___THEN___
Then('the status of the form button is active', async function () {
    await expect(TopMenuPage.btnStatus()).toHaveAttribute('class', 'active');
});

Then('the user needs to see the text {string}', async function (string) {
    await expect(FormPage.verifyTextFormPage()).toHaveTextContaining(string); 
});

