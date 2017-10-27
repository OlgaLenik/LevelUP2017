var HomePage = require(pageObjectDir + "/homePage.js");

var homePage = new HomePage();

var DressesPage = require(pageObjectDir + "/dressesPage.js");

var dressesPage = new DressesPage();

var EachDressPage = require(pageObjectDir + "/eachDressPage.js");

var eachDressPage = new EachDressPage();

var data = {
    "PrintedDress": {
        'cssSelector': "cssSelectorDressNo1",
        'cssSelectorOfProductName': 'cssSelectorOfProductName',
        'cssSelectorOfPrice': 'cssSelectorOfPrice',
        "title": "Printed Dress - My Store",
        "value": "Printed Dress",
        "price": "$26.00"
    },

    "PrintedDressNo2": {
        'cssSelector': "cssSelectorDressNo2",
        'cssSelectorOfProductName': 'cssSelectorOfProductName',
        'cssSelectorOfPrice': 'cssSelectorOfPrice',
        "title": "Printed Dress - My Store",
        "value": "Printed Dress",
        "price": "$50.99"
    },

    "PrintedSummerDress": {
        'cssSelector': "cssSelectorDressNo3",
        'cssSelectorOfProductName': 'cssSelectorOfProductName',
        'cssSelectorOfPrice': 'cssSelectorOfPrice',
        "title": "Printed Summer Dress - My Store",
        "value": "Printed Summer Dress",
        "price": "$28.98"
    },

    "PrintedSummerDressNo2": {
        'cssSelector': "cssSelectorDressNo4",
        'cssSelectorOfProductName': 'cssSelectorOfProductName',
        'cssSelectorOfPrice': 'cssSelectorOfPrice',
        "title": "Printed Summer Dress - My Store",
        "value": "Printed Summer Dress",
        "price": "$30.50"
    },

    "PrintedChiffonDress": {
        'cssSelector': "cssSelectorDressNo5",
        'cssSelectorOfProductName': 'cssSelectorOfProductName',
        'cssSelectorOfPrice': 'cssSelectorOfPrice',
        "title": "Printed Chiffon Dress - My Store",
        "value": "Printed Chiffon Dress",
        "price": "$16.40"
    },
}

using(data, function (element) {
    describe('Protractor Demo App element' + element, function () {

        it('open homePage', function () {
            browser.get(homePage.URL);
            expect(browser.getTitle())
                .toEqual("My Store");
        });

        it('open dressesPage', function () {
            homePage.clickDressesButton();
            expect(browser.getTitle())
                .toEqual("Dresses - My Store");
        });

        it('check if correct page was loaded', function () {
            browser.waitForAngularEnabled(false);
            dressesPage[element.cssSelector].click();
            expect(browser.getTitle())
                .toEqual(eachDressPage[element.title]);
            });

        it('check name of product', function () {
            expect(eachDressPage[element.cssSelectorOfProductName]
                .getText())
                .toEqual(eachDressPage[element.value]);
         });

        it('check price of product', function () {
            expect(eachDressPage[element.cssSelectorOfPrice]
                .getText())
                .toEqual(eachDressPage[element.price]);
            });
        });
    })