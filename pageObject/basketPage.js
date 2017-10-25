var BasketPage = function BasketPage () {

  
    this.xyz = element(By.css('#cart_summary > thead > tr > th.cart_product.first_item'));
    this.productLabel = element(By.css('#product_1_1_0_0 > td.cart_description > p > a'));

  
}

module.exports = BasketPage;