describe("template spec", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();

    cy.visit("http://localhost:3001/");
  });

  it("open drawer and redirect to form page for presential course", () => {
    cy.contains("2 opções encontradas").should("exist");
    cy.contains("Avançar").should("exist").click();

    cy.get('input[type="radio"]').first().check({ force: true });

    cy.get('button[type="submit"]').should("not.be.disabled");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/enroll");
  });

  it("open drawer and redirect to form page for ead course", () => {
    cy.contains("2 opções encontradas").should("exist");
    cy.get("button").eq(1).contains("Avançar").should("exist").click();

    cy.get('button[type="submit"]').click();
    cy.url().should("include", "/enroll");
  });
});
