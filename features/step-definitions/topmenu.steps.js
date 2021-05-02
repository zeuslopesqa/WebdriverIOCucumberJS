const TopMenuPage = require('../pageobjects/topmenu.page');
const { Given, When, Then } = require('@cucumber/cucumber');  

//___WHEN___
When(/^the user clicks on the (\w+) button$/, async function (page) {
    await TopMenuPage.clickMenuOption(page);
});

//___THEN___
Then('the status of the home button is active', async function () {
    await expect(TopMenuPage.btnStatus()).toHaveAttribute('class', 'active')
});