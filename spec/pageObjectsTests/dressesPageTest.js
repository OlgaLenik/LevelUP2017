// var HomePage = require(pageObjectDir + "/homePage.js");

// var homePage = new HomePage();

// var DressesPage = require(pageObjectDir + "/dressesPage.js");

// var dressesPage = new DressesPage();

// var EachDressPage = require(pageObjectDir + "/eachDressPage.js");

// var eachDressPage = new EachDressPage();

// var data = {
//     "PrintedDress": {
//         'cssSelector': "cssSelectorDressNo1",
//         'cssSelectorOfProductName': 'cssSelectorOfProductName',
//         'cssSelectorOfPrice': 'cssSelectorOfPrice',
//         "title": "titleOfDress1",
//         "value": "nameOfDress1",
//         "price": "priceOfDress1"

//     },

//     "PrintedDressNo2": {
//         'cssSelector': "cssSelectorDressNo2",
//         'cssSelectorOfProductName': 'cssSelectorOfProductName',
//         'cssSelectorOfPrice': 'cssSelectorOfPrice',
//         "title": "titleOfDress1",
//         "value": "nameOfDress1",
//         "price": "priceOfDress2"
//     },

//     "PrintedSummerDress": {
//         'cssSelector': "cssSelectorDressNo3",
//         'cssSelectorOfProductName': 'cssSelectorOfProductName',
//         'cssSelectorOfPrice': 'cssSelectorOfPrice',
//         "title": "titleOfDress2",
//         "value": "nameOfDress2",
//         "price": "priceOfDress3"
//     },

//     "PrintedSummerDressNo2": {
//         'cssSelector': "cssSelectorDressNo4",
//         'cssSelectorOfProductName': 'cssSelectorOfProductName',
//         'cssSelectorOfPrice': 'cssSelectorOfPrice',
//         "title": "titleOfDress2",
//         "value": "nameOfDress2",
//         "price": "priceOfDress4"
//     },

//     "PrintedChiffonDress": {
//         'cssSelector': "cssSelectorDressNo5",
//         'cssSelectorOfProductName': 'cssSelectorOfProductName',
//         'cssSelectorOfPrice': 'cssSelectorOfPrice',
//         "title": "titleOfDress3",
//         "value": "nameOfDress3",
//         "price": "priceOfDress5"
//     },
// }

// using(data, function (element) {
//     describe('Protractor Demo App element' + element, function () {

//         it('check if homePage loaded', function () {
//             browser.get(homePage.URL);
//             expect(browser.getTitle())
//                 .toEqual("My Store");
//         });

//         it('open dressesPage', function () {
//             homePage.dressesButton.click();
//             expect(browser.getTitle())
//                 .toEqual("Dresses - My Store");
//         });

//         it('check name and price of product', function () {
//             browser.waitForAngularEnabled(false);
//             dressesPage[element.cssSelector].click();
//             expect(browser.getTitle())
//                 .toEqual(eachDressPage[element.title]);
//             });

//         it('check name and price of product', function () {
//             expect(eachDressPage[element.cssSelectorOfProductName]
//                 .getText())
//                 .toEqual(eachDressPage[element.value]);
//          });

//         it('check name and price of product', function () {
//             expect(eachDressPage[element.cssSelectorOfPrice]
//                 .getText())
//                 .toEqual(eachDressPage[element.price]);
//             });
//         });
//     })