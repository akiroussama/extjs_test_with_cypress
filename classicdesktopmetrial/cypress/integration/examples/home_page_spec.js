describe('The Home Page', function() {
    it('successfully loads', function() {
      cy.visit('/') // change URL to match your dev URL
    })
    it('sets auth cookie when logging in via form submission', function () {
      // destructuring assignment of the this.currentUser object
      const { username, password } = this.currentUser
  
      cy.get('input[name=username]').type(username)
  
      // {enter} causes the form to submit
      cy.get('input[name=password]').type(`${password}{enter}`)
  
      // we should be redirected to /dashboard
      cy.url().should('include', '/dashboard')
  
      // our auth cookie should be present
      cy.getCookie('your-session-cookie').should('exist')
  
      // UI should reflect this user being logged in
      cy.get('h1').should('contain', 'jane.lane')
    })
  })