describe('home testing', () => {
        beforeEach(() => {
                cy.visit('http://localhost:3000/')
                cy.viewport(1200, 1200);
        })
        it('home', () => {
                cy.login()
                cy.get('[data-test="homeAbout"]').contains('About').should('be.visible').click({ force: true })
                cy.url().should("include", "/about");
                 cy.get("[data-test='homeLogo']").contains("<Anthony/>").should("be.visible").click({ force: true });
                cy.url().should("include", "/home");
                cy.wait(10000)
                cy.get('[data-test="homeSearch"]').should('be.visible').type('chicken')
                 cy.get('[data-test="homeSearchBtn"]').should('be.visible').click({ force: true })

        })
})