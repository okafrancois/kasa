describe('I am on Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should have a title', () => {
        cy.get('h1').should('contain', 'Chez vous, partout et ailleurs')
    })

    describe('I click on a about link in the header', function () {
        it('should be redirected on about view ', function () {
            cy.get('.header nav a:last-child').click()
            cy.url().should('include', '/about')
        });

        describe('I am on About page', () => {
            beforeEach(() => {
                cy.get('.header nav a:last-child').click()
            })

            it('About link in the header should be active', () => {
                cy.get('.header nav a:last-child').should('have.class', 'active')
            })
            it('All collapses should be closed by default', () => {
                cy.get('.about-view__content .collapse__content').should('not.be.visible')
            })
        })
    });
})
