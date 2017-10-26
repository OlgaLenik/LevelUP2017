var HomePage = function HomePage () {
    this.URL = 'http://automationpractice.com/index.php'
    this.womenButton = element(By.css('#block_top_menu > ul > li:nth-child(1) > a'));
    this.dressesButton = element(By.css('#block_top_menu > ul > li:nth-child(2) > a'));
    this.title = element(By.css('head > title'));
    this.cartLabel = element(By.css('.shopping_cart'));
    this.contactUsLink = element(By.css('#contact-link'));
    this.cartButton = element(By.css('#header div:nth-child(3)  div:nth-child(3)> div > a'));
}

module.exports = HomePage;