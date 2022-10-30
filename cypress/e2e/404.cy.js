describe('I am on home page', () => {
    describe('I enter a unknown url', () => {
        it('should be redirected on 404 page', () => {
            cy.visit('http://localhost:3000/azazaz')
            cy.get('h1').should('contain', '404')
        })
    })
})

describe('I am on Lodging view', () => {
    describe('I enter a unknown id param', () => {
        it('should be redirected on 404 page', () => {
            cy.visit('http://localhost:3000/lodges/azazaz')
            cy.get('h1').should('contain', '404')
        })
    })
})
