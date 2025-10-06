import generateRandomCPF from "./../support/generateCpf";

describe("template spec", () => {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.clearCookies();

    cy.visit("http://localhost:3000/");
  });

  it("open drawer and redirect to form page for presential course", () => {
    cy.contains("2 opções encontradas").should("exist");
    cy.contains("Avançar").should("exist").click();

    cy.get('input[type="radio"]').first().check({ force: true });

    cy.get('button[type="submit"]').should("not.be.disabled");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/enroll");

    cy.get('input[name="name"]').type("João Neto");
    cy.get('input[name="cpf"]').type(generateRandomCPF());
    cy.get('input[name="birthdate"]').type("1990-01-01");
    cy.get('input[name="email"]').type("joao@example.com");
    cy.get('input[name="phone"]').type("(11) 99999-9999");
    cy.get('input[name="yearConclusionSchool"]').type("2010");
    cy.get('input[name="acceptTerms"]').check({ force: true });
    cy.get('input[name="allowReceiveNotifications"]').check({ force: true });

    cy.contains("Avançar").click();

    cy.url().should("include", "/success");
  });

  it("open drawer and redirect to form page for presential course", () => {
    cy.contains("2 opções encontradas").should("exist");
    cy.get("button").eq(1).contains("Avançar").should("exist").click();

    cy.get('button[type="submit"]').should("not.be.disabled");

    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/enroll");

    cy.get('input[name="name"]').type("João Neto");
    cy.get('input[name="cpf"]').type(generateRandomCPF());
    cy.get('input[name="birthdate"]').type("1990-01-01");
    cy.get('input[name="email"]').type("joao@example.com");
    cy.get('input[name="phone"]').type("(11) 99999-9999");
    cy.get('input[name="yearConclusionSchool"]').type("2010");
    cy.get('input[name="acceptTerms"]').check({ force: true });
    cy.get('input[name="allowReceiveNotifications"]').check({ force: true });

    cy.contains("Avançar").click();

    cy.url().should("include", "/success");
  });
});
