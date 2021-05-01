const Page = require('./page');

class TopMenuPage extends Page{
    open(path){
        super.open();
    }

    menuOption(page){
        switch(page){
            case('home'):
                return $('#home');
                break;
            case('form'):
                return $('#form');
                break;
            case('error'):
                return $('#error');
                break;
            case('ui testing'):
                return $('#home');
                break;
            default:
                return $('#home');
                break;
        }
    }
    
    async clickMenuOption(page){
        await (await this.menuOption(page)).click();
   } 

   btnStatus(){
    return browser.$('.active');
}

}
module.exports = new TopMenuPage();