const Page = require('./page');

class ErrorPage extends Page{
    open(path){
        super.open();
    }
    checkErrorMessage(){
        return $('//h1[text()="404 Error: File not found :-("]');
}
}
module.exports = new ErrorPage();