var FadedShortSleevePage = function FadedShortSleevePage () {  
    this.fadedShortSleeveTitle = element(By.css('#center_column h1'));
    this.fadedShortSleevePrise = element(By.css('#our_price_display'));
    this.fadedShortSleeveConditionLabel = element(By.css('#product_condition > span'));
    this.sizeDropDown = element(By.css('#group_1 > option:nth-child(2)'));
    this.submitButton = element(By.css('#add_to_cart > button'));   
}

module.exports = FadedShortSleevePage;