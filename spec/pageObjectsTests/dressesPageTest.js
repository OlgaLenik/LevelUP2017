// var HomePage = require(pageObjectDir + "/homePage.js");

// var homePage = new HomePage();


// var data = {
//     "Printed Dress": {
//         'cssSelector': '#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a',
//         'cssSelectorOfProductName': '#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1',
//         'cssSelectorOfPrice': '#our_price_display',
//         "title": "Printed Dress - My Store",
//         "value": "Printed Dress",
//         "price": "$26.00"
        
//     },

//     "Printed Dress No 2": {
//         'cssSelector': '#center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a',
//         'cssSelectorOfProductName': '#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1',
//         'cssSelectorOfPrice': '#our_price_display',
//         "title": "Printed Dress - My Store",
//         "value": "Printed Dress",
//         "price": "$50.99"
//     },

//     "Printed Summer Dress": {
//         'cssSelector': '#center_column > ul > li:nth-child(3) > div > div.right-block > h5 > a',
//         'cssSelectorOfProductName': '#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1',
//         'cssSelectorOfPrice': '#our_price_display',
//         "title": "Printed Summer Dress - My Store",
//         "value": "Printed Summer Dress",
//         "price": "$28.98"
//     },

//     "Printed Summer Dress": {
//         'cssSelector': '#center_column > ul > li:nth-child(4) > div > div.right-block > h5 > a',
//         'cssSelectorOfProductName': '#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1',
//         'cssSelectorOfPrice': '#our_price_display',
//         "title": "Printed Summer Dress - My Store",
//         "value": "Printed Summer Dress",
//         "price": "$30.50"
//     },

//     "Printed Chiffon Dress": {
//         'cssSelector': '#center_column > ul > li:nth-child(5) > div > div.right-block > h5 > a',
//         'cssSelectorOfProductName': '#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1',
//         'cssSelectorOfPrice': '#our_price_display',
//         "title": "Printed Chiffon Dress - My Store",
//         "value": "Printed Chiffon Dress",
//         "price": "$16.40"
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

//         it('check name of product', function () {
//             browser.waitForAngularEnabled(false);
//             browser.findElement(By.css(element.cssSelector)).click();

//             expect(browser.getTitle())
//             .toEqual(element.title);

//             expect(browser.findElement(By.css(element.cssSelectorOfProductName))
//                 .getText())
//                 .toEqual(element.value);

//             expect(browser.findElement(By.css(element.cssSelectorOfPrice))
//                 .getText())
//                 .toEqual(element.price);
//         });
//     })
// });