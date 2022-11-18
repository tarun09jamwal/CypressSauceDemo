describe("SauceDemo Test Cases", function () {

    it("Add multiple items to cart", function () {
        cy.login()
        cy.addmultipleproduct()
    })
})