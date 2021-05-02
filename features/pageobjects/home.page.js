const Page = require('./page');

class HomePage extends Page {
    open(path) {
        super.open();
    }

    findH1ElementHome() {
        return browser.$("//div[@class='ui-test']/h1");
    }

    findParElementHome() {
        return browser.$("//p[@class='lead']");
    }

}
module.exports = new HomePage();