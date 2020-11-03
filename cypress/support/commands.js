Cypress.Commands.add("SignIn", () => {
    cy.visit('https://react-redux.realworld.io/#/login')
    cy.contains('Your Feed').should('not.exist')
    cy.get('form').within(($form) => {
        cy.get('input[type="email"]').type('tolik.trollik@yandex.ru')
        cy.get('input[type="password"]').type('tester450')
        cy.root().submit()
    })
    cy.contains('Your Feed').should('exist') 
})

Cypress.Commands.add("CreateItem", () => {
    cy.contains('New Post').click()
    cy.get('form').within(($form) => {
        cy.get('input').first().type('Test')
        cy.get('input').eq(1).type('Test 1')
        cy.get('textarea').last().type('Test 2')
        cy.contains('Publish Article').click()
    })
    cy.contains('Test')
    .contains('Test')
    .should('exist')
    .get('h1')
    .should('exist')
    .should('be.visible')
})

Cypress.Commands.add("FavItem", () => {
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

Cypress.Commands.add("UnfavItem", () => {
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

Cypress.Commands.add("DeleteItem", () => {
    cy.visit('https://react-redux.realworld.io/#/@tester450')
    cy.get('div[class="row"]').within(($row) => {
        cy.get('.article-preview').first().within(($prev) => {
            cy.contains('Test').click()
        })
    })
    cy.contains('Delete Article').click()
})