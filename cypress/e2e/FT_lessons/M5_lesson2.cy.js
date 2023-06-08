describe('my first scenario',() => {
    it('visit main page and click menu button', function(){
        //visit
        cy.visit('https://fabrykatestow.pl')

        //get
        cy.get('#nv-primary-navigation-main')

        //contains
        cy.get('#nv-primary-navigation-main').contains('Newsletter')

        //click
        cy.get('#nv-primary-navigation-main').contains('Newsletter').click()

        //url
        cy.url()

        //should
        cy.url().should('eq', 'https://fabrykatestow.pl/ciekawostki/')

        //eq
        cy.get('.elementor-inner').eq(0)

        //first
        cy.get('.elementor-inner').first()

        //last
        cy.get('.elementor-inner').last()

        //log
        cy.log('this is my cypress message')

        //request
        cy.request('https://fabrykatestow.pl')

        //wait
        cy.wait(1000)

    })

})