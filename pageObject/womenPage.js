var WomenPage = function WomenPage () {
    this.topsPageButton = element(By.css('#subcategories > ul > li:nth-child(1)'));
}

module.exports = WomenPage;

WomenPage.prototype.clickTopsPageButton = function (){
    var that = this;
    this.topsPageButton.click();
} 