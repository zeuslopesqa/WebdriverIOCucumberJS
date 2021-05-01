const HomePage = require('../pageobjects/home.page');
const TopMenuPage = require('../pageobjects/topmenu.page');

const { Given, When, Then } = require('@cucumber/cucumber');  

        Given('the user is on the form page', async function () {
            await HomePage.open();
            await TopMenuPage.clickMenuOption('form');
          });

        When(/^the user clicks on the home btn$/, async function () {
            await TopMenuPage.clickMenuOption('home');
        });  
 
        Then('the user needs to see the text {string}', async function (string) {
            let elem = $('.ui-test');
            await expect(elem).toHaveTextContaining(string); 
        });
        
        Then('the status of the page is active', async function () {
            const status = $('/html/body/nav/div/div[2]/ul/li[1]')
            await expect(status).toHaveAttribute('class', 'active')
          });