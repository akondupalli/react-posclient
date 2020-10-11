describe("Test - Cancel Txn with items", () => {
  it("Start txn", () => {
    cy.startTxn();
  });

  it("Add items", () => {
    cy.addItem();
  });

  it("select cancel on txn cancel confirmation", () => {
    cy.get("#back").click();
    cy.on("window:confirm", () => false);
  });

  it("select ok on txn cancel confirmation", () => {
    cy.get("#back").click();
    // even without this line, cypress does auto select "ok" button on the alert
    cy.on("window:confirm", () => true);
  });
});
