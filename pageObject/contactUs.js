var ContactUs = function ContactUs () {
    this.URL = 'http://automationpractice.com/index.php?controller=contact'
    this.customerServiceLabel = element(By.css('#center_column > h1'));
    this.subjectHeadingDropdown = element(By.css('#id_contact'));
    this.sendButton = element(By.css('#submitMessage'));
}

module.exports = ContactUs;