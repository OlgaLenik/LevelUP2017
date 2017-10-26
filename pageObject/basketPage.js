var BasketPage = function BasketPage () {
    this.productLabel = element(By.css('#product_1_3_0_0 td.cart_description p a'));
    this.productPrise = element(By.css('#total_product_price_1_3_0'));
}

module.exports = BasketPage;