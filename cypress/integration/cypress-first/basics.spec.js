 describe('Login', function() {
     it('Sign-in', function() {
        cy.visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('tolik.trollik@yandex.ru')
        cy.get('input[type="password"]').type('tester450')
        cy.get('button[type="submit"]').click()
        cy.title().should('eq',  'Conduit')     
    })
 })