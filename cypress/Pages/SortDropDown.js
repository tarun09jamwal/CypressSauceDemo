class Sort {
    dropDown = '//span/select[@class="product_sort_container"]';
    Sorting() {
        cy.xpath(this.dropDown).select('Price (high to low)')
    }
}
export default Sort