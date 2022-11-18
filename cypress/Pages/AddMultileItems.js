class AddToCart {
    product = "//button[contains(text(),'Add to cart')]";
    productQuantity = "//a[@class='shopping_cart_link']//span[contains(text(),'6')]";

    ItemsToCart() {
        let countOfElements = 0;
        let count = 0;
        cy.xpath(this.product).then($elements => {
            countOfElements = $elements.length
            for (let i = 0; i < countOfElements; i++) {
                cy.xpath(this.product).eq(i - count).click()
                count++
            }
        })
    }
}
export default AddToCart