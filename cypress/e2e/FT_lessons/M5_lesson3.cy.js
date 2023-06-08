describe('my first scenario',() => {
    it('visit main page and click menu button', function(){
        //visit
        cy.visit('https://fabrykatestow.pl')

        cy.get('li.selected').should('have.length', 3)

        cy.get('form').find('input').should('not.have.class', 'disabled')

        cy.get('textarea').should('have.value', 'fabrykaTestow')

        cy.get('[data-testid="user-name"]').should('have.text', 'Pawel Z')

        cy.get('[data-testid="address"]').should('include.text', 'Polska')

        cy.get('a').parent('span.help').should('not.contsain', 'click me')

        cy.get('[data-testid="form-submit"]').should('be.visible')

        cy.get('li.hidden').should('not.be.visible')

        cy.get('[data-testid="loading"]').should('not.exist')

        cy.get(':radio').should('be.checked')

       
    })

})