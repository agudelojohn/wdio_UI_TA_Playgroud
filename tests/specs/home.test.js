const { expect } = require("chai");
const HomePage = require("./../pages/home.page");

describe("Test over the Home page", () => {
  it("Title in the home page", async () => {
    await HomePage.open();
    const textTitle = await HomePage.getTitleText();
    expect(textTitle).to.include("UI Test Automation");
  });
});
