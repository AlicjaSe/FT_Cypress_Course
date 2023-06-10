const url = 'https://jsonplaceholder.typicode.com/posts'
const url1 = 'https://jsonplaceholder.typicode.com/posts/1/'

describe('HTTP methods', () => {

    it('should test HTTP method POST', function() {
       
        cy.request(url).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })

        cy.request(
            {
                method: 'POST',
                url: url,
                body: JSON.stringify({
                    title: 'foo',
                    body: 'bar',
                    userId: 1
                }),
                headers: {'Content-type': 'application/json'}
            }
        ).then((response)=> {
            const body = JSON.stringify(response.body)
            cy.log(body)

        })
    })


    it('should test HTTP method PUT', function() {
       
        cy.request(url1).then((response) => {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            cy.log(body)
        })

        cy.request(
            {
                method: 'PUT',
                url: url1,
                body: JSON.stringify({
                    day: '10-06-2023',
                    body: 'Międzynarodowy Dzień Elektryka',
                    //userId: 1
                }),
                headers: {'Content-type': 'application/json'}
            }
        ).then((response)=> {
            const body = JSON.stringify(response.body)
            expect(response.status).to.eq(200)
            expect(body).to.have.contain('day','/[0-3]/d/-/[0-1]/d/-[1-2]/d/d/d/')
            expect(body).to.include('Dzień')
            cy.log(body)
        })
    })

    it('should test HTTP method DELETE', function() {

    cy.request(url1).then((response) => {
        const body = JSON.stringify(response.body)
        expect(response.status).to.eq(200)
        cy.log(body)
    })

    cy.request(
        {
            method: 'DELETE',
            url: url1,
            headers: {'Content-type': 'application/json'}
        }
    ).then((response)=> {
        expect(response.status).to.eq(200)
        expect(response.body).to.be.empty
        //cy.log(body)

    })
})
})
       



