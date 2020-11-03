 describe('Basics', function() {

    before(() => {
        cy.SignIn()
      })

    it('Create an item', function() {
        cy.contains('New Post').click()
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })

        cy.get('ul>li>a').last()
        .click()
        .as('load-prof')
        .wait(800)
        .get('div[class="row"]')
        .within(($row) => {
            cy.get('.article-preview')
            .first()
            .within(($prev) => {
                cy.contains('Test')
                .should('exist')
                .click()
                .contains('Test')
                .should('exist')
                .get('h1')
                .should('exist')
                .should('be.visible')
                       
            })
        })


    })

    it('Fav an item', function() {
        cy.visit('https://react-redux.realworld.io/#/@tester450')
        cy.get('div[class="row"]').within(($row) => {
            cy.get('.article-preview').first().within(($prev) => {
                cy.get('.btn').click()
            })
        })

        cy.contains('Favorited Articles').click()

        cy.get('div[class="row"]').within(($row) => {
            cy.get('.article-preview').first().within(($prev) => {
                cy.contains('Test').should('exist')
            })
        })
    })



 })