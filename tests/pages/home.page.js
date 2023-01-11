const Page = require("./Page");

class HomePage extends Page {
  get titlePage() {
    return $("#title");
  }

  async open() {
    await super.open("/");
  }

  async getTitleText() {
    return this.titlePage.getText();
  }
}

module.exports = new HomePage();
