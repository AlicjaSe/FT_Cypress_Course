describe('homework for module 4', () => {
    beforeEach(() => {
        cy.visit('https://fabrykatestow.pl/')
    })
    
    it('search 5 elements by id', function(){
        cy.get('#contact-details')
        cy.get('#kursy')
        cy.get('#newsletter')
        cy.get('#elementor-action')
        cy.get('#content')
    })

    it('search 5 elements by class', function(){
        cy.get('.nv-meta-list')
        cy.get('.no-mobile')
        cy.get('.nv-is-boxed')
        cy.get('.alignfull')
        cy.get('.footer-bottom')
    })

    it('search 5 elements by text', function(){
        cy.get('h2').contains('Kanał z wpisami')
        cy.get('h2').contains('Szkoła dla przyszłych testerów automatyzujących')
        cy.get('span').contains('Do tych kursów można przystąpić raz na jakiś czas')
        cy.get('h2').contains('Do tych kursów można przystąpić w dowolnym momencie. ')
        cy.get('span').contains('CHCESZ BYĆ NA BIEŻĄCO?')
    })

    it('search 5 elements by attribute', function (){
        cy.get('span[class="bars"]')
        cy.get('img[class="neve-site-logo skip-lazy"]')
        cy.get('div[id="wrapper"]')
        cy.get('a[class="brand"]')
        cy.get('main[id="content"]')
    })
})