describe('my first scenario',() => {
    it('visit main page and click menu button', function(){
        //visit
        cy.visit('https://fabrykatestow.pl')

        cy.getAllCookies()

        cy.getCookies()

        cy.getCookie('_gid')

        cy.getAllLocalStorage()

        const a = cy.getAllLocalStorage()

        console.log(a)


    })

})