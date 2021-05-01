const TitlePage = require('../pageobjects/title.page');
const HomePage = require('../pageobjects/home.page');
const MenuPage = require('../pageobjects/topmenu.page');
const TopMenuPage = require('../pageobjects/topmenu.page');

const { Given, When, Then } = require('@cucumber/cucumber');   

  Given(/^the user is on the the page$/, async function () {
    await TitlePage.open();
  });

  When(/^the user clicks on the (\w+)$/, async function (page) {
    await TopMenuPage.clickMenuOption(page);
  });

  Then('the title has to be {string}', async function (string) {  
    await expect(browser).toHaveTitle(string); 
    
  });                                                    