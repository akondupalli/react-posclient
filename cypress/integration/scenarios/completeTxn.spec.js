describe("Test - Complete Txn", () => {
  it("Start txn", () => {
    cy.startTxn();
  });

  it("Add items", () => {
    cy.addItem();
  });

  it("Select totals", () => {
    cy.totals();
  });

  it("Select pay", () => {
    cy.pay();
  });

  it("Select tenderComplete", () => {
    cy.tenderComplete();
  });
});
