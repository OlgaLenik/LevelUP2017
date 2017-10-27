var HomePage = require(pageObjectDir + "/homePage.js");

var homePage = new HomePage();

var WomenPage = require(pageObjectDir + "/womenPage.js");

var womenPage = new WomenPage();

var TopsPage = require(pageObjectDir + "/topsPage.js");

var topsPage = new TopsPage();

var FadedShortSleevePage = require(pageObjectDir + "/fadedShortSleevePage.js");

var fadedShortSleevePage = new FadedShortSleevePage();

var BasketPage = require(pageObjectDir + "/basketPage.js");

var basketPage = new BasketPage();

var blouseName;

var price;

describe('test adding product Faded Short Sleeve T-shirt to cart', function () {
    
    it('open homePage', function () {
        browser.get(homePage.URL);
        expect(browser.getTitle())
            .toEqual("My Store");
    });

    it('open womenPage', function () {
        homePage.clickWomanPageButton();
        expect(browser.getTitle())
            .toEqual("Women - My Store");
    });

    it('open topsPage', function () {
        womenPage.clickTopsPageButton();
        expect(browser.getTitle())
            .toEqual("Tops - My Store");
    });

    it('verify if Faded Short Sleeve T-shirt name longer than 8 letters', function () {
        topsPage.clickFadedShortSleeveButton();
        expect(fadedShortSleevePage.isLabelLongerThan(8)).toBeTruthy();
        blouseName = fadedShortSleevePage.fadedShortSleeveTitle.getText();
        price = fadedShortSleevePage.fadedShortSleevePrise.getText();
    });

    it('verify if Faded Short Sleeve T-shirt condition is new', function () {
        expect(fadedShortSleevePage.fadedShortSleeveConditionLabel.getText())
            .toEqual("New");
    });

    it('add to cart Faded Short Sleeve T-shirt Size M', function () {
        fadedShortSleevePage.clickSizeDropDown();
        expect(fadedShortSleevePage.submitButton.getText()).toEqual("Add to cart");
        fadedShortSleevePage.clickSubmitButton();
    });

    it('load homePage', function () {
        browser.get(homePage.URL);
        expect(browser.getTitle())
            .toEqual("My Store");
    });

    it('click cartButton', function () {
        homePage.clickCartButton();
        expect(browser.getTitle())
            .toEqual("Order - My Store");
    });

    it('check if Faded Short Sleeve T-shirt Size M added to cart', function () {
        expect(basketPage.productLabel.getText())
            .toEqual(blouseName);
    });

    it('check total price at cart', function () {
        expect(basketPage.productPrise.getText())
            .toEqual(price);
    });
});
