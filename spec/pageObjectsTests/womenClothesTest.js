var HomePage = require(pageObjectDir + "/homePage.js");

var homePage = new HomePage();

var WomenPage = require(pageObjectDir + "/womenPage.js");

var womenPage = new WomenPage();

//jak sprawdzic czy strna zaladowana
describe('check womenClothesPage', function () {
    it('check if homePage loaded', function () {
        browser.get(homePage.URL);
        expect( homePage.title.getText() )
        .toEqual('');
    });

    it('open womenPage', function () {
        browser.click(womenButton);
        browser.findElement(By.css('#contact-link')).click();
        expect(browser.getTitle())
        .toEqual("Contact us - My Store");
    });

    
});
 