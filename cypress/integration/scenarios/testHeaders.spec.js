describe("Test - Test headers", () => {
  it("Test welcome screen header", () => {
    cy.visit("./");
    cy.get("h1").contains("Welcome Screen");
  });

  it("Test item screen header", () => {
    cy.startTxn();
    cy.get("h1").contains("Item Screen");
  });

  it("Test tender screen header", () => {
    cy.addItem();
    cy.totals();
    cy.get("h1").contains("Tender Screen");
  });
});
