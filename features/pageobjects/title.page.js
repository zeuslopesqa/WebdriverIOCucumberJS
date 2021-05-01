const Page = require('./page');

class TitlePage extends Page{
    open(path){
        super.open();
    }


}

module.exports = new TitlePage();