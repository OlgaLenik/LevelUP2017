var HomePage = require(pageObjectDir + "/homePage.js");

var homePage = new HomePage();

var ContactUs = require(pageObjectDir + "/contactUs.js");

var contactUs = new ContactUs();

describe('Protractor Demo App', function () {
    it('load homePage', function () {
        browser.get(homePage.URL);
        expect(homePage.cartLabel.getText())
        .toEqual('Cart (empty)');
    });

    it('should click \'Contact Us', function () {
        browser.findElement(By.css('#contact-link')).click();
        expect(browser.getTitle())
        .toEqual("Contact us - My Store");
    });

    it('should check "Customer service - Contact us" ', function () {
        expect(contactUs.customerServiceLabel.getText())
        .toEqual("CUSTOMER SERVICE - CONTACT US");
    });

    it('should check "Customer service - Contact us" ', function () {
        expect(contactUs.subjectHeadingDropdown.isEnabled()).toBe(true); 
    });

    it('should check Submit button ', function () {
        expect(contactUs.sendButton.isEnabled()).toBe(true); 
    });
});