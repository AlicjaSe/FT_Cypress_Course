
import "cypress-localstorage-commands"

describe('my first scenario', () => {
    it('work with data local and session storage', function() {
        
        cy.clearAllLocalStorege()
        cy.clearAllSessionStorage()

        cy.clearLocalStorage('test')

        cy.getAllLocalStorage()

        cy.getAllSessionStorage()

        cy.getLocalStorage('test')

        cy.setLocalStorage('test', '1')
 
    })
      
})

