 describe('Login', function() {

     it('Sign-in', function() {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.contains('Your Feed').should('not.exist')
        cy.get('form').within(($form) => {
            cy.get('input[type="email"]').type('tolik.trollik@yandex.ru')
            cy.get('input[type="password"]').type('tester450')
            cy.root().submit()
        })
        cy.contains('Your Feed').should('exist')     
    })

    it('Create an item', function() {
        cy.contains('New Post').click()
        cy.get('form').within(($form) => {
            cy.get('input').first().type('Test')
            cy.get('input').eq(1).type('Test 1')
            cy.get('textarea').last().type('Test 2')
            cy.contains('Publish Article').click()
        })
    })

    it('Check if item exists on your page', function() {
        cy.visit('https://react-redux.realworld.io/#/@tester450')
        cy.get('div[class="row"]').within(($row) => {
            cy.get('.article-preview').first().within(($prev) => {
                cy.contains('Test').should('exist')
            })
        })
    })

    it('Click on an item from your page', function() {
        cy.get('div[class="row"]').within(($row) => {
            cy.get('.article-preview').first().within(($prev) => {
                cy.contains('Test').click()
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