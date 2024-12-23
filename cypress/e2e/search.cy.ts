describe('search products', () => {
  it('should be able to search for products', () => {
    cy.searchByQuery('moletom')
    cy.location('pathname').should('eq', '/search')
    cy.location('search').should('includes', 'q=moletom')
    cy.get('a[href^="/product"]').should('exist')
  })

  it('should not be able to visit search without a search query', () => {
    cy.on('uncaught:exception', () => {
      return false
    })

    cy.visit('/search')
    cy.location('pathname').should('eq', '/')
  })
})
