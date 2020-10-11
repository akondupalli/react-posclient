Cypress.Commands.add("startTxn", () => {
  cy.visit("/"); // load app
  cy.get("#start-txn").click();
});

Cypress.Commands.add("loadItemScreen", () => {
  // load url conditionally
  cy.url().then(url => {
    if (!(url && url.includes("/Item"))) {
      cy.visit("./item");
    }
  });
});

Cypress.Commands.add("addItem", (count = 1) => {
  for (let i = 0; i < count; i++) {
    cy.get("#addItem").click();
  }
});

Cypress.Commands.add("removeItem", (count = 1) => {
  for (let i = 0; i < count; i++) {
    cy.get("#removeItem").click();
  }
});

Cypress.Commands.add("totals", () => {
  cy.get("#totals").click();
});

Cypress.Commands.add("loadTenderScreen", () => {
  // load url conditionally
  cy.url().then(url => {
    if (!(url && url.includes("/Tender"))) {
      cy.visit("./tender");
    }
  });
});

Cypress.Commands.add("pay", () => {
  cy.get("#pay").click();
});

Cypress.Commands.add("tenderComplete", () => {
  cy.get("#tenderComplete").click();
});

Cypress.Commands.add("back", () => {
  cy.get("#back").click();
});
