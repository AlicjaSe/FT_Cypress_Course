const url = 'https://fabrykatestow.pl'

describe('my first scenario', () => {
    it('work with cookies', function() {
        
        cy.visit(url)
        cy.clearAllCookies()
        cy.clearCookie('foo')
        cy.clearCookies()

        cy.setCookie('foo', 'bar')
        cy.getCookie('foo')
        cy.getCookies()

        cy.getAllCookies()

    })
      
})

