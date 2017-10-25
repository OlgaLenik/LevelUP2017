var FadedShortSleevePage = function FadedShortSleevePage () {
    //this.URL = 'http://automationpractice.com/index.php?controller=contact'
   
    this.fadedShortSleeveTitle = element(By.css('#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1'));
    this.fadedShortSleeveConditionLabel = element(By.css('#product_condition > span'));
    this.sizeDropDown = element(By.css('#group_1 > option:nth-child(2)'));
    this.submitButton = element(By.css('#add_to_cart > button'));
    

    
}

module.exports = FadedShortSleevePage;