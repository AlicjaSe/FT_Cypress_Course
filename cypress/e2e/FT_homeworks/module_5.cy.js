describe('homework for module 4',() => {
    it('visit selected page and make screenshot', function(){
        //visit
        cy.visit('https://fabrykatestow.pl')

        cy.get('.elementor-button-text').contains('POKAŻ CZEGO SIĘ NAUCZĘ').click()

        cy.get('[class="elementor-section elementor-inner-section elementor-element elementor-element-856ea8c elementor-section-boxed elementor-section-height-default elementor-section-height-default"]').screenshot()
        
    })

})


