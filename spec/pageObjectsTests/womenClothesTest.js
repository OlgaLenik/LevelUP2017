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

describe('test womenClothesPage', function () {
    
    it('open homePage', function () {
        browser.get(homePage.URL);
        expect(browser.getTitle())
            .toEqual("My Store");
    });

    it('open womenPage', function () {
        homePage.womenButton.click();
        expect(browser.getTitle())
            .toEqual("Women - My Store");
    });

    it('open topsPage', function () {
        womenPage.topsPageButton.click();
        expect(browser.getTitle())
            .toEqual("Tops - My Store");
    });

    it('verify if Faded Short Sleeve T-shirt name longer than 8 letters', function () {
        topsPage.fadedShortSleeveButton.click();
        var isLabelLongerThan = function (isLongerThan) {
            return new Promise(function (resolve) {
                fadedShortSleevePage.fadedShortSleeveTitle.getText().then(function (text) {
                    expect(text.length).toBeGreaterThan(isLongerThan);
                })
            });
        }
        isLabelLongerThan(8).then(console.log)
        blouseName = fadedShortSleevePage.fadedShortSleeveTitle.getText();
        price = fadedShortSleevePage.fadedShortSleevePrise.getText();
    });

    it('verify if Faded Short Sleeve T-shirt condition is new', function () {
        expect(fadedShortSleevePage.fadedShortSleeveConditionLabel.getText())
            .toEqual("New");
    });

    it('add to cart Faded Short Sleeve T-shirt Size M', function () {
        fadedShortSleevePage.sizeDropDown.click();
        expect(fadedShortSleevePage.submitButton.getText()).toEqual("Add to cart");
        fadedShortSleevePage.submitButton.click();
    });

    it('load homePage', function () {
        browser.get(homePage.URL);
        expect(browser.getTitle())
            .toEqual("My Store");
    });

    it('click cartButton', function () {
        homePage.cartButton.click();
        expect(browser.getTitle())
            .toEqual("Order - My Store");
    });

    it('check if Faded Short Sleeve T-shirt Size M added to cart', function () {
        basketPage.productLabel.isDisplayed();
        expect(basketPage.productLabel.getText())
            .toEqual(blouseName);
    });

    it('check total price at cart', function () {
        basketPage.productPrise.isDisplayed();
        expect(basketPage.productPrise.getText())
            .toEqual(price);
    });
});
