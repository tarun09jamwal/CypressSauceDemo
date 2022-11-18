class ProductBuy {
    cart = '//a[@class="shopping_cart_link"]';
    continue = '//button[@name="checkout"]';
    firstname = '//input[@name="firstName"]';
    lastname = '//input[@name="lastName"]';
    postalCode = '//input[@name="postalCode"]';
    yourInfoContinueBtn = "//input[@name='continue']";
    overviewFinishBtn = "//button[@name='finish']";
    verifyOrder = '//h2[@class="complete-header"]';
    backHomeBtn = '//button[@name="back-to-products"]';

    Checkout(firstname, lastname, postalCode) {
        cy.xpath(this.cart).click()
        cy.xpath(this.continue).click()
        cy.xpath(this.firstname).type("Tarun")
        cy.xpath(this.lastname).type("Jamwal")
        cy.xpath(this.postalCode).type("175001")
        cy.xpath(this.yourInfoContinueBtn).click()
        cy.xpath(this.overviewFinishBtn).click()
        cy.xpath(this.verifyOrder).should('be.visible')
        cy.xpath(this.backHomeBtn).click()

    }
}
export default ProductBuy