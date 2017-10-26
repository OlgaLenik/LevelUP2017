var DressesPage = function DressesPage () {
    //this.URL = 'http://automationpractice.com/index.php?controller=contact'
   
    this.cssSelectorDressNo1 = $('#center_column > ul > li:nth-child(1) > div > div.right-block > h5 > a');
    this.cssSelectorDressNo2 = $('#center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a');
    this.cssSelectorDressNo3 = $('#center_column > ul > li:nth-child(3) > div > div.right-block > h5 > a');
    this.cssSelectorDressNo4 = $('#center_column > ul > li:nth-child(4) > div > div.right-block > h5 > a');
    this.cssSelectorDressNo5 = $('#center_column > ul > li:nth-child(5) > div > div.right-block > h5 > a');
    
}

module.exports = DressesPage;