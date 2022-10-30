describe('I a on Home page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it('Should have a title', () => {
        cy.get('h1').should('contain', 'Chez vous, partout et ailleurs')
    })

    it('should have 20 logement cards', () => {
        cy.get('.home-view__lodges-list .lodge-card').should('have.length', 20)
    })

    describe('I click on a logement', function () {
        it('should be redirected on lodge view ', function () {
            cy.get('.home-view__lodges-list .lodge-card').first().click()
            cy.url().should('include', '/lodges/')
        });
    });
})

describe('I am on Lodging view', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
        cy.get('.home-view__lodges-list .lodge-card').first().click()
    })

    it('should contain the title "Appartement cosy"', function () {
        cy.get('.lodge-view__title').should('contain', 'Appartement cosy')

        cy.get('.lodge-view__description .collapse__content').should('not.be.visible')

        cy.get('.lodge-view__description .collapse__title').click()
        cy.get('.lodge-view__description .collapse__content').should('be.visible')
        cy.get('.lodge-view__description .collapse__title').click()
        cy.get('.lodge-view__description .collapse__content').should('not.be.visible')
    });

    it('Collapses should be closed by default', () => {
        cy.get('.lodge-view__description .collapse__content').should('not.be.visible')
        cy.get('.lodge-view__facilities .collapse__content').should('not.be.visible')
    })

    it('Should have a image gallery of 5 items', () => {
        const gallery = cy.get('.slide-show__container img')
        gallery.should('have.length', 5);
    })

    it('The first image ot the gallery should be visible', () => {
        cy.get('.slide-show__container img').first().should('be.visible')
    })

    describe('The first image is visible and I click on previous button', () => {
        it('should display the last image', () => {
            cy.get('.slide-show__container img').first().should('be.visible')
            cy.get('.slide-show__previous').click()
            cy.get('.slide-show__count span:first-child').should('contain', '5')
        })
    })

    describe('The first image is visible and I click on next button', () => {
        it('should display the second image', () => {
            cy.get('.slide-show__container img').first().should('be.visible')
            cy.get('.slide-show__next').click()
            cy.get('.slide-show__count span:first-child').should('contain', '2')
        })
    })

    describe('The last image is visible and I click on next button', () => {
        it('should display the first image', () => {
            cy.get('.slide-show__previous').click()
            cy.get('.slide-show__container img').last().should('be.visible')
            cy.get('.slide-show__next').click()
            cy.get('.slide-show__count span:first-child').should('contain', '1')
        })
    })

    describe('I click on description collapse', () => {
        it('should open the collapse', () => {
            cy.get('.lodge-view__description .collapse__title').click()
            cy.get('.lodge-view__description .collapse__content').should('be.visible')
        })
    })
})
