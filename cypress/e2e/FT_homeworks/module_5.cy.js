describe('homework for module 4',() => {
    it('visit selected page and make screenshot', function(){
        //visit
        cy.visit('https://fabrykatestow.pl')

        cy.get('.elementor-button-text').contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()

        cy.get('.elementor-background-overlay').eq(1).scrollIntoView().screenshot()
        
    })

})


