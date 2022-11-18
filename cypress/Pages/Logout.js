class Logout {
    menuButton = '//div[@class="bm-burger-button"]';
    logout = '//a[@id="logout_sidebar_link"]';
    signInbtn = '//input[@name="login-button"]';

    UserLogout() {
        cy.xpath(this.menuButton).click()
        cy.xpath(this.logout).click()
        cy.xpath(this.signInbtn).should('be.visible')
    }
}
export default Logout 