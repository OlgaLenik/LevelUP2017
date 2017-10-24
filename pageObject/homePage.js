var HomePage = function HomePage () {
    this.URL = 'http://automationpractice.com/index.php'
    this.womenButton = (By.css('#block_top_menu'));
    this.title = element(By.css('head > title'));
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'));
}

module.exports = HomePage;