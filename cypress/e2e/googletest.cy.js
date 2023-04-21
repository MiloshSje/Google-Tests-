describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://google.com");
    cy.get(".gLFyf").type("cypress{enter}");
    cy.get('a[href="https://www.cypress.io/"]').should("exist");
  });
  it("passes", () => {});
});
