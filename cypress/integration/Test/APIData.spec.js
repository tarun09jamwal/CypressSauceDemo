it('Test GET Request', () => {
    cy.request('https://reqres.in/api/users?page=2')
         .then((response) => {
        expect(response.status).to.eq(200)
    })
})

it('Test POST Request', () => {
    cy.request({
         method: 'POST',
         url: 'https://reqres.in/api/users',
         body:{
            "name": "morpheus",
            "job": "leader"
        }
    }).then((response) => { 
            expect(response.body).has.property('name','morpheus'); 
    })
})