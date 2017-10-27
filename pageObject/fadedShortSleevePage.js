var FadedShortSleevePage = function FadedShortSleevePage () {  
    this.fadedShortSleeveTitle = element(By.css('#center_column h1'));
    this.fadedShortSleevePrise = element(By.css('#our_price_display'));
    this.fadedShortSleeveConditionLabel = element(By.css('#product_condition > span'));
    this.sizeDropDown = element(By.css('#group_1 > option:nth-child(2)'));
    this.submitButton = element(By.css('#add_to_cart > button'));
  
}

module.exports = FadedShortSleevePage;

FadedShortSleevePage.prototype.isLabelLongerThan = function (isLongerThan){
        var that=this;
        return new Promise(function (resolve) {
            that.fadedShortSleeveTitle.getText().then(function (text) {
               resolve(text.length > isLongerThan);
            })
        });
} 

FadedShortSleevePage.prototype.clickSizeDropDown = function (){
    var that = this;
    this.sizeDropDown.click();
} 

FadedShortSleevePage.prototype.clickSubmitButton = function (){
    var that = this;
    this.submitButton.click();
} 