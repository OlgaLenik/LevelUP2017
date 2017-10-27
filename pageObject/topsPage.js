var TopsPage = function TopsPage () { 
    this.fadedShortSleeveButton = element(By.css('#center_column ul li:nth-child(1) div.right-block  h5  a'));  
}

module.exports = TopsPage;

TopsPage.prototype.clickFadedShortSleeveButton = function (){
    var that = this;
    this.fadedShortSleeveButton.click();
} 

