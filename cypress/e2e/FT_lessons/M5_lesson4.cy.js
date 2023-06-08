describe('my first scenario',() => {
    it('visit main page and click menu button', function(){
        //visit
        cy.visit('https://fabrykatestow.pl')

        cy.get('#nv-primary-navigation-main').contains('Newsletter').click()

        cy.wait(2000)
        cy.go('back')

        cy.wait(2000)
        cy.go('forward')

        cy.wait(2000)
        cy.go(-1)



    })

})