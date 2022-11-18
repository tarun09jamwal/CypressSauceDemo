describe("SauceDemo Test Cases", function () {

    it("Logout user", function () {
        cy.login()
        cy.logout()
    })
})