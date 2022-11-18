import Login from "../Pages/Login"
import Logout from "../Pages/Logout"
import Sort from "../Pages/SortDropDown"
import AddToCart from "../Pages/AddMultileItems"
import ProductBuy from "../Pages/ProductBuy"
const login = new Login()
const logout = new Logout()
const sort = new Sort()
const addToCart = new AddToCart()
const productBuy = new ProductBuy()

Cypress.Commands.add('login', () => {
    const url = "https://www.saucedemo.com/"
    const username = "standard_user"
    const password = "secret_sauce"

    login.Navigate(url)
    login.Username(username)
    login.Password(password)
    login.Submit()

})

Cypress.Commands.add('logout', () => {
    logout.UserLogout()
})


Cypress.Commands.add('sort', () => {
    sort.Sorting()
})

Cypress.Commands.add('addmultipleproduct', () => {
    addToCart.ItemsToCart()
})

Cypress.Commands.add('productbuy', () => {
    productBuy.Checkout()
})




