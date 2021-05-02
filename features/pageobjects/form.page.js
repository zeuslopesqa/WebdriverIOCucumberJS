const Page = require('./page');

class HomePage extends Page {
    open(path) {
        super.open();
    }

    get inputField() {
        return $('#hello-input');
    }
    get submitBtn() {
        return $('#hello-submit');
    }

    async verifyInputField() {
        return this.inputField;
    }

    async verifySubmitBtn() {
        return this.submitBtn;
    }

    async fillFieldInput(value) {
        await (await this.inputField).setValue(value)
    }

    async clickSubmitBtn() {
        await (await this.submitBtn).click();
    }

    async verifyTextFormPage() {
        return $('//h1[text()="Simple Form Submission"]');
    }

}
module.exports = new HomePage();