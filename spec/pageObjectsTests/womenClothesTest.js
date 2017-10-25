var HomePage = require(pageObjectDir + "/homePage.js");

var homePage = new HomePage();

var WomenPage = require(pageObjectDir + "/womenPage.js");

var womenPage = new WomenPage();

var TopsPage = require(pageObjectDir + "/topsPage.js");

var topsPage = new TopsPage();

var FadedShortSleevePage = require(pageObjectDir + "/fadedShortSleevePage.js");

var fadedShortSleevePage = new FadedShortSleevePage();

var AfterBuyPage = require(pageObjectDir + "/afterBuyPage.js");

var afterBuyPage = new AfterBuyPage();

var BasketPage = require(pageObjectDir + "/basketPage.js");

var basketPage = new BasketPage();


describe('check womenClothesPage', function () {
    it('check if homePage loaded', function () {
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

    it('open ded Short Sleeve Page', function () {
        topsPage.fadedShortSleeveButton.click();
        var isLabelLongerThan = function (isLongerThan) {
            return new Promise(function (resolve) {
                fadedShortSleevePage.fadedShortSleeveTitle.getText().then(function (text) {
                    expect(text.length).toBeGreaterThan(isLongerThan);
                })
            });
        }
        isLabelLongerThan(8).then(console.log)
    });

    it('open topsPage', function () {
        expect(fadedShortSleevePage.fadedShortSleeveConditionLabel.getText())
            .toEqual("New");
    });

    it('it choose size and clikck submitButton', function () {
        fadedShortSleevePage.sizeDropDown.click();
        expect(fadedShortSleevePage.submitButton.getText()).toEqual("Add to cart");
        fadedShortSleevePage.submitButton.click();
    });
    //expect(afterBuyPage.productAddedLabel.getText())
    //.toBe("Product successfully added to your shopping cart");



    // it('open topsPage', function () {
    //     expect(afterBuyPage.totalLabel.isDisplayed()).toBe(true);
    //    // expect(afterBuyPage.totalLabel.getText()).toEqual("4");
    // });

    // it('open topsPage', function () {
    //     expect(afterBuyPage.totalLabel.isDisplayed()).toBe(true);
    //    // expect(afterBuyPage.totalLabel.getText()).toEqual("4");
    // });

    it('load homePage', function () {
        browser.get(homePage.URL);
        expect(browser.getTitle())
            .toEqual("My Store");
        console.log("czy wydrukowalo 1");
    });

    it('click cartButton', function () {
        homePage.cartButton.click();
        expect(browser.getTitle())
            .toEqual("Order - My Store");
        console.log("czy wydrukowalo 2");
    });

    it('check if product added to cart', function () {
        expect(basketPage.xyz.getText())
        .toEqual("Product");
        
        // browser.wait(function() {
        //     return element(by.css("#product_1_1_0_0 > td.cart_description > p > a")).isPresent()});             
        // expect(basketPage.productLabel.getText())
        //     .toEqual("Faded Short Sleeve T-shirts");
        // console.log("czy wydrukowalo 3");

    });

    it('check if product added to cart', function () {
        expect(basketPage.productLabel.getText())
        .toEqual("Faded Short Sleeve T-shirts");
    });

});
