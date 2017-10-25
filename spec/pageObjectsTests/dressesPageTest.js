// var HomePage = require(pageObjectDir + "/homePage.js");

// var homePage = new HomePage();

// var DressesPage = require(pageObjectDir + "/dressesPage.js");

// var dressesPage = new DressesPage();

// var data = {
//     "contact us": {
//         'cssSelector': '#center_column > ul > li.ajax_block_product.col-xs-12.col-sm-6.col-md-4.first-in-line.first-item-of-tablet-line.first-item-of-mobile-line > div > div.right-block > h5 > a',
//         'cssSelectorOfScore': '#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1',
//         "value": "Printed Dress"
//     },
//     // "shop": {
//     //     'cssSelector': ".shopping_cart",
//     //     "value": 'Cart (empty)'
//     // }
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

//         it('should have a title', function () {
//             browser.waitForAngularEnabled(false);
//            element.cssSelector.click();
//             expect(browser.findElement(By.css(element.cssSelectorOfScore))
//                 .getText())
//                 .toEqual(element.value);
//         });
//     })
// });