var HomePage = require(pageObjectDir + "/homePage.js");

var homePage = new HomePage();

var WomenPage = require(pageObjectDir + "/womenPage.js");

var womenPage = new WomenPage();

var TopsPage = require(pageObjectDir + "/topsPage.js");

var topsPage = new TopsPage();

var FadedShortSleevePage = require(pageObjectDir + "/fadedShortSleevePage.js");

var fadedShortSleevePage = new FadedShortSleevePage();




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
        //dokonczyc
        });
    });



 