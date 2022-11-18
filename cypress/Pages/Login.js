class Login {
    userName = '//input[@id="user-name"]';
    passWord = '//input[@id="password"]';
    submitButton = '//input[@name="login-button"]';

    Navigate(url) {
        cy.visit(url)
    }

    Username(username) {

        cy.xpath(this.userName).type(username)
    }

    Password(password) {

        cy.xpath(this.passWord).type(password)
    }
    Submit() {
        cy.xpath(this.submitButton).click()
    }

}
export default Login