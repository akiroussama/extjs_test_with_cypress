describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
    })
    it('sets auth cookie when logging in via form submission', function () {
      // destructuring assignment of the this.currentUser object
      const { username, password } = this.currentUser
  
      cy.get('input[data-cy=username]').type(username)
  
      // {enter} causes the form to submit
      cy.get('input[data-cy=password]').type(`${password}{enter}`)
  
      // we should be redirected to /dashboard
      cy.url().should('include', '/#personnelview')
      // our auth cookie should be present
      cy.getCookie('LoggedIn').should('true')
      cy.
  
      // UI should reflect this user being logged in
      cy.get('h1').should('contain', 'jane.lane')
    })
  })