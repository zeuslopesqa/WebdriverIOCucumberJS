const TitlePage = require('../pageobjects/title.page');
const HomePage = require('../pageobjects/home.page');
const MenuPage = require('../pageobjects/topmenu.page');
const TopMenuPage = require('../pageobjects/topmenu.page');
const FormPage = require('../pageobjects/form.page');
const HelloPage = require('../pageobjects/hello.page')

const { Given, When, Then } = require('@cucumber/cucumber');  


Given('the user is on the home', async function () {
    await HomePage.open();
});

Given('the user is on the form page', async function () {
    await HomePage.open();
    await TopMenuPage.clickMenuOption('form');
});


When(/^the user clicks on the (\w+) button$/, async function (page) {
    await TopMenuPage.clickMenuOption(page);
});

When('the user clicks on the {string} button', async function (string) {
    await TopMenuPage.clickMenuOption(string);
});

Then('the title has to be {string}', async function (string) {  
    await expect(browser).toHaveTitle(string); 
});                                                    

Then('the user needs to see the text {string}', async function (string) {
    await expect(browser.$('.ui-test')).toHaveTextContaining(string); 
});

Then('the status of the home button is active', async function () {
    await expect(TopMenuPage.btnStatus()).toHaveAttribute('class', 'active')
});

Then('the status of the form button is active', async function () {
    await expect(TopMenuPage.btnStatus()).toHaveAttribute('class', 'active')
});

Then('this current page should display the company logo', async function () {   
    await expect(browser.$('#dh_logo')).toBeDisplayed();
});    

Then('the user needs to see the text {string}1', async function (string) {
    await expect(browser.$('h1')).toHaveTextContaining(string); 
});

                                                                                              
Then('the text {string} is displayed in a <h1> element', async function (string) {            
    await expect(HomePage.findH1ElementHome()).toHaveTextContaining(string);                                                                    
});                                                                                     
                                                                                          
                                    
Then('the text {string} is displayed in a <p> element', async function (string) {             
    await expect(HomePage.findParElementHome()).toHaveTextContaining(string);                                                                    
});                                                                                     
                                                                                          
                                                                           
Given('there are a inputbox and a submit button', async function () {        
    await expect(FormPage.verifyInputField()).toBeDisplayed();
    await expect(FormPage.verifySubmitBtn()).toBeDisplayed();
});                                                                    
                                                                                                 
                                                                         
When(/^the user fill the inputbox with the (\w+) value and click on the submit button$/, async function (value) {
    await FormPage.fillFieldInput(value);     
    await FormPage.clickSubmitBtn();                                                  
});                                                                    
                                                                         
                  
                                                                         
Then(/^the user should see the (.*) message$/, async function (result) {        
    await expect(HelloPage.checkHelloMessage()).toHaveText(result);    
});                                                