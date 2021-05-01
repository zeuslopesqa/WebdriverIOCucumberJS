const TitlePage = require('../pageobjects/title.page');
const HomePage = require('../pageobjects/home.page');
const MenuPage = require('../pageobjects/topmenu.page');
const TopMenuPage = require('../pageobjects/topmenu.page');
const Page = require('../pageobjects/page');

const { Given, When, Then } = require('@cucumber/cucumber');   

        Given('the user is on the the home page', async function () {
            await TitlePage.open();
        });                          
                                                                                    
        When(/^the user clicks on the (\w+) button$/, async function (page) {
            await TopMenuPage.clickMenuOption(page);
        });                                                                    
                                                                                    
        Then('this current page should display the company logo', async function () {   
            let elem = $('#dh_logo');
            await expect(elem).toBeDisplayed();
        });                                                                       