describe("SauceDemo Test Cases", function () {

    before(function () {

        cy.fixture('UserData').then(function (data) {

            this.data = data
        })

    })
    it("Buy product", function () {
        cy.login()
        cy.addmultipleproduct()
        cy.productbuy()
        cy.logout()

    })
})