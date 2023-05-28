describe('homework for module 4', () => {
    beforeEach(() => {
        cy.visit('https://fabrykatestow.pl/')
    })
    
    it('search 5 elements by id', function(){
        cy.get('#global-styles-inline-css')
        cy.get('#kursy')
        cy.get('#newsletter')
        cy.get('#wp-block-library-css')
        cy.get('#content')
    })

    it('search 5 elements by class', function(){
        cy.get('.yoast-schema-graph')
        cy.get('.container')
        cy.get('.wrapper')
        cy.get('.header')
        cy.get('.footer-bottom')
    })

    it('search 5 elements by text', function(){
      cy.get('a').contains('Newsletter')
      cy.get('title').contains('Strona Główna - Fabryka Testów')
      cy.get('span').contains('Menu nawigacji')
      cy.get('h2').contains('To tylko część z firm, których pracownicy szkolili się z naszych kursów')
      cy.get('span').contains('Sprawdź nasze kursy')
     
    })

    it('search 5 elements by attribute', function (){
        cy.get('span[class="bars"]')
        cy.get('img[class="neve-site-logo skip-lazy"]')
        cy.get('div[class="wrapper"]')
        cy.get('a[class="brand"]')
        cy.get('main[id="content"]')
    })
})