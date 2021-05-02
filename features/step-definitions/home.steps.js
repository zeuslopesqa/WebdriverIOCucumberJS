const HomePage = require('../pageobjects/home.page');

const { Given, When, Then } = require('@cucumber/cucumber');  

//___THEN___
Then('the text {string} is displayed in a <h1> element', async function (string) {            
  await expect(HomePage.findH1ElementHome()).toHaveTextContaining(string);                                                                    
});                                                                                                                                                                        
                                  
Then('the text {string} is displayed in a <p> element', async function (string) {             
  await expect(HomePage.findParElementHome()).toHaveTextContaining(string);                                                                    
});                                                                                     
        