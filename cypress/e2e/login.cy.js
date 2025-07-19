describe('login testing', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="inputHeader"]').should('contain', '<Anthony/>Recipe')
    cy.get('[data-test="loginName"]').should('be.visible').type('Anthony')
    cy.get('[data-test="loginPassword"]').should('be.visible').type('password123')
    cy.get('[data-test="loginSbmt"]').click()
    cy.url().should('include', '/home')
  })
  
})