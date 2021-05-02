const Page = require('./page');
const Helper = require('../utilities/helpers')

class TopMenuPage extends Page{
    open(path){
        super.open();
    }
    //Here I call the function menuOption, declared in the file helpers.js
    //This function helps me to select the correct button to be clicked on the top menu
    async clickMenuOption(page){
        await (await Helper.menuOption(page)).click();
    } 

   btnStatus(){
    return browser.$('.active');
    }

}
module.exports = new TopMenuPage();