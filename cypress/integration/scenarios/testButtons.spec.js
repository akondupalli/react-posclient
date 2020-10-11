describe("Test - Test buttons", () => {
  it("Test welcome screen buttons", () => {
    cy.visit("./");
    cy.get("#start-txn").contains("Start Transaction");
  });

  it("Test item screen buttons", () => {
    cy.startTxn();
    cy.get("#addItem").contains("AddItem");
    cy.get("#removeItem").contains("RemoveItem");
    cy.get("#back").contains("Back");
    cy.get("#totals").contains("Finish&Pay");
    cy.addItem();
    cy.get("#back").contains("Cancel");
  });

  it("Test tender screen buttons", () => {
    cy.totals();
    cy.get("#pay").contains("Pay");
    cy.get("#tenderComplete").contains("Tender Complete");
    cy.get("#back").contains("Back");
  });
});
