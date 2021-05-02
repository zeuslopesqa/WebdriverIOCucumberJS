const Page = require('./page');

class HelloPage extends Page {
    open(path) {
        super.open();
    }

    get helloMessage() {
        return $('#hello-text');
    }

    async checkHelloMessage() {
        return this.helloMessage;
    }

}
module.exports = new HelloPage();